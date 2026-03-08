import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { sanityClient } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";
import Modal from "../../components/modal";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, BookOpen } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Skeleton — animate-pulse only, no custom CSS
───────────────────────────────────────────────────────────── */
const SkeletonBar = ({ className }) => (
  <div className={`animate-pulse rounded-lg bg-white/20 ${className}`} />
);

const Skeleton = () => (
  <div>
    {/* header skeleton */}
    <div className="bg-[#04164B] rounded-t-3xl px-6 md:px-10 pt-10 pb-8">
      <SkeletonBar className="h-2.5 w-24 mb-4" />
      <SkeletonBar className="h-8 w-3/5 mb-3" />
      <SkeletonBar className="h-4 w-2/5 mb-6" />
      <SkeletonBar className="h-9 w-28 rounded-full" />
    </div>
    {/* body skeleton */}
    <div className="px-6 md:px-12 py-10 max-w-3xl mx-auto space-y-3">
      {[100, 90, 100, 75, 100, 85].map((w, i) => (
        <div key={i} className={`animate-pulse h-4 rounded-lg bg-gray-200`} style={{ width: `${w}%` }} />
      ))}
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   Portable Text map — all hrefs sanitised, no style blocks
───────────────────────────────────────────────────────────── */
const ptComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base leading-[1.85] text-gray-600 mb-5">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl md:text-2xl font-extrabold text-[#04164B] mt-10 mb-3 leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg md:text-xl font-bold text-[#04164B] mt-7 mb-2.5 leading-snug">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-7 border-l-4 border-red-600 bg-[#04164B]/[.04]
                             rounded-r-xl pl-5 pr-4 py-4 italic text-[#04164B]
                             text-[15px] leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 mb-5 space-y-1.5 text-gray-600">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 mb-5 space-y-1.5 text-gray-600">{children}</ol>
    ),
  },
  listItem: {
    bullet:  ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
    number:  ({ children }) => <li className="text-base leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-[#04164B]">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      // Security: only permit http/https — block javascript: / data: URIs
      const raw = value?.href ?? "";
      const safe = /^https?:\/\//i.test(raw) ? raw : "#";
      return (
        <a href={safe} target="_blank" rel="noopener noreferrer"
           className="text-red-600 underline underline-offset-2
                      hover:text-red-700 transition-colors duration-150">
          {children}
        </a>
      );
    },
  },
};

/* ─────────────────────────────────────────────────────────────
   Related post card
───────────────────────────────────────────────────────────── */
const RelatedCard = ({ rel, to }) => (
  <Link
    to={to}
    className="group flex items-start justify-between gap-4
               bg-white border border-gray-100 rounded-2xl px-5 py-4
               hover:border-[#04164B]/20 hover:shadow-lg hover:-translate-y-0.5
               transition-all duration-200"
  >
    <div className="flex-1 min-w-0">
      <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1.5">
        {new Date(rel.publishedAt).toLocaleDateString("en-GB", {
          day: "numeric", month: "short", year: "numeric",
        })}
      </p>
      <h4 className="font-bold text-sm text-[#04164B] leading-snug line-clamp-2
                     group-hover:text-red-600 transition-colors duration-200">
        {rel.title}
      </h4>
      {rel.excerpt && (
        <p className="text-xs text-gray-400 leading-relaxed mt-1.5 line-clamp-2">
          {rel.excerpt}
        </p>
      )}
    </div>
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center
                    justify-center mt-0.5 group-hover:bg-red-600 transition-colors duration-200">
      <ArrowRight size={14}
        className="text-gray-500 group-hover:text-white
                   group-hover:translate-x-0.5 transition-all duration-200" />
    </div>
  </Link>
);

/* ─────────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────────── */
const BranchBlogPost = () => {
  const { postSlug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoaded(false);
    setPost(null);
    setRelatedPosts([]);

    sanityClient
      .fetch(
        `*[_type=="branchBlog" && slug.current==$slug][0]{
           _id, title, publishedAt, excerpt, content,
           branch->{ _id, name, branchType, "slug": slug.current }
         }`,
        { slug: postSlug }
      )
      .then((postData) => {
        if (cancelled) return;
        setPost(postData);
        setLoaded(true);
        if (!postData?.branch?._id) return;
        sanityClient
          .fetch(
            `*[_type=="branchBlog" && branch._ref==$branchId && slug.current!=$slug]
             | order(publishedAt desc)[0...3]{
               title, "slug": slug.current, excerpt, publishedAt
             }`,
            { branchId: postData.branch._id, slug: postSlug }
          )
          .then((rel) => { if (!cancelled) setRelatedPosts(rel ?? []); });
      })
      .catch(() => { if (!cancelled) setLoaded(true); });

    return () => { cancelled = true; };
  }, [postSlug]);

  if (!post && !loaded) return (
    <Modal onClose={() => navigate(-1)}><Skeleton /></Modal>
  );

  if (!post) return (
    <Modal onClose={() => navigate(-1)}>
      <div className="px-8 py-20 text-center text-sm text-gray-400">
        Post could not be found.
      </div>
    </Modal>
  );

  const isAssembly = post.branch.branchType === "assembly";
  const branchPath = `/${isAssembly ? "assemblies" : "fellowships"}/${post.branch.slug}`;
  const fmtDate = (iso) =>
    new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <Modal onClose={() => navigate(-1)}>

      {/* ══════════════════════════════════════════
          HEADER — clean, no texture, visually bold
      ══════════════════════════════════════════ */}
      <div className="bg-[#04164B] rounded-t-3xl px-6 md:px-10 pt-10 pb-0 overflow-hidden">

        {/* Top row: branch label + CTA */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
              <MapPin size={13} className="text-white/60" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-white/40 leading-none mb-0.5">
                Posted from
              </p>
              <p className="text-sm font-bold text-white leading-none">{post.branch.name}</p>
            </div>
          </div>

          <Link
            to={branchPath}
            className="flex-shrink-0 inline-flex items-center gap-1.5
                       bg-white/10 hover:bg-white text-white hover:text-[#04164B]
                       text-[11px] font-bold tracking-wide uppercase
                       px-4 py-2 rounded-full border border-white/20 hover:border-transparent
                       transition-all duration-200"
          >
            View Branch
            <ArrowRight size={12} aria-hidden="true" />
          </Link>
        </div>

        {/* Hero title block — bold, large, confident */}
        <div className="max-w-2xl pb-0">
          {/* type badge */}
          <span className="inline-flex items-center gap-1.5 bg-red-600/20 text-red-600
                           text-[10px] font-bold tracking-widest uppercase
                           px-3 py-1 rounded-full mb-4">
            <BookOpen size={10} aria-hidden="true" />
            {isAssembly ? "Assembly Post" : "Fellowship Post"}
          </span>

          {/* post title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white
                         leading-[1.15] mb-5">
            {post.title}
          </h1>

          {/* meta pill row */}
          <div className="flex flex-wrap items-center gap-2 pb-8">
            <div className="inline-flex items-center gap-1.5 bg-white/10 rounded-full
                            px-3 py-1.5 text-xs text-white/60">
              <CalendarDays size={11} aria-hidden="true" />
              <time dateTime={post.publishedAt}>{fmtDate(post.publishedAt)}</time>
            </div>
            <span className="inline-flex items-center bg-white/10 rounded-full
                             px-3 py-1.5 text-xs text-white/60">
              {isAssembly ? "Assembly" : "Fellowship"}
            </span>
          </div>
        </div>

        {/* Excerpt preview strip — only if present */}
        {post.excerpt && (
          <div className="border-t border-white/10 py-4">
            <p className="text-sm text-white/50 italic leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>
          </div>
        )}
      </div>

      {/* ══ ARTICLE BODY ══ */}
      <motion.article
        className="px-6 md:px-12 py-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <PortableText value={post.content} components={ptComponents} />
      </motion.article>

      {/* ══ RELATED POSTS ══ */}
      {relatedPosts.length > 0 && (
        <motion.section
          aria-label="More from this branch"
          className="mx-4 mb-6 rounded-2xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
        >
          {/* section header */}
          <div className="bg-[#04164B] px-6 py-4 flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-white text-sm leading-tight">
                More from this branch
              </h3>
              <p className="text-[11px] text-white/40 mt-0.5">{post.branch.name}</p>
            </div>
            <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
              <BookOpen size={13} className="text-white/60" aria-hidden="true" />
            </span>
          </div>

          {/* cards */}
          <div className="bg-gray-50 p-4 space-y-3">
            {relatedPosts.map((rel) => (
              <RelatedCard
                key={rel.slug}
                rel={rel}
                to={`/${isAssembly ? "assemblies" : "fellowships"}/${post.branch.slug}/blog/${rel.slug}`}
              />
            ))}
          </div>
        </motion.section>
      )}

    </Modal>
  );
};

export default BranchBlogPost;
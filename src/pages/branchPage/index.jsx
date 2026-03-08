import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sanityClient, urlFor } from "../../lib/sanity";
import Navbar from "../../components/navbar";

const BranchPage = () => {
  const { slug } = useParams();
  const [branch, setBranch] = useState(null);
  const [blogs, setBlogs] = useState(null); // null = loading

  /* ================= FETCH BRANCH ================= */
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="branch" && slug.current==$slug][0]{
  name,
  branchType,
  heroTitle,
  heroDescription,
  heroImage,
  welcomeTitle,
  welcomeText,
  serviceTimes,
  location,
  childrenYouthInfo,
  events[] {
    title,
    date,
    location,
    description,
    image
  }
}`,
        { slug }
      )
      .then(setBranch);
  }, [slug]);

  /* ================= FETCH BRANCH BLOGS ================= */
  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "branchBlog" && branch->slug.current == $slug]
        | order(publishedAt desc){
          title,
          "slug": slug.current,
          excerpt,
          publishedAt,
          featuredImage
        }
        `,
        { slug }
      )
      .then(setBlogs);
  }, [slug]);

  if (!branch) {
    return <p className="text-center mt-32">Loading branch…</p>;
  }

  return (
    <>
      <Navbar />

      <div className="w-full">
        {/* ================= HERO ================= */}
        <section className="relative bg-[#04164B] text-white py-20 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                {branch.heroTitle || branch.name}
              </h1>

              <p className="mt-4 text-lg md:text-xl max-w-2xl">
                {branch.heroDescription}
              </p>

              <div className="mt-6 flex gap-4 flex-wrap">
                <Link
                  to="/connect"
                  className="bg-white text-red-600 font-semibold px-5 py-3 rounded-lg shadow"
                >
                  Join Us This Sunday
                </Link>

                <a
                  href="#events"
                  className="border border-white/50 text-white px-5 py-3 rounded-lg"
                >
                  Upcoming Events
                </a>
              </div>
            </div>

            <div className="flex-1">
              {branch.heroImage && (
                <img
                  src={urlFor(branch.heroImage).width(900).url()}
                  alt={branch.name}
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              )}
            </div>
          </div>
        </section>

        {/* ================= QUICK INFO ================= */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-bold">Service Times</h4>
              <p className="mt-2 text-sm">{branch.serviceTimes}</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-bold">Location</h4>
              <p className="mt-2 text-sm">{branch.location}</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-bold">Children & Youth</h4>
              <p className="mt-2 text-sm">{branch.programs}</p>
            </div>
          </div>
        </section>

        {/* ================= EVENTS ================= */}
        <section
          id="events"
          className="py-24 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white"
        >
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-[#04164B] text-center mb-16"
          >
            Upcoming Events
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {branch.events?.map((event, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                {event.image && (
                  <img
                    src={urlFor(event.image).width(600).url()}
                    alt={event.title}
                    className="h-56 w-full object-cover"
                  />
                )}

                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-2">
                    {new Date(event.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <h3 className="text-xl font-bold text-[#04164B] mb-2">
                    {event.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-3">
                    📍 {event.location}
                  </p>

                  <p className="text-sm text-gray-700 line-clamp-3">
                    {event.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ================= BLOGS ================= */}
        <section className="py-24 px-6 md:px-16 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#04164B] text-center mb-14">
              From Our Blog
            </h2>

            {blogs === null ? (
              <p className="text-center text-gray-400">Loading blog posts…</p>
            ) : blogs.length === 0 ? (
              <p className="text-center text-gray-500 italic">
                No blog posts yet.
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogs.map((post, i) => (
                  <motion.article
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
                  >
                    {post.featuredImage && (
                      <img
                        src={urlFor(post.featuredImage).width(600).url()}
                        alt={post.title}
                        className="h-48 w-full object-cover"
                      />
                    )}

                    <div className="p-6">
                      <p className="text-xs text-gray-500 mb-2">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </p>

                      <h3 className="text-xl font-bold text-[#04164B] mb-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>

                      <Link
                        to={`/${branch.branchType === "assembly" ? "assemblies" : "fellowships"}/${slug}/blog/${post.slug}`}
                        className="bg-[#04164B] text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-red-600 hover:text-white transition-all self-start"
                      >
                        Read More →
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default BranchPage;
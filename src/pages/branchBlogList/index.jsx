import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { sanityClient } from "../../lib/sanity";

const BranchBlogList = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [branchName, setBranchName] = useState("");

  useEffect(() => {
    sanityClient.fetch(
      `
      *[_type=="branch" && slug.current==$slug][0]{
        name,
        "posts": *[_type=="branchBlog" && branch._ref==^._id]
          | order(publishedAt desc){
            title,
            excerpt,
            publishedAt,
            "slug": slug.current
          }
      }
      `,
      { slug }
    ).then((data) => {
      setBranchName(data?.name);
      setPosts(data?.posts || []);
    });
  }, [slug]);

  return (
    <main className="py-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#04164B] mb-4">
        {branchName} Blog
      </h1>

      <p className="text-gray-600 mb-12">
        News, teachings, reflections, and updates from this branch.
      </p>

      {posts.length === 0 ? (
        <p className="italic text-gray-500">No blog posts yet.</p>
      ) : (
        <div className="space-y-10">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-6">
              <h2 className="text-xl font-semibold text-[#04164B]">
                {post.title}
              </h2>

              <p className="text-sm text-gray-500 mb-2">
                {new Date(post.publishedAt).toDateString()}
              </p>

              <p className="text-gray-700 mb-4">{post.excerpt}</p>

              <Link
                to={`${post.slug}`}
                className="text-red-600 font-medium hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export default BranchBlogList;
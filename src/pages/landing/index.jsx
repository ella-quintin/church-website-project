import Navbar from "../../components/navbar"
import hero from "../../assets/images/hero.jpg"
import discipleship from "../../assets/images/discipleship.jpg"
import prayer from "../../assets/images/prayer.jpg"
import training from "../../assets/images/training.jpg"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sanityClient, urlFor } from "../../lib/sanity";
import Footer from "../../components/footer"
import ScrollToTop from "../../components/ScrollToTop.jsx"









const Landing = () => {

    const [assemblies, setAssemblies] = useState([]);
    const [fellowships, setFellowships] = useState([]);
    const [events, setEvents] = useState([]);
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type=="branch"]{
          name,
          "slug": slug.current,
          branchType
        }`
            )
            .then((data) => {


                setAssemblies(data.filter((b) => b.branchType === "assembly"));
                setFellowships(data.filter((b) => b.branchType === "fellowship"));
            })
            .catch(() => {

            });
    }, []);

    useEffect(() => {
        sanityClient
            .fetch(`
      *[_type == "branchBlog"] | order(publishedAt desc){
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        featuredImage,
        branch->{
          name,
          "slug": slug.current
        }
      }
    `)
            .then(setBlogs);
    }, []);


    useEffect(() => {
        sanityClient
            .fetch(`
            *[_type == "branch" && defined(events)]{
                name,
                events[]{
                    title,
                    date,
                    location,
                    description,
                    image
                }
            }
        `)
            .then((data) => {
                // Flatten all branch events into one array
                const allEvents = data.flatMap(branch =>
                    (branch.events || []).map(event => ({
                        ...event,
                        branchName: branch.name
                    }))
                );

                // Optional: sort by date (earliest first)
                allEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

                setEvents(allEvents);
            })
            .catch(() => {

            });
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return "";
        return new Date(dateString).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };




    return (
        <>
            <Navbar />
            <main className="overflow-x-hidden text-gray-800">
                {/* HERO SECTION */}
                <section
                    className="relative h-screen flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
                    style={{ backgroundImage: `url(${hero})` }}
                >
                    <div className="absolute inset-0 bg-black/80 z-20 flex flex-col justify-center items-center text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2 }}
                            className="text-xl md:text-4xl text-gray-100 max-w-xl font-serif"
                        >
                            Welcome to
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide"
                        >
                            Morning Dew Ministries
                        </motion.h2>


                    </div>
                </section>

                {/* HISTORY SECTION */}
                <section className="relative bg-gradient-to-br from-gray-50 to-white py-24 px-6 md:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto text-center"
                    >

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#04164B] leading-tight mb-5">
                            Our Vision
                        </h2>
                        <p className="text-lg italic leading-relaxed text-gray-600 mb-6">
                            Gather my people, teach them, build an army and present a quality church.
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#04164B] leading-tight mb-5">
                            FOCUS FOR YEAR 2026:
                        </h2>


                        <p className="text-lg italic leading-relaxed text-gray-600 mb-3">
                            And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others.
                            Out of this consistent fellowship, Morning Dew Ministries was birthed — founded upon the Word of God and prayer.
                        </p>

                        <h2 className="text-xs sm:text-lg font-bold tracking-wider text-red-600 mb-3">
                            2 Timothy 2:2 NIV
                        </h2>
                        <Link
                            to="/news-updates"
                            className="mt-4 bg-[#04164B] text-white px-6 py-2 text-sm font-medium rounded-full hover:bg-red-600 hover:text-white transition-all inline-block"
                        >
                            View 2026 Ministry Calendar
                        </Link>

                    </motion.div>
                </section>

                {/* MINISTRIES SECTION */}
                <section id="ministries" className="relative bg-[#04164B] text-white py-24 px-6 md:px-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-12"
                    >
                        Church Ministries
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
                    >
                        {[
                            {
                                name: "I Care Ministry",
                                verse: "1 Corinthians 13:8",
                                focus: "Family Ministry- Manna Ministry",
                            },
                            {
                                name: "Bethel Carmel Ministry",
                                verse: "1 Thessalonians 5:17",
                                focus: "Prayer Ministry",
                            },
                            {
                                name: "Tsidkenu Ministry",
                                verse: "Jeremiah 23:6",
                                focus: "Music, Drama & Media",
                            },
                            {
                                name: "Friends of Jesus Club",
                                verse: "1 Timothy 4:12",
                                focus: "Children’s Ministry",
                            },
                            {
                                name: "Rangers Club",
                                verse: "Ephesians 6:13",
                                focus: "Youth Ministry",
                            },
                            {
                                name: "The Shepherd Ministry",
                                verse: "2 Timothy 2:2",
                                focus: "Training & Discipleship",
                            },
                            {
                                name: "The Liberators",
                                verse: "Matthew 28:19",
                                focus: "Evangelism & Outreach",
                            },
                        ].map((ministry, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-md hover:bg-white/20 border border-white/10 transition-all"
                            >
                                <h3 className="font-semibold text-xl mb-1 text-white">
                                    {ministry.name}
                                </h3>
                                <p className="text-sm italic text-gray-200 mb-2">
                                    {ministry.verse}
                                </p>
                                <p className="text-gray-50">{ministry.focus}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* ASSEMBLIES & FELLOWSHIPS */}
                {/* ASSEMBLIES & FELLOWSHIPS */}
                <section className="bg-gray-50 py-24 px-6 md:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#04164B] mb-4">
                            Assemblies & Fellowships
                        </h2>

                        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
                            Find a local assembly or fellowship near you and become part of our growing community.
                        </p>

                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Assemblies */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h3 className="text-2xl font-bold text-[#04164B] mb-6">
                                    Assemblies
                                </h3>

                                <ul className="space-y-3">
                                    {assemblies.length === 0 ? (
                                        <li className="text-sm italic text-gray-400">
                                            No assemblies added yet
                                        </li>
                                    ) : (
                                        assemblies
                                            .slice()
                                            .sort((a, b) => a.name.localeCompare(b.name))
                                            .map((a) => (
                                                <li key={a.slug}>
                                                    <Link
                                                        to={`/assemblies/${a.slug}`}
                                                        className="block rounded-lg px-4 py-2 transition-all cursor-pointer
                    hover:bg-[#04164B]/5 hover:text-[#04164B] hover:translate-x-1"
                                                    >
                                                        {a.name}
                                                    </Link>
                                                </li>
                                            ))
                                    )}
                                </ul>
                            </div>

                            {/* Fellowships */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                                <h3 className="text-2xl font-bold text-[#04164B] mb-6">
                                    Fellowships
                                </h3>

                                <ul className="space-y-3">
                                    {fellowships.length === 0 ? (
                                        <li className="text-sm italic text-gray-400">
                                            No fellowships added yet
                                        </li>
                                    ) : (
                                        fellowships
                                            .slice()
                                            .sort((a, b) => a.name.localeCompare(b.name))
                                            .map((f) => (
                                                <li key={f.slug}>
                                                    <Link
                                                        to={`/fellowships/${f.slug}`}
                                                        className="block rounded-lg px-4 py-2 transition-all cursor-pointer
                    hover:bg-[#04164B]/5 hover:text-[#04164B] hover:translate-x-1"
                                                    >
                                                        {f.name}
                                                    </Link>
                                                </li>
                                            ))
                                    )}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </section>



                {/* VISION SECTION */}
                <section className="relative bg-[#04164B] text-white py-24 px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold mb-6">Vision for Workers</h2>
                        <p className="text-lg italic mb-6">
                            “The harvest is plentiful but the labourers are few. Therefore, pray
                            earnestly to the Lord of the harvest to send out labourers into his
                            harvest.” <br />
                            <span className="text-white not-italic">
                                — Matthew 9:35–38
                            </span>
                        </p>
                        <p className="text-gray-200 mb-4">
                            As we pray for more workers and labourers, let us remember that we
                            are also called as workers and labourers. Let us avail ourselves to
                            the call of the Lord.
                        </p>
                        <p className="text-white font-semibold text-lg">
                            God bless us all. Amen.
                        </p>
                    </motion.div>
                </section>

                <section className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                    {/* Decorative background circles */}
                    <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-30 -z-10"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-[#04164B] mb-4">
                            Upcoming Events
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Overview of upcoming activities across all branches
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                        {events.map((event, i) => (
                            <motion.div
                                key={`${event.title}-${i}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer border border-gray-100"
                            >
                                <div className="relative overflow-hidden h-56">
                                    {event.image && (
                                        <img
                                            src={sanityClient.config().projectId
                                                ? `https://cdn.sanity.io/images/${sanityClient.config().projectId}/${sanityClient.config().dataset}/${event.image.asset._ref
                                                    .replace("image-", "")
                                                    .replace("-jpg", ".jpg")
                                                    .replace("-png", ".png")}`
                                                : ""}
                                            alt={event.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    )}

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                    <div className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {formatDate(event.date)}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col justify-between ">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#04164B] mb-2 group-hover:text-red-600 transition-colors">
                                            {event.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-1">
                                            📍 {event.location}
                                        </p>

                                        <p className="text-xs text-gray-500 mb-3">
                                            {event.branchName}
                                        </p>

                                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                                            {event.description}
                                        </p>
                                    </div>

                                    <button className="mt-4 bg-[#04164B] text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-red-600 hover:text-white transition-all self-start">
                                        View Details
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="py-20 px-6 md:px-16 bg-gray-50">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-7xl mx-auto"
                    >
                        <div className="text-center mb-14">
                        <h2 className=" text-center text-4xl md:text-5xl font-bold text-[#04164B] mb-4">
                            Blog & News Updates
                        </h2>
                          <p className="text-gray-600 text-lg">
                            Overview of blog posts and news updates across all branches
                        </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {blogs === null ? (
                                <p className="text-center text-gray-400">Loading blogs…</p>
                            ) : blogs.length === 0 ? (
                                <p className="text-center text-gray-500 italic">
                                    No blog posts yet.
                                </p>
                            ) : (
                                blogs.slice(0, 6).map((post, i) => (
                                    <article
                                        key={post.slug}
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
                                            <p className="text-xs text-gray-500 mb-1">
                                                {post.branch?.name}
                                            </p>

                                            <h3 className="text-lg font-bold text-[#04164B] mb-2">
                                                {post.title}
                                            </h3>

                                            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                                {post.excerpt}
                                            </p>

                                            <Link
                                                to={`/${post.branch?.branchType === "assembly" ? "assemblies" : "fellowships"}/${post.branch?.slug}/blog/${post.slug}`}
                                                className="mt-4 bg-[#04164B] text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-red-600 hover:text-white transition-all self-start"
                                            >
                                                Read More →
                                            </Link>
                                        </div>
                                    </article>
                                ))
                            )}
                        </div>
                    </motion.div>
                </section>

                <Footer />
            </main>
        </>
    )
}

export default Landing
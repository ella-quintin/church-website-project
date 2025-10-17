import Navbar from "../../components/navbar"
import hero from "../../assets/images/hero.jpg"
import { motion } from "framer-motion";

const events = [
    {
        title: "Annual Worship & Word Conference",
        date: "December 8–10, 2025",
        location: "Morning Dew HQ, Mataheko, Accra",
        image:
            "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80",
        description:
            "Join us for three powerful days of worship, impartation, and the Word. Experience revival and renewal in the presence of God.",
    },
    {
        title: "Youth Empowerment Summit",
        date: "November 16, 2025",
        location: "Kasoa Assembly Hall",
        image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
        description:
            "A dynamic one-day program equipping youth with tools for leadership, spiritual growth, and personal development.",
    },
    {
        title: "Christmas Outreach",
        date: "December 23, 2025",
        location: "Dansoman & Bortianor Communities",
        image:
            "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1600&q=80",
        description:
            "Join the I Care Ministry as we reach out with love — food distribution, prayers, and sharing the message of hope in Christ.",
    },
];

const Landing = () => {
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
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide"
                        >
                            Morning Dew Ministry
                        </motion.h1>


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
                            History and Vision of the Church
                        </h2>

                        <h2 className="text-xs sm:text-lg  font-bold tracking-wider text-red-600 mb-3">
                            Founding and Early Beginnings
                        </h2>

                        <p className="text-lg italic leading-relaxed text-gray-600 mb-6">
                            Rev. Joseph Felix Latieku-Otoo, fondly called Pastor Otoo, was saved in 1973.
                            On 12th January 2003, he was inducted and ordained as an Apostle.
                            In February 1991, during his prayer times at the Legon Botanical Gardens, a number of brothers joined him. Later, two days each week were fixed for the study of the Word and prayer. This continued faithfully for two and a half years.
                            Out of this consistent fellowship, Morning Dew Ministries was birthed — founded upon the Word of God and prayer.
                        </p>

                        <h2 className="text-xs sm:text-lg font-bold tracking-wider text-red-600 mb-3">
                            Divine Call
                        </h2>

                        <p className="text-lg leading-relaxed italic text-gray-700 mb-6">
                            After two and a half years of studying the Word and prayer, some brethren suggested starting a Sunday morning meeting. Initially, this was rejected.
                            However, while Rev. Otoo was praying, he heard an audible voice saying:
                            “Gather my people, teach them, build an army out of them for my service and present a quality church unto me.”
                            In obedience to this call, Sunday Morning Services were started around 1993 at the Mateheko J.T. Cluster of Schools, Accra- Ghana.
                            By 1999, the ministry moved from the Mateheko J.T. Cluster of Schools to its present location, next to the Holy Family Catholic Church, Mataheko.
                        </p>

                        <h2 className="text-xs sm:text-lg font-bold tracking-wider text-red-600 mb-3">
                            Scriptural Foundation
                        </h2>
                        <p className="text-lg text-gray-600 italic">
                            “Now I say to you that you are Peter (which means ‘rock’), and upon this rock (revelation of the Word) I will build my Church, and the gates of hell will not conquer it.” — Matthew 16:18
                        </p>
                    </motion.div>
                </section>

                {/* MINISTRIES SECTION */}
                <section className="relative bg-[#04164B] text-white py-24 px-6 md:px-16">
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
                                focus: "Family & Manna Ministry",
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

                {/* ASSEMBLIES SECTION */}
                <section className="bg-gray-50 py-24 px-6 md:px-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold text-center text-[#04164B] mb-12">
                            Assemblies & Fellowships
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12 text-lg">
                            <div>
                                <h3 className="text-2xl font-semibold text-[#04164B] mb-4">
                                    Assemblies
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    {[
                                        "Akweley Assembly",
                                        "Kasoa Assembly",
                                        "Nkawkaw Assembly",
                                        "Oda Assembly",
                                        "Sunyani / Berekum Assemblies",
                                        "Swedru Assembly",
                                    ].map((a) => (
                                        <li
                                            key={a}
                                            className="hover:text-[#04164B] transition-transform hover:translate-x-2"
                                        >
                                            {a}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-[#04164B] mb-4">
                                    Fellowships
                                </h3>
                                <ul className="space-y-2 text-gray-700">
                                    {[
                                        "Bortianor Fellowship",
                                        "Dansoman Fellowship",
                                        "Haatso Fellowship",
                                        "Odorkor Official Town Fellowship",
                                        "Ofaakor Fellowship",
                                    ].map((f) => (
                                        <li
                                            key={f}
                                            className="hover:text-[#04164B] transition-transform hover:translate-x-2"
                                        >
                                            {f}
                                        </li>
                                    ))}
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
                            Stay connected and be part of what God is doing through Morning Dew
                            Ministry.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                        {events.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer border border-gray-100"
                            >
                                <div className="relative overflow-hidden h-56">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                        {event.date}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col justify-between h-[250px]">
                                    <div>
                                        <h3 className="text-xl font-bold text-[#04164B] mb-2 group-hover:text-red-600 transition-colors">
                                            {event.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3">
                                            📍 {event.location}
                                        </p>
                                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                                            {event.description}
                                        </p>
                                    </div>
                                    <button className="mt-4 bg-[#04164B] text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-red-600 hover:text-white transition-all self-start">
                                        Learn More
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
                    © {new Date().getFullYear()} Morning Dew Ministry. All rights reserved.
                </footer>
            </main>
        </>
    )
}

export default Landing
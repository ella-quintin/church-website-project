import Navbar from "../../components/navbar";
import { motion } from "framer-motion";
import { CalendarDays, Bell } from "lucide-react";

const NewsUpdates = () => {
    return (
        <>
            <Navbar />

            <main className=" overflow-x-hidden text-gray-800">
                {/* HERO */}
                <section className="bg-[#04164B] text-white py-20 px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                            News & Updates
                        </h1>
                        <p className="text-gray-200 text-lg">
                            Official announcements, programmes, and ministry updates
                        </p>
                    </motion.div>
                </section>

                {/* FEATURED UPDATE */}
                <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-[#04164B]/10 p-4 rounded-full">
                                <Bell className="text-[#04164B]" size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-[#04164B]">
                                2026 Ministry Calendar & Focus
                            </h2>
                        </div>

                        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-16">
                            <p className="text-gray-700 mb-4">
                                <strong>Vision of the Ministry:</strong><br />
                                Gather my people, teach them, build an army and present a quality
                                Church unto Me.
                            </p>

                            <p className="text-gray-700">
                                <strong>Focus of the Year:</strong><br />
                                <span className="italic">
                                    2 Timothy 2:2 — “Take the teachings that you have heard me
                                    proclaim in the presence of many witnesses, and entrust them
                                    to reliable people who will be able to teach others also.”
                                </span>
                            </p>
                        </div>

                        {/* MONTHLY HIGHLIGHTS */}
                        <div className="space-y-10">
                            {[
                                {
                                    month: "January",
                                    theme: "Prayer Month",
                                    highlights: [
                                        "New Year Festival & Accountability",
                                        "Vineyard Waiting",
                                        "General Waiting",
                                    ],
                                },
                                {
                                    month: "February",
                                    theme: "Evangelism – Go Fetch Them",
                                    highlights: [
                                        "Evangelism at local Assemblies/Fellowships",
                                        "Vineyard Convention",
                                        "General Waiting",
                                    ],
                                },
                                {
                                    month: "March",
                                    theme: "Praise & Business Month",
                                    highlights: [
                                        "Praise Festival",
                                        "Business Club / Intellectuals Convention",
                                        "General Waiting",
                                    ],
                                },
                                {
                                    month: "April",
                                    theme: "Children’s Convention",
                                    highlights: [
                                        "Children’s Convention",
                                        "Vineyard Waiting",
                                        "General Waiting",
                                    ],
                                },
                                {
                                    month: "May",
                                    theme: "Mid-Year Convention",
                                    highlights: [
                                        "Mid-Year Convention",
                                        "General Waiting",
                                    ],
                                },
                                {
                                    month: "June",
                                    theme: "Night of Nights",
                                    highlights: [
                                        "Night of Nights (Watchmen Prayers)",
                                    ],
                                },
                                {
                                    month: "July",
                                    theme: "Family Month",
                                    highlights: [
                                        "Family Convention",
                                        "Vineyard Waiting",
                                        "General Waiting",
                                    ],
                                },
                                {
                                    month: "August",
                                    theme: "Assessment Month",
                                    highlights: [
                                        "Children’s Ministry Assessment Workshop",
                                        "General Waiting",
                                    ],
                                },
                                {
                                    month: "September",
                                    theme: "Youth Month",
                                    highlights: [
                                        "Youth Convention",
                                        "General Waiting",
                                    ],
                                },
                                {
                                    month: "October",
                                    theme: "Prayer Month",
                                    highlights: [
                                        "Prayer Festival",
                                        "Vineyard Waiting",
                                        "General Waiting",
                                    ],
                                },
                                {
                                    month: "November",
                                    theme: "Shiloh Month",
                                    highlights: [
                                        "Shiloh Convention",
                                        "General Waiting",
                                    ],
                                },
                                {
                                    month: "December",
                                    theme: "National Convention",
                                    highlights: [
                                        "National Convention",
                                        "Crusade",
                                        "Youth Camp Meeting",
                                        "Night of Olive",
                                    ],
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <CalendarDays className="text-red-600" size={20} />
                                        <h3 className="text-xl font-bold text-[#04164B]">
                                            {item.month} — {item.theme}
                                        </h3>
                                    </div>
                                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                                        {item.highlights.map((h, idx) => (
                                            <li key={idx}>{h}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* NOTES */}
                        <div className="mt-20 bg-[#04164B]/5 border border-[#04164B]/10 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-[#04164B] mb-4">
                                Important Notes
                            </h3>
                            <ul className="list-decimal list-inside text-gray-700 space-y-2">
                                <li>Youth services and children’s services are held monthly.</li>
                                <li>Each assembly shall organize evangelism monthly.</li>
                                <li>Family ministry meetings are mandatory at assembly level.</li>
                                <li>End-of-year crusade concludes on December 31st.</li>
                            </ul>
                        </div>
                    </motion.div>
                </section>

                {/* FOOTER */}
                <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
                    © {new Date().getFullYear()} Morning Dew Ministries. All rights reserved.
                </footer>
            </main>
        </>
    );
};

export default NewsUpdates;

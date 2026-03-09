import React from "react";
import { motion } from "framer-motion";
import rev from "../../assets/images/rev.jpeg";
import eric from "../../assets/images/eric.jpeg";
import stephen from "../../assets/images/stephen.jpeg";
import revakua from "../../assets/images/revakua.jpeg";
import beatrice from "../../assets/images/beatrice.jpeg";
import Footer from "../../components/footer";

const executives = [
    {
        name: "Rev. Nana Akua Appiah",
        role: "Chairperson",
        council: "National Executive Council",
        image: revakua,
        objectPosition: "center",
    },
    {
        name: "Elder Eric Akumiah",
        role: "General Secretary",
        council: "National Executive Council",
        image: eric,
        objectPosition: "center 20%",        // ← face was being cut at top
    },
    {
        name: "Rev. Edward Quansah",
        role: "Southern Command Minister",
        council: "National Executive Council",
        image: rev,
        objectPosition: "center",
    },
    {
        name: "Rev. Stephen Opoku Asare",
        role: "Mid Command Minister",
        council: "National Executive Council",
        image: stephen,
        objectPosition: "center",
    },
    {
        name: "Elder Beatrice Kyeremeh",
        role: "Northern Command Elder",
        council: "National Executive Council",
        image: beatrice,
        objectPosition: "center",
    },
];

const council = [
    {
        name: "Rev. Stephen Opoku Asare",
        role: "Chairman",
        council: "Ministerial Council",
        image: stephen,
        objectPosition: "center",
    },
    {
        name: "Elder Agnes Siriboe",
        role: "Member",
        council: "Ministerial Council",
        image: "/images/leaders/placeholder.png",
        objectPosition: "center",
    },
    {
        name: "Elder Agnes Siriboe",
        role: "Member",
        council: "Ministerial Council",
        image: "/images/leaders/placeholder.png",
        objectPosition: "center",
    },
    {
        name: "Deaconess Dinah Aidoo",
        role: "Member",
        council: "Ministerial Council",
        image: "/images/leaders/placeholder.png",
        objectPosition: "center",
    },
];

const board = [
    {
        name: "Rev. Edward Quansah",
        role: "Chairman",
        council: "Board of Trustees",
        image: rev,
        objectPosition: "center",
    },
    {
        name: "Mr. Charles Sydney Aidoo",
        role: "Member",
        council: "Board of Trustees",
        image: "/images/leaders/placeholder.png",
        objectPosition: "center",
    },
    {
        name: "Sis Jemima Vanderpuije",
        role: "Member",
        council: "Board of Trustees",
        image: "/images/leaders/placeholder.png",
        objectPosition: "center",
    },
    {
        name: "Sis Letitia Taylor",
        role: "Member",
        council: "Board of Trustees",
        image: "/images/leaders/placeholder.png",
        objectPosition: "center",
    },
    {
        name: "Elder Agnes Siriboe",
        role: "Member",
        council: "Board of Trustees",
        image: "/images/leaders/placeholder.png",
        objectPosition: "center",
    },
];

// Reusable person card — single source of truth, no repetition
const PersonCard = ({ person }) => (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
        <img
            src={person.image}
            alt={person.name}
            className="w-36 h-36 object-cover rounded-full mb-4 flex-shrink-0"
            style={{ objectPosition: person.objectPosition || "center" }}
        />
        <h3 className="text-lg font-semibold text-[#04164B]">{person.name}</h3>
        <p className="text-sm text-gray-700">{person.role}</p>
        <p className="text-xs text-gray-500 mt-1">{person.council}</p>
    </div>
);

const AboutUs = () => {
    return (
        <main className="overflow-x-hidden text-gray-800">

            {/* HERO */}
            <section className="bg-[#04164B] text-white py-20 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        About Morning Dew Ministries
                    </h1>
                    <p className="text-gray-200 text-lg">
                        A Christ-centered ministry founded on the Word of God and prayer,
                        committed to building an army of believers for God's Kingdom.
                    </p>
                </motion.div>
            </section>

            {/* CONTENT */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto px-6"
                >

                    {/* HISTORY */}
                    <section id="history" className="mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#04164B] mb-6">
                            History of the Church
                        </h2>

                        <h3 className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">
                            Founding and Early Beginnings
                        </h3>

                        <p className="text-lg leading-relaxed text-gray-700 mb-8">
                            Rev. Joseph Felix Latieku-Otoo, fondly called Pastor Otoo, was saved
                            in 1973. On 12th January 2003, he was inducted and ordained as an
                            Apostle. In February 1991, during his prayer times at the Legon
                            Botanical Gardens, a number of brethren joined him. Two days each
                            week were later fixed for the study of the Word and prayer.
                        </p>

                        <p className="text-lg leading-relaxed text-gray-700 mb-10">
                            This continued faithfully for two and a half years. Out of this
                            consistent fellowship, Morning Dew Ministries was birthed —
                            founded upon the Word of God and prayer.
                        </p>

                        <h3 className="text-sm font-semibold tracking-widest text-red-600 uppercase mb-3">
                            Divine Call
                        </h3>

                        <p className="text-lg leading-relaxed text-gray-700 mb-10">
                            During prayer, Rev. Otoo heard an audible voice saying:
                            <br />
                            <span className="italic font-medium">
                                "Gather my people, teach them, build an army and present a
                                quality church unto me."
                            </span>
                        </p>

                        <p className="text-lg leading-relaxed text-gray-700 mb-10">
                            In obedience to this call, Sunday Morning Services began around
                            1993 at the Mateheko J.T. Cluster of Schools in Accra, Ghana. By
                            1999, the ministry moved to its present location near the Holy
                            Family Catholic Church, Mataheko.
                        </p>

                        <blockquote className="border-l-4 border-red-600 pl-6 italic text-gray-600 text-lg">
                            "Now I say to you that you are Peter (which means 'rock'), and upon
                            this rock I will build my Church, and the gates of hell will not
                            conquer it."
                            <br />
                            <span className="font-semibold">— Matthew 16:18</span>
                        </blockquote>
                    </section>

                    {/* NATIONAL EXECUTIVE COUNCIL */}
                    <section>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#04164B] text-center mb-12">
                            NATIONAL EXECUTIVE COUNCIL
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                            {executives.map((person, index) => (
                                <PersonCard key={index} person={person} />
                            ))}
                        </div>
                    </section>

                    {/* MINISTERIAL COUNCIL */}
                    <section>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#04164B] text-center mt-16 mb-12">
                            MINISTERIAL COUNCIL
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                            {council.map((person, index) => (
                                <PersonCard key={index} person={person} />
                            ))}
                        </div>
                    </section>

                    {/* BOARD OF TRUSTEES */}
                    <section>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#04164B] text-center mt-16 mb-12">
                            BOARD OF TRUSTEES
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                            {board.map((person, index) => (
                                <PersonCard key={index} person={person} />
                            ))}
                        </div>
                    </section>

                </motion.div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutUs;
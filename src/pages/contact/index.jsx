import Navbar from "../../components/navbar";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 🔐 Secure placeholder (no direct backend logic here)
        console.log("Contact form submitted:", formData);

        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <>
            <Navbar />

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
                            Contact Us
                        </h1>
                        <p className="text-gray-200 text-lg">
                            We would love to hear from you. Reach out to us for prayers,
                            enquiries, or fellowship.
                        </p>
                    </motion.div>
                </section>

                {/* CONTACT CONTENT */}
                <section className="py-24 px-6 md:px-16 bg-gray-50">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
                        {/* CONTACT INFO */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-[#04164B] mb-6">
                                Get in Touch
                            </h2>

                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Morning Dew Ministries is committed to building lives through
                                the Word, prayer, and fellowship. You can reach us through any
                                of the channels below.
                            </p>

                            <div className="space-y-6 text-gray-700">
                                <div>
                                    <p className="font-semibold text-[#04164B]">📍 Address</p>
                                    <p>
                                        Next to Holy Family Catholic Church, <br />
                                        Mataheko, Accra – Ghana
                                    </p>
                                </div>

                                <div>
                                    <p className="font-semibold text-[#04164B]">📞 Phone</p>
                                    <p>+233 XX XXX XXXX</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-[#04164B]">✉ Email</p>
                                    <p>info@morningdewministries.org</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-[#04164B]">⏰ Service Times</p>
                                    <p>
                                        Sunday: 8:00 AM <br />
                                        Midweek Service: Wednesday 7PM
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* CONTACT FORM */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md border border-gray-100 p-8"
                        >
                            <h3 className="text-2xl font-bold text-[#04164B] mb-6">
                                Send Us a Message
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#04164B]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#04164B]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#04164B]"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#04164B]"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-[#04164B] text-white px-6 py-3 rounded-full font-medium hover:bg-red-600 transition-all"
                                >
                                    Send Message
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
                    © {new Date().getFullYear()} Morning Dew Ministries. All rights reserved.
                </footer>
            </main>
        </>
    );
};

export default Contact;

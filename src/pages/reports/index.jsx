import Navbar from "../../components/navbar";
import { motion } from "framer-motion";
import { FileText, Clock, Images } from "lucide-react";
import Footer from "../../components/footer";

const ReportsResources = () => {
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
                            Reports & Resources
                        </h1>
                        <p className="text-gray-200 text-lg">
                            Ministry reports, learning materials, and official publications
                        </p>
                    </motion.div>
                </section>

                {/* CONTENT */}
                <section className="py-24 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <div className="flex justify-center mb-8">
                            <div className="bg-[#04164B]/10 p-6 rounded-full">
                                <Clock size={40} className="text-[#04164B]" />
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-[#04164B] mb-4">
                            Coming Soon
                        </h2>

                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
                            We are currently preparing official reports, ministry publications,
                            church media to serve our members,
                            partners, and the wider Christian community.
                        </p>

                        {/* PLACEHOLDER CARDS */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                                <FileText className="text-red-600 mb-4 mx-auto" size={32} />
                                <h3 className="font-semibold text-lg mb-2">
                                    Ministry Reports
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Annual reports, outreach summaries, and impact documentation.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                                <Images className="text-red-600 mb-4 mx-auto" size={32} />
                                <h3 className="font-semibold text-lg mb-2">
                                    Church Media
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Various from our events.
                                </p>
                            </div>

                            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                                <FileText className="text-red-600 mb-4 mx-auto" size={32} />
                                <h3 className="font-semibold text-lg mb-2">
                                    Publications
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Official documents, newsletters, and ministry publications.
                                </p>
                            </div>
                        </div>

                        {/* NOTE */}
                        <p className="mt-14 text-sm italic text-gray-500">
                            Please check back soon. This section will be updated as materials
                            become available.
                        </p>
                    </motion.div>
                </section>

                <Footer />
            </main>
        </>
    );
};

export default ReportsResources;

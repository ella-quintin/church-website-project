import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";


const Footer = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleFooterHomeClick = () => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate("/");
        }
    };

    const handleFooterAboutClick = () => {
        if (location.pathname === "/") {
            document.getElementById("history")?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
            setTimeout(() => {
                document.getElementById("history")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    };

    return (
        <footer className="bg-[#04164B] text-gray-200">
            {/* Top Section */}
            <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Logo & Vision */}
                <div>
                    <img src={logo} alt="Morning Dew Ministries" className="w-36 mb-4" />
                    <p className="text-sm leading-relaxed text-gray-300">
                        Morning Dew Ministries is committed to raising an army of believers,
                        grounded in truth, empowered by the Spirit, and impacting the world
                        with the Gospel of Jesus Christ.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4 tracking-wide">
                        Quick Links
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <button
                                onClick={handleFooterHomeClick}
                                className="hover:text-white text-left w-full"
                            >
                                Home
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={handleFooterAboutClick}
                                className="hover:text-white text-left w-full"
                            >
                                About Us
                            </button>
                        </li>

                        <li>
                            <Link to="/news-updates" className="hover:text-white">
                                News & Updates
                            </Link>
                        </li>
                        <li>
                            <Link to="/reports-resources" className="hover:text-white">
                                Reports & Resources
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="hover:text-white">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Ministries */}
                <div>
                    <h4 className="text-white font-semibold mb-4 tracking-wide">
                        Ministries
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">
                            Prayer & Intercession
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            Evangelism & Outreach
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            Discipleship & Teaching
                        </li>
                        <li className="hover:text-white cursor-pointer">
                            Children & Youth
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-4 tracking-wide">
                        Contact
                    </h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li>📍 Accra, Ghana</li>
                        <li>📞 +233 XX XXX XXXX</li>
                        <li>✉️ info@morningdewministries.org</li>
                    </ul>

                    <Link
                        to="/contact-us"
                        className="inline-block mt-5 bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition"
                    >
                        Reach Out
                    </Link>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10"></div>

            {/* Bottom Bar */}
            <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center text-xs text-gray-400">
                <p>
                    © {new Date().getFullYear()} Morning Dew Ministries. All rights reserved.
                </p>

              
            </div>
        </footer>
    );
};

export default Footer;

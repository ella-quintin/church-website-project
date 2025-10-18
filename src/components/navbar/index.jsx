import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const desktopMenuRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const [isAssembliesOpen, setIsAssembliesOpen] = useState(false);

    // Handle scroll behavior
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menus on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                desktopMenuRef.current &&
                !desktopMenuRef.current.contains(event.target) &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const isActive = (path) =>
        path === "/"
            ? location.pathname === "/" || location.pathname === ""
            : location.pathname === path;

    const handleWhatWeDoClick = (e) => {
        e.preventDefault();
        if (location.pathname === "/") {
            document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/#what-we-do");
        }
    };

    return (
        <nav
            className={`bg-white fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#04164B] shadow-md" : ""
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link to="/" className="flex items-center h-12">
                    <img src={logo} alt="Logo" className="h-auto w-32 max-h-48" />
                </Link>

                {/* Mobile Toggle */}
                <button
                    className={`md:hidden ${scrolled ? "text-gray-800" : "text-black"}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Navigation */}
                <div
                    ref={desktopMenuRef}
                    className="hidden md:flex items-center space-x-8"
                >
                    {[
                        { to: "/", label: "HOME" },
                        { to: "/about-us", label: "ABOUT US" },
                    ].map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`font-medium transition-colors ${isActive(link.to)
                                ? "text-[#04164B]"
                                : scrolled
                                    ? "text-gray-800 hover:text-[#04164B]"
                                    : "text-black hover:text-[#04164B]"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Dropdown: ASSEMBLIES & FELLOWSHIPS */}
                    <div
                        className="relative"
                        onMouseEnter={() => {
                            clearTimeout(window.assemblyTimeout);
                            setIsAssembliesOpen(true);
                        }}
                        onMouseLeave={() => {
                            window.assemblyTimeout = setTimeout(() => {
                                setIsAssembliesOpen(false);
                            }, 300);
                        }}
                    >
                        <button
                            className={`flex items-center font-medium gap-1 transition-colors ${scrolled ? "text-gray-800" : "text-black"
                                } hover:text-[#04164B] focus:outline-none`}
                        >
                            ASSEMBLIES & FELLOWSHIPS
                            <ChevronDown
                                size={16}
                                className={`transition-transform ${isAssembliesOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {isAssembliesOpen && (
                            <div
                                onMouseEnter={() => {
                                    clearTimeout(window.assemblyTimeout);
                                    setIsAssembliesOpen(true);
                                }}
                                onMouseLeave={() => {
                                    window.assemblyTimeout = setTimeout(() => {
                                        setIsAssembliesOpen(false);
                                    }, 300);
                                }}
                                className="absolute left-0 mt-2 w-64 rounded-lg shadow-lg bg-white border border-gray-100 animate-fade-in"
                            >
                                {/* Assemblies Section */}
                                <div className="px-4 py-2 border-b border-gray-200">
                                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Assemblies</p>
                                    {[
                                        { label: "Akweley Assembly", to: "/assemblies/akweley" },
                                        { label: "Kasoa Assembly", to: "/assemblies/kasoa" },
                                        { label: "Nkawkaw Assembly", to: "/assemblies/nkawkaw" },
                                        { label: "Oda Assembly", to: "/assemblies/oda" },
                                        { label: "Sunyani / Berekum Assemblies", to: "/assemblies/sunyani-berekum" },
                                        { label: "Swedru Assembly", to: "/assemblies/swedru" },
                                    ].map((item) => (
                                        <Link
                                            key={item.to}
                                            to={item.to}
                                            className="block text-sm text-gray-800 px-2 py-1.5 rounded hover:bg-red-600 hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>

                                {/* Fellowships Section */}
                                <div className="px-4 py-2">
                                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Fellowships</p>
                                    {[
                                        { label: "Bortianor Fellowship", to: "/fellowships/bortianor" },
                                        { label: "Dansoman Fellowship", to: "/fellowships/dansoman" },
                                        { label: "Haatso Fellowship", to: "/fellowships/haatso" },
                                        { label: "Odorkor Official Town Fellowship", to: "/fellowships/odorkor" },
                                        { label: "Ofaakor Fellowship", to: "/fellowships/ofaakor" },
                                    ].map((item) => (
                                        <Link
                                            key={item.to}
                                            to={item.to}
                                            className="block text-sm text-gray-800 px-2 py-1.5 rounded hover:bg-red-600 hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>


                    <Link
                        to="/missions"
                        className={`font-medium transition-colors ${isActive("/missions")
                            ? "text-[#04164B]"
                            : scrolled
                                ? "text-gray-800 hover:text-[#04164B]"
                                : "text-black hover:text-[#04164B]"
                            }`}
                    >
                        MINISTRIES & DEPARTMENTS
                    </Link>

                    {/* Dropdown: GENERAL UPDATES (Professional UX) */}
                    <div
                        className="relative"
                        onMouseEnter={() => {
                            clearTimeout(window.dropdownTimeout);
                            setIsDropdownOpen(true);
                        }}
                        onMouseLeave={() => {
                            window.dropdownTimeout = setTimeout(() => {
                                setIsDropdownOpen(false);
                            }, 300); // slightly longer delay for smoother hover
                        }}
                    >
                        <button
                            className={`flex items-center font-medium gap-1 transition-colors ${scrolled ? "text-gray-800" : "text-black"
                                } hover:text-[#04164B] focus:outline-none`}
                        >
                            GENERAL UPDATES
                            <ChevronDown
                                size={16}
                                className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        {isDropdownOpen && (
                            <div
                                className="absolute left-0 mt-2 w-60 rounded-lg shadow-lg bg-white border border-gray-100 transition-all duration-200 animate-fade-in"
                                onMouseEnter={() => {
                                    clearTimeout(window.dropdownTimeout);
                                    setIsDropdownOpen(true);
                                }}
                                onMouseLeave={() => {
                                    window.dropdownTimeout = setTimeout(() => {
                                        setIsDropdownOpen(false);
                                    }, 300);
                                }}
                            >
                                {[
                                    { to: "/activities-events", label: "Activities & Events" },
                                    { to: "/reports-resources", label: "Reports & Resources" },
                                    { to: "/news-updates", label: "News & Updates" },
                                ].map((item) => (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-red-600 hover:text-white rounded-md transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>


                    <Link
                        to="/contact-us"
                        className="bg-[#04164B] text-white px-5 py-2 font-medium rounded-3xl hover:bg-red-600 hover:text-white transition duration-300"
                    >
                        CONTACT US
                    </Link>
                </div>
            </div>

            {/* Mobile Slide-In Menu */}
            <div
                ref={mobileMenuRef}
                className={`fixed inset-0 z-50 flex justify-end md:hidden transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {/* Overlay background */}
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* Menu Panel */}
                <div className="relative w-72 max-w-[80%] h-full bg-[#04164B] text-white shadow-2xl p-6 overflow-y-auto">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-lg font-bold tracking-wide">Menu</h2>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 hover:bg-white/10 rounded-full transition"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="space-y-5">
                        {[
                            { to: "/", label: "HOME" },
                            { to: "/about-us", label: "ABOUT US" },
                            { to: "/missions", label: "MINISTRIES & DEPARTMENTS" },
                        ].map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block text-lg font-medium tracking-wide ${isActive(link.to)
                                        ? "text-white"
                                        : "text-gray-100 hover:text-white"
                                    } transition`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Assemblies & Fellowships Dropdown */}
                        <div>
                            <button
                                onClick={() =>
                                    setIsDropdownOpen((prev) =>
                                        prev === "assemblies" ? null : "assemblies"
                                    )
                                }
                                className="flex items-center justify-between w-full text-left font-medium text-gray-100 hover:text-yellow-400 transition"
                            >
                                ASSEMBLIES & FELLOWSHIPS
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform ${isDropdownOpen === "assemblies" ? "rotate-180 text-gray-50" : ""
                                        }`}
                                />
                            </button>

                            {isDropdownOpen === "assemblies" && (
                                <div className="mt-3 pl-4 space-y-3 border-l border-white/20">
                                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                                        Assemblies
                                    </h3>
                                    {[
                                        { label: "Akweley Assembly", to: "/assemblies/akweley" },
                                        { label: "Kasoa Assembly", to: "/assemblies/kasoa" },
                                        { label: "Nkawkaw Assembly", to: "/assemblies/nkawkaw" },
                                        { label: "Oda Assembly", to: "/assemblies/oda" },
                                        { label: "Sunyani / Berekum Assemblies", to: "/assemblies/sunyani-berekum" },
                                        { label: "Swedru Assembly", to: "/assemblies/swedru" },
                                    ].map((item) => (
                                        <Link
                                            key={item.to}
                                            to={item.to}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block text-sm text-gray-300 hover:text-red-600 transition"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}

                                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400 mt-4">
                                        Fellowships
                                    </h3>
                                    {[
                                        { label: "Bortianor Fellowship", to: "/fellowships/bortianor" },
                                        { label: "Dansoman Fellowship", to: "/fellowships/dansoman" },
                                        { label: "Haatso Fellowship", to: "/fellowships/haatso" },
                                        { label: "Odorkor Official Town Fellowship", to: "/fellowships/odorkor" },
                                        { label: "Ofaakor Fellowship", to: "/fellowships/ofaakor" },
                                    ].map((item) => (
                                        <Link
                                            key={item.to}
                                            to={item.to}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block text-sm text-gray-300 hover:text-red-600 transition"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* General Updates Dropdown */}
                        <div>
                            <button
                                onClick={() =>
                                    setIsDropdownOpen((prev) =>
                                        prev === "updates" ? null : "updates"
                                    )
                                }
                                className="flex items-center justify-between w-full text-left font-medium text-gray-100 hover:text-gray-50 transition"
                            >
                                GENERAL UPDATES
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform ${isDropdownOpen === "updates" ? "rotate-180 text-gray-50" : ""
                                        }`}
                                />
                            </button>

                            {isDropdownOpen === "updates" && (
                                <div className="mt-3 pl-4 space-y-3 border-l border-white/20">
                                    {[
                                        { to: "/activities-events", label: "Activities & Events" },
                                        { to: "/reports-resources", label: "Reports & Resources" },
                                        { to: "/news-updates", label: "News & Updates" },
                                    ].map((item) => (
                                        <Link
                                            key={item.to}
                                            to={item.to}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block text-sm text-gray-300 hover:text-gray-50 transition"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Contact Button */}
                        <div className="pt-6">
                            <Link
                                to="/contact-us"
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-center bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition shadow-md"
                            >
                                CONTACT US
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;

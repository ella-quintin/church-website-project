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
            className={`bg-white fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white backdrop-blur-md shadow-md" : ""
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
                className={`fixed top-0 right-0 h-full w-64 bg-[#3B4293] text-white transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden z-40`}
            >
                <div className="pt-16 p-6 space-y-6">
                    {[
                        { to: "/", label: "HOME" },
                        { to: "/about-us", label: "ABOUT US" },
                        { to: "/missions", label: "MINISTRIES & DEPARTMENTS" },
                    ].map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block font-medium ${isActive(link.to) ? "text-gray-300" : "text-white"
                                } hover:text-yellow-300`}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <button
                        onClick={handleWhatWeDoClick}
                        className="block font-medium text-white hover:text-yellow-300"
                    >
                        ASSEMBLIES & FELLOWSHIPS
                    </button>

                    {/* Mobile Dropdown */}
                    <div>
                        <button
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className="flex items-center justify-between w-full text-left font-medium text-white hover:text-yellow-300"
                        >
                            GENERAL UPDATES
                            <ChevronDown
                                size={18}
                                className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {isDropdownOpen && (
                            <div className="mt-2 pl-4 space-y-2">
                                {[
                                    { to: "/activities-events", label: "Activities & Events" },
                                    { to: "/reports-resources", label: "Reports & Resources" },
                                    { to: "/news-updates", label: "News & Updates" },
                                ].map((item) => (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block text-sm text-gray-200 hover:text-yellow-300"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        to="/contact-us"
                        onClick={() => setIsMenuOpen(false)}
                        className="block bg-yellow-500 text-white px-5 py-2 font-medium rounded-3xl hover:bg-yellow-400 transition duration-300"
                    >
                        CONTACT US
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

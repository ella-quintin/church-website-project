import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { Menu, X, ChevronDown } from "lucide-react";
import { sanityClient } from "../../lib/sanity";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAssembliesOpen, setIsAssembliesOpen] = useState(false);
    const [isGeneralOpen, setIsGeneralOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [assemblies, setAssemblies] = useState([]);
    const [fellowships, setFellowships] = useState([]);

    // mobile dropdowns
    const [isMobileAssembliesOpen, setIsMobileAssembliesOpen] = useState(false);
    const [isMobileGeneralOpen, setIsMobileGeneralOpen] = useState(false);

    const desktopMenuRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const assembliesTimeoutRef = useRef(null);
    const generalTimeoutRef = useRef(null);

    const location = useLocation();
    const navigate = useNavigate();

    /* ================= SCROLL EFFECT ================= */
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* ================= FETCH FROM SANITY ================= */
    useEffect(() => {
        sanityClient
            .fetch(`
                *[_type == "branch"]{
                    name,
                    branchType,
                    "slug": slug.current
                }
            `)
            .then((data) => {
                setAssemblies(
                    data
                        .filter((b) => b.branchType === "assembly")
                        .sort((a, b) => a.name.localeCompare(b.name))
                );

                setFellowships(
                    data
                        .filter((b) => b.branchType === "fellowship")
                        .sort((a, b) => a.name.localeCompare(b.name))
                );
            })
            .catch(console.error);
    }, []);

    /* ================= HELPERS ================= */
    const handleHomeClick = () => {
        setIsMenuOpen(false);
        navigate("/");
    };

    const handleAboutUsClick = () => {
        setIsMenuOpen(false);
        if (location.pathname === "/") {
            document.getElementById("history")?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/#history");
        }
    };

    const handleMinistriesClick = () => {
        setIsMenuOpen(false);
        if (location.pathname === "/") {
            document.getElementById("ministries")?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/#ministries");
        }
    };

    /* ================= DESKTOP ================= */
    const isActive = (path) =>
        path === "/"
            ? location.pathname === "/" || location.pathname === ""
            : location.pathname === path;

    return (
        <nav
            className={`bg-white fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#04164B] shadow-md" : ""
                }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* LOGO */}
                <Link to="/" className="flex items-center h-12 cursor-pointer">
                    <img src={logo} alt="Logo" className="h-auto w-32 max-h-48" />
                </Link>

                {/* MOBILE TOGGLE */}
                <button
                    className={`md:hidden cursor-pointer ${scrolled ? "text-gray-800" : "text-black"
                        }`}
                    onClick={() => setIsMenuOpen(true)}
                >
                    <Menu size={28} />
                </button>

                {/* ================= DESKTOP NAV (UNCHANGED) ================= */}
                <div ref={desktopMenuRef} className="hidden md:flex items-center space-x-8">
                    <button
                        onClick={handleHomeClick}
                        className={`font-medium transition-colors cursor-pointer ${isActive("/") ? "text-[#04164B]" : "hover:text-[#04164B]"
                            }`}
                    >
                        HOME
                    </button>

                    <button onClick={handleAboutUsClick} className="font-medium hover:text-[#04164B]">
                        ABOUT US
                    </button>

                    <button onClick={handleMinistriesClick} className="font-medium hover:text-[#04164B]">
                        MINISTRIES & DEPARTMENTS
                    </button>

                    {/* ASSEMBLIES & FELLOWSHIPS */}
                    <div
                        className="relative"
                        onMouseEnter={() => {
                            clearTimeout(assembliesTimeoutRef.current);
                            setIsAssembliesOpen(true);
                        }}
                        onMouseLeave={() => {
                            assembliesTimeoutRef.current = setTimeout(() => {
                                setIsAssembliesOpen(false);
                            }, 400);
                        }}
                    >
                        <button className="flex items-center gap-1 font-medium hover:text-[#04164B]">
                            ASSEMBLIES & FELLOWSHIPS
                            <ChevronDown size={16} />
                        </button>

                        {isAssembliesOpen && (
                            <div
                                className="absolute left-0 mt-2 w-64 bg-white border-white rounded-lg shadow-lg"
                                onMouseEnter={() => clearTimeout(assembliesTimeoutRef.current)}
                                onMouseLeave={() =>
                                (assembliesTimeoutRef.current = setTimeout(
                                    () => setIsAssembliesOpen(false),
                                    400
                                ))
                                }
                            >
                                <div className="px-4 py-2 border-b">
                                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                                        Assemblies
                                    </p>
                                    {assemblies.map((a) => (
                                        <Link
                                            key={a.slug}
                                            to={`/assemblies/${a.slug}`}
                                            className="block px-2 py-1.5 hover:bg-red-600 hover:text-white rounded"
                                        >
                                            {a.name}
                                        </Link>
                                    ))}
                                </div>

                                <div className="px-4 py-2">
                                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">
                                        Fellowships
                                    </p>
                                    {fellowships.map((f) => (
                                        <Link
                                            key={f.slug}
                                            to={`/fellowships/${f.slug}`}
                                            className="block px-2 py-1.5 hover:bg-red-600 hover:text-white rounded"
                                        >
                                            {f.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* GENERAL INFO */}
                    <div
                        className="relative"
                        onMouseEnter={() => {
                            clearTimeout(generalTimeoutRef.current);
                            setIsGeneralOpen(true);
                        }}
                        onMouseLeave={() => {
                            generalTimeoutRef.current = setTimeout(() => {
                                setIsGeneralOpen(false);
                            }, 400);
                        }}
                    >
                        <button className="flex items-center gap-1 font-medium hover:text-[#04164B]">
                            GENERAL INFO
                            <ChevronDown size={16} />
                        </button>

                        {isGeneralOpen && (
                            <div className="absolute left-0 mt-2 w-64 bg-white border-white rounded-lg shadow-lg">
                                <Link
                                    to="/reports-resources"
                                    className="block px-4 py-2 hover:bg-red-600 hover:text-white"
                                >
                                    Reports & Resources
                                </Link>
                                <Link
                                    to="/news-updates"
                                    className="block px-4 py-2 hover:bg-red-600 hover:text-white"
                                >
                                    News & Updates
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        to="/contact-us"
                        className="bg-[#04164B] text-white px-5 py-2 rounded-3xl hover:bg-red-600"
                    >
                        CONTACT US
                    </Link>
                </div>
            </div>

            {/* ================= MOBILE MENU (MATCHES IMAGE) ================= */}
            {isMenuOpen && (
                <div ref={mobileMenuRef} className="fixed inset-0 z-50 md:hidden">
                    {/* overlay */}
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setIsMenuOpen(false)}
                    />

                    {/* panel */}
                    <div className="absolute right-0 top-0 h-full w-80 bg-[#04164B] text-white px-6 py-8">
                        {/* header */}
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-lg font-semibold">Menu</h3>
                            <X
                                size={24}
                                className="cursor-pointer"
                                onClick={() => setIsMenuOpen(false)}
                            />
                        </div>

                        {/* nav */}
                        <nav className="space-y-6 text-base tracking-wide">
                            <button
                                onClick={handleHomeClick}
                                className="block w-full text-left"
                            >
                                HOME
                            </button>

                            <button
                                onClick={handleAboutUsClick}
                                className="block w-full text-left"
                            >
                                ABOUT US
                            </button>

                            <button
                                onClick={handleMinistriesClick}
                                className="block w-full text-left"
                            >
                                MINISTRIES & DEPARTMENTS
                            </button>

                            {/* ASSEMBLIES & FELLOWSHIPS */}
                            <div>
                                <button
                                    onClick={() =>
                                        setIsMobileAssembliesOpen(!isMobileAssembliesOpen)
                                    }
                                    className="flex items-center justify-between w-full"
                                >
                                    <span>ASSEMBLIES & FELLOWSHIPS</span>
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform ${isMobileAssembliesOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {isMobileAssembliesOpen && (
                                    <div className="mt-3 pl-4 space-y-2 text-sm text-gray-200">
                                        {assemblies.map((a) => (
                                            <Link
                                                key={a.slug}
                                                to={`/assemblies/${a.slug}`}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block"
                                            >
                                                {a.name}
                                            </Link>
                                        ))}

                                        {fellowships.map((f) => (
                                            <Link
                                                key={f.slug}
                                                to={`/fellowships/${f.slug}`}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="block"
                                            >
                                                {f.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* GENERAL UPDATES */}
                            <div>
                                <button
                                    onClick={() =>
                                        setIsMobileGeneralOpen(!isMobileGeneralOpen)
                                    }
                                    className="flex items-center justify-between w-full"
                                >
                                    <span>GENERAL UPDATES</span>
                                    <ChevronDown
                                        size={18}
                                        className={`transition-transform ${isMobileGeneralOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {isMobileGeneralOpen && (
                                    <div className="mt-3 pl-4 space-y-2 text-sm text-gray-200">
                                        <Link
                                            to="/reports-resources"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block"
                                        >
                                            Reports & Resources
                                        </Link>

                                        <Link
                                            to="/news-updates"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block"
                                        >
                                            News & Updates
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* CTA */}
                            <Link
                                to="/contact-us"
                                onClick={() => setIsMenuOpen(false)}
                                className="block mt-10 bg-red-600 text-center py-3 rounded-full font-semibold"
                            >
                                CONTACT US
                            </Link>
                        </nav>
                    </div>
                </div>
            )}

        </nav>
    );
};

export default Navbar;

import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Footer
   — Pure Tailwind, no external fonts, no dangerouslySetInnerHTML
   — All external links carry rel="noopener noreferrer"
   — Emoji contact icons replaced with Lucide (accessible, scalable)
───────────────────────────────────────────────────────────── */
const Footer = () => {
  const navigate  = useNavigate();
  const location  = useLocation();

  const handleHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleAbout = () => {
    if (location.pathname === "/") {
      document.getElementById("history")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(
        () => document.getElementById("history")?.scrollIntoView({ behavior: "smooth" }),
        100
      );
    }
  };

  const quickLinks = [
    { label: "Home",                onClick: handleHome },
    { label: "About Us",            to: "/about-us" },
    { label: "News & Updates",      to: "/news-updates" },
    { label: "Reports & Resources", to: "/reports-resources" },
    { label: "Contact Us",          to: "/contact-us" },
  ];

  const ministries = [
    "Prayer & Intercession",
    "Evangelism & Outreach",
    "Discipleship & Teaching",
    "Children & Youth",
  ];

  return (
    <footer className="bg-[#04164B] text-gray-300">

      {/* ══ MAIN GRID ══ */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-14 pb-10
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

        {/* ── Col 1 — Brand ── */}
        <div className="sm:col-span-2 lg:col-span-1">
          <img
            src={logo}
            alt="Morning Dew Ministries logo"
            className="w-28 mb-5 rounded-lg"
          />
          <p className="text-sm leading-relaxed text-gray-400 mb-6">
            Raising an army of believers, grounded in truth, empowered by the
            Spirit, and impacting the world with the Gospel of Jesus Christ.
          </p>

          {/* social / reach-out CTA */}
          <Link
            to="/contact-us"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700
                       text-white text-xs font-bold tracking-wide uppercase
                       px-5 py-2.5 rounded-full transition-all duration-200
                       hover:-translate-y-0.5 hover:shadow-lg"
          >
            Reach Out
            <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
        </div>

        {/* ── Col 2 — Quick Links ── */}
        <div>
          <h4 className="text-white text-xs font-extrabold tracking-widest uppercase mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map(({ label, to, onClick }) => (
              <li key={label}>
                {onClick ? (
                  <button
                    onClick={onClick}
                    className="text-sm text-gray-400 hover:text-white
                               hover:translate-x-1 transition-all duration-150
                               text-left w-full"
                  >
                    {label}
                  </button>
                ) : (
                  <Link
                    to={to}
                    className="text-sm text-gray-400 hover:text-white
                               hover:translate-x-1 transition-all duration-150
                               inline-block"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 3 — Ministries ── */}
        <div>
          <h4 className="text-white text-xs font-extrabold tracking-widest uppercase mb-5">
            Ministries
          </h4>
          <ul className="space-y-3">
            {ministries.map((m) => (
              <li key={m}
                  className="text-sm text-gray-400 hover:text-white
                             hover:translate-x-1 transition-all duration-150 cursor-default">
                {m}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 4 — Contact ── */}
        <div>
          <h4 className="text-white text-xs font-extrabold tracking-widest uppercase mb-5">
            Contact
          </h4>
          <ul className="space-y-4">

            {/* Address */}
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/[.07]
                              flex items-center justify-center mt-0.5">
                <MapPin size={13} className="text-red-600" aria-hidden="true" />
              </div>
              <span className="text-sm text-gray-400 leading-snug">
                P.O. Box AN 12215<br />Accra-North, Ghana
              </span>
            </li>

            {/* Phone */}
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/[.07]
                              flex items-center justify-center mt-0.5">
                <Phone size={13} className="text-red-600" aria-hidden="true" />
              </div>
              <div className="text-sm text-gray-400 leading-snug">
                <p className="text-[10px] font-bold tracking-widest uppercase text-white/30 mb-1">
                  MDM Office Line
                </p>
                {/* Security: tel: href uses validated number strings only */}
                <a href="tel:0302314528"
                   className="hover:text-white transition-colors duration-150 block">
                  0302-314 528
                </a>
                <a href="tel:0599920007"
                   className="hover:text-white transition-colors duration-150 block">
                  0599-920 007
                </a>
              </div>
            </li>

            {/* Email */}
            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/[.07]
                              flex items-center justify-center mt-0.5">
                <Mail size={13} className="text-red-600" aria-hidden="true" />
              </div>
              <a href="mailto:info@morningdewministries.org"
                 className="text-sm text-gray-400 hover:text-white
                            transition-colors duration-150 break-all leading-snug mt-0.5">
                info@morningdewministries.org
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* ══ DIVIDER ══ */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="h-px bg-white/[.08]" />
      </div>

      {/* ══ BOTTOM BAR ══ */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-5
                      flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-gray-500 text-center sm:text-left">
          © {new Date().getFullYear()} Morning Dew Ministries. All rights reserved.
        </p>
        <p className="text-xs text-gray-600 text-center sm:text-right">
          Accra, Ghana
        </p>
      </div>

    </footer>
  );
};

export default Footer;
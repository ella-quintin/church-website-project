import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { motion } from "framer-motion";
import { FileText, Clock, BookOpen, ArrowRight, CheckCircle } from "lucide-react";

/* ─────────────────────────────────────
   Static data — Church Media lives on its own page
───────────────────────────────────── */
const RESOURCES = [
  {
    Icon: FileText,
    title: "Ministry Reports",
    desc: "Annual reports, outreach summaries, and ministry impact documentation across all assemblies and fellowships.",
    tag: "Annual · Outreach · Impact",
    bullets: ["Annual impact reports", "Outreach summaries", "Assembly documentation"],
  },
  {
    Icon: BookOpen,
    title: "Publications",
    desc: "Official documents, newsletters, devotional materials, and ministry publications issued throughout the year.",
    tag: "Newsletters · Devotionals · Docs",
    bullets: ["Monthly newsletters", "Devotional materials", "Official documents"],
  },
];

/* Framer variants */
const cardVariants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ReportsResources = () => (
  <>
    <Navbar />

    <main className="overflow-x-hidden text-gray-800">

      {/* ══ HERO — original styling preserved ══ */}
      <section className="bg-[#04164B] text-white py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Reports &amp; Resources
          </h1>
          <p className="text-gray-200 text-lg">
            Ministry reports, learning materials, and official publications
          </p>
        </motion.div>
      </section>

      {/* ══ MAIN CONTENT ══ */}
      <section className="py-16 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">

          {/* ── Coming soon banner — bold, not an afterthought ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-[#04164B] rounded-2xl overflow-hidden mb-12 px-7 md:px-10 py-9"
          >
            {/* subtle radial glow */}
            <div
              aria-hidden="true"
              className="absolute -top-10 -right-10 w-56 h-56 rounded-full
                         bg-red-600/10 blur-3xl pointer-events-none"
            />
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
              {/* clock badge */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/10
                              flex items-center justify-center">
                <Clock size={28} className="text-white" aria-hidden="true" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0" aria-hidden="true" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/50">
                    Status Update
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-extrabold text-white mb-2 leading-snug">
                  Content is being prepared
                </h2>
                <p className="text-sm text-white/60 leading-relaxed max-w-lg">
                  We are compiling official reports, publications, and ministry materials.
                  This section will be updated progressively throughout 2026.
                </p>
              </div>

              {/* ministry tag pill — desktop */}
              <div className="hidden sm:flex flex-shrink-0 flex-col items-center
                              bg-white/[.08] border border-white/10 rounded-xl px-5 py-3 text-center gap-0.5">
                <span className="text-[9px] font-bold tracking-widest uppercase text-white/40">Ministry</span>
                <span className="text-xs font-extrabold text-white leading-tight">Morning Dew<br />Ministries</span>
              </div>
            </div>
          </motion.div>

          {/* ── Section label ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="w-1 h-5 rounded-full bg-red-600 flex-shrink-0" aria-hidden="true" />
            <h3 className="text-base font-extrabold text-[#04164B]">Available Resources</h3>
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-[11px] text-gray-400 hidden sm:block">Coming soon</span>
          </motion.div>

          {/* ── Two cards — generous, full-width feel ── */}
          <div className="grid sm:grid-cols-2 gap-6">
            {RESOURCES.map(({ Icon, title, desc, tag, bullets }, i) => (
              <motion.div
                key={title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white border border-gray-100 rounded-2xl
                           overflow-hidden flex flex-col
                           hover:shadow-xl hover:-translate-y-1 hover:border-red-100
                           transition-all duration-300"
              >
                {/* Coloured top band */}
                <div className="bg-[#04164B] px-6 pt-6 pb-5">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    {/* icon */}
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center
                                    justify-center flex-shrink-0
                                    group-hover:bg-red-600 transition-colors duration-300">
                      <Icon size={22} className="text-white" aria-hidden="true" />
                    </div>
                    {/* number watermark */}
                    <span
                      aria-hidden="true"
                      className="text-5xl font-extrabold text-white/[.06]
                                 leading-none select-none pointer-events-none"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-1">
                    {tag}
                  </p>
                  <h3 className="text-lg font-extrabold text-white leading-snug">
                    {title}
                  </h3>
                </div>

                {/* White body */}
                <div className="flex-1 px-6 py-5 flex flex-col gap-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>

                  {/* Bullet list preview */}
                  <ul className="space-y-2">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <CheckCircle
                          size={14}
                          className="text-red-400 flex-shrink-0"
                          aria-hidden="true"
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Footer CTA */}
                  <div className="mt-auto flex items-center justify-between pt-4
                                  border-t border-gray-100">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold
                                     tracking-widest uppercase text-gray-400">
                      <Clock size={11} aria-hidden="true" />
                      Preparing content
                    </span>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Bottom contact strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4
                       bg-[#04164B]/[.05] border border-[#04164B]/10
                       rounded-2xl px-6 md:px-8 py-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#04164B] flex items-center
                              justify-center flex-shrink-0">
                <Clock size={14} className="text-white" aria-hidden="true" />
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-[#04164B]">Please check back soon.</span>{" "}
                 This section will be updated as materials become available.
              </p>
            </div>
            <p className="text-[11px] italic text-gray-400 text-center sm:text-right leading-relaxed flex-shrink-0">
              Morning Dew Ministries &nbsp;·&nbsp; P.O. Box AN 12215<br />
              Accra-North, Ghana &nbsp;·&nbsp; Tel: 0302-314 529
            </p>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  </>
);

export default ReportsResources;
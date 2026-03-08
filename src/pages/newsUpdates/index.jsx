import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, ChevronDown, FileText, BookOpen, Target } from "lucide-react";
import { useState } from "react";

/* ══════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════ */
const CALENDAR = [
  {
    month: "January", abbr: "JAN", theme: "Prayer Month",
    sub: "Reliable in Prayer",
    color: "from-[#04164B] to-[#0a2a6e]",
    events: [
      { date: "Thurs 1st",          activity: "New Year Festival / Accountability", time: "6:00am – 6:00pm" },
      { date: "Fri 2nd – Sat 31st", activity: "Prayer Month",                       time: "Morning: 4:30–5:30am · Evening: 4:00–7:00pm" },
      { date: "Sun 4th",            activity: "Vineyard Waiting",                   time: "10:00pm – 3:00am" },
      { date: "Sat 17th",           activity: "General Waiting",                    time: "6:00am – 6:00pm" },
    ],
  },
  {
    month: "February", abbr: "FEB", theme: "Evangelism — Go Fetch Them",
    sub: "Reliable in Fetching Lost Souls",
    color: "from-[#04164B] to-[#0a2a6e]",
    events: [
      { date: "Sun 1st",             activity: "Accountability",              time: "Morning: 4:30–5:30am · Evening: 4:00–7:00pm" },
      { date: "Mon 2nd – Sat 28th",  activity: "Evangelism 'Go Fetch Them'", time: "As specified by local Assembly/Fellowship" },
      { date: "Fri 13th – Sat 14th", activity: "Vineyard Convention",        time: "8:00am – 9:00pm" },
      { date: "Sat 21st",            activity: "General Waiting",             time: "6:00am – 6:00pm" },
    ],
  },
  {
    month: "March", abbr: "MAR", theme: "Praise & Business Month",
    sub: "Reliable in Praise and Job/Business",
    color: "from-[#04164B] to-[#0a2a6e]",
    events: [
      { date: "Sun 1st",             activity: "Accountability",                            time: "Morning: 4:30–5:30am · Evening: 4:00–7:00pm" },
      { date: "Mon 2nd – Sat 7th",   activity: "Praise Festival",                          time: "As specified by local Assembly/Fellowship" },
      { date: "Fri 13th – Sat 14th", activity: "Business Club / Intellectuals Convention", time: "—" },
      { date: "Sat 21st",            activity: "General Waiting",                          time: "6:00am – 6:00pm" },
    ],
  },
  {
    month: "April", abbr: "APR", theme: "Children's Convention",
    sub: "Teaching Children to be Reliable",
    color: "from-[#04164B] to-[#0a2a6e]",
    events: [
      { date: "Wed 1st",           activity: "Accountability",         time: "Morning: 4:30–5:30am · Evening: 4:00–7:00pm" },
      { date: "Sat 4th – Sun 5th", activity: "Children's Convention", time: "At Regional or District Level" },
      { date: "Sat 18th",          activity: "General Waiting",        time: "6:00am – 6:00pm" },
      { date: "Sun 26th",          activity: "Vineyard Waiting",       time: "10:00pm – 3:00am" },
    ],
  },
  {
    month: "May", abbr: "MAY", theme: "Mid-Year Convention",
    sub: "A Reliable Church",
    color: "from-[#04164B] to-[#0a2a6e]",
    events: [
      { date: "Fri 1st",           activity: "Accountability",      time: "Morning: 4:30–5:30am · Evening: 4:00–7:00pm" },
      { date: "Sat 2nd – Sun 3rd", activity: "Mid-Year Convention", time: "6:00am – 6:00pm" },
      { date: "Sat 16th",          activity: "General Waiting",     time: "6:00am – 6:00pm" },
    ],
  },
  {
    month: "June", abbr: "JUN", theme: "Night of Nights",
    sub: "Standing as a Reliable Watchman",
    color: "from-[#04164B] to-[#0a2a6e]",
    events: [
      { date: "Mon 1st",              activity: "Accountability",                     time: "Morning: 4:30–5:30am · Evening: 4:00–7:00pm" },
      { date: "Tues 2nd – Tues 30th", activity: "Night of Nights (Watchmen Prayers)", time: "10:00pm – 3:00am" },
    ],
  },
  {
    month: "July", abbr: "JUL", theme: "Family Month",
    sub: "Being a Reliable Family Member",
    color: "from-[#04164B] to-[#0a2a6e]",
    events: [
      { date: "Wed 1st",           activity: "Accountability",     time: "Morning: 4:30–5:30am · Evening: 4:00–7:00pm" },
      { date: "Fri 3rd – Sat 4th", activity: "Family Convention", time: "As specified by local Assembly/Fellowship" },
      { date: "Sun 5th",           activity: "Vineyard Waiting",  time: "10:00pm – 3:00am" },
      { date: "Sat 18th",          activity: "General Waiting",   time: "6:00am – 6:00pm" },
    ],
  },
  {
    month: "August", abbr: "AUG", theme: "Assessment Month",
    sub: "Assessing my Reliability as a Child of God",
    color: "from-[#04164B] to-[#0a2a6e]",
    events: [
      { date: "Sat 1st",  activity: "Accountability",                                                  time: "Morning: 4:30–5:30am · Evening: 4:00–7:00pm" },
      { date: "Sat 15th", activity: "General Waiting",                                                 time: "6:00am – 6:00pm" },
      { date: "Sat 29th", activity: "Children's Ministry / Care Givers Assessment Workshop",           time: "At Regional/District Level" },
    ],
  },
  {
    month: "September", abbr: "SEP", theme: "Youth Month",
    sub: "A Reliable Youth",
    color: "from-[#04164B] to-[#0a2a6e]",
    events: [
      { date: "Tues 1st",          activity: "Accountability",    time: "Morning: 4:30–5:30am · Evening: 4:00–7:00pm" },
      { date: "Fri 4th – Sat 5th", activity: "Youth Convention", time: "9:00am – 4:00pm" },
      { date: "Sat 19th",          activity: "General Waiting",  time: "6:00am – 6:00pm" },
    ],
  },
  {
    month: "October", abbr: "OCT", theme: "Prayer Month",
    sub: "Standing in the Gap as a Reliable Child of God",
    color: "from-[#04164B] to-[#0a2a6e]",
    events: [
      { date: "Thurs 1st",          activity: "Accountability",   time: "Morning: 4:30–5:30am · Evening: 4:00–7:00pm" },
      { date: "Sun 4th",            activity: "Vineyard Waiting", time: "10:00pm – 3:00am" },
      { date: "Mon 5th – Sun 11th", activity: "Prayer Festival",  time: "Morning: 4:30–5:30am · Evening: 4:00–7:00pm" },
      { date: "Sat 17th",           activity: "General Waiting",  time: "6:00am – 6:00pm" },
    ],
  },
  {
    month: "November", abbr: "NOV", theme: "Shiloh Month",
    sub: "Going to God with a Reliable Heart",
    color: "from-[#04164B] to-[#0a2a6e]",
    events: [
      { date: "Sun 1st",             activity: "Accountability",     time: "Morning: 4:30–5:30am · Evening: 4:00–7:00pm" },
      { date: "Fri 13th – Sun 15th", activity: "Shiloh Convention", time: "Morning: 4:30–5:30am · Evening: 4:00–7:00pm" },
      { date: "Sat 21st",            activity: "General Waiting",   time: "6:00am – 6:00pm" },
    ],
  },
  {
    month: "December", abbr: "DEC", theme: "National Convention",
    sub: "Crowning the Year in Faith",
    color: "from-[#04164B] to-[#0a2a6e]",
    events: [
      { date: "Tues 1st",                      activity: "Accountability",      time: "Morning: 4:30–5:30am · Evening: 4:00–7:00pm" },
      { date: "Fri 4th – Sun 6th",             activity: "National Convention", time: "10:00am – 12:00 noon" },
      { date: "Fri 18th – 20th",               activity: "Youth Camp Meeting",  time: "—" },
      { date: "Sat 19th",                      activity: "General Waiting",     time: "6:00am – 6:00pm" },
      { date: "Tues 29th – Thurs 31st",        activity: "Crusade",             time: "Refer to notes" },
      { date: "Thurs 31st – Fri 1st Jan 2027", activity: "Night of Olive",      time: "6:30–9:30pm · 10:30pm–1:00am" },
    ],
  },
];

const NOTES = [
  "Every month one Saturday/Sunday shall be devoted for a youth service.",
  "Every month a day shall be set aside (preferably Saturday/Sunday) for a full service for the children. Activities shall include: Bible quiz, examination, book fair, film show, talent exhibition, orientation and training in conducting workshop/crusade/rally etc. The Children's Day shall be held at the Local, Zonal, District, and Regional levels.",
  "Every month at the local level one week must be devoted for evangelism and climaxed with a crusade/rally. (Meeting time to be adopted to suit the local assembly.)",
  "Family Ministry: Each Assembly/Fellowship shall adapt a day in the month for their meetings.",
  "Mid-Year Convention: If there will be camping, the programme starts from Friday 9:00pm – Sunday 10:00am. If no camping, Friday 4:00pm – 10:00pm.",
  "Business Club/Intellectual Convention: If camping, Friday 6:00pm – Sunday 10:00am. If daily basis, 4:00pm – 10:00pm.",
  "End of year crusade must end 31st December at 9:00pm. The all-night starts from 10:00pm – 2:00am at the crusade grounds. Each assembly must adapt a place to suit both the crusade and the all-night.",
];

/* ══════════════════════════════════════════════════════
   TABS
══════════════════════════════════════════════════════ */
const TABS = [
  { id: "calendar", label: "2026 Calendar",  Icon: CalendarDays },
  { id: "focus",    label: "Vision & Focus", Icon: Target },
  { id: "notes",    label: "Notes",          Icon: FileText },
];

/* ══════════════════════════════════════════════════════
   MONTH CARD — compact row that expands
══════════════════════════════════════════════════════ */
const MonthCard = ({ data, index }) => {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden
                    hover:border-gray-200 hover:shadow-md transition-all duration-200">

      {/* ── Header row ── */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className="w-full text-left flex items-center gap-3 px-4 py-3.5
                   focus:outline-none focus-visible:ring-2 focus-visible:ring-[#04164B]/50
                   focus-visible:ring-inset"
      >
        {/* Month badge */}
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${data.color}
                         flex flex-col items-center justify-center select-none`}>
          <span className="text-[11px] font-extrabold text-white leading-none">{num}</span>
          <span className="text-[8px] font-bold tracking-widest uppercase text-white/60 mt-0.5">
            {data.abbr}
          </span>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-sm font-extrabold text-[#04164B]">{data.month}</span>
            <span className="text-xs font-semibold text-red-600 leading-snug truncate">
              {data.theme}
            </span>
          </div>
          <p className="text-[11px] text-gray-400 italic mt-0.5 truncate">{data.sub}</p>
        </div>

        {/* Right meta */}
        <div className="flex-shrink-0 flex items-center gap-2">
          <span className="hidden sm:inline-flex items-center bg-[#04164B]/[.06]
                           text-[#04164B] text-[10px] font-bold rounded-full
                           px-2.5 py-0.5 whitespace-nowrap">
            {data.events.length} {data.events.length === 1 ? "event" : "events"}
          </span>
          <div className={`w-6 h-6 rounded-full flex items-center justify-center
                           ${open ? "bg-[#04164B]" : "bg-gray-100"}
                           transition-colors duration-200 flex-shrink-0`}>
            <ChevronDown
              size={13}
              className={`transition-transform duration-300
                         ${open ? "rotate-180 text-white" : "text-gray-400"}`}
            />
          </div>
        </div>
      </button>

      {/* ── Expanded table ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">
              <div className="rounded-xl overflow-hidden border border-gray-100">
                {/* Col headers */}
                <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_minmax(0,1.3fr)]
                                bg-[#04164B] px-4 py-2.5 gap-2">
                  {["Date", "Activity", "Time"].map(h => (
                    <span key={h}
                      className="text-[9px] font-bold tracking-widest uppercase text-white/50">
                      {h}
                    </span>
                  ))}
                </div>
                {/* Rows */}
                {data.events.map((ev, i) => (
                  <div key={i}
                    className={`grid grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)_minmax(0,1.3fr)]
                                gap-2 px-4 py-3 items-start border-t border-gray-100
                                ${i % 2 === 0 ? "bg-gray-50/70" : "bg-white"}`}>
                    <p className="text-xs font-semibold text-[#04164B] leading-snug">{ev.date}</p>
                    <p className="text-xs font-medium text-gray-800 leading-snug">{ev.activity}</p>
                    <p className="text-xs text-gray-500 leading-snug">{ev.time || "—"}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════ */
const NewsUpdates = () => {
  const [activeTab, setActiveTab] = useState("calendar");

  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden text-gray-800">

        {/* ══ HERO ══ */}
        <section className="bg-[#04164B] text-white pt-16 pb-0 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            {/* year pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10
                            rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-bold tracking-widest uppercase text-white/60">
                2026 Ministry Year
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
              News &amp; Updates
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Official announcements, programmes, and ministry updates
            </p>

            {/* ── Tabs — sit on the hero bottom edge ── */}
            <div className="flex items-center justify-center gap-1 sm:gap-2
                            bg-white/[.08] backdrop-blur-sm border border-white/10
                            rounded-2xl p-1.5 mx-auto w-fit">
              {TABS.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold
                              tracking-wide transition-all duration-200 whitespace-nowrap
                              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
                              ${activeTab === id
                                ? "bg-white text-[#04164B] shadow-sm"
                                : "text-white/60 hover:text-white hover:bg-white/10"}`}
                >
                  <Icon size={13} aria-hidden="true" />
                  <span className="hidden sm:inline">{label}</span>
                  <span className="sm:hidden">
                    {id === "calendar" ? "Calendar" : id === "focus" ? "Focus" : "Notes"}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* decorative bottom fade */}
          <div className="h-8 bg-gradient-to-b from-[#04164B] to-transparent mt-4" />
        </section>

        {/* ══ TAB CONTENT ══ */}
        <section className="px-4 sm:px-6 md:px-14 py-10 max-w-5xl mx-auto min-h-[60vh]">
          <AnimatePresence mode="wait">

            {/* ─── CALENDAR TAB ─── */}
            {activeTab === "calendar" && (
              <motion.div
                key="calendar"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                {/* section label */}
                <div className="flex items-center gap-3 mb-5">
                  <CalendarDays size={16} className="text-red-600 flex-shrink-0" />
                  <h2 className="text-sm font-extrabold text-[#04164B] uppercase tracking-widest">
                    Monthly Programme
                  </h2>
                  <div className="flex-1 h-px bg-gray-100" />
                  <span className="text-[11px] text-gray-400 hidden sm:block">
                    Tap any month to expand
                  </span>
                </div>

                <div className="space-y-2.5">
                  {CALENDAR.map((month, i) => (
                    <MonthCard key={month.month} data={month} index={i} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ─── VISION & FOCUS TAB ─── */}
            {activeTab === "focus" && (
              <motion.div
                key="focus"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="max-w-2xl mx-auto"
              >
                {/* Vision */}
                <div className="bg-[#04164B] rounded-2xl px-8 py-8 mb-5">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen size={15} className="text-red-400" aria-hidden="true" />
                    <p className="text-[10px] font-bold tracking-widest uppercase text-white/50">
                      Vision of the Ministry
                    </p>
                  </div>
                  <p className="text-white font-medium text-xl md:text-2xl leading-snug">
                    Gather my people, Teach them, Build an Army and Present a Quality Church unto Me.
                  </p>
                </div>

                {/* Focus scripture */}
                <div className="bg-white border border-gray-100 rounded-2xl px-8 py-7 shadow-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Target size={14} className="text-red-600" aria-hidden="true" />
                    <p className="text-[10px] font-bold tracking-widest uppercase text-red-600">
                      Focus of the Year
                    </p>
                  </div>
                  <p className="text-xs font-extrabold text-[#04164B] mb-4 mt-1">2 Timothy 2:2</p>
                  <blockquote className="border-l-4 border-red-600 pl-5 italic text-gray-700
                                         text-base leading-relaxed">
                    "Take the teachings that you have heard me proclaim in the presence of many
                    witnesses, and entrust them to reliable people who will be able to teach
                    others also."
                  </blockquote>
                </div>

                {/* Annual theme banner */}
                <div className="mt-5 bg-red-600 rounded-2xl px-7 py-5 flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/20
                                  flex items-center justify-center">
                    <Target size={18} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-white/60 mb-0.5">
                      Annual Theme
                    </p>
                    <p className="text-white font-medium text-base leading-tight">
                      Reliability — A Reliable Church for a Reliable God
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ─── NOTES TAB ─── */}
            {activeTab === "notes" && (
              <motion.div
                key="notes"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="max-w-2xl mx-auto"
              >
                <div className="flex items-center gap-3 mb-5">
                  <FileText size={16} className="text-red-600 flex-shrink-0" />
                  <h2 className="text-sm font-extrabold text-[#04164B] uppercase tracking-widest">
                    Important Notes
                  </h2>
                  <div className="flex-1 h-px bg-gray-100" />
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                  {NOTES.map((note, i) => (
                    <div key={i}
                      className={`flex gap-4 px-6 py-5 border-b border-gray-100 last:border-b-0
                                  hover:bg-gray-50 transition-colors duration-150`}>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#04164B]
                                      flex items-center justify-center mt-0.5">
                        <span className="text-[10px] font-extrabold text-white">{i + 1}</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{note}</p>
                    </div>
                  ))}
                </div>

                {/* Ministry contact */}
                <p className="text-center text-xs text-gray-400 mt-7 leading-relaxed">
                  Morning Dew Ministries · P.O. Box AN 12215, Accra-North, Ghana · Tel: 0302-314 529
                </p>
              </motion.div>
            )}

          </AnimatePresence>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default NewsUpdates;
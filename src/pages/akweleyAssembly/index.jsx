import React from "react";
import { Link } from "react-router-dom";
import discipleship from "../../assets/images/discipleship.jpg"
import prayer from "../../assets/images/prayer.jpg"
import training from "../../assets/images/training.jpg"
import { motion } from "framer-motion";





const AkweleyAssembly = () => {
  const events = [
    {
      title: "Annual Worship & Word Conference",
      date: "December 8–10, 2025",
      location: "Morning Dew HQ, Mataheko, Accra",
      image: prayer,
      description:
        "Join us for three powerful days of worship, impartation, and the Word. Experience revival and renewal in the presence of God.",
    },
    {
      title: "Youth Empowerment Summit",
      date: "November 16, 2025",
      location: "Kasoa Assembly Hall",
      image: discipleship,
      description:
        "A dynamic one-day program equipping youth with tools for leadership, spiritual growth, and personal development.",
    },
    {
      title: "Christmas Outreach",
      date: "December 23, 2025",
      location: "Dansoman & Bortianor Communities",
      image: training,
      description:
        "Join the I Care Ministry as we reach out with love — food distribution, prayers, and sharing the message of hope in Christ.",
    },
  ];


  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-[#04164B] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Akweley Assembly
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              A warm, community-focused congregation — worship, grow, and serve
              together. Join us for Sunday services, midweek gatherings, and
              outreach.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                to="/connect"
                className="inline-block bg-white text-red-600 font-semibold px-5 py-3 rounded-lg shadow"
              >
                Join Us This Sunday
              </Link>
              <a
                href="#events"
                className="inline-block border border-white/50 text-white px-5 py-3 rounded-lg"
              >
                Upcoming Events
              </a>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white/10 p-6">
              {/* use the same hero image as the landing page; update path if your landing page uses a different filename */}
              <img
                src="/images/landing-hero.jpg"
                alt="Akweley Assembly"
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold">Welcome</h3>
                <p className="mt-2 text-sm">
                  Contemporary music, practical teaching, and a friendly
                  atmosphere for the whole family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h4 className="font-bold">Service Times</h4>
            <p className="mt-2 text-sm">Sundays — 9:00 AM & 11:00 AM</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h4 className="font-bold">Location</h4>
            <p className="mt-2 text-sm">123 Community Rd, Akweley</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h4 className="font-bold">Children & Youth</h4>
            <p className="mt-2 text-sm">Programs for all ages during services</p>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="relative py-24 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#04164B] mb-4">
            Upcoming Events
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {events.map((event, i) => {
            const variant = i % 3; // 0: top-image (default), 1: accent top, 2: left-image
            const accentColors = ["", "border-red-100", "border-teal-50"];
            return (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer border ${accentColors[variant]} relative`}
              >
                {/* numeric badge */}
                <div className="absolute top-3 left-3 bg-white text-[#04164B] font-bold px-3 py-1 rounded-full shadow-sm text-sm z-10">
                  {i + 1}
                </div>

                {variant === 2 ? (
                  // left-image layout
                  <div className="flex flex-col h-full md:flex-row">
                    <div className="md:w-1/2 relative overflow-hidden h-56 md:h-auto">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {event.date}
                      </div>
                    </div>

                    <div className="p-6 md:w-1/2 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-[#04164B] mb-2 group-hover:text-red-600 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          📍 {event.location}
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                          {event.description}
                        </p>
                      </div>
                      <button className="mt-4 bg-[#04164B] text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-red-600 hover:text-white transition-all self-start">
                        View Details
                      </button>
                    </div>
                  </div>
                ) : (
                  // top-image (variant 0) or accent-top (variant 1)
                  <>
                    <div className={`relative overflow-hidden h-56 ${variant === 1 ? "h-44" : "h-56"}`}>
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {event.date}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between h-[250px]">
                      <div>

                        <h3 className={`text-xl font-bold mb-2 transition-colors ${variant === 1 ? "text-[#04164B]" : "text-[#04164B] group-hover:text-red-600"}`}>
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-3">
                          📍 {event.location}
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                          {event.description}
                        </p>
                      </div>
                      <button className="mt-4 bg-[#04164B] text-white px-4 py-2 text-sm font-medium rounded-full hover:bg-red-600 hover:text-white transition-all self-start">
                        View Details
                      </button>
                    </div>
                  </>
                )}
              </motion.article>
            );
          })}
        </div>
      </section>
      {/* Footer CTA */}
      <section className="py-12 px-6 bg-teal-800 text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Visit Akweley Assembly</h3>
            <p className="mt-2 text-sm">We'd love to meet you — come as you are.</p>
          </div>
          <div>
            <a
              href="/plan-visit"
              className="bg-white text-teal-800 px-5 py-3 rounded-lg font-semibold"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AkweleyAssembly;
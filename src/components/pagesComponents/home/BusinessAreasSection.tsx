"use client";

import { motion } from "framer-motion";

export function BusinessAreasSection() {
  const businessAreas = [
    { title: "History", icon: "📚" },
    { title: "Business & Products", icon: "🏭" },
    { title: "Capacity & Facilities", icon: "⚙️" },
    { title: "Global Presence & Awards", icon: "🌍" },
    { title: "Naturub Group", icon: "🏢" },
  ];

  return (
    <section>
      <h2 className="mb-12 text-center text-3xl font-bold text-blue-900">
        Our Business Areas
      </h2>
      <motion.div
        className="grid grid-cols-2 gap-8 md:grid-cols-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {businessAreas.map((item, index) => (
          <motion.div
            key={item.title + index}
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-3xl text-white shadow-lg">
              {item.icon}
            </div>
            <h3 className="text-sm font-medium text-blue-900">{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

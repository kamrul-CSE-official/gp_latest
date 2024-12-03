"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export function ManagementSection() {
  const managers = [
    {
      name: "Tissa Elapperuma",
      role: "Founder/Chairman/Managing Director",
      description:
        "A visionary leader with extensive experience in the apparel industry, leading Naturub Group to become a global leader in apparel accessories.",
      img: "/assets/founder.jpg",
    },
    {
      name: "Yasith Elapperuma",
      role: "COO",
      description:
        "Leading operations with innovative strategies and deep industry knowledge, driving sustainable growth and technological advancement.",
      img: "/assets/coo.jpg",
    },
  ];

  return (
    <section>
      <h2 className="mb-12 text-center text-3xl font-bold text-blue-900">
        Our Management
      </h2>
      <motion.div
        className="grid gap-8 md:grid-cols-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {managers.map((manager, index) => (
          <motion.div
            key={manager.name + index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={manager.img}
                    alt={manager.name}
                    width={600}
                    height={400}
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{manager.name}</h3>
                    <p className="text-sm text-blue-200">{manager.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{manager.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

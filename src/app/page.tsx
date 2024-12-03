"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Title } from "@/components/shared/title";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.h1
          className="mb-12 text-center text-4xl font-bold text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title
            title="Welcome to Our NATURAB"
            className="mb-12"
            titleSize="text-md"
          />
        </motion.h1>

        {/* Vision Mission Values Section */}
        <motion.div
          className="mb-24 grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105">
            <CardContent className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <h2 className="mb-4 text-2xl font-bold">VISION</h2>
              <p className="text-blue-100 py-6">
                To be the preferred apparel accessories supplier to
                world-renowned branded apparel manufacturers.
              </p>
            </CardContent>
          </Card>

          <Card className="flex items-center justify-center p-6 shadow-lg transition-transform hover:scale-105">
            <Image
              src="/assets/logo.png"
              alt="Naturub Logo Large"
              width={300}
              height={300}
              className="h-auto w-48"
            />
          </Card>

          <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105">
            <CardContent className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <h2 className="mb-4 text-2xl font-bold">MISSION</h2>
              <p className="text-blue-100">
                Striving to manufacture products of high quality and consistency
                which are marketed globally and locally at competitive prices
                with the assurance of timely deliveries to customer&apos;s
                doorstep.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Business Areas */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {[
              { title: "History", icon: "📚" },
              { title: "Business & Products", icon: "🏭" },
              { title: "Capacity & Facilities", icon: "⚙️" },
              { title: "Global Presence & Awards", icon: "🌍" },
              { title: "Naturub Group", icon: "🏢" },
            ].map((item, index) => (
              <motion.div
                key={item.title + index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-3xl text-white shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-sm font-medium text-blue-900">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Management Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="mb-12 text-center text-3xl font-bold text-blue-900">
            Our Management
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
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
            ].map((manager, index) => (
              <motion.div
                key={manager.name + index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image
                        src={`${manager.img}`}
                        alt={`${manager.name}`}
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}

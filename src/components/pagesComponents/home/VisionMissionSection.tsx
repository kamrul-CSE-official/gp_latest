"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export function VisionMissionSection() {
  return (
    <motion.section
      className="grid gap-8 md:grid-cols-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105">
        <CardContent className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white h-full flex flex-col justify-between">
          <h2 className="mb-4 text-2xl font-bold">VISION</h2>
          <p className="text-blue-100">
            To be the preferred apparel accessories supplier to world-renowned
            branded apparel manufacturers.
          </p>
        </CardContent>
      </Card>

      <Card className="flex items-center justify-center p-6 shadow-lg transition-transform hover:scale-105">
        <Image
          src="/assets/logo.png"
          alt="Naturub Logo"
          width={300}
          height={300}
          className="h-auto w-48"
        />
      </Card>

      <Card className="overflow-hidden shadow-lg transition-transform hover:scale-105">
        <CardContent className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white h-full flex flex-col justify-between">
          <h2 className="mb-4 text-2xl font-bold">MISSION</h2>
          <p className="text-blue-100">
            Striving to manufacture products of high quality and consistency
            which are marketed globally and locally at competitive prices with
            the assurance of timely deliveries to customer&apos;s doorstep.
          </p>
        </CardContent>
      </Card>
    </motion.section>
  );
}

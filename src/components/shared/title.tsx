"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  gradientColors?: string[]; // Gradient colors array
  titleSize?: string; // Tailwind class for title size
  subtitleSize?: string; // Tailwind class for subtitle size
  animationDelay?: number; // Animation delay per word
  animationDuration?: number; // Animation duration for each word
}

export function Title({
  title,
  subtitle,
  className,
  gradientColors = ["from-primary", "via-pink-100", "to-secondary"],
  titleSize = "text-4xl sm:text-5xl md:text-6xl",
  subtitleSize = "text-base sm:text-lg md:text-xl",
  animationDelay = 0.1,
  animationDuration = 0.5,
}: TitleProps) {
  //   const titleWords = title.split(" ");

  return (
    <div className={cn("text-center", className)}>
      {/* Gradient Background Wrapper */}
      <div className="relative mb-4 inline-block">
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={cn(
              "h-16 w-full bg-gradient-to-r opacity-75 blur-xl",
              ...gradientColors
            )}
          ></div>
        </div>

        {/* Title Animation */}
        <h1
          className={cn(
            "relative font-extrabold tracking-tight text-gray-900",
            titleSize
          )}
        >
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: animationDuration,
              delay: 1 * animationDelay,
            }}
          >
            {title}
          </motion.span>
        </h1>
      </div>

      {/* Subtitle Animation */}
      {subtitle && (
        <motion.p
          className={cn(
            "mt-3 mx-auto max-w-md text-gray-500 md:mt-5 md:max-w-3xl",
            subtitleSize
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: animationDuration,
            delay: title.length * animationDelay,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

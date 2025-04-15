'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ProfileImage() {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <motion.div
        className="relative w-48 h-48 md:w-56 md:h-56"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="w-full h-full overflow-hidden bg-white/10 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: isHovered ? 1.05 : 1,
            boxShadow: isHovered
              ? "0 25px 65px -15px rgba(255,255,255,0.15)"
              : "0 20px 60px -15px rgba(255,255,255,0.1)"
          }}
          transition={{
            duration: 0.4,
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
        >
          {!imgError ? (
            <Image
              src="/images/profile.png"
              alt="Profile Image"
              fill
              style={{ objectFit: "cover" }}
              priority
              onError={() => setImgError(true)}
              className="rounded-lg"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/30 text-xl bg-white/5">
              Photo
            </div>
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 mt-6"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2 whitespace-nowrap py-1 px-1">
          <p className="text-white font-mono text-sm">Yo whats up? 👋</p>
        </div>
      </motion.div>
    </div>
  );
}
'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ProfileImage() {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <div className="flex justify-center">
        <motion.div
          className="relative w-48 h-48 md:w-52 md:h-52 aspect-square"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="w-full h-full overflow-hidden bg-white/10 rounded-lg shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: isHovered ? 1.02 : 1,
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
      </div>
    </div>
  );
}
'use client';

import { motion } from "framer-motion";
import ProfileImage from "./profile-image";

export default function ProfileSection() {
  const profileImageAnimation = {
    hidden: { opacity: 0, x: -20, y: 15, rotate: -15 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 125,
        damping: 15,
        duration: 0.5
      }
    }
  };

  const wrapperAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.1
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={wrapperAnimation}
      className="flex justify-center md:justify-start"
    >
      <div className="relative rounded-lg overflow-hidden p-4 bg-white/[0.03] backdrop-blur-sm shadow-xl shadow-black/5">
        <motion.div
          initial="hidden"
          animate="show"
          variants={profileImageAnimation}
          className="flex justify-center"
        >
          <ProfileImage />
        </motion.div>
      </div>
    </motion.div>
  );
}
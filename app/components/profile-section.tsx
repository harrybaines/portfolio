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

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={profileImageAnimation}
      className="flex justify-center md:justify-start"
    >
      <ProfileImage />
    </motion.div>
  );
}
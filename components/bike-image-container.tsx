"use client"

import BikeImage from "@/public/assets/bike.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BikeImageContainer() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image src={BikeImage} alt="Me on my bike" className="rounded-lg shadow-md" />
    </motion.div>
  )
}
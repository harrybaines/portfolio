'use client';

import { motion } from "framer-motion";
import Image from "next/image";

interface PhotoData {
  src: string;
  alt: string;
  caption: string;
  initialRotation: number;
  hoverRotation: number;
}

interface PhotoGalleryProps {
  photos: PhotoData[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <div className="relative h-[320px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-3 w-full max-w-4xl mx-auto px-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              className="relative h-[280px] group cursor-pointer"
              initial={{ rotate: photo.initialRotation, y: 20, opacity: 0 }}
              animate={{ rotate: photo.initialRotation, y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                rotate: photo.hoverRotation,
                y: -15,
                zIndex: 10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="absolute inset-0 rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 z-10"></div>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20 bg-black/50">
                  <p className="text-white/90 text-sm font-mono">{photo.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
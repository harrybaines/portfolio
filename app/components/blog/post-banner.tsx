'use client'

interface PostBannerProps {
  imageUrl?: string;
  title: string;
}

export default function PostBanner({ imageUrl, title }: PostBannerProps) {
  // Don't render anything if no image is provided
  if (!imageUrl) return null;

  return (
    <div className="w-full h-[30vh] md:h-[40vh] relative overflow-hidden">
      <div className="absolute inset-0 bg-stone-900/30 z-10"></div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
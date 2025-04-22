import Image from "next/image";

export default function FeaturedProjectCard({ title, description, url, imagePath }: { title: string; description: string; url: string; imagePath: string }) {
  const hasImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(imagePath);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg overflow-hidden border border-[#333333] hover:border-[#64FFDA]/30 transition-all duration-200 group bg-[#1F2020]"
    >
      <div className="relative h-48 w-full overflow-hidden bg-[#252626]">
        {hasImage ? (
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 350px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#242525]">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#2A2B2B] border border-[#333333] group-hover:border-[#64FFDA]/20 transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#424242]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-[#64FFDA] font-mono text-base mb-2">{title}</h3>
        <p className="text-[#B8B8B8] text-sm font-sans">{description}</p>
      </div>
    </a>
  );
};
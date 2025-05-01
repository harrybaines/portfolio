import { formatDateFriendly } from 'app/blog/utils';
import { Calendar, Clock, Tag as TagIcon } from 'lucide-react';
import Image from 'next/image';

interface PostHeaderProps {
  title: string;
  description: string;
  publishedAt: string;
  readingTime?: number;
  tags?: any;
  author?: {
    name: string;
    role: string;
  };
}

export default function PostHeader({
  title,
  description,
  publishedAt,
  readingTime = 5,
  tags,
  author = { name: "Harry Baines", role: "Software Engineer" }
}: PostHeaderProps) {
  return (
    <div className="p-8 md:p-12 border-b border-zinc-800">
      <div className="flex flex-wrap gap-2 mb-4">
        {Array.isArray(tags)
          ? tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-zinc-800 text-amber-500 border border-zinc-700"
            >
              <TagIcon size={12} />
              {tag}
            </span>
          ))
          : tags && typeof tags === 'string'
            ? tags.split(',').map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-zinc-800 text-amber-500 border border-zinc-700"
              >
                <TagIcon size={12} />
                {tag.trim()}
              </span>
            ))
            : null}
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-sans">
        {title}
      </h1>

      <p className="text-lg text-zinc-400 mb-8 font-sans">
        {description}
      </p>

      <div className="flex items-center justify-between flex-wrap gap-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/images/brand.png"
              alt="Author profile"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-medium text-zinc-300 font-sans">{author.name}</div>
            <div className="text-sm text-zinc-500 font-sans">{author.role}</div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-zinc-500 font-sans">
          <div className="flex items-center gap-1">
            <Calendar size={14} className="text-amber-500" />
            <span>{formatDateFriendly(publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-amber-500" />
            <span>{readingTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}
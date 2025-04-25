import { CustomMDX } from '@/app/components/mdx';

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className="p-8 md:px-12 prose prose-stone max-w-none
      prose-headings:text-stone-900 prose-headings:font-medium
      prose-p:text-stone-700 prose-a:text-amber-700
      prose-a:no-underline hover:prose-a:text-amber-800
      prose-blockquote:border-amber-500 prose-strong:text-stone-800">
      <CustomMDX source={content} />
    </div>
  );
}
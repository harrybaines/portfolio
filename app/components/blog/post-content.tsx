import { CustomMDX } from '@/app/components/mdx';

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose
      prose-headings:font-medium
      prose-a:underline hover:prose-a:text-blue-600
      prose-blockquote:border-l-neutral-300 prose-blockquote:text-neutral-500
      prose-strong:font-medium prose-code:text-neutral-800
      prose-pre:bg-neutral-50">
      <CustomMDX source={content} />
    </div>
  );
}
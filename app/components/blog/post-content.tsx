import { CustomMDX } from '@/app/components/mdx';

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose max-w-none
      prose-headings:font-medium prose-headings:text-black
      prose-p:text-gray-700 prose-a:text-gray-900
      prose-a:underline hover:prose-a:text-gray-600
      prose-blockquote:border-l-gray-300 prose-blockquote:text-gray-700
      prose-strong:text-gray-900 prose-code:text-gray-800
      prose-pre:bg-gray-50 prose-li:text-gray-700">
      <CustomMDX source={content} />
    </div>
  );
}
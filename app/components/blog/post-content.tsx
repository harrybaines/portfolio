import { CustomMDX } from '@/app/components/mdx';

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className="prose">
      <CustomMDX source={content} />
    </div>
  );
}
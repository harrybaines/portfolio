interface TextParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export default function TextParagraph({ children, className = "" }: TextParagraphProps) {
  return (
    <p className={`font-sans text-primary leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
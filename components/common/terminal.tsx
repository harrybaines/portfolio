import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";

interface QuickFact {
  category: string;
  items: string[];
  color: string;
}

interface TerminalDemoProps {
  facts: QuickFact[];
}

export function TerminalDemo({ facts }: TerminalDemoProps) {
  return (
    <Terminal>
      <TypingAnimation>&gt; harry.getBio()</TypingAnimation>

      {facts.map((fact, index) => (
        <AnimatedSpan
          key={fact.category}
          delay={1000 + (index * 1500)}
          className={fact.color}
        >
          <span>{fact.category}</span>
          {fact.items.map((item, i) => (
            <span key={i} className="pl-2">- {item}</span>
          ))}
        </AnimatedSpan>
      ))}
    </Terminal>
  );
}

export default TerminalDemo;

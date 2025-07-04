"use client";

import { Bot } from "lucide-react";
import { useEffect, useState } from "react";

interface ChatUIProps {
  userMessage: string;
  aiResponse: string;
  userImage?: string;
}

export default function ChatUI({ userMessage, aiResponse, userImage }: ChatUIProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Split the response into words for word-by-word animation
  const words = aiResponse.split(/(\s+)/);

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const typingInterval = setTimeout(() => {
        setDisplayedText(prev => prev + words[currentWordIndex]);
        setCurrentWordIndex(prev => prev + 1);
      }, 40); // Increased speed of typing

      return () => clearTimeout(typingInterval);
    } else {
      setIsTyping(false);
    }
  }, [currentWordIndex, words]);

  // Function to render text with a cursor at the end of the typed text
  const renderTypedText = () => {
    const paragraphs = displayedText.split('\n\n');
    return paragraphs.map((paragraph, i) => (
      <p key={i} className="mb-4">
        {paragraph.includes('•') ? (
          paragraph.split('\n').map((line, j) => (
            <span key={j} className="block">
              {line}
              {isTyping && i === paragraphs.length - 1 && j === paragraph.split('\n').length - 1 ? (
                <span className="inline-block w-2 h-5 ml-1 bg-gray-400"></span>
              ) : null}
            </span>
          ))
        ) : (
          <>
            {paragraph}
            {isTyping && i === paragraphs.length - 1 ? (
              <span className="inline-block w-2 h-5 ml-1 bg-gray-400"></span>
            ) : null}
          </>
        )}
      </p>
    ));
  };

  return (
    <div className="w-full max-w-7xl mt-3">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4 mt-6">
          <div className="w-8 h-8 rounded-full bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 flex items-center justify-center shadow-sm">
            <Bot size={16} className="text-neutral-300" />
          </div>
        </div>
        <div className="flex-1">
          <p className="text-gray-800 prose prose-lg max-w-none text-lg">
            {renderTypedText()}
          </p>
        </div>
      </div>
    </div>
  );
}
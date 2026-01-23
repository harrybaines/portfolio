"use client";

import { motion } from "framer-motion";
import ChatUI from "../components/ChatUI";
import BackButton from "../components/back-button";

export default function AboutPage() {
  const userMessage = "Tell me more about Harry.";
  const aiResponse = "Harry is a UK-based software engineer with 6 years of experience in web applications, APIs, and developer tools. He created archtms, an architecture practice management system that was later acquired by an architecture firm.\n\nHe's comfortable with full-stack development but particularly enjoys backend work. His tech stack includes TypeScript, Go, Python, and frameworks like PERN, Django, and Next.js. He works with both SQL and NoSQL databases and is currently learning Rust.\n\nHarry's work history includes two years part-time at Cassidy and Ashton Architects during university (building archtms v1), two years as a Software Engineer/Data Scientist at Yordas Digital, and then two more years full-time at Cassidy and Ashton developing archtms v2. He has an MSc in Data Science and a BSc in Computer Science from Lancaster University.\n\nFor his development setup, Harry uses Neovim and Warp terminal, which fits well with his preference for keyboard-centric workflows.\n\nOutside of work, Harry is interested in Vercel's AI SDK and contributes to open-source projects. He's also a hybrid athlete, Liverpool FC fan, and chess player. He has over 6,000 GitHub contributions and a typing speed of 110 WPM. Harry is always open to new opportunities, collaborations, or just having a chat over coffee.";

  return (
    <div className="w-full min-h-screen relative">
      <div className="relative z-10 py-12">
        <div className="mx-auto">
          <BackButton href="/" label="Back home" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <ChatUI
              userMessage={userMessage}
              aiResponse={aiResponse}
              userImage="/images/me.jpeg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
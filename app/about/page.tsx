"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "../components/ContentWrapper";
import BackButton from "../components/back-button";

export default function AboutMe() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen w-full text-neutral-900 dark:text-neutral-100 overflow-hidden">
      <div className="relative z-10 min-h-screen pt-12 md:pt-10 pb-10 flex flex-col">
        <div className="mx-auto w-full flex-1 flex flex-col">
          <ContentWrapper>
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <BackButton href="/" />
            </motion.div>

            <div className="py-12 md:py-16">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-2xl mx-auto"
              >
                <motion.div variants={fadeIn} className="mb-12 text-center">
                  <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
                    About Me
                  </h1>
                </motion.div>

                <motion.div variants={fadeIn} className="space-y-6 text-lg">
                  <h3 className="font-bold my-3 text-neutral-300">
                    ABOUT
                  </h3>
                  <p>
                    I've always been fascinated by technology, in particular computer software. In my eyes, code is the mechanism one can use to turn ideas into reality.
                    I love tinkering, hacking around, and building things that provide real value to people. My focus is on writing clean code and building scalable and maintainable software.
                  </p>
                  <p>
                    During the summer of my second year at university, I developed an MVP for a <Link
                      href="https://www.archtms.app"
                      className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors font-geist-sans text-lg underline underline-offset-4 decoration-1"
                    >
                      full-stack time management platform
                    </Link> for a leading architecture firm. Since then, I've added project management features including project fee dashboards, cashflow forecasting and staff performance records. Today, the software is used daily by 60+ staff members.
                  </p>
                  <p>
                    When I'm not writing code I enjoy hybrid training, watching LFC, and working on side projects.
                    I'm available for new opportunities - if you need a full-stack dev, ping me an email and we can build something great!
                  </p>

                  <motion.div variants={fadeIn} className="mb-12">
                    <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-black filter grayscale brightness-80">
                      <Image
                        src="/images/desk.png"
                        alt="My workspace setup"
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                  </motion.div>

                  <h3 className="font-bold my-3 text-neutral-300">
                    TECH STACK
                  </h3>
                  <p>Nowadays I mainly code in <strong>TypeScript</strong>, <strong>Python</strong>, <strong>SQL</strong>, and <strong>Golang</strong>. I tend to work across the full stack using tools like <strong>React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>FastAPI</strong> or <strong>Hono</strong>, and I enjoy using both REST and tRPC-based architectures. My go-to database would be <strong>PostgreSQL</strong> (with <strong>Prisma</strong> or <strong>SQLAlchemy</strong>) and <strong>Redis</strong> for caching.</p>

                  <p>On the DevOps side, I’ve deployed projects to <strong>Fly.io</strong>, <strong>AWS</strong>, <strong>Vercel</strong>, and <strong>Heroku</strong>, and use <strong>GitHub Actions</strong> to automate CI/CD workflows. I love exploring AI integrations using the <strong>OpenAI API</strong>, <strong>e2b</strong>, and <strong>Vercel AI SDK</strong> to automate tasks and enhance productivity. I've also been exploring <strong>Inngest</strong> for task orchetration and <strong>Tambo</strong> for building dynamic software.</p>

                  <p>I always test the software I build. I mainly use <strong>Jest</strong> and <strong>pytest</strong>, and I often rely on <strong>Celery</strong> and <strong>RabbitMQ</strong> for background job processing. I work well in agile environments using <strong>Scrum</strong>, and I’ve mentored junior devs, led code reviews, and contributed to open source.</p>

                  <h3 className="font-bold my-3 text-neutral-300">
                    SIDE PROJECTS
                  </h3>
                  <p>
                    Given the recent developments in AI it's never been easier to develop software. 'Ship fast' is the phrase used nowadays. However, the amount of scrappy, messy and unorganised code is growing. AI is not a panacea - it's great for basic boilerplate, but not for building the entire solution. In addition, many projects will make use of a similar base. That's why I'm building brewkit, an opinionated starter kit with a strong, well-written foundation for developers to build apps with.
                  </p>
                  <p>
                    I enjoy posting my learnings on this site and I love learning new technologies. I'm currently learning how to build full-stack AI chat apps and advanced programming with Go.
                    Feel free to check out my <Link
                      href="https://www.github.com/harrybaines"
                      className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors font-geist-sans text-lg underline underline-offset-4 decoration-1"
                    >
                      GitHub
                    </Link> for more details.
                  </p>

                  <h3 className="font-bold my-3 text-neutral-300">
                    CONNECT
                  </h3>
                  <p>
                    Ping me an email if you'd like to chat. I'm always open to new project ideas!
                  </p>
                </motion.div>

                {/* Contact Link */}
                <motion.div variants={fadeIn} className="mt-12 text-center">
                  <Link
                    href="mailto:harryb0905@googlemail.com"
                    className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors font-geist-sans text-lg underline underline-offset-4 decoration-1"
                  >
                    Get in touch
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
}

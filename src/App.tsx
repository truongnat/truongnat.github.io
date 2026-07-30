import React from "react";
import { Spotlight } from "./components/Spotlight";
import { Meteors } from "./components/Meteors";
import { BentoGrid, BentoGridItem } from "./components/BentoGrid";
import { motion } from "framer-motion";
import { Code, Terminal, Bot, Layout, Github, Mail, Linkedin } from "lucide-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-800 relative overflow-hidden">
    <Meteors number={10} />
  </div>
);

const ImageSkeleton = ({ src }: { src: string }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative group">
    <img src={src} className="object-cover w-full h-full transition duration-500 group-hover:scale-110" alt="project" />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition duration-500"></div>
  </div>
);

const items = [
  {
    title: "rnui",
    description: "A high-performance, dual-layer UI design system for React Native (iOS + Android) with headless primitives.",
    header: <Skeleton />,
    icon: <Layout className="h-4 w-4 text-cyan-500" />,
    className: "md:col-span-2",
  },
  {
    title: "simple-skills",
    description: "Minimal AI agent skills with clear workflows, flat YAML contracts, and structured artifacts.",
    header: <Skeleton />,
    icon: <Bot className="h-4 w-4 text-cyan-500" />,
    className: "md:col-span-1",
  },
  {
    title: "aix",
    description: "AI Engineering Platform. TS monorepo consolidating skills, guardrails & autonomous SDLC.",
    header: <Skeleton />,
    icon: <Terminal className="h-4 w-4 text-cyan-500" />,
    className: "md:col-span-1",
  },
  {
    title: "auraos-suite",
    description: "Native desktop utility suite for Ubuntu (GNOME/Wayland). Built with Rust + Tauri v2 + Svelte 5.",
    header: <Skeleton />,
    icon: <Code className="h-4 w-4 text-cyan-500" />,
    className: "md:col-span-2",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 w-full relative flex flex-col antialiased overflow-hidden selection:bg-cyan-500/30 text-neutral-200">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 mb-8">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-medium text-neutral-300">Open to new opportunities</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6 tracking-tight">
            Dao Quang Truong
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-neutral-400 mb-8 max-w-3xl leading-relaxed">
            Engineering <span className="text-cyan-400">Intelligent</span> Systems & <br className="hidden md:block"/>
            Cross-Platform Products.
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mb-10">
            Fullstack engineer with 6+ years of experience building TypeScript systems, native apps, and AI-assisted developer workflows.
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a href="https://github.com/truongnat" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition duration-200">
              <Github className="w-5 h-5" />
              Explore GitHub
            </a>
            <a href="https://linkedin.com/in/truongdq01" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white border border-neutral-800 font-semibold rounded-full hover:bg-neutral-800 transition duration-200">
              <Linkedin className="w-5 h-5" />
              Connect
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-2">Selected Work</h3>
            <p className="text-neutral-500">A showcase of open source projects and experiments.</p>
          </div>
          <BentoGrid className="max-w-4xl mx-auto md:mx-0">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={item.className}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </main>

      <footer className="mt-auto border-t border-neutral-900 py-12 relative z-10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-neutral-500 text-sm mb-4 md:mb-0">
            © 2026 Dao Quang Truong. Built with React & Aceternity UI.
          </p>
          <div className="flex space-x-6">
            <a href="mailto:truongdq.dev@gmail.com" className="text-neutral-500 hover:text-white transition">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/truongnat" className="text-neutral-500 hover:text-white transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/truongdq01" className="text-neutral-500 hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

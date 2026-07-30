import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Terminal, Bot, Layout, Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cn } from "./utils";

const projects = [
  {
    title: "rnui",
    description: "High-performance UI design system for React Native with headless primitives.",
    tech: ["React Native", "TypeScript"],
    color: "bg-[#ff90e8]",
    link: "https://github.com/truongnat/rnui"
  },
  {
    title: "aix",
    description: "AI Engineering Platform. TS monorepo for autonomous SDLC guardrails.",
    tech: ["AI Agents", "TypeScript"],
    color: "bg-[#ffc900]",
    link: "https://github.com/truongnat/aix"
  },
  {
    title: "simple-skills",
    description: "Minimal AI agent skills with clear workflows and flat YAML contracts.",
    tech: ["Python", "Agents"],
    color: "bg-[#23a094]",
    link: "https://github.com/truongnat/simple-skills"
  },
  {
    title: "auraos-suite",
    description: "Native desktop utility suite for Ubuntu (GNOME/Wayland).",
    tech: ["Rust", "Tauri", "Svelte 5"],
    color: "bg-[#f95a2c]",
    link: "https://github.com/truongnat/auraos-suite"
  }
];

const Marquee = ({ text }: { text: string }) => {
  return (
    <div className="relative flex overflow-x-hidden border-y-4 border-black bg-[#ffc900] py-4 whitespace-nowrap">
      <div className="animate-marquee whitespace-nowrap flex space-x-12">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black">
            {text} •
          </span>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#fbf7f3] text-black selection:bg-black selection:text-[#ffc900] font-sans">
      
      {/* Brutalist Navbar */}
      <nav className="border-b-4 border-black bg-white flex justify-between items-center p-6 lg:px-12">
        <div className="font-black text-2xl tracking-tighter uppercase">DQ.Truong</div>
        <div className="flex gap-4">
          <a href="https://github.com/truongnat" className="p-3 border-2 border-black rounded-full hover:bg-[#ff90e8] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/truongdq01" className="p-3 border-2 border-black rounded-full hover:bg-[#23a094] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-8 flex flex-col items-start gap-8">
          <div className="inline-block border-4 border-black bg-[#ff90e8] px-6 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
            <span className="font-bold text-xl uppercase tracking-widest">Fullstack & AI Engineer</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black uppercase leading-[0.9] tracking-tighter">
            I Build<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>Systems</span><br />
            That Work.
          </h1>
          
          <p className="text-xl md:text-2xl font-medium max-w-2xl mt-4 border-l-8 border-black pl-6">
            6+ years of experience engineering high-performance TypeScript applications, native cross-platform tools, and AI-assisted workflows.
          </p>

          <a href="mailto:truongdq.dev@gmail.com" 
             className="mt-8 text-2xl font-black uppercase border-4 border-black bg-[#f95a2c] text-black px-10 py-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all flex items-center gap-4">
            Let's Talk <ArrowUpRight className="w-8 h-8" />
          </a>
        </div>

        <div className="lg:col-span-4 hidden lg:flex flex-col gap-8">
          {/* Decorative Brutalist Blocks */}
          <div className="w-full aspect-square border-4 border-black bg-[#23a094] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center p-8 group overflow-hidden relative">
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==')] opacity-30"></div>
             <Bot className="w-32 h-32 text-black group-hover:scale-125 transition-transform duration-500 relative z-10" />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
               <span className="font-black text-6xl">6+</span>
            </div>
            <div className="aspect-square border-4 border-black bg-[#ffc900] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
               <Code className="w-16 h-16" />
            </div>
          </div>
        </div>

      </main>

      {/* Infinite Marquee */}
      <Marquee text="React Native • TypeScript • Rust • Python • AI Agents • Go • Node.js • Cloudflare • Tauri" />

      {/* Selected Projects */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 border-b-8 border-black pb-4 inline-block">
          The Vault
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <a 
              key={idx}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "group block border-4 border-black p-8 transition-all duration-300 relative bg-white",
                "shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-y-3 hover:translate-x-3 hover:shadow-none"
              )}
            >
              {/* Colored header strip */}
              <div className={cn("absolute top-0 left-0 right-0 h-4 border-b-4 border-black", project.color)}></div>
              
              <div className="mt-6 flex justify-between items-start">
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight">{project.title}</h3>
                <div className="p-2 border-2 border-black rounded-full bg-white group-hover:bg-black group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-8 h-8" />
                </div>
              </div>
              
              <p className="mt-6 text-xl font-medium leading-relaxed max-w-sm">
                {project.description}
              </p>
              
              <div className="mt-12 flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-4 py-2 border-2 border-black font-bold uppercase text-sm bg-gray-100">
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black bg-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-black text-4xl uppercase tracking-tighter">
            Build something<br/>
            <span className="text-[#ff90e8] drop-shadow-[2px_2px_0_rgba(0,0,0,1)]" style={{ WebkitTextStroke: "1px black" }}>Unreasonable.</span>
          </div>
          
          <div className="flex gap-6">
             <a href="mailto:truongdq.dev@gmail.com" className="font-bold text-xl uppercase border-b-4 border-transparent hover:border-black transition-colors">Email</a>
             <a href="https://github.com/truongnat" className="font-bold text-xl uppercase border-b-4 border-transparent hover:border-black transition-colors">GitHub</a>
             <a href="https://linkedin.com/in/truongdq01" className="font-bold text-xl uppercase border-b-4 border-transparent hover:border-black transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

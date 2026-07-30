import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ExternalLink, Terminal, Code2, Sparkles, Layers } from "lucide-react";

const projects = [
  {
    title: "rnui",
    category: "Design System",
    description: "A high-performance, dual-layer UI design system for React Native (iOS + Android) with headless primitives.",
    link: "https://github.com/truongnat/rnui",
    icon: <Layers className="w-5 h-5 text-[#00f0ff]" />
  },
  {
    title: "aix",
    category: "AI Platform",
    description: "AI Engineering Platform. TS monorepo consolidating skills, guardrails & autonomous SDLC.",
    link: "https://github.com/truongnat/aix",
    icon: <Sparkles className="w-5 h-5 text-[#8a2be2]" />
  },
  {
    title: "simple-skills",
    category: "Orchestration",
    description: "Minimal AI agent skills with clear workflows, flat YAML contracts, and structured artifacts.",
    link: "https://github.com/truongnat/simple-skills",
    icon: <Terminal className="w-5 h-5 text-[#00f0ff]" />
  },
  {
    title: "auraos-suite",
    category: "Desktop Native",
    description: "Native desktop utility suite for Ubuntu (GNOME/Wayland). Built with Rust + Tauri v2 + Svelte 5.",
    link: "https://github.com/truongnat/auraos-suite",
    icon: <Code2 className="w-5 h-5 text-[#8a2be2]" />
  }
];

function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-neutral-300 font-sans overflow-x-hidden selection:bg-[#00f0ff] selection:text-black">
      
      {/* Shader UI Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#00f0ff] opacity-[0.07] blur-[100px] animate-orb-float mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#8a2be2] opacity-[0.08] blur-[120px] animate-orb-float-delayed mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 lg:px-12">
        
        {/* Nav */}
        <header className="flex justify-between items-center mb-24 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="text-xl font-medium tracking-tight text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]"></span>
            DQ.TRUONG
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="https://github.com/truongnat" className="hover:text-white transition-colors flex items-center gap-2">
              <FaGithub className="w-4 h-4" /> <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/truongdq01" className="hover:text-white transition-colors flex items-center gap-2">
              <FaLinkedin className="w-4 h-4" /> <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </header>

        {/* Hero Section */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel text-xs font-mono text-[#00f0ff] mb-8">
              <Sparkles className="w-3 h-3" />
              <span>Fullstack & AI Engineer</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-6">
              Engineering<br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]">intelligent</span><br/>
              systems.
            </h1>
            
            <p className="text-lg text-neutral-400 max-w-lg mb-10 leading-relaxed">
              One intelligent layer across your entire engineering system. Building at the intersection of TypeScript, native apps, and AI workflows.
            </p>
            
            <div className="flex gap-4">
              <a href="mailto:truongdq.dev@gmail.com" className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-colors">
                Initialize Contact
              </a>
              <a href="https://truongsoftware.com/Dao_Quang_Truong_CV.pdf" className="px-6 py-3 rounded-lg glass-panel hover:text-white transition-colors">
                View Resume
              </a>
            </div>
          </div>

          {/* Code Native Window */}
          <div className="glass-panel rounded-2xl p-6 shadow-2xl relative overflow-hidden animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            {/* Window controls */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
              <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
              <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
            </div>
            
            <pre className="code-block font-mono text-sm leading-loose overflow-x-auto text-neutral-300">
              <code><span className="text-[#8a2be2]">import</span> &#123; Agent &#125; <span className="text-[#8a2be2]">from</span> <span className="text-green-400">'@aix/core'</span>;</code>
              <code></code>
              <code><span className="text-[#8a2be2]">const</span> sys <span className="text-[#00f0ff]">=</span> <span className="text-[#8a2be2]">new</span> <span className="text-yellow-200">Agent</span>(&#123;</code>
              <code>  identity: <span className="text-green-400">'Dao Quang Truong'</span>,</code>
              <code>  skills: [<span className="text-green-400">'TypeScript'</span>, <span className="text-green-400">'Rust'</span>, <span className="text-green-400">'AI'</span>]</code>
              <code>&#125;);</code>
              <code></code>
              <code><span className="text-neutral-500">// Executing core routine</span></code>
              <code><span className="text-[#8a2be2]">await</span> sys.<span className="text-yellow-200">plan</span>(<span className="text-green-400">"ship the impossible"</span>);</code>
              <code className="text-[#00f0ff] mt-4">→ 12 modules architected</code>
              <code className="text-[#00f0ff]">→ tests passing</code>
              <code className="text-white font-bold mt-2">ready to deploy_</code>
            </pre>
            
            {/* Subtle overlay reflection */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
          </div>
        </main>

        {/* Selected Work */}
        <section className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-medium text-white">Console / Projects</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-neutral-800 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <a key={idx} href={project.link} target="_blank" rel="noreferrer" className="block glass-panel p-8 rounded-2xl group cursor-pointer transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 group-hover:border-white/20 transition-colors">
                    {project.icon}
                  </div>
                  <ExternalLink className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors" />
                </div>
                
                <div className="text-xs font-mono text-[#8a2be2] mb-3">{project.category}</div>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#00f0ff] transition-colors">{project.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500 pb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
          <p>© 2026 Dao Quang Truong. Built with React & Liquid Light.</p>
          <div className="flex gap-4">
             <span>SYS.STATUS: <span className="text-[#00f0ff]">ONLINE</span></span>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;

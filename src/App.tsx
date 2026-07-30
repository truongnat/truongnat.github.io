import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, Command, Cpu, Sparkles, FolderGit2, Code2, Link as LinkIcon, User, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Message = {
  id: string;
  sender: "user" | "kimi";
  content: React.ReactNode;
};

const SYSTEM_PROMPT = `Hi. I am Kimi K3, acting as the synthetic neural representation of Dao Quang Truong. 
I have ingested his entire career history, source code, and engineering methodologies.
How may I assist you in exploring his profile today?`;

const PROJECTS = [
  { name: "rnui", desc: "A high-performance, dual-layer UI design system for React Native (iOS + Android) with headless primitives.", link: "https://github.com/truongnat/rnui" },
  { name: "aix", desc: "AI Engineering Platform. TS monorepo consolidating skills, guardrails & autonomous SDLC.", link: "https://github.com/truongnat/aix" },
  { name: "simple-skills", desc: "Minimal AI agent skills with clear workflows, flat YAML contracts, and structured artifacts.", link: "https://github.com/truongnat/simple-skills" },
  { name: "auraos-suite", desc: "Native desktop utility suite for Ubuntu (GNOME/Wayland). Built with Rust + Tauri v2 + Svelte 5.", link: "https://github.com/truongnat/auraos-suite" },
];

const SKILLS = ["TypeScript", "Rust", "React Native", "Go", "Python", "AI Agents", "Cloudflare", "Tauri", "System Design"];

function TypewriterText({ text, onComplete }: { text: string; onComplete?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(timer);
        if (onComplete) onComplete();
      }
    }, 15);
    return () => clearInterval(timer);
  }, [text, onComplete]);

  return <span className="typewriter">{displayed}</span>;
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial boot sequence
    setTimeout(() => {
      setMessages([{
        id: "sys-1",
        sender: "kimi",
        content: <TypewriterText text={SYSTEM_PROMPT} onComplete={() => setIsReady(true)} />
      }]);
    }, 500);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleAction = (action: string) => {
    if (!isReady || isTyping) return;
    
    // Add user message
    const newMessages = [...messages, { id: Date.now().toString(), sender: "user" as const, content: action }];
    setMessages(newMessages);
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      let response: React.ReactNode = "";
      
      if (action === "View Projects") {
        response = (
          <div className="space-y-4">
            <p>Accessing project repositories...</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {PROJECTS.map(p => (
                <a key={p.name} href={p.link} target="_blank" rel="noreferrer" className="block p-4 border border-white/10 rounded-lg hover:border-[#00f0ff] hover:bg-[#00f0ff]/5 transition-all group">
                  <div className="flex items-center gap-2 mb-2">
                    <FolderGit2 className="w-4 h-4 text-[#00f0ff]" />
                    <span className="font-mono text-white group-hover:text-[#00f0ff]">{p.name}</span>
                    <ExternalLink className="w-3 h-3 text-neutral-500 ml-auto" />
                  </div>
                  <p className="text-sm text-neutral-400">{p.desc}</p>
                </a>
              ))}
            </div>
          </div>
        );
      } else if (action === "Check Skills") {
        response = (
          <div>
            <p>Scanning technical matrix...</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {SKILLS.map((s, i) => (
                <span key={s} className="px-3 py-1 rounded bg-white/5 border border-white/10 font-mono text-xs text-neutral-300 animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        );
      } else if (action === "Who is Dao Quang Truong?") {
        response = (
          <div className="space-y-2">
            <p className="text-white">Entity Profile Loaded.</p>
            <p>Dao Quang Truong is a Fullstack & AI Engineer with 6+ years of experience.</p>
            <p>He specializes in building high-performance TypeScript applications, native cross-platform tools, and AI-assisted developer workflows.</p>
            <p className="text-neutral-500 italic mt-4">"Building intelligent systems and cross-platform products."</p>
          </div>
        );
      } else if (action === "Contact Protocol") {
        response = (
          <div className="space-y-4">
            <p>Establishing secure communication channels:</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:truongdq.dev@gmail.com" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                <Mail className="w-5 h-5 text-red-400" />
                <span className="font-mono text-sm">truongdq.dev@gmail.com</span>
              </a>
              <a href="https://github.com/truongnat" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                <FaGithub className="w-5 h-5 text-white" />
                <span className="font-mono text-sm">github.com/truongnat</span>
              </a>
              <a href="https://linkedin.com/in/truongdq01" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                <FaLinkedin className="w-5 h-5 text-blue-400" />
                <span className="font-mono text-sm">linkedin.com/in/truongdq01</span>
              </a>
            </div>
          </div>
        );
      }
      
      setMessages([...newMessages, { id: Date.now().toString(), sender: "kimi", content: response }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="h-screen w-full bg-[#0a0a0a] text-neutral-300 font-sans flex overflow-hidden">
      
      {/* Sidebar - Moonshot Theme */}
      <aside className="hidden md:flex w-64 flex-col border-r border-white/10 bg-[#050505] p-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-800 to-black border border-white/20 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[#00f0ff]/20 animate-pulse-fast"></div>
             <Sparkles className="w-4 h-4 text-[#00f0ff] relative z-10" />
          </div>
          <span className="font-medium text-white tracking-wide">Kimi K3 <span className="text-xs text-neutral-500 ml-1">v2.0</span></span>
        </div>
        
        <div className="text-xs font-mono text-neutral-500 mb-4 uppercase tracking-wider">Neural Context</div>
        
        <nav className="flex flex-col gap-2 flex-1">
          <button className="flex items-center gap-3 px-3 py-2 rounded-md bg-white/5 text-white border border-white/10 text-sm transition-colors text-left">
            <Cpu className="w-4 h-4 text-[#00f0ff]" />
            D.Q.Truong Matrix
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-neutral-400 hover:text-white transition-colors text-sm text-left">
            <Code2 className="w-4 h-4" />
            Source Code
          </button>
          <button className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 text-neutral-400 hover:text-white transition-colors text-sm text-left">
            <User className="w-4 h-4" />
            User Config
          </button>
        </nav>
        
        <div className="mt-auto pt-4 border-t border-white/10">
          <a href="https://truongsoftware.com/Dao_Quang_Truong_CV.pdf" target="_blank" className="flex items-center gap-2 text-xs text-neutral-500 hover:text-white transition-colors">
            <LinkIcon className="w-3 h-3" />
            Download Original CV
          </a>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col relative h-full">
        {/* Background ambient light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-[#00f0ff]/5 blur-[120px] pointer-events-none"></div>

        {/* Header (Mobile) */}
        <header className="md:hidden flex items-center gap-3 p-4 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md sticky top-0 z-10">
          <Sparkles className="w-5 h-5 text-[#00f0ff]" />
          <span className="font-medium text-white">Kimi K3</span>
        </header>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 max-w-3xl mx-auto ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === "kimi" ? "bg-white/10" : "bg-[#00f0ff]/20 text-[#00f0ff]"}`}>
                  {msg.sender === "kimi" ? <Sparkles className="w-4 h-4" /> : <User className="w-4 h-4" />}
                </div>
                <div className={`flex-1 ${msg.sender === "user" ? "text-right" : ""}`}>
                  <div className="font-medium text-sm text-neutral-400 mb-1">
                    {msg.sender === "kimi" ? "Kimi K3" : "Guest User"}
                  </div>
                  <div className={`prose prose-invert max-w-none text-sm md:text-base leading-relaxed ${msg.sender === "user" ? "text-white" : "text-neutral-300"}`}>
                    {msg.content}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 max-w-3xl mx-auto">
                <div className="shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 animate-spin" />
                </div>
                <div>
                  <div className="font-medium text-sm text-neutral-400 mb-1">Kimi K3</div>
                  <div className="flex gap-1 mt-2">
                    <div className="w-2 h-2 rounded-full bg-neutral-600 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-neutral-600 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-neutral-600 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} className="h-4" />
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent">
          <div className="max-w-3xl mx-auto">
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
              {["Who is Dao Quang Truong?", "View Projects", "Check Skills", "Contact Protocol"].map((action) => (
                <button
                  key={action}
                  onClick={() => handleAction(action)}
                  disabled={!isReady || isTyping}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs md:text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {action}
                </button>
              ))}
            </div>
            
            {/* Fake Input */}
            <div className="relative flex items-center w-full rounded-xl border border-white/10 bg-[#050505] overflow-hidden focus-within:border-[#00f0ff]/50 focus-within:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all">
              <div className="pl-4 text-neutral-500">
                <Terminal className="w-5 h-5" />
              </div>
              <input 
                type="text" 
                placeholder="Select a command above to interact..." 
                disabled 
                className="w-full bg-transparent p-4 text-sm outline-none text-white placeholder:text-neutral-600 disabled:opacity-50"
              />
              <button disabled className="pr-4 text-neutral-500">
                <Send className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center text-xs font-mono text-neutral-600 mt-3">
              Kimi K3 AI can make mistakes. Verify important information.
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

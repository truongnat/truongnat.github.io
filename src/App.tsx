import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, Cpu, Sparkles, FolderGit2, Code2, Link as LinkIcon, User, ExternalLink, Moon, Sun, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type Message = { id: string; sender: "user" | "sys"; content: React.ReactNode; };

const t = {
  systemPrompt: "System online. I am DQ.SYS, Dao Quang Truong's digital twin.\nI process his engineering history, source code, and architecture.\nSelect an option below to retrieve data.",
  btnWho: "Who is Dao Quang Truong?",
  btnProjects: "View Projects",
  btnSkills: "Check Skills",
  btnContact: "Contact",
  tabMatrix: "Identity Matrix",
  tabCode: "Source Code",
  tabConfig: "User Config",
  placeholder: "Select a command above to interact...",
  footer: "DQ.SYS can make mistakes. Verify important information.",
  codeTitle: "Repositories & Modules",
  codeDesc: "Source code and telemetry from recent commits.",
  configTitle: "System Configuration",
  configDesc: "Modify the UI runtime parameters below.",
  theme: "Theme",
  resume: "Download Original CV",
  msgWho: (
    <div className="space-y-2">
      <p className="text-[var(--text-primary)]">Profile loaded.</p>
      <p>Dao Quang Truong is a Fullstack & AI Engineer with 6+ years of experience.</p>
      <p>He builds fast TypeScript apps, native cross-platform tools, and AI developer workflows.</p>
      <p className="text-[var(--text-secondary)] italic mt-4">"Building intelligent systems and cross-platform products."</p>
    </div>
  ),
  msgContact: "Secure channels established:"
};

const PROJECTS = [
  { name: "rnui", desc: "Dual-layer UI design system for React Native (iOS + Android) with headless primitives.", link: "https://github.com/truongnat/rnui" },
  { name: "aix", desc: "AI Engineering Platform. TS monorepo consolidating skills, guardrails & autonomous SDLC.", link: "https://github.com/truongnat/aix" },
  { name: "simple-skills", desc: "Minimal AI agent skills with clear workflows, flat YAML contracts, and structured artifacts.", link: "https://github.com/truongnat/simple-skills" },
  { name: "auraos-suite", desc: "Native desktop utility suite for Ubuntu (GNOME/Wayland). Built with Rust + Tauri v2.", link: "https://github.com/truongnat/auraos-suite" },
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
  return <span className="typewriter whitespace-pre-wrap">{displayed}</span>;
}

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeTab, setActiveTab] = useState<"chat" | "code" | "config">("chat");

  const [messages, setMessages] = useState<Message[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    setMessages([]);
    setIsReady(false);
    setTimeout(() => {
      setMessages([{
        id: "sys-1",
        sender: "sys",
        content: <TypewriterText text={t.systemPrompt} onComplete={() => setIsReady(true)} />
      }]);
    }, 500);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleAction = (actionKey: "btnWho" | "btnProjects" | "btnSkills" | "btnContact") => {
    if (!isReady || isTyping) return;
    
    const actionText = t[actionKey];
    const newMessages = [...messages, { id: Date.now().toString(), sender: "user" as const, content: actionText }];
    setMessages(newMessages);
    setIsTyping(true);

    const delay = actionKey === "btnContact" ? 200 : 800;

    setTimeout(() => {
      let response: React.ReactNode = "";
      
      if (actionKey === "btnProjects") {
        response = (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {PROJECTS.map(p => (
                <a key={p.name} href={p.link} target="_blank" rel="noreferrer" className="block p-4 border border-[var(--border-color)] rounded-lg hover:border-[var(--accent)] hover:bg-[var(--accent-bg)] transition-all group">
                  <div className="flex items-center gap-2 mb-2">
                    <FolderGit2 className="w-4 h-4 text-[var(--accent)]" />
                    <span className="font-mono text-[var(--text-primary)] group-hover:text-[var(--accent)]">{p.name}</span>
                    <ExternalLink className="w-3 h-3 text-[var(--text-secondary)] ml-auto" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{p.desc}</p>
                </a>
              ))}
            </div>
          </div>
        );
      } else if (actionKey === "btnSkills") {
        response = (
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((s, i) => (
              <span key={s} className="px-3 py-1 rounded bg-[var(--border-color)] border border-[var(--border-color)] font-mono text-xs text-[var(--text-primary)] animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                {s}
              </span>
            ))}
          </div>
        );
      } else if (actionKey === "btnWho") {
        response = t.msgWho;
      } else if (actionKey === "btnContact") {
        response = (
          <div className="space-y-3">
            <p className="text-[var(--text-secondary)]">{t.msgContact}</p>
            <div className="flex flex-col gap-2">
              <a href="mailto:truongdq.dev@gmail.com" className="flex items-center gap-3 p-3 rounded-lg bg-[var(--msg-sys)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors">
                <Mail className="w-5 h-5 text-red-400" />
                <span className="font-mono text-sm text-[var(--text-primary)]">truongdq.dev@gmail.com</span>
              </a>
              <a href="https://github.com/truongnat" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-[var(--msg-sys)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors">
                <FaGithub className="w-5 h-5 text-[var(--text-primary)]" />
                <span className="font-mono text-sm text-[var(--text-primary)]">github.com/truongnat</span>
              </a>
              <a href="https://linkedin.com/in/truongdq01" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-[var(--msg-sys)] border border-[var(--border-color)] hover:border-[var(--accent)] transition-colors">
                <FaLinkedin className="w-5 h-5 text-blue-500" />
                <span className="font-mono text-sm text-[var(--text-primary)]">linkedin.com/in/truongdq01</span>
              </a>
            </div>
          </div>
        );
      }
      
      setMessages([...newMessages, { id: Date.now().toString(), sender: "sys", content: response }]);
      setIsTyping(false);
    }, delay);
  };

  const renderContent = () => {
    if (activeTab === "code") {
      return (
        <div className="p-8 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-2xl font-medium text-[var(--text-primary)] mb-2 flex items-center gap-3"><Code2 className="text-[var(--accent)]"/> {t.codeTitle}</h2>
          <p className="text-[var(--text-secondary)] mb-8">{t.codeDesc}</p>
          
          <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-panel)] overflow-hidden shadow-xl">
             <div className="border-b border-[var(--border-color)] bg-[var(--border-color)] p-3 flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-400"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
               <div className="w-3 h-3 rounded-full bg-green-400"></div>
             </div>
             <pre className="p-6 font-mono text-sm overflow-x-auto text-[var(--text-primary)] leading-relaxed">
               <span className="text-purple-500 dark:text-purple-400">import</span> &#123; core &#125; <span className="text-purple-500 dark:text-purple-400">from</span> <span className="text-green-600 dark:text-green-400">'@dq/sys'</span>;{'\n\n'}
               <span className="text-purple-500 dark:text-purple-400">const</span> init <span className="text-[var(--accent)]">=</span> <span className="text-purple-500 dark:text-purple-400">async</span> () <span className="text-[var(--accent)]">=&gt;</span> &#123;{'\n'}
               {'  '}<span className="text-[var(--text-secondary)]">// Booting neural subsystems</span>{'\n'}
               {'  '}<span className="text-purple-500 dark:text-purple-400">await</span> core.<span className="text-yellow-600 dark:text-yellow-200">loadModules</span>(['react-native', 'rust', 'ai']);{'\n'}
               {'  '}<span className="text-purple-500 dark:text-purple-400">return</span> &#123; status: <span className="text-green-600 dark:text-green-400">'ONLINE'</span> &#125;;{'\n'}
               &#125;;{'\n\n'}
               init().<span className="text-yellow-600 dark:text-yellow-200">then</span>(console.log);
             </pre>
          </div>
        </div>
      );
    }
    
    if (activeTab === "config") {
      return (
        <div className="p-8 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-2xl font-medium text-[var(--text-primary)] mb-2 flex items-center gap-3"><User className="text-[var(--accent)]"/> {t.configTitle}</h2>
          <p className="text-[var(--text-secondary)] mb-8">{t.configDesc}</p>
          
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-panel)] flex justify-between items-center">
              <div>
                <h3 className="font-medium text-[var(--text-primary)] mb-1">{t.theme}</h3>
                <p className="text-sm text-[var(--text-secondary)]">Toggle Light/Dark interface</p>
              </div>
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-3 rounded-full bg-[var(--border-color)] hover:bg-[var(--msg-sys)] text-[var(--text-primary)] transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <>
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 max-w-3xl mx-auto ${msg.sender === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === "sys" ? "bg-[var(--msg-sys)] border border-[var(--border-color)]" : "bg-[var(--accent-bg)] text-[var(--accent)]"}`}>
                  {msg.sender === "sys" ? <Sparkles className="w-4 h-4 text-[var(--accent)]" /> : <User className="w-4 h-4" />}
                </div>
                <div className={`flex-1 ${msg.sender === "user" ? "text-right" : ""}`}>
                  <div className="font-medium text-sm text-[var(--text-secondary)] mb-1">
                    {msg.sender === "sys" ? "DQ.SYS" : "Guest"}
                  </div>
                  <div className={`prose prose-invert max-w-none text-sm md:text-base leading-relaxed ${msg.sender === "user" ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}>
                    {msg.content}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 max-w-3xl mx-auto">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--msg-sys)] border border-[var(--border-color)] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[var(--accent)] animate-spin" />
                </div>
                <div>
                  <div className="font-medium text-sm text-[var(--text-secondary)] mb-1">DQ.SYS</div>
                  <div className="flex gap-1 mt-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--text-secondary)] animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-[var(--text-secondary)] animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-[var(--text-secondary)] animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} className="h-4" />
        </div>

        <div className="p-4 md:p-6 bg-gradient-to-t from-[var(--bg-main)] to-transparent">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
              {(["btnWho", "btnProjects", "btnSkills", "btnContact"] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => handleAction(key)}
                  disabled={!isReady || isTyping}
                  className="px-4 py-2 rounded-full border border-[var(--border-color)] bg-[var(--bg-panel)] hover:border-[var(--accent)] text-xs md:text-sm font-medium text-[var(--text-primary)] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                >
                  {t[key]}
                </button>
              ))}
            </div>
            
            <div className="relative flex items-center w-full rounded-xl border border-[var(--border-color)] bg-[var(--bg-panel)] overflow-hidden shadow-sm focus-within:border-[var(--accent)] focus-within:shadow-[0_0_15px_var(--accent-bg)] transition-all">
              <div className="pl-4 text-[var(--text-secondary)]"><Terminal className="w-5 h-5" /></div>
              <input type="text" placeholder={t.placeholder} disabled className="w-full bg-transparent p-4 text-sm outline-none text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] disabled:opacity-50" />
              <button disabled className="pr-4 text-[var(--text-secondary)]"><Send className="w-5 h-5" /></button>
            </div>
            <div className="text-center text-xs font-mono text-[var(--text-secondary)] mt-3">
              {t.footer}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="h-screen w-full flex overflow-hidden selection:bg-[var(--accent)] selection:text-white">
      <aside className="hidden md:flex w-64 flex-col border-r border-[var(--border-color)] bg-[var(--bg-panel)] p-4 relative z-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 rounded-lg bg-[var(--bg-main)] border border-[var(--border-color)] flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[var(--accent-bg)] animate-pulse-fast"></div>
             <Sparkles className="w-4 h-4 text-[var(--accent)] relative z-10" />
          </div>
          <span className="font-medium text-[var(--text-primary)] tracking-wide">DQ.SYS <span className="text-xs text-[var(--text-secondary)] ml-1">v1.0</span></span>
        </div>
        
        <div className="text-xs font-mono text-[var(--text-secondary)] mb-4 uppercase tracking-wider">Neural Context</div>
        
        <nav className="flex flex-col gap-2 flex-1">
          <button onClick={() => setActiveTab('chat')} className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm text-left transition-colors ${activeTab === 'chat' ? 'bg-[var(--border-color)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--msg-sys)] hover:text-[var(--text-primary)]'}`}>
            <Cpu className={`w-4 h-4 ${activeTab === 'chat' ? 'text-[var(--accent)]' : ''}`} />
            {t.tabMatrix}
          </button>
          <button onClick={() => setActiveTab('code')} className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm text-left transition-colors ${activeTab === 'code' ? 'bg-[var(--border-color)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--msg-sys)] hover:text-[var(--text-primary)]'}`}>
            <Code2 className={`w-4 h-4 ${activeTab === 'code' ? 'text-[var(--accent)]' : ''}`} />
            {t.tabCode}
          </button>
          <button onClick={() => setActiveTab('config')} className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm text-left transition-colors ${activeTab === 'config' ? 'bg-[var(--border-color)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)] hover:bg-[var(--msg-sys)] hover:text-[var(--text-primary)]'}`}>
            <User className={`w-4 h-4 ${activeTab === 'config' ? 'text-[var(--accent)]' : ''}`} />
            {t.tabConfig}
          </button>
        </nav>
        
        <div className="mt-auto pt-4 border-t border-[var(--border-color)]">
          <a href="https://truongsoftware.com/Dao_Quang_Truong_CV.pdf" target="_blank" className="flex items-center gap-2 text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            <LinkIcon className="w-3 h-3" />
            {t.resume}
          </a>
        </div>
      </aside>

      <main className="flex-1 flex flex-col relative h-full bg-[var(--bg-main)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-[var(--orb-1)] blur-[120px] pointer-events-none"></div>

        <header className="md:hidden flex items-center justify-between p-4 border-b border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[var(--accent)]" />
            <span className="font-medium text-[var(--text-primary)]">DQ.SYS</span>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setActiveTab('chat')} className={`p-2 rounded ${activeTab === 'chat' ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'}`}><Cpu className="w-5 h-5"/></button>
            <button onClick={() => setActiveTab('code')} className={`p-2 rounded ${activeTab === 'code' ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'}`}><Code2 className="w-5 h-5"/></button>
            <button onClick={() => setActiveTab('config')} className={`p-2 rounded ${activeTab === 'config' ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'}`}><User className="w-5 h-5"/></button>
          </div>
        </header>

        {renderContent()}

      </main>
    </div>
  );
}

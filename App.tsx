
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Sparkles,
  ArrowLeft,
  ChevronRight,
  Target,
  Zap,
  Globe
} from 'lucide-react';
import { Project } from './types';

const PROJECTS: Project[] = [
  {
    id: '01',
    kicker: 'Flagship Startup',
    title: 'Eyeva — AI Assistive Platform',
    description: 'A revolutionary computer vision system designed for visually impaired people. It combines real-time object detection, OCR, and scene intelligence.',
    mediaUrl: 'https://media.istockphoto.com/id/462787602/video/computer-network-in-eye-travelling-informations.mp4?s=mp4-640x640-is&k=20&c=S-wbzJF-f7S0i5_9l8ECZ_3w-oo_QNqvXVhxRPWpDhI=',
    type: 'video',
    stack: ['Python', 'OpenCV', 'YOLOv8', 'FastAPI', 'PyTorch']
  },
  {
    id: '02',
    kicker: 'Identity & Security',
    title: 'Face Recognition Ecosystem',
    description: 'A robust biometric workflow for secure identification. Implemented using modern recognition pipelines and high-performance backend architecture.',
    mediaUrl: 'https://media.istockphoto.com/id/1365657579/video/futuristic-biometrical-emotions-analysis-closeup-woman-face-biometrics-research.mp4?s=mp4-640x640-is&k=20&c=G_TTQpBINLyCfsG18N0bKdmJBHj1UhOH19d66BliCoU=',
    type: 'video',
    stack: ['TensorFlow', 'Python', 'Flask', 'Identity Core']
  },
  {
    id: '03',
    kicker: 'Infrastructure',
    title: 'Vision AI Intelligence',
    description: 'Scalable scene intelligence microservices. Features high-concurrency processing and automated robot decision logic.',
    mediaUrl: 'https://media.giphy.com/media/9CRHuaaOJwcIo/giphy.gif',
    type: 'image',
    stack: ['Docker', 'PostgreSQL', 'Microservices', 'PyTorch']
  }
];

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'project'>('home');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, activeProject]);

  const handleNavigateHome = (e: React.MouseEvent, sectionId?: string) => {
    e.preventDefault();
    setView('home');
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleOpenProject = (project: Project) => {
    setActiveProject(project);
    setView('project');
  };

  if (view === 'project' && activeProject) {
    return <ProjectDetailPage project={activeProject} onBack={(e) => handleNavigateHome(e)} />;
  }

  return (
    <div className="min-h-screen relative pb-12 sm:pb-24 selection:bg-brand-accent selection:text-brand-dark overflow-x-hidden bg-brand-dark">
      {/* Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-accent/5 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-glow/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/60 backdrop-blur-xl border-b border-brand-border/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          <a href="/" onClick={(e) => handleNavigateHome(e)} className="font-syne font-extrabold tracking-tighter text-lg sm:text-xl flex items-center gap-3 group cursor-pointer">
             <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-brand-accent shadow-[0_0_15px_#4da3ff] animate-pulse"></div>
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 uppercase tracking-tighter hover:neon-text-white transition-all duration-500">Manish Kumar</span>
          </a>
          <div className="flex items-center gap-6 sm:gap-10 text-[9px] sm:text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
             <a href="#work" onClick={(e) => handleNavigateHome(e, 'work')} className="hover:text-brand-accent hover:neon-shadow-text transition-all duration-300">Works</a>
             <a href="#contact" onClick={(e) => handleNavigateHome(e, 'contact')} className="hover:text-brand-accent hover:neon-shadow-text transition-all duration-300">Contact</a>
             <span className="hidden sm:inline px-4 py-1.5 border border-brand-border rounded-full bg-white/5 text-brand-accent shadow-neon transition-all hover:bg-brand-accent/10">India</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 overflow-hidden text-center pt-16">
        <div className="absolute inset-0 -z-10 bg-brand-dark">
          <div className="relative w-full h-full overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover pointer-events-none brightness-[0.3] contrast-[1.1] scale-[1.02]"
            >
              <source src="https://cdn.pixabay.com/video/2023/07/07/170655-843818306_tiny.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-brand-dark/80"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 py-12 flex flex-col items-center">
          <div className="animate-fade-in-up mb-4 sm:mb-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-brand-border bg-white/5 backdrop-blur-md hover:border-brand-accent transition-all duration-500 group cursor-default shadow-lg hover:neon-shadow">
               <Sparkles size={16} className="text-brand-accent animate-pulse group-hover:scale-110" />
               <span className="text-brand-accent font-black tracking-[0.4em] text-[11px] sm:text-[13px] uppercase drop-shadow-neon">MANISH KUMAR</span>
            </div>
          </div>

          <h1 className="font-syne text-[clamp(32px,10vw,140px)] leading-[0.85] tracking-tighter font-extrabold text-white animate-hero-title mb-8 select-none">
            BUILDING<br />
            <span className="text-transparent stroke-text opacity-40 hover:opacity-100 hover:text-brand-accent transition-all duration-500 cursor-default hover:neon-shadow-text">ACCESSIBLE</span><br />
            INTELLIGENCE
          </h1>
          
          <div className="max-w-3xl animate-fade-in-up delay-200">
            <p className="text-lg sm:text-2xl text-slate-300 leading-relaxed font-light mb-12 px-4">
              Pioneering visual AI solutions for human independence. Lead Engineer at <span className="text-white font-bold neon-text">Eyeva AI</span>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
               <a href="#work" onClick={(e) => handleNavigateHome(e, 'work')} className="px-8 py-4 rounded-full bg-brand-accent text-brand-dark font-black tracking-widest text-[10px] uppercase shadow-neon-glow hover:scale-105 transition-all duration-300 active:scale-95">
                  View Projects
               </a>
               <a href="#contact" onClick={(e) => handleNavigateHome(e, 'contact')} className="px-8 py-4 rounded-full border border-brand-border bg-white/5 text-white font-black tracking-widest text-[10px] uppercase hover:bg-white/10 hover:border-white transition-all duration-300 active:scale-95 hover:neon-shadow">
                  Get in Touch
               </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-slate-500 animate-bounce">
          <div className="w-[1.5px] h-12 bg-gradient-to-b from-brand-accent to-transparent shadow-neon"></div>
        </div>
      </header>

      {/* Selected Works */}
      <section id="work" className="px-6 sm:px-8 max-w-7xl mx-auto mt-24 sm:mt-48 space-y-32 sm:space-y-48">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-brand-border/40 pb-12 sm:pb-16">
          <div>
            <span className="text-brand-accent font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block drop-shadow-neon">Visual Intelligence</span>
            <h2 className="font-syne text-5xl sm:text-8xl font-extrabold tracking-tighter text-white">SELECTED <span className="text-brand-glow neon-text">WORKS</span></h2>
          </div>
          <div className="text-right hidden md:block">
             <p className="text-[10px] text-slate-500 font-black tracking-widest uppercase">Volume 01 &bull; 2025</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-32 sm:gap-48">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} onOpen={() => handleOpenProject(project)} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 sm:px-8 max-w-7xl mx-auto mt-40 sm:mt-60">
        <div className="bg-brand-panel border border-brand-border/50 rounded-[3rem] sm:rounded-[4rem] p-10 sm:p-24 text-center relative overflow-hidden group transition-all duration-1000 hover:border-brand-accent/40 hover:shadow-[0_0_80px_rgba(77,163,255,0.15)]">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-50"></div>
          
          <span className="text-brand-accent font-black tracking-[0.5em] text-[10px] uppercase mb-8 sm:mb-12 block drop-shadow-neon">Available for Hire</span>
          
          <h2 className="font-syne text-4xl sm:text-9xl font-extrabold mb-10 sm:mb-16 tracking-tighter text-white group-hover:scale-[1.01] transition-transform duration-700">LET'S <span className="text-brand-accent neon-text">CONNECT</span></h2>
          
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg sm:text-2xl font-light leading-relaxed">
            Ready to integrate advanced AI into your product? Reach out to <span className="text-white font-bold border-b-2 border-brand-accent/30 hover:border-brand-accent transition-all duration-300">Manish Kumar</span>.
          </p>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <ContactLink icon={<Mail />} label="Email" href="mailto:mannu09iit@gmail.com" />
            <ContactLink icon={<Linkedin />} label="LinkedIn" href="https://linkedin.com/in/kumarmanish09" />
            <ContactLink icon={<Github />} label="GitHub" href="https://github.com/Jinxcoder09" />
            <ContactLink icon={<Phone />} label="Direct" href="tel:+918171575922" />
          </div>
        </div>
      </section>

      <footer className="mt-32 sm:mt-56 text-center px-6 sm:px-8 border-t border-brand-border/20 py-16 text-slate-600 text-[9px] sm:text-[11px] tracking-[0.5em] font-black uppercase">
        Manish Kumar &bull; Founder of Eyeva AI &bull; © 2026 
      </footer>

      <style>{`
        .neon-text { text-shadow: 0 0 10px #4da3ff, 0 0 20px #4da3ff; }
        .neon-text-white { text-shadow: 0 0 10px #ffffff, 0 0 20px #ffffff; }
        .shadow-neon { box-shadow: 0 0 15px #4da3ff; }
        .shadow-neon-glow { box-shadow: 0 0 20px #4da3ff, 0 0 40px #4da3ff; }
        .drop-shadow-neon { filter: drop-shadow(0 0 8px #4da3ff); }
        .hover\\:neon-shadow:hover { box-shadow: 0 0 25px rgba(77, 163, 255, 0.4); }
        .hover\\:neon-shadow-text:hover { text-shadow: 0 0 15px #4da3ff, 0 0 30px #4da3ff; }
        
        .stroke-text {
          -webkit-text-stroke: 1.5px rgba(255,255,255,0.2);
          text-shadow: none;
        }

        @keyframes reveal-anim {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: reveal-anim 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes hero-title {
          from { opacity: 0; transform: translateY(60px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-hero-title {
          animation: hero-title 1.4s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        .delay-200 { animation-delay: 0.2s; }

        @media (max-width: 640px) {
          .stroke-text { -webkit-text-stroke: 0.8px rgba(255,255,255,0.2); }
        }
      `}</style>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project, index: number, onOpen: () => void }> = ({ project, index, onOpen }) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center group`}>
      <div className="w-full lg:w-[60%] transition-all duration-700 relative">
        <div 
          onClick={onOpen}
          className="aspect-video w-full rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-brand-border bg-slate-900 shadow-2xl relative group/media transition-all duration-700 group-hover:scale-[1.02] group-hover:border-brand-accent group-hover:shadow-[0_0_50px_rgba(77,163,255,0.3)] cursor-pointer"
        >
          {project.type === 'video' ? (
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover brightness-[0.8] group-hover/media:scale-105 transition-transform duration-1000"
            >
              <source src={project.mediaUrl} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={project.mediaUrl} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover brightness-[0.8] group-hover/media:scale-105 transition-transform duration-1000"
            />
          )}
          
          <div className="absolute inset-0 bg-brand-dark/20 group-hover/media:opacity-0 transition-opacity"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 backdrop-blur-lg flex items-center justify-center text-[10px] sm:text-[11px] font-black text-white group-hover:text-brand-accent group-hover:border-brand-accent group-hover:shadow-neon transition-all duration-500">
             {project.id}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[40%] flex flex-col items-start px-2">
        <span className="text-[10px] font-black tracking-[0.5em] text-brand-accent uppercase mb-4 sm:mb-6 block group-hover:translate-x-3 transition-transform duration-500 drop-shadow-neon">{project.kicker}</span>
        <h3 className="font-syne text-3xl sm:text-6xl font-extrabold mb-6 sm:mb-8 text-white tracking-tighter leading-[1] group-hover:text-brand-accent group-hover:neon-shadow-text transition-all duration-500">{project.title}</h3>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 font-light group-hover:text-slate-200 transition-colors duration-500">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
          {project.stack.map(tag => (
            <span key={tag} className="text-[9px] sm:text-[10px] font-black tracking-[0.1em] px-4 py-2 border border-brand-border rounded-xl bg-white/5 text-slate-300 uppercase hover:border-brand-accent hover:text-white transition-all cursor-default shadow-sm hover:neon-shadow">{tag}</span>
          ))}
        </div>
        <button 
          onClick={onOpen}
          className="group/link flex items-center gap-4 sm:gap-6 text-white text-[10px] sm:text-[11px] font-black tracking-[0.4em] uppercase"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-brand-border flex items-center justify-center group-hover/link:bg-brand-accent group-hover/link:border-brand-accent transition-all duration-500 group-hover/link:scale-110 group-hover/link:shadow-neon shadow-2xl">
            <ExternalLink size={20} className="group-hover/link:rotate-45 transition-transform" />
          </div>
          Case Study
        </button>
      </div>
    </div>
  );
};

const ContactLink: React.FC<{ icon: React.ReactNode, label: string, href: string }> = ({ icon, label, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex flex-col items-center justify-center gap-6 p-8 sm:p-12 rounded-[2rem] bg-brand-dark/40 border border-brand-border/40 hover:border-brand-accent hover:bg-brand-accent/5 transition-all duration-500 group hover:-translate-y-2 hover:neon-shadow"
  >
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-transparent group-hover:border-brand-accent/20">
      <span className="text-slate-400 group-hover:text-brand-accent transition-colors duration-300 transform scale-110">{icon}</span>
    </div>
    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-500 group-hover:text-white transition-colors duration-300">{label}</span>
  </a>
);

const ProjectDetailPage: React.FC<{ project: Project, onBack: (e: React.MouseEvent) => void }> = ({ project, onBack }) => {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-inter relative overflow-x-hidden">
      {/* Detail Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-brand-accent/5 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-brand-glow/5 blur-[160px] rounded-full"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/60 backdrop-blur-xl border-b border-brand-border/30 h-16 sm:h-20 flex items-center px-6 sm:px-12 justify-between">
        <button onClick={onBack} className="flex items-center gap-4 text-slate-400 hover:text-white transition-all group">
           <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
           <span className="text-[10px] font-black uppercase tracking-widest">Back to Portfolio</span>
        </button>
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-accent">{project.kicker}</div>
      </nav>

      <main className="relative z-10 pt-32 pb-40 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-12">
             <span className="text-brand-accent font-black tracking-[0.8em] text-[10px] sm:text-[12px] uppercase mb-6 block drop-shadow-neon">Detailed Case Study</span>
             <h1 className="font-syne text-5xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-none mb-12">{project.title}</h1>
          </div>

          <div className="lg:col-span-8">
            <div className="aspect-video w-full rounded-[3rem] overflow-hidden border border-brand-border shadow-[0_0_100px_rgba(77,163,255,0.1)] mb-16 relative">
              {project.type === 'video' ? (
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src={project.mediaUrl} type="video/mp4" />
                </video>
              ) : (
                <img src={project.mediaUrl} alt={project.title} className="w-full h-full object-cover" />
              )}
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="font-syne text-2xl sm:text-4xl font-extrabold mb-6 tracking-tight flex items-center gap-4">
                  <Target size={24} className="text-brand-accent" />
                  The Challenge
                </h2>
                <p className="text-slate-400 text-lg sm:text-xl leading-relaxed font-light">
                  Building scalable AI systems requires more than just high-performance models; it demands deep empathy for the user. For {project.title}, the goal was to bridge the gap between complex neural networks and intuitive real-world application.
                </p>
              </section>

              <section>
                <h2 className="font-syne text-2xl sm:text-4xl font-extrabold mb-6 tracking-tight flex items-center gap-4">
                  <Zap size={24} className="text-brand-accent" />
                  The Solution
                </h2>
                <p className="text-slate-400 text-lg sm:text-xl leading-relaxed font-light mb-8">
                  By leveraging state-of-the-art vision models and optimizing them for edge deployment, we achieved sub-50ms latency for real-time inference. The system architecture emphasizes robustness and accessibility.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-8 rounded-3xl bg-white/5 border border-brand-border hover:border-brand-accent/30 transition-all">
                    <h3 className="text-white font-bold text-lg mb-2">High Efficiency</h3>
                    <p className="text-slate-500 text-sm italic uppercase tracking-tighter">Sub-50ms Inference</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-white/5 border border-brand-border hover:border-brand-accent/30 transition-all">
                    <h3 className="text-white font-bold text-lg mb-2">Social Impact</h3>
                    <p className="text-slate-500 text-sm italic uppercase tracking-tighter">Empowering Independence</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="lg:col-span-4 sticky top-32 space-y-12">
            <div className="p-10 rounded-[2.5rem] bg-brand-panel border border-brand-border shadow-2xl backdrop-blur-3xl">
              <div className="mb-10">
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4 block">Core Technologies</span>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-brand-border text-[10px] font-black text-brand-accent uppercase hover:shadow-neon transition-all">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4 block">Project Status</span>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-white font-bold text-sm">Active & Scaling</span>
                </div>
              </div>

              <a href="#" className="w-full flex items-center justify-between p-6 rounded-2xl bg-brand-accent text-brand-dark font-black tracking-widest text-[11px] uppercase shadow-neon hover:scale-[1.03] transition-all">
                 Live Demo <Globe size={18} />
              </a>
            </div>

            <div className="p-10 border border-brand-border/30 rounded-[2.5rem] space-y-6">
              <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest block">Next Project</span>
              <div className="flex items-center gap-6 group cursor-pointer">
                 <div className="w-16 h-16 rounded-2xl bg-white/5 border border-brand-border flex items-center justify-center text-brand-accent group-hover:shadow-neon transition-all">
                    <ChevronRight size={24} />
                 </div>
                 <span className="text-lg font-bold group-hover:text-brand-accent transition-colors">Vision AI Intelligence</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-20 text-center border-t border-brand-border/10 text-slate-700 text-[9px] font-black uppercase tracking-[0.4em]">
        Manish Kumar &bull; Case Study Analysis &bull; © 2026
      </footer>

      <style>{`
        .neon-text { text-shadow: 0 0 10px #4da3ff, 0 0 20px #4da3ff; }
        .shadow-neon { box-shadow: 0 0 15px #4da3ff; }
      `}</style>
    </div>
  );
};

export default App;

import React, { useEffect } from "react";
import { IoArrowBack, IoSparkles, IoBookOutline, IoLayersOutline, IoMoonOutline, IoSunnyOutline, IoFlashOutline } from "react-icons/io5";

// Import images
import landingImg from "../assets/aestheticNotes/LandingPage.png";
import dashboardImg from "../assets/aestheticNotes/dashboard.png";
import summarizeImg from "../assets/aestheticNotes/summarize.png";
import summarize1Img from "../assets/aestheticNotes/summarize1.png";
import aiCompanionImg from "../assets/aestheticNotes/AI-Companion.png";
import professionalRewriteImg from "../assets/aestheticNotes/professionalRewrite.png";
import diaryImg from "../assets/aestheticNotes/Diary.png";
import tagsImg from "../assets/aestheticNotes/tags.png";

const AestheticNotes = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-rose-500/30 selection:text-rose-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-lg border-b border-white/5 bg-black/20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 group transition-all duration-300 hover:text-rose-400"
        >
          <IoArrowBack className="text-xl group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium uppercase tracking-widest">Back to Portfolio</span>
        </button>
        <div className="text-xs font-light tracking-[0.4em] uppercase text-gray-500">
          Case Study &bull; 2024
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-rose-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 mb-8 animate-fade-in">
            <IoSparkles className="text-sm" />
            <span className="text-[10px] font-bold uppercase tracking-widest">AI-Powered Creativity</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Aesthetic Notes
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed mb-12">
            An immersive, AI-enhanced writing studio designed for creativity, clarity, and flow.
          </p>
          
          <div className="relative group max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 transition-transform duration-700 hover:scale-[1.02]">
            <img 
              src={landingImg} 
              alt="Aesthetic Notes Hero" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </header>

      {/* Features Showcase */}
      <main className="max-w-6xl mx-auto px-6 py-32 space-y-48">
        
        {/* Immersive Book-Like Interface */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
              <IoBookOutline className="text-2xl text-rose-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Immersive Book-Like Interface</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Experience writing in a distraction-free environment that mimics the feel of a physical notebook. Our single-page focused writing UI ensures your thoughts stay at the center, complemented by smooth micro-animations that make every interaction feel fluid and alive.
            </p>
            <ul className="space-y-3 pt-4">
              {['Notebook-style UI', 'Focused single-page writing', 'Fluid micro-animations'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <img src={dashboardImg} alt="Immersive Interface" className="w-full transition-transform duration-700 group-hover:scale-105" />
          </div>
        </section>

        {/* AI-Powered Creative Studio */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
          <div className="md:order-2 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
              <IoSparkles className="text-2xl text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">AI-Powered Creative Studio</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Elevate your writing process with a suite of minimalist AI tools. Summarize complex thoughts in seconds, extract deep insights from your notes, or engage in a direct chat with your own content to discover connections you never knew existed.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
               <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Summarize</h4>
                  <p className="text-gray-500 text-[11px]">Condense chapters effortlessly.</p>
               </div>
               <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-1">Chat</h4>
                  <p className="text-gray-500 text-[11px]">Talk to your internal knowledge.</p>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <img src={summarizeImg} alt="AI Summarize" className="rounded-xl border border-white/10 shadow-xl" />
              <img src={aiCompanionImg} alt="AI Companion" className="rounded-xl border border-white/10 shadow-xl" />
            </div>
            <div className="space-y-4">
              <img src={professionalRewriteImg} alt="AI Rewrite" className="rounded-xl border border-white/10 shadow-xl" />
              <img src={summarize1Img} alt="AI Insights" className="rounded-xl border border-white/10 shadow-xl" />
            </div>
          </div>
        </section>

        {/* Smart Manual Pagination */}
        <section className="relative py-20 bg-white/5 rounded-3xl border border-white/10 px-8 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="max-w-3xl mx-auto space-y-6">
            <IoLayersOutline className="text-4xl text-emerald-400 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Smart Manual Pagination</h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Take control of your content structure with intelligent content splitting. Add pages and chapters with ease, while the system handles the visual flow, ensuring a seamless transition across your masterpiece.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto rounded-xl overflow-hidden border border-white/20 shadow-2xl">
             <img src={dashboardImg} alt="Pagination flow" className="w-full opacity-60" />
          </div>
        </section>

        {/* Theming & Feedback */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Fluid Light & Dark Theming */}
          <div className="p-10 rounded-3xl bg-neutral-950 border border-white/10 flex flex-col justify-between group">
            <div className="space-y-6">
               <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                    <IoSunnyOutline className="text-xl text-yellow-500" />
                 </div>
                 <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                    <IoMoonOutline className="text-xl text-indigo-400" />
                 </div>
               </div>
               <h3 className="text-2xl font-semibold">Fluid Light & Dark Theming</h3>
               <p className="text-gray-500 font-light">
                 A design that adapts to your environment. Whether you're a night owl or a daylight worker, Aesthetic Notes offers a premium visual experience in both modes.
               </p>
            </div>
            <div className="mt-12 relative flex gap-4 overflow-hidden mask-fade-right">
               <img src={landingImg} alt="Light Mode" className="w-1/2 rounded-lg border border-white/5 opacity-80" />
               <img src={dashboardImg} alt="Dark Mode" className="w-1/2 rounded-lg border border-white/5" />
            </div>
          </div>

          {/* Aesthetic Feedback Loop */}
          <div className="p-10 rounded-3xl bg-neutral-950 border border-white/10 flex flex-col justify-between group">
            <div className="space-y-6">
               <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center border border-rose-500/20">
                  <IoFlashOutline className="text-xl text-rose-400" />
               </div>
               <h3 className="text-2xl font-semibold">Aesthetic Feedback Loop</h3>
               <p className="text-gray-500 font-light">
                 Minimalist notification design powered by Sonner. Get subtle, non-intrusive updates about your note actions through beautifully crafted toast messages.
               </p>
            </div>
            <div className="mt-12 flex justify-center items-center">
               <img src={tagsImg} alt="Feedback Loop" className="max-w-xs rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-110" />
            </div>
          </div>
        </section>

        {/* Modes Overview */}
        <section className="space-y-16 py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Modes Designed for Your Work</h2>
            <p className="mt-4 text-gray-500 font-light">Switch between specialized interfaces tailored for your specific creative needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
              <h4 className="text-xl font-medium tracking-tight">Studio Note</h4>
              <p className="text-gray-500 text-sm font-light">The standard powerful writing mode with AI at your fingertips.</p>
              <img src={dashboardImg} alt="Studio Mode" className="rounded-xl border border-white/5 opacity-50" />
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
              <h4 className="text-xl font-medium tracking-tight">Novel Mode</h4>
              <p className="text-gray-500 text-sm font-light">Chapter-based writing tailored for long-form storytelling and novels.</p>
              <img src={dashboardImg} alt="Novel Mode" className="rounded-xl border border-white/5 opacity-50 grayscale" />
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
              <h4 className="text-xl font-medium tracking-tight text-rose-400">Diary Mode</h4>
              <p className="text-gray-500 text-sm font-light">Date-stamped entries for personal reflections and mindful journaling.</p>
              <img src={diaryImg} alt="Diary Mode" className="rounded-xl border border-white/5" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer Call to Action */}
      <footer className="max-w-6xl mx-auto px-6 py-40 border-t border-white/5 text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          Ready to experience the <br />
          <span className="text-rose-500">future of writing?</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://ishika1214.github.io/Aesthetic-Notes/" target="_blank" rel="noreferrer" className="px-10 py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-medium transition-all shadow-lg shadow-rose-900/40">
            Launch App
          </a>
          <button onClick={onBack} className="px-10 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 font-medium transition-all">
            See More Projects
          </button>
        </div>
      </footer>
    </div>
  );
};

export default AestheticNotes;

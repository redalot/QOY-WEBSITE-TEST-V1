import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Swords, Shield, Target } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-gradient-to-br from-cavalry-blue via-blue-950 to-black overflow-hidden border-b-4 border-qoy-yellow">
        <div className="absolute inset-0 z-0 opacity-30">
           <img src="/gallery-1.jpg" alt="QOY Banner" className="w-full h-full object-cover blur-sm opacity-20 scale-110" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src="/qoy-badge.jpg" alt="QOY Badge" className="mx-auto w-32 h-32 md:w-56 md:h-56 mb-8 rounded-full border-4 border-qoy-yellow shadow-[0_0_50px_rgba(255,215,0,0.3)] animate-pulse-slow" />
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 text-qoy-yellow uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Queen's Own Yeomanry
            </h1>
            <p className="text-xl md:text-3xl text-blue-200 mb-10 font-bold tracking-widest uppercase opacity-90">
              Cavalry • Reconnaissance • Strike
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a href="https://discord.gg/4fjPfJFVgt" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-qoy-yellow hover:bg-white text-cavalry-blue font-black rounded-sm transition-all transform hover:scale-105 shadow-[0_10px_20px_rgba(0,0,0,0.4)] flex items-center justify-center gap-2 uppercase tracking-tighter">
                Join the Fight <ArrowRight size={20} />
              </a>
              <Link to="/manual" className="px-10 py-4 bg-transparent hover:bg-white/10 text-white font-black rounded-sm transition-all transform hover:scale-105 shadow-lg border-2 border-white/50 uppercase tracking-tighter">
                View Field Manual
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            
            <FeatureCard 
              icon={<Swords size={48} className="text-qoy-yellow" />}
              title="Light Cavalry"
              description="Fast-moving, hard-hitting reconnaissance and direct action operations using light vehicles and infantry tactics."
            />
            
            <FeatureCard 
              icon={<Target size={48} className="text-qoy-yellow" />}
              title="Reconnaissance"
              description="Operating behind enemy lines to locate threats, acquire targets, and disrupt enemy logistics."
            />
            
            <FeatureCard 
              icon={<Shield size={48} className="text-qoy-yellow" />}
              title="Immersion & Realism"
              description="A balance of serious milsim procedures with a fun, engaging community atmosphere. No 'Yes Sir' needed."
            />

          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-slate-800 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Operations In Action</h2>
              <p className="text-gray-400 max-w-xl text-lg">
                A glimpse into our recent deployments and training exercises.
              </p>
            </div>
            <Link to="/gallery" className="text-qoy-yellow font-black hover:text-white flex items-center gap-2 border-b-2 border-qoy-yellow pb-1 uppercase tracking-tighter">
              View All Screenshots <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <GalleryImg src="/gallery-1.jpg" />
            <GalleryImg src="/gallery-2.jpg" />
            <GalleryImg src="/gallery-3.jpg" />
            <GalleryImg src="/gallery-4.jpg" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-cavalry-blue text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-qoy-yellow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-qoy-yellow uppercase tracking-tighter">Ready to Enlist?</h2>
          <p className="text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-medium">
            Join our discord, speak to the recruitment team, and start your journey from Recruit to Trooper today.
          </p>
          <a href="https://discord.gg/4fjPfJFVgt" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-5 bg-qoy-yellow text-cavalry-blue font-black text-xl rounded-sm hover:bg-white transition-all shadow-2xl uppercase tracking-widest">
            Join Our Discord
          </a>
        </div>
      </section>
    </div>
  );
};

const GalleryImg = ({ src }) => (
  <motion.div 
    whileHover={{ scale: 1.05, y: -10 }}
    className="relative group cursor-pointer"
  >
    <img src={src} alt="Gallery" className="rounded-sm h-64 w-full object-cover shadow-2xl border border-white/10" />
    <div className="absolute inset-0 bg-qoy-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-sm"></div>
  </motion.div>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -15 }}
    className="bg-slate-800 p-10 rounded-sm shadow-2xl border-t-4 border-qoy-yellow hover:bg-slate-700 transition-all"
  >
    <div className="mb-8 bg-cavalry-blue w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-xl border border-qoy-yellow/30">
      {icon}
    </div>
    <h3 className="text-3xl font-black mb-6 text-center text-white uppercase tracking-tighter">{title}</h3>
    <p className="text-slate-300 text-center leading-relaxed text-lg">
      {description}
    </p>
  </motion.div>
);

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-slate-700 p-8 rounded-2xl shadow-xl border border-slate-600 hover:border-yellow-500 transition-all"
  >
    <div className="mb-6 bg-slate-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-inner">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-center text-white">{title}</h3>
    <p className="text-slate-300 text-center leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export default Home;
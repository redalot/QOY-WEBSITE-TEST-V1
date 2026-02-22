import { motion } from 'framer-motion';
import { Clock, Calendar, ShieldCheck, Smile } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-blue-900 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">About The Unit</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
          The Queen's Own Yeomanry is a reserve light cavalry regiment, specializing in reconnaissance and direct action.
        </p>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Mission & Role */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 border-l-4 border-yellow-500 pl-4">Who We Are</h2>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Our role is twofold - overt and covert operations. The majority of our operations are combat based, playing as either light or mounted infantry performing front-line combat duties.
            </p>
            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
              Our second specialist role is to advance ahead of the main force, behind enemy lines to locate enemy positions and movement - to advise on enemy threats and to acquire targets of opportunity.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Beyond reconnaissance, we also conduct a wide variety of other covert operations; from disrupting enemy activity through ambushes, raids and other sabotage operations.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-slate-800 p-8 rounded-xl shadow-2xl border border-slate-700"
          >
             <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
               <ShieldCheck className="text-yellow-500" /> Our Attitude
             </h3>
             <ul className="space-y-4 text-gray-300">
               <li className="flex items-start gap-3">
                 <span className="text-yellow-500 font-bold">•</span>
                 <span>Serious and immersive during operations, but relaxed and informal otherwise.</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="text-yellow-500 font-bold">•</span>
                 <span>Rank structure keeps things in order, but no need for "yes sir".</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="text-yellow-500 font-bold">•</span>
                 <span>Real life ALWAYS comes first. No formal attendance policy.</span>
               </li>
               <li className="flex items-start gap-3">
                 <span className="text-yellow-500 font-bold">•</span>
                 <span>First person only, balanced medical difficulty, and realistic kit.</span>
               </li>
             </ul>
          </motion.div>
        </section>

        {/* Schedule */}
        <section className="bg-slate-800 rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-center text-white mb-10">Operation Schedule</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-900/50 p-6 rounded-lg border border-blue-700 flex flex-col items-center text-center">
              <Calendar size={48} className="text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Main Operations</h3>
              <p className="text-blue-200">Tuesday & Sunday</p>
              <div className="flex items-center gap-2 mt-4 text-yellow-400 font-mono text-lg bg-blue-900 px-4 py-2 rounded">
                <Clock size={20} /> 20:00 - 22:30 UK Time
              </div>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 flex flex-col items-center text-center">
              <Smile size={48} className="text-gray-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Mini-Ops & Training</h3>
              <p className="text-gray-300">Thursday or Friday</p>
              <p className="text-sm text-gray-400 mt-2 italic">Optional fun missions, Antistasi, or Liberation on off-nights.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
import { motion } from 'framer-motion';
import { Clock, Calendar, ShieldCheck, Smile } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-cavalry-blue py-20 text-center border-b-4 border-qoy-yellow">
        <h1 className="text-5xl md:text-6xl font-black text-qoy-yellow mb-6 uppercase tracking-tighter">Unit History & Ethos</h1>
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto px-4 font-bold uppercase tracking-widest leading-relaxed">
          Operating since 2022 with members from across the world.
          <br />
          <span className="text-white opacity-60 text-lg">The Queen's Own Yeomanry is a premier reserve light cavalry regiment.</span>
        </p>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-24">
        
        {/* Mission & Role */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-black text-qoy-yellow mb-8 border-l-8 border-qoy-yellow pl-6 uppercase tracking-tighter">Who We Are</h2>
            <p className="text-gray-300 mb-6 text-xl leading-relaxed font-medium">
              Our role is twofold - overt and covert operations. The majority of our operations are combat based, playing as either light or mounted infantry performing front-line combat duties.
            </p>
            <p className="text-gray-300 mb-6 text-xl leading-relaxed">
              Our second specialist role is to advance ahead of the main force, behind enemy lines to locate enemy positions and movement - to advise on enemy threats and to acquire targets of opportunity.
            </p>
            <p className="text-gray-300 text-xl leading-relaxed">
              Beyond reconnaissance, we also conduct a wide variety of other covert operations; from disrupting enemy activity through ambushes, raids and other sabotage operations.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-cavalry-blue/30 p-10 rounded-sm shadow-2xl border-l-8 border-qoy-yellow"
          >
             <h3 className="text-3xl font-black text-white mb-8 flex items-center gap-4 uppercase tracking-tighter">
               <ShieldCheck className="text-qoy-yellow" size={32} /> Our Ethos
             </h3>
             <ul className="space-y-6 text-gray-300 text-lg font-bold uppercase tracking-tight">
               <li className="flex items-start gap-4">
                 <span className="text-qoy-yellow font-black">»</span>
                 <span>Serious and immersive during operations, relaxed otherwise.</span>
               </li>
               <li className="flex items-start gap-4">
                 <span className="text-qoy-yellow font-black">»</span>
                 <span>Rank structure for order, but no "Yes Sir" required.</span>
               </li>
               <li className="flex items-start gap-4">
                 <span className="text-qoy-yellow font-black">»</span>
                 <span>Real life ALWAYS comes first. No formal attendance policy.</span>
               </li>
               <li className="flex items-start gap-4">
                 <span className="text-qoy-yellow font-black">»</span>
                 <span>First person only, realistic kit, and balanced difficulty.</span>
               </li>
             </ul>
          </motion.div>
        </section>

        {/* Schedule */}
        <section className="bg-slate-800 rounded-sm p-12 md:p-20 shadow-2xl border border-white/5">
          <h2 className="text-4xl font-black text-center text-white mb-16 uppercase tracking-tighter">Operation Schedule</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-cavalry-blue p-10 rounded-sm border border-qoy-yellow/30 flex flex-col items-center text-center shadow-2xl">
              <Calendar size={64} className="text-qoy-yellow mb-6" />
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Main Operations</h3>
              <p className="text-blue-200 text-lg font-bold mb-6">Tuesday & Sunday</p>
              <div className="flex items-center gap-3 text-qoy-yellow font-black text-2xl bg-black/40 px-8 py-4 rounded-sm border border-qoy-yellow/20">
                <Clock size={28} /> 20:00 - 22:30 UK
              </div>
            </div>

            <div className="bg-slate-700/30 p-10 rounded-sm border border-white/10 flex flex-col items-center text-center">
              <Smile size={64} className="text-gray-500 mb-6" />
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter opacity-80">Mini-Ops & Fun</h3>
              <p className="text-gray-400 text-lg font-bold mb-4">Thursday or Friday</p>
              <p className="text-gray-500 italic max-w-xs leading-relaxed">
                Optional training, Antistasi, or community-led missions on off-nights.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
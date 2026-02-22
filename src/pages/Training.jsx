import { motion } from 'framer-motion';
import { Award, BookOpen, Target, Crosshair, Zap, Star, Shield, User } from 'lucide-react';

const Training = () => {
  const ranks = [
    { rank: 'Recruit', req: 'Join Discord & @RTT', color: 'bg-slate-700', icon: <User /> },
    { rank: 'Junior Trooper', req: 'Phase 1 + 1 Op', color: 'bg-green-700', icon: <Award /> },
    { rank: 'Trooper', req: 'Phase 1 Test (1+ Mo)', color: 'bg-cavalry-blue', icon: <Shield /> },
    { rank: 'Lance Corporal', req: 'Phase 2 + Merit', color: 'bg-blue-700', icon: <Star /> },
    { rank: 'Corporal', req: 'JLC + Merit', color: 'bg-indigo-800', icon: <Star /> },
    { rank: 'Sergeant', req: 'SLC + Merit', color: 'bg-qoy-yellow', icon: <Star />, darkText: true },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen pb-20">
      <div className="bg-cavalry-blue py-16 text-center border-b-4 border-qoy-yellow">
        <h1 className="text-5xl font-black text-qoy-yellow mb-4 uppercase tracking-tighter">Unit Progression</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4 font-bold uppercase tracking-widest opacity-80">
          Career Path & Specialist Training
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Progression Diagram */}
        <section className="mb-32">
          <h2 className="text-4xl font-black text-center text-white mb-20 uppercase tracking-tighter">Career Progression</h2>
          
          <div className="relative max-w-5xl mx-auto">
             {/* Path Line */}
             <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 hidden lg:block"></div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
               {ranks.map((r, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: i * 0.1 }}
                   viewport={{ once: true }}
                   className="relative flex flex-col items-center"
                 >
                   <div className={`${r.color} ${r.darkText ? 'text-cavalry-blue' : 'text-white'} w-20 h-20 rounded-full flex items-center justify-center shadow-2xl z-10 border-4 border-slate-900 mb-6 group-hover:scale-110 transition-transform`}>
                     {r.icon}
                   </div>
                   <h3 className="text-xl font-black text-white mb-2 text-center uppercase tracking-tighter">{r.rank}</h3>
                   <p className="text-sm text-gray-400 text-center font-bold uppercase tracking-widest leading-tight">{r.req}</p>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>

        {/* Detailed Path Info */}
        <section className="mb-32 bg-slate-800/50 p-12 rounded-sm border border-white/5">
           <div className="grid md:grid-cols-3 gap-12">
             <div className="space-y-4">
               <h3 className="text-qoy-yellow font-black text-2xl uppercase tracking-tighter border-b border-qoy-yellow/30 pb-2">Phase 1</h3>
               <p className="text-gray-300">Initial induction and basic drills. Learn how the unit operates, our SOPs, and the buddy-buddy system.</p>
             </div>
             <div className="space-y-4">
               <h3 className="text-qoy-yellow font-black text-2xl uppercase tracking-tighter border-b border-qoy-yellow/30 pb-2">Phase 2</h3>
               <p className="text-gray-300">Advanced tactical training. Covers FIBUA, Heli Drills, Patrols, and specific combat drills for modern warfare.</p>
             </div>
             <div className="space-y-4">
               <h3 className="text-qoy-yellow font-black text-2xl uppercase tracking-tighter border-b border-qoy-yellow/30 pb-2">Leadership</h3>
               <p className="text-gray-300">JLC and SLC courses for those showing merit and commitment, preparing you for NCO and command roles.</p>
             </div>
           </div>
        </section>

        {/* Course Catalog */}
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Phase 2 Modules */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-cavalry-blue/30 p-10 rounded-sm border-l-8 border-qoy-yellow"
          >
            <div className="flex items-center gap-4 mb-10">
              <BookOpen className="text-qoy-yellow" size={48} />
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Phase 2 Modules</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <CourseItem name="Heli Drills" />
              <CourseItem name="FIBUA (Urban)" />
              <CourseItem name="Boat Drills" />
              <CourseItem name="Parachute" />
              <CourseItem name="Overt Patrol" />
              <CourseItem name="Covert Patrol" />
              <CourseItem name="Guerrilla Warfare" />
              <CourseItem name="Navigation" />
              <CourseItem name="Combat Marksmanship" />
              <CourseItem name="Driving" />
              <CourseItem name="Signals" />
              <CourseItem name="All-Arms Commando" highlight />
            </div>
          </motion.div>

          {/* Specialisations */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800 p-10 rounded-sm border-l-8 border-white/20"
          >
            <div className="flex items-center gap-4 mb-10">
              <Crosshair className="text-white" size={48} />
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">Specialisations</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <SpecItem name="Medic" color="text-red-400 border-red-900/50 bg-red-900/20" />
              <SpecItem name="Heavy AT" color="text-orange-400 border-orange-900/50 bg-orange-900/20" />
              <SpecItem name="Pointman" color="text-green-400 border-green-900/50 bg-green-900/20" />
              <SpecItem name="GPMG Gunner" color="text-slate-300 border-slate-600 bg-slate-700/50" />
              <SpecItem name="Sharpshooter" color="text-blue-300 border-blue-900/50 bg-blue-900/20" />
              <SpecItem name="Sniper" color="text-emerald-400 border-emerald-900/50 bg-emerald-900/20" />
              <SpecItem name="Mortar" color="text-yellow-600 border-yellow-900/50 bg-yellow-900/20" />
              <SpecItem name="Assault Pioneer" color="text-purple-400 border-purple-900/50 bg-purple-900/20" />
              <SpecItem name="FAC / MFC" color="text-cyan-400 border-cyan-900/50 bg-cyan-900/20" />
              <SpecItem name="Air Defence" color="text-indigo-400 border-indigo-900/50 bg-indigo-900/20" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const CourseItem = ({ name, highlight }) => (
  <div className={`p-4 rounded-sm border-2 text-center font-bold text-sm uppercase tracking-tighter transition-all hover:scale-105 ${highlight ? 'border-qoy-yellow text-qoy-yellow shadow-lg shadow-qoy-yellow/10' : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}`}>
    {name}
  </div>
);

const SpecItem = ({ name, color }) => (
  <div className={`p-4 rounded-sm border-2 text-center font-black text-sm uppercase tracking-tighter hover:scale-105 transition-all cursor-default ${color}`}>
    {name}
  </div>
);

export default Training;
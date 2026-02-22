import { motion } from 'framer-motion';
import { Shield, Radio, Crosshair, BriefcaseMedical, Flame, Target, Info } from 'lucide-react';

const Manual = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen pb-20">
      <div className="bg-cavalry-blue py-16 text-center border-b-4 border-qoy-yellow">
        <h1 className="text-5xl font-black text-qoy-yellow mb-4 uppercase tracking-tighter">Field Manual</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4 font-bold uppercase tracking-widest opacity-80">
          Standard Operating Procedures & Equipment Loadouts
        </p>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Rifle Section Loadout */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Infographic side */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full sticky top-24"
            >
              <h2 className="text-4xl font-black text-qoy-yellow mb-8 uppercase tracking-tighter">Rifle Section Composition</h2>
              <div className="bg-white p-4 rounded-sm shadow-2xl border-4 border-qoy-yellow/20">
                 <img 
                   src={`${import.meta.env.BASE_URL}qoy-rifle-section.png`} 
                   alt="Rifle Section Infographic" 
                   className="w-full h-auto shadow-inner"
                 />
              </div>
              <div className="mt-6 flex items-start gap-4 text-gray-400 bg-slate-800 p-6 rounded-sm border border-white/5">
                <Info className="text-qoy-yellow flex-shrink-0" size={24} />
                <p className="text-sm italic">"The rifle section is the core combat element of our unit, split into Charlie and Delta fireteams for tactical flexibility."</p>
              </div>
            </motion.div>

            {/* Cards side */}
            <div className="lg:w-1/2 w-full space-y-12">
               {/* Charlie Fireteam */}
               <div>
                  <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b-2 border-qoy-yellow/30 pb-2">Charlie Fireteam</h3>
                  <div className="space-y-4">
                    <LoadoutCard role="Section Commander" weapon="L85A2 UGL" secondary="NLAW" equipment="LR Radio" />
                    <LoadoutCard role="Sharpshooter" weapon="L129A1" secondary="ILAW" />
                    <LoadoutCard role="Minimi Gunner" weapon="L110A1" />
                    <LoadoutCard role="Medic" weapon="L85A2" secondary="ILAW" />
                  </div>
               </div>

               {/* Delta Fireteam */}
               <div>
                  <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b-2 border-qoy-yellow/30 pb-2">Delta Fireteam</h3>
                  <div className="space-y-4">
                    <LoadoutCard role="Fire Team Leader" weapon="L85A2" secondary="NLAW" />
                    <LoadoutCard role="Rifleman" weapon="L85A2" secondary="NLAW" />
                    <LoadoutCard role="LSW Gunner" weapon="L86A2 LSW" secondary="ILAW" />
                    <LoadoutCard role="Medic" weapon="L85A2" secondary="ILAW" />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Fire Support Group */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-start">
            {/* Infographic side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 w-full sticky top-24"
            >
              <h2 className="text-4xl font-black text-qoy-yellow mb-8 uppercase tracking-tighter text-right">Fire Support Group</h2>
              <div className="bg-white p-4 rounded-sm shadow-2xl border-4 border-qoy-yellow/20">
                 <img 
                   src={`${import.meta.env.BASE_URL}qoy-fire-support-group.png`} 
                   alt="Fire Support Group Infographic" 
                   className="w-full h-auto shadow-inner"
                 />
              </div>
            </motion.div>

            {/* Cards side */}
            <div className="lg:w-1/2 w-full space-y-12">
               {/* Gun Team */}
               <div>
                  <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b-2 border-qoy-yellow/30 pb-2">Gun Team</h3>
                  <div className="space-y-4">
                    <LoadoutCard role="Section Commander" weapon="L85A2" secondary="Javelin Tube / NLAW" equipment="LR Radio" />
                    <LoadoutCard role="GPMG Gunner" weapon="L7A2 GPMG" equipment="Static Tripod" />
                    <LoadoutCard role="GPMG Gunner" weapon="L7A2 GPMG" equipment="Static Tripod" />
                    <LoadoutCard role="Medic" weapon="L85A2" secondary="Javelin Tube / ILAW" />
                  </div>
               </div>

               {/* AT Team */}
               <div>
                  <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest border-b-2 border-qoy-yellow/30 pb-2">Anti-Tank Team</h3>
                  <div className="space-y-4">
                    <LoadoutCard role="Fire Team Leader" weapon="L85A2" secondary="Javelin Tube / NLAW" />
                    <LoadoutCard role="Javelin Gunner" weapon="L85A2" secondary="Javelin Launcher + CLU" />
                    <LoadoutCard role="MAAWs Gunner" weapon="L85A2" secondary="MAAWS Mk4" />
                    <LoadoutCard role="Rifleman" weapon="L85A2" secondary="Javelin Tube / NLAW" />
                  </div>
               </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

const LoadoutCard = ({ role, weapon, secondary, equipment }) => (
  <motion.div 
    whileHover={{ x: 10 }}
    className="bg-slate-800/80 p-6 rounded-sm border-l-4 border-qoy-yellow hover:bg-cavalry-blue/40 shadow-xl transition-all"
  >
    <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-2">{role}</h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="text-sm">
        <span className="text-qoy-yellow font-black uppercase text-xs tracking-widest block mb-1">Primary Weapon</span>
        <span className="text-white font-bold">{weapon}</span>
      </div>
      {secondary && (
        <div className="text-sm">
          <span className="text-red-400 font-black uppercase text-xs tracking-widest block mb-1">Launcher / Secondary</span>
          <span className="text-white font-bold">{secondary}</span>
        </div>
      )}
      {equipment && (
        <div className="text-sm col-span-full pt-2 border-t border-white/5">
          <span className="text-blue-400 font-black uppercase text-xs tracking-widest block mb-1">Special Equipment</span>
          <span className="text-white font-bold">{equipment}</span>
        </div>
      )}
    </div>
  </motion.div>
);

export default Manual;
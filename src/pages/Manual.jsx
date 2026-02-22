import { motion } from 'framer-motion';
import { Shield, Radio, Crosshair, BriefcaseMedical, Flame } from 'lucide-react';

const Manual = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen pb-20">
      <div className="bg-blue-900 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Field Manual</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
          Standard Operating Procedures & Equipment Loadouts.
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        
        {/* Rifle Section Loadout */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Rifle Section Composition</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A standard QOY Rifle Section consists of two fireteams: Charlie and Delta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Charlie Fireteam */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-qoy-yellow border-b-2 border-qoy-yellow/30 pb-2 uppercase">Charlie Fireteam</h3>
              
              <LoadoutCard 
                role="Section Commander"
                weapon="L85A2 UGL"
                secondary="NLAW"
                equipment="Long Range Radio"
                icon={<Radio size={24} className="text-qoy-yellow" />}
              />
              <LoadoutCard 
                role="Sharpshooter"
                weapon="L129A1"
                secondary="ILAW"
                icon={<Crosshair size={24} className="text-red-400" />}
              />
              <LoadoutCard 
                role="Minimi Gunner"
                weapon="L110A1"
                icon={<Flame size={24} className="text-orange-500" />}
              />
              <LoadoutCard 
                role="Medic"
                weapon="L85A2"
                secondary="ILAW"
                icon={<BriefcaseMedical size={24} className="text-green-500" />}
              />
            </div>

            {/* Delta Fireteam */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-qoy-yellow border-b-2 border-qoy-yellow/30 pb-2 uppercase">Delta Fireteam</h3>
              
              <LoadoutCard 
                role="Fire Team Leader"
                weapon="L85A2"
                secondary="NLAW"
                icon={<Shield size={24} className="text-qoy-yellow" />}
              />
              <LoadoutCard 
                role="Rifleman"
                weapon="L85A2"
                secondary="NLAW"
                icon={<Shield size={24} className="text-gray-400" />}
              />
              <LoadoutCard 
                role="LSW Gunner"
                weapon="L86A2 LSW"
                secondary="ILAW"
                icon={<Flame size={24} className="text-orange-500" />}
              />
              <LoadoutCard 
                role="Medic"
                weapon="L85A2"
                secondary="ILAW"
                icon={<BriefcaseMedical size={24} className="text-green-500" />}
              />
            </div>
          </div>
        </section>

        {/* Fire Support Group */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Fire Support Group</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Specialist heavy weapons teams providing anti-tank and suppression capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Gun Team */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-qoy-yellow border-b-2 border-qoy-yellow/30 pb-2 uppercase">Gun Team</h3>
              
              <LoadoutCard 
                role="Section Commander"
                weapon="L85A2"
                secondary="Javelin Tube / NLAW"
                equipment="Long Range Radio"
                icon={<Radio size={24} className="text-qoy-yellow" />}
              />
              <LoadoutCard 
                role="GPMG Gunner"
                weapon="L7A2 GPMG"
                equipment="Static Weapon Tripod"
                icon={<Flame size={24} className="text-orange-500" />}
              />
              <LoadoutCard 
                role="GPMG Gunner"
                weapon="L7A2 GPMG"
                equipment="Static Weapon Tripod"
                icon={<Flame size={24} className="text-orange-500" />}
              />
              <LoadoutCard 
                role="Medic"
                weapon="L85A2"
                secondary="Javelin Tube / ILAW"
                icon={<BriefcaseMedical size={24} className="text-green-500" />}
              />
            </div>

            {/* Anti-Tank Team */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-qoy-yellow border-b-2 border-qoy-yellow/30 pb-2 uppercase">Anti-Tank Team</h3>
              
              <LoadoutCard 
                role="Fire Team Leader"
                weapon="L85A2"
                secondary="Javelin Tube / NLAW"
                icon={<Shield size={24} className="text-qoy-yellow" />}
              />
              <LoadoutCard 
                role="Javelin Gunner"
                weapon="L85A2"
                secondary="Javelin Launcher + CLU"
                icon={<Target size={24} className="text-red-500" />}
              />
              <LoadoutCard 
                role="MAAWs Gunner"
                weapon="L85A2"
                secondary="MAAWS Mk4"
                icon={<Flame size={24} className="text-red-400" />}
              />
              <LoadoutCard 
                role="Rifleman"
                weapon="L85A2"
                secondary="Javelin Tube / NLAW"
                icon={<Shield size={24} className="text-gray-400" />}
              />
              <LoadoutCard 
                role="Medic"
                weapon="L85A2"
                secondary="Javelin Tube / ILAW"
                icon={<BriefcaseMedical size={24} className="text-green-500" />}
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

const LoadoutCard = ({ role, weapon, secondary, equipment, icon }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className="bg-slate-800 p-6 rounded-lg border-l-4 border-slate-600 hover:border-yellow-500 shadow-md flex items-center gap-4 transition-all"
  >
    <div className="bg-slate-900 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-white">{role}</h4>
      <div className="text-sm text-gray-300 mt-1">
        <span className="font-semibold text-blue-300">Pri:</span> {weapon}
      </div>
      {secondary && (
        <div className="text-sm text-gray-300">
          <span className="font-semibold text-red-300">Sec:</span> {secondary}
        </div>
      )}
      {equipment && (
        <div className="text-sm text-gray-300">
          <span className="font-semibold text-yellow-300">Eqp:</span> {equipment}
        </div>
      )}
    </div>
  </motion.div>
);

export default Manual;
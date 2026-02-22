import { motion } from 'framer-motion';
import { Users, User, Shield } from 'lucide-react';

const Structure = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen pb-20">
      <div className="bg-blue-900 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Unit ORBAT</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
          Organizational Breakdown of 1 Troop, A Squadron, Queen's Own Yeomanry.
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Troop HQ */}
        <div className="flex justify-center mb-16">
          <SectionCard 
            title="1 Troop HQ"
            color="border-yellow-500"
            members={[
              { role: "Troop Cmdr (0A)", name: "Lt. Sunny", rank: "Lt." },
              { role: "Troop Sgt (0B)", name: "SSgt. Heroic", rank: "SSgt." }
            ]}
            icon={<Shield size={32} className="text-yellow-500" />}
          />
        </div>

        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* 1 Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-blue-300 border-b-2 border-blue-500 pb-2">1 Section</h2>
            
            <SectionCard 
              title="Section Command"
              color="border-blue-500"
              members={[
                { role: "Section Commander", name: "SSgt. Heroic", rank: "SSgt." }
              ]}
            />
            
            <div className="grid sm:grid-cols-2 gap-6">
              <FireteamCard 
                name="Charlie Fireteam (1-1C)"
                leader={{ role: "Fireteam Leader (2IC)", name: "Cpl. Hofi" }}
                members={[
                  { role: "LMG/LSW", name: "VACANT" },
                  { role: "Sharpshooter", name: "VACANT" },
                  { role: "Rifleman", name: "Cpl. Guts" },
                  { role: "Rifleman", name: "Tpr. George" },
                  { role: "Rifleman (CLS)", name: "SnrTpr. Mooch" }
                ]}
              />
              <FireteamCard 
                name="Delta Fireteam (1-1D)"
                leader={{ role: "Fireteam Leader (3IC)", name: "Tpr. BT" }}
                members={[
                  { role: "Sharpshooter", name: "SnrTpr. Greystone" },
                  { role: "Rifleman", name: "SnrTpr. Hunter" },
                  { role: "Medic", name: "LCpl. Ven" },
                  { role: "LMG/GPMG", name: "Tpr. Kestrel" },
                  { role: "Anti-Tank", name: "SnrTpr. Tomato" }
                ]}
              />
            </div>
            
             <SectionCard 
              title="1 Section Overflow"
              color="border-gray-500"
              members={[
                { role: "Rifleman", name: "Tpr. Mauve", rank: "" },
                { role: "Rifleman", name: "VACANT", rank: "" }
              ]}
              compact
            />
          </div>

          {/* 2 Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-green-300 border-b-2 border-green-500 pb-2">2 Section</h2>
            
            <SectionCard 
              title="Section Command"
              color="border-green-500"
              members={[
                { role: "Section Commander", name: "Sgt. Noble", rank: "Sgt." }
              ]}
            />
            
            <div className="grid sm:grid-cols-2 gap-6">
              <FireteamCard 
                name="Charlie Fireteam (1-2C)"
                leader={{ role: "Fireteam Leader (2IC)", name: "Cpl. Frog" }}
                members={[
                  { role: "LMG/LSW", name: "Tpr. Bird" },
                  { role: "Sharpshooter", name: "LCpl. David" },
                  { role: "Rifleman", name: "VACANT" },
                  { role: "Rifleman", name: "Cpl. Loggieman" },
                  { role: "Rifleman (CLS)", name: "Tpr. Ryan" }
                ]}
              />
              <FireteamCard 
                name="Delta Fireteam (1-2D)"
                leader={{ role: "Fireteam Leader (3IC)", name: "Cpl. Smudger" }}
                members={[
                  { role: "Sharpshooter", name: "SnrTpr. Felix" },
                  { role: "Rifleman", name: "VACANT" },
                  { role: "Medic", name: "LCpl. Smith" },
                  { role: "LMG/GPMG", name: "SnrTpr. Nick" },
                  { role: "Anti-Tank", name: "SnrTpr. Haydak" }
                ]}
              />
            </div>

            <SectionCard 
              title="2 Section Overflow"
              color="border-gray-500"
              members={[
                { role: "Rifleman (CLS)", name: "Sgt. Smurf", rank: "" },
                { role: "Rifleman", name: "LCpl. Tyro", rank: "" }
              ]}
              compact
            />
          </div>
        </div>

        {/* Support Roles */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
           <AdminCard title="Head Admin" members={["Lt. Sunny", "SSgt. Heroic", "SSgt. Punslinger", "Cpl. Vampire"]} />
           <AdminCard title="Junior Admin" members={["Cpl. Chair", "Cpl. Loggieman"]} />
           <AdminCard title="Zeus Team" members={["Cpl. Ray", "Tpr. Eivie"]} />
        </div>

      </div>
    </div>
  );
};

const SectionCard = ({ title, members, color, icon, compact }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className={`bg-slate-800 rounded-xl p-6 border-l-4 ${color} shadow-lg w-full ${compact ? 'opacity-80' : ''}`}
  >
    <div className="flex items-center gap-3 mb-4 border-b border-slate-700 pb-2">
      {icon || <Users size={24} className="text-gray-400" />}
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="space-y-3">
      {members.map((member, index) => (
        <div key={index} className="flex justify-between items-center text-sm">
          <span className="text-gray-400 font-medium">{member.role}</span>
          <span className={`font-bold ${member.name === 'VACANT' ? 'text-red-500/50 italic' : 'text-white'}`}>
            {member.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

const FireteamCard = ({ name, leader, members }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-slate-800/50 p-5 rounded-lg border border-slate-700 hover:border-slate-500 transition-colors"
  >
    <h4 className="text-lg font-bold text-blue-200 mb-3 text-center">{name}</h4>
    
    <div className="mb-4 bg-slate-900/50 p-2 rounded border border-slate-800">
      <div className="text-xs text-yellow-500 uppercase font-bold tracking-wider mb-1">Leader</div>
      <div className="text-white font-bold text-sm">{leader.name}</div>
      <div className="text-xs text-gray-500">{leader.role}</div>
    </div>

    <div className="space-y-2">
      {members.map((m, i) => (
        <div key={i} className="flex justify-between text-xs border-b border-slate-700/50 pb-1 last:border-0">
          <span className="text-gray-400">{m.role}</span>
          <span className={m.name === 'VACANT' ? 'text-red-500/40 italic' : 'text-gray-200'}>{m.name}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

const AdminCard = ({ title, members }) => (
  <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg text-center">
    <h3 className="text-yellow-500 font-bold mb-4 uppercase tracking-widest text-sm">{title}</h3>
    <ul className="space-y-2">
      {members.map((m, i) => (
        <li key={i} className="text-gray-300 font-medium">{m}</li>
      ))}
    </ul>
  </div>
);

export default Structure;
const Footer = () => {
  return (
    <footer className="bg-cavalry-blue text-white py-12 border-t-2 border-qoy-yellow">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-qoy-yellow tracking-widest uppercase">Queen's Own Yeomanry</h2>
          <p className="text-gray-300 mt-2 text-sm italic">Arma 3 Milsim Unit</p>
          <div className="mt-4 flex justify-center md:justify-start">
             <img src="/qoy-badge.jpg" alt="Badge Small" className="h-16 w-16 opacity-50 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
        
        <div className="text-center">
          <p className="font-bold text-qoy-yellow uppercase mb-4 tracking-wider">Operational Info</p>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Tuesday: 20:00 UK</li>
            <li>Sunday: 20:00 UK</li>
            <li>Role: Reconnaissance</li>
          </ul>
        </div>

        <div className="text-center md:text-right">
          <p className="font-bold text-qoy-yellow uppercase mb-4 tracking-wider">Connect</p>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="https://discord.gg/4fjPfJFVgt" target="_blank" rel="noopener noreferrer" className="hover:text-qoy-yellow transition-colors font-bold border border-white/20 px-4 py-1 rounded">Discord</a>
            <a href="#" className="hover:text-qoy-yellow transition-colors font-bold border border-white/20 px-4 py-1 rounded">Steam</a>
          </div>
          <p className="text-gray-500 text-xs mt-8">© {new Date().getFullYear()} Queen's Own Yeomanry. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
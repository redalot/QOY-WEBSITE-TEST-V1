import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-cavalry-blue text-white shadow-lg sticky top-0 z-50 border-b border-qoy-yellow/30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img src="qoy-badge.jpg" alt="QOY Badge" className="h-12 w-12 rounded-full border-2 border-qoy-yellow shadow-md" />
          <span className="text-xl font-bold tracking-wider text-qoy-yellow uppercase">Queen's Own Yeomanry</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          <Link to="/" className="hover:text-qoy-yellow transition-colors relative group">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qoy-yellow transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="hover:text-qoy-yellow transition-colors relative group">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qoy-yellow transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/structure" className="hover:text-qoy-yellow transition-colors relative group">
            Structure
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qoy-yellow transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/training" className="hover:text-qoy-yellow transition-colors relative group">
            Training
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qoy-yellow transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/manual" className="hover:text-qoy-yellow transition-colors relative group">
            Field Manual
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qoy-yellow transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/gallery" className="hover:text-qoy-yellow transition-colors relative group">
            Gallery
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-qoy-yellow transition-all group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-qoy-yellow focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-cavalry-light pb-4 border-t border-qoy-yellow/20">
          <div className="flex flex-col space-y-2 px-4 pt-2">
            <Link to="/" className="block py-2 hover:text-qoy-yellow border-b border-white/10" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block py-2 hover:text-qoy-yellow border-b border-white/10" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/structure" className="block py-2 hover:text-qoy-yellow border-b border-white/10" onClick={() => setIsOpen(false)}>Structure</Link>
            <Link to="/training" className="block py-2 hover:text-qoy-yellow border-b border-white/10" onClick={() => setIsOpen(false)}>Training</Link>
            <Link to="/manual" className="block py-2 hover:text-qoy-yellow border-b border-white/10" onClick={() => setIsOpen(false)}>Field Manual</Link>
            <Link to="/gallery" className="block py-2 hover:text-qoy-yellow" onClick={() => setIsOpen(false)}>Gallery</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
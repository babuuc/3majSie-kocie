import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Search, Instagram, Facebook, Mail, ChevronDown } from 'lucide-react';

import Home from './pages/Home';
import Adoptuj from './pages/Adoptuj';
import Adopcja from './pages/Adopcja';
import AdopcjaWirtualna from './pages/AdopcjaWirtualna';
import DomTymczasowy from './pages/DomTymczasowy';
import ONas from './pages/ONas';
import Kontakt from './pages/Kontakt';
import SzczesliweHistorie from './pages/SzczesliweHistorie';
import FAQ from './pages/FAQ';
import Wsparcie from './pages/Wsparcie';

const DropdownMenu = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  const containerRef = React.useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen((prev) => !prev);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const handleBlur = (e) => {
    if (!containerRef.current?.contains(e.relatedTarget)) {
      setOpen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={handleBlur}
    >
      <button
        className="flex items-center gap-1 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:rounded"
        aria-haspopup="true"
        aria-expanded={open}
        onKeyDown={handleKeyDown}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-50" role="menu">
          {items.map(({ to, text }) => (
            <NavLink
              key={to}
              to={to}
              role="menuitem"
              className={({ isActive }) =>
                `block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-500 transition-colors focus:outline-none focus:bg-orange-50 focus:text-orange-500 ${isActive ? 'text-orange-500' : 'text-gray-700'}`
              }
              onClick={() => setOpen(false)}
            >
              {text}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const adoptujItems = [
    { to: '/adoptuj', text: 'Adoptuj' },
    { to: '/adopcja', text: 'Adopcja' },
    { to: '/adopcja-wirtualna', text: 'Adopcja wirtualna' },
  ];

  const onasItems = [
    { to: '/kontakt', text: 'Kontakt' },
    { to: '/szczesliwe-historie', text: 'Szczęśliwe historie' },
    { to: '/faq', text: 'FAQ' },
    { to: '/wsparcie', text: 'Wsparcie' },
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <img src="/src/assets/image.png" alt="Trzymaj Się, Kocie!" className="w-[53px] h-[150px]" />
        </Link>

        {/* Nawigacja */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-gray-700">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `hover:text-orange-500 transition-colors ${isActive ? 'text-orange-500' : ''}`}
          >
            Strona główna
          </NavLink>
          <DropdownMenu label="Adoptuj" items={adoptujItems} />
          <NavLink
            to="/dom-tymczasowy"
            className={({ isActive }) => `hover:text-orange-500 transition-colors ${isActive ? 'text-orange-500' : ''}`}
          >
            Dom tymczasowy
          </NavLink>
          <DropdownMenu label="O nas" items={onasItems} />
        </nav>

        {/* Social Media */}
        <div className="hidden xl:flex items-center space-x-4 text-gray-500">
          <Instagram size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
          <Facebook size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
          <Mail size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
          <div className="w-px h-6 bg-gray-300 mx-2"></div>
          <Search size={20} className="hover:text-orange-500 cursor-pointer transition-colors" />
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-gray-300 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Kolumna 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-6">
            <img src="/src/assets/image.png" alt="Trzymaj Się, Kocie!" className="w-8 h-8" />
            <span className="text-lg font-bold text-white uppercase tracking-wider">Trzymaj Się, Kocie!</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Nasze działania mają na celu ograniczenie kociej bezdomności.
          </p>
        </div>

        {/* Kolumna 2 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Informacje</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/wsparcie" className="hover:text-orange-400 transition-colors">Wsparcie</Link></li>
            <li><Link to="/faq" className="hover:text-orange-400 transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Kolumna 3 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Koty</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/adopcja" className="hover:text-orange-400 transition-colors">Adopcja</Link></li>
            <li><Link to="/dom-tymczasowy" className="hover:text-orange-400 transition-colors">Dom tymczasowy</Link></li>
          </ul>
        </div>

        {/* Kolumna 4 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">O nas</h3>
          <div className="flex items-center space-x-4">
            <a href="/" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-orange-500 text-white"><Facebook size={18} /></a>
            <a href="/" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-orange-500 text-white"><Instagram size={18} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

// Główny komponent łączący wszystko
export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adoptuj" element={<Adoptuj />} />
          <Route path="/adopcja" element={<Adopcja />} />
          <Route path="/adopcja-wirtualna" element={<AdopcjaWirtualna />} />
          <Route path="/dom-tymczasowy" element={<DomTymczasowy />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/szczesliwe-historie" element={<SzczesliweHistorie />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/wsparcie" element={<Wsparcie />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
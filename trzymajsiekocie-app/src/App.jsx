import React from 'react';
import { Search, Instagram, Facebook, Mail, Link as LinkIcon, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/src/assets/image.png" alt="Trzymaj Się, Kocie!" className="w-[53px] h-[150px]" />
        </div>

        {/* Nawigacja */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-gray-700">
          <a href="/" className="hover:text-orange-500 transition-colors">Strona główna</a>
          <a href="/" className="hover:text-orange-500 transition-colors">Adopcja</a>
          <a href="/" className="hover:text-orange-500 transition-colors">Aktualności</a>
          <a href="/" className="hover:text-orange-500 transition-colors">Wsparcie</a>
          <a href="/" className="hover:text-orange-500 transition-colors">O nas</a>
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
            <li><a href="/" className="hover:text-orange-400 transition-colors">Aktualności i wydarzenia</a></li>
            <li><a href="/" className="hover:text-orange-400 transition-colors">Wsparcie</a></li>
          </ul>
        </div>

        {/* Kolumna 3 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Koty</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/" className="hover:text-orange-400 transition-colors">Adopcja</a></li>
            <li><a href="/" className="hover:text-orange-400 transition-colors">Dom tymczasowy</a></li>
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
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Header />
      
      {/* PUSTA TREŚĆ STRONY GŁÓWNEJ */}
      <main className="flex-grow">
      </main>

      <Footer />
    </div>
  );
}
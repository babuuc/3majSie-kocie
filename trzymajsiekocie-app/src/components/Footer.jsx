import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Kolumna 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-6">
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
            <li><Link to="/faq" className="hover:text-orange-400 transition-colors">FAQ</Link></li>
            <li><Link to="/wsparcie" className="hover:text-orange-400 transition-colors">Wsparcie</Link></li>
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
}

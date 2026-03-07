import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Linkedin } from 'lucide-react';

function TikTokIcon({ size = 18, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function LinktreeIcon({ size = 18, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 417 512" fill="currentColor" className={className}>
      <path d="M164.1 71.6 81.4 154.3l49.5 49.5 82.8-82.8 82.7 82.8 49.5-49.5-82.7-82.7 82.7-82.8L296.4.3 213.7 83 131 .3 81.4 49.8l82.7 82.8zm-82.7 199.3 49.5 49.5 82.8-82.8 82.7 82.8 49.5-49.5-82.7-82.8h116.1v-70H279.7L213.7 184l-66-66.1H.3v70h116.1zM179.5 372h68.3v140h-68.3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Kolumna 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <img src="/src/assets/logo_footer.png" alt="Trzymaj Się, Kocie!" className="h-32 w-auto" />
            {/* <span className="text-lg font-bold text-white uppercase tracking-wider">Trzymaj Się, Kocie!</span> */}
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Nasze działania mają na celu ograniczenie kociej bezdomności.
          </p>
        </div>

        {/* Kolumna 2 – Nawigacja */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Nawigacja</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-orange-400 transition-colors">Strona główna</Link></li>
            <li><Link to="/adoptuj" className="hover:text-orange-400 transition-colors">Adoptuj</Link></li>
            <li><Link to="/adopcja" className="hover:text-orange-400 transition-colors">Adopcja</Link></li>
            <li><Link to="/adopcja-wirtualna" className="hover:text-orange-400 transition-colors">Adopcja wirtualna</Link></li>
            <li><Link to="/dom-tymczasowy" className="hover:text-orange-400 transition-colors">Dom tymczasowy</Link></li>
          </ul>
        </div>

        {/* Kolumna 3 – Więcej */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Więcej</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/aktualnosci" className="hover:text-orange-400 transition-colors">Aktualności</Link></li>
            <li><Link to="/kadra" className="hover:text-orange-400 transition-colors">Kadra</Link></li>
            <li><Link to="/kalendarz" className="hover:text-orange-400 transition-colors">Kalendarz</Link></li>
            <li><Link to="/kontakt" className="hover:text-orange-400 transition-colors">Kontakt</Link></li>
            <li><Link to="/faq" className="hover:text-orange-400 transition-colors">FAQ</Link></li>
            <li><Link to="/wsparcie" className="hover:text-orange-400 transition-colors">Wsparcie</Link></li>
            <li><Link to="/dokumenty" className="hover:text-orange-400 transition-colors">Dokumenty</Link></li>
            <li><Link to="/wolontariat" className="hover:text-orange-400 transition-colors">Zostań wolontariuszem</Link></li>
          </ul>
        </div>

        {/* Kolumna 4 – Social */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Obserwuj nas</h3>
          <div className="flex items-center flex-wrap gap-4">
            <a href="/" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-orange-500 text-white"><Instagram size={18} /></a>
            <a href="/" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-orange-500 text-white"><Facebook size={18} /></a>
            <a href="/" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-orange-500 text-white"><Mail size={18} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-orange-500 text-white"><Linkedin size={18} /></a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-orange-500 text-white"><TikTokIcon size={18} /></a>
            <a href="https://linktr.ee" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-orange-500 text-white"><LinktreeIcon size={18} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}

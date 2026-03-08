import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Linkedin } from 'lucide-react';
import { TikTokIcon, LinktreeIcon } from './SocialIcons';

const socialLinkClass = 'w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-orange-500 text-white transition-colors';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 pt-16 pb-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-6">
            <img src="/src/assets/logo_footer.png" alt="Trzymaj Się, Kocie!" className="h-32 w-auto" />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Nasze działania mają na celu ograniczenie kociej bezdomności.
          </p>
        </div>

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

        <div>
          <h3 className="text-white font-semibold text-lg mb-6">Obserwuj nas</h3>
          <div className="flex items-center flex-wrap gap-4">
            <a href="/" className={socialLinkClass}><Instagram size={18} /></a>
            <a href="/" className={socialLinkClass}><Facebook size={18} /></a>
            <a href="/" className={socialLinkClass}><Mail size={18} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={socialLinkClass}><Linkedin size={18} /></a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className={socialLinkClass}><TikTokIcon size={18} /></a>
            <a href="https://linktr.ee" target="_blank" rel="noopener noreferrer" className={socialLinkClass}><LinktreeIcon size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

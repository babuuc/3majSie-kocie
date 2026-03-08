import { Link } from 'react-router-dom';
import { Search, Instagram, Facebook, Mail, Linkedin } from 'lucide-react';
import NavDropdown, { DropdownLink } from './NavDropdown';
import { TikTokIcon, LinktreeIcon } from './SocialIcons';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <img src="/src/assets/logo_navbar.png" alt="Trzymaj Się, Kocie!" className="h-14 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-gray-700">
            <Link to="/" className="hover:text-orange-500 transition-colors">Strona główna</Link>

            <NavDropdown label={<span className="font-extrabold">Adoptuj</span>}>
              <DropdownLink to="/adopcja">Adopcja</DropdownLink>
              <DropdownLink to="/adopcja-wirtualna">Adopcja wirtualna</DropdownLink>
            </NavDropdown>

            <Link to="/wsparcie" className="hover:text-orange-500 transition-colors">Wsparcie</Link>
            <Link to="/dom-tymczasowy" className="hover:text-orange-500 transition-colors">Dom tymczasowy</Link>
            <Link to="/aktualnosci" className="hover:text-orange-500 transition-colors">Aktualności</Link>
            <Link to="/kalendarz" className="hover:text-orange-500 transition-colors">Kalendarz</Link>
            <Link to="/wolontariat" className="hover:text-orange-500 transition-colors">Zostań wolontariuszem</Link>

            <NavDropdown label="O nas">
              <DropdownLink to="/kadra">Kadra</DropdownLink>
              <DropdownLink to="/kontakt">Kontakt</DropdownLink>
              <DropdownLink to="/szczesliwe-historie">Szczęśliwe historie</DropdownLink>
              <DropdownLink to="/faq">FAQ</DropdownLink>
            </NavDropdown>
          </nav>
        </div>

        <div className="hidden xl:flex items-center space-x-4 text-gray-500">
          <Instagram size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
          <Facebook size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
          <Mail size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <TikTokIcon size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
          </a>
          <a href="https://linktr.ee" target="_blank" rel="noopener noreferrer">
            <LinktreeIcon size={18} className="hover:text-orange-500 cursor-pointer transition-colors" />
          </a>
          <div className="w-px h-6 bg-gray-300 mx-2" />
          <Search size={20} className="hover:text-orange-500 cursor-pointer transition-colors" />
        </div>
      </div>
    </header>
  );
}

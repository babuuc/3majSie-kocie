import { useState, useCallback, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Instagram, Facebook, Mail, Linkedin, Menu, X, ChevronDown } from 'lucide-react';
import NavDropdown, { DropdownLink } from './NavDropdown';
import { TikTokIcon, LinktreeIcon } from './SocialIcons';

function MobileAccordion({ label, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-base font-semibold text-gray-800 hover:text-orange-500 transition-colors"
      >
        {label}
        <ChevronDown size={18} className={`text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pl-4 pb-2 space-y-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

function MobileNavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block py-3 text-base font-semibold text-gray-800 hover:text-orange-500 transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileSubLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block py-2 text-sm text-gray-600 hover:text-orange-500 transition-colors"
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-3 flex justify-between items-center">
        {/* Logo + nav links */}
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/src/assets/logo_navbar.png" alt="Trzymaj Się, Kocie!" className="h-8 sm:h-9 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Strona główna</Link>

            <NavDropdown label={<span className="font-extrabold">Adoptuj</span>}>
              <DropdownLink to="/adopcja">Adopcja</DropdownLink>
              <DropdownLink to="/adopcja-wirtualna">Adopcja wirtualna</DropdownLink>
            </NavDropdown>

            <Link to="/wsparcie" className="hover:text-gray-900 transition-colors">Wsparcie</Link>
            <Link to="/dom-tymczasowy" className="hover:text-gray-900 transition-colors">Dom tymczasowy</Link>
            <Link to="/aktualnosci" className="hover:text-gray-900 transition-colors">Aktualności</Link>
            <Link to="/kalendarz" className="hover:text-gray-900 transition-colors">Kalendarz</Link>
            <Link to="/wolontariat" className="hover:text-gray-900 transition-colors">Zostań wolontariuszem</Link>

            <NavDropdown label="O nas">
              <DropdownLink to="/kadra">Kadra</DropdownLink>
              <DropdownLink to="/kontakt">Kontakt</DropdownLink>
              <DropdownLink to="/szczesliwe-historie">Szczęśliwe historie</DropdownLink>
              <DropdownLink to="/faq">FAQ</DropdownLink>
            </NavDropdown>
          </nav>
        </div>

        {/* Right side: social icons */}
        <div className="flex items-center gap-3">
          <div className="hidden xl:flex items-center gap-3 text-gray-500">
            <div className="w-px h-5 bg-gray-200 mx-1" />
            <Instagram size={17} className="hover:text-orange-500 cursor-pointer transition-colors" />
            <Facebook size={17} className="hover:text-orange-500 cursor-pointer transition-colors" />
            <Mail size={17} className="hover:text-orange-500 cursor-pointer transition-colors" />
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={17} className="hover:text-orange-500 cursor-pointer transition-colors" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <TikTokIcon size={17} className="hover:text-orange-500 cursor-pointer transition-colors" />
            </a>
            <a href="https://linktr.ee" target="_blank" rel="noopener noreferrer">
              <LinktreeIcon size={17} className="hover:text-orange-500 cursor-pointer transition-colors" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-0 z-40 lg:hidden"
          onClick={closeMobile}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[min(85vw,320px)] bg-white shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">Menu</span>
          <button
            onClick={closeMobile}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Zamknij menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="px-5 py-4 overflow-y-auto h-[calc(100%-60px)]">
          <div className="divide-y divide-gray-100">
            <MobileNavLink to="/" onClick={closeMobile}>Strona główna</MobileNavLink>

            <MobileAccordion label="Adoptuj">
              <MobileSubLink to="/adopcja" onClick={closeMobile}>Adopcja</MobileSubLink>
              <MobileSubLink to="/adopcja-wirtualna" onClick={closeMobile}>Adopcja wirtualna</MobileSubLink>
            </MobileAccordion>

            <MobileNavLink to="/wsparcie" onClick={closeMobile}>Wsparcie</MobileNavLink>
            <MobileNavLink to="/dom-tymczasowy" onClick={closeMobile}>Dom tymczasowy</MobileNavLink>
            <MobileNavLink to="/aktualnosci" onClick={closeMobile}>Aktualności</MobileNavLink>
            <MobileNavLink to="/kalendarz" onClick={closeMobile}>Kalendarz</MobileNavLink>
            <MobileNavLink to="/wolontariat" onClick={closeMobile}>Zostań wolontariuszem</MobileNavLink>

            <MobileAccordion label="O nas">
              <MobileSubLink to="/kadra" onClick={closeMobile}>Kadra</MobileSubLink>
              <MobileSubLink to="/kontakt" onClick={closeMobile}>Kontakt</MobileSubLink>
              <MobileSubLink to="/szczesliwe-historie" onClick={closeMobile}>Szczęśliwe historie</MobileSubLink>
              <MobileSubLink to="/faq" onClick={closeMobile}>FAQ</MobileSubLink>
            </MobileAccordion>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Obserwuj nas</p>
            <div className="flex items-center gap-2 flex-wrap">
              <a href="/" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-orange-50 hover:text-orange-500 transition-colors"><Instagram size={16} /></a>
              <a href="/" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-orange-50 hover:text-orange-500 transition-colors"><Facebook size={16} /></a>
              <a href="/" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-orange-50 hover:text-orange-500 transition-colors"><Mail size={16} /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-orange-50 hover:text-orange-500 transition-colors"><Linkedin size={16} /></a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-orange-50 hover:text-orange-500 transition-colors"><TikTokIcon size={16} /></a>
              <a href="https://linktr.ee" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-orange-50 hover:text-orange-500 transition-colors"><LinktreeIcon size={16} /></a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

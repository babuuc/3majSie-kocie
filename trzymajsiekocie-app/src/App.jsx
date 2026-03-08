import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import GaleriaKotow from './pages/GaleriaKotow';
import Home from './pages/Home';
import Adoptuj from './pages/Adoptuj';
import Adopcja from './pages/Adopcja';
import AdopcjaWirtualna from './pages/AdopcjaWirtualna';
import DomTymczasowy from './pages/DomTymczasowy';
import Kontakt from './pages/Kontakt';
import SzczesliweHistorie from './pages/SzczesliweHistorie';
import FAQ from './pages/FAQ';
import Wsparcie from './pages/Wsparcie';
import Aktualnosci from './pages/Aktualnosci';
import Kadra from './pages/Kadra';
import Kalendarz from './pages/Kalendarz';
import Dokumenty from './pages/Dokumenty';
import Wolontariat from './pages/Wolontariat';
import AdopcjaAnkieta from './pages/AdopcjaAnkieta';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adoptuj" element={<Adoptuj />} />
          <Route path="/adoptuj/:id" element={<Adoptuj />} />
          <Route path="/adopcja-ankieta/:id" element={<AdopcjaAnkieta />} />
          <Route path="/adopcja" element={<Adopcja />} />
          <Route path="/galeria-kotow" element={<GaleriaKotow />} />
          <Route path="/adopcja-wirtualna" element={<AdopcjaWirtualna />} />
          <Route path="/dom-tymczasowy" element={<DomTymczasowy />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/szczesliwe-historie" element={<SzczesliweHistorie />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/wsparcie" element={<Wsparcie />} />
          <Route path="/aktualnosci" element={<Aktualnosci />} />
          <Route path="/kadra" element={<Kadra />} />
          <Route path="/kalendarz" element={<Kalendarz />} />
          <Route path="/dokumenty" element={<Dokumenty />} />
          <Route path="/wolontariat" element={<Wolontariat />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
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

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Header />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adoptuj" element={<Adoptuj />} />
          <Route path="/adoptuj/:id" element={<Adoptuj />} />
          <Route path="/adopcja" element={<Adopcja />} />
          <Route path="/galeria-kotow" element={<GaleriaKotow />} />
          <Route path="/adopcja-wirtualna" element={<AdopcjaWirtualna />} />
          <Route path="/dom-tymczasowy" element={<DomTymczasowy />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/szczesliwe-historie" element={<SzczesliweHistorie />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/wsparcie" element={<Wsparcie />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
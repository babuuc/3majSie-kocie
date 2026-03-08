import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import kotyData from '../data/koty.json';
import useCatImages from '../hooks/useCatImages';

function CatImage({ apiImage, localImage, color, altText }) {
  const [src, setSrc] = useState(apiImage || localImage);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (apiImage) {
      setSrc(apiImage);
      setFailed(false);
    }
  }, [apiImage]);

  if (failed || !src) {
    return (
      <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold" style={{ backgroundColor: color }}>
        🐱
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={altText}
      className="w-full h-full object-cover"
      loading="lazy"
      onError={() => {
        if (localImage && src !== localImage) {
          setSrc(localImage);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}

export default function AdopcjaWirtualna() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    message: '',
    signature: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const categories = kotyData.categories;

  // Funkcja do wyświetlania nazwy tagu
  const getTagLabel = (tag) => {
    if (tag === 'rezydent') return 'Rezydent';
    if (tag === 'czeka-na-dom') return 'Czeka na dom';
    return '';
  };

  // Funkcja do koloru tagu
  const getTagColor = (tag) => {
    if (tag === 'rezydent') return 'bg-orange-500';
    if (tag === 'czeka-na-dom') return 'bg-blue-500';
    return 'bg-gray-500';
  };

  // Filtruj koty dostępne do adopcji wirtualnej
  const virtualCats = kotyData.koty.filter(kot => kot.adopcjaWirtualna !== null);
  const { images: apiImages } = useCatImages(virtualCats.length);

  const handleOpenForm = (cat, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedCat(cat);
    setShowFormModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj można dodać logikę wysyłania formularza
    console.log('Formularz adopcji wirtualnej:', {
      cat: selectedCat?.name,
      ...formData
    });
    alert(`Dziękujemy za zainteresowanie adopcją wirtualną kotka ${selectedCat?.name}!`);
    setShowFormModal(false);
    setFormData({ email: '', message: '', signature: '' });
  };

  const getLocalCatImage = (cat) => cat.images?.[0] || null;

  return (
    <div className="max-w-7xl mx-auto px-4 xl:px-8 py-16">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">Adopcja wirtualna</h1>
      
      {/* Wprowadzenie */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mb-12">
        <p className="text-gray-700 text-lg leading-relaxed">
          Adopcja wirtualna to taki patronat, którym można objąć wybranego kotka. Ty ustawiasz stały przelew na kotka 
          i co miesiąc cieszysz się jego zdjęciami i nowymi informacjami, a my zajmujemy się kotkiem tak jak do tej pory 
          i podsyłamy newsy.
        </p>
      </div>

      {/* Które kotki można adoptować wirtualnie */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Które kotki można adoptować wirtualnie?</h2>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
            <p className="text-gray-700 text-lg">
              <strong>Naszych Rezydentów:</strong> starszych, schorowanych, wymagających większych nakładów finansowych 
              ze względu na leczenie i zapotrzebowanie na specyficzną karmę, oraz umiejętnej opieki.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
            <p className="text-gray-700 text-lg">
              <strong>Kotki oczekujące na dom tymczasowy lub stały,</strong> a z nieznanych nam przyczyn ciągle 
              niemające szczęścia w procesie adopcyjnym.
            </p>
          </div>
        </div>
        <p className="text-gray-600 text-lg mt-6 italic">
          Grono kotków czekających na opiekunów wirtualnych często się zmienia, zalecamy uważne śledzenie naszego IG i FB 🙂
        </p>
      </div>

      {/* Zasady */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Zasady adopcji wirtualnej</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Bez minimalnej kwoty</h3>
            <p className="text-gray-700">
              Nie ma kwoty minimalnej, wpłacasz tyle ile chcesz, a my baaaardzo cieszymy się z każdego wsparcia!
            </p>
          </div>

          <div className="bg-purple-50 rounded-xl p-6">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Bez zobowiązań</h3>
            <p className="text-gray-700">
              To Ty decydujesz, jak długo chcesz wspierać kotka – nie ma też minimalnego okresu trwania adopcji wirtualnej.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Elastyczna częstotliwość</h3>
            <p className="text-gray-700">
              Chcesz wpłacać kotkowi kieszonkowe z inną częstotliwością – nie ma sprawy, daj nam tylko znać!
            </p>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Wsparcie rzeczowe</h3>
            <p className="text-gray-700">
              Chcesz wspierać kotka regularnie przesyłając żwirek albo karmę dla niego – też ekstra, napisz do nas, 
              to ustalimy najdogodniejszy sposób i podpowiemy, co kotek je 🙂
            </p>
          </div>
        </div>
      </div>

      {/* Dodatkowe informacje */}
      <div className="bg-pink-50 rounded-2xl p-8 mb-12">
        <div className="flex items-start gap-4">
          <div className="text-4xl">❤️</div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Kotek ma już opiekuna?</h3>
            <p className="text-gray-700 text-lg">
              Kotek, który skradł Twoje serce, ma już opiekuna wirtualnego? Nie szkodzi, kotki mają dużo miłości 
              dla wszystkich, można się kotkiem "podzielić".
            </p>
          </div>
        </div>
      </div>

      {/* NOWOŚĆ - Kotek-Niespodzianka */}
      <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 mb-12 border-4 border-orange-300">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-red-500 text-white px-4 py-1 rounded-full font-bold text-sm">NOWOŚĆ!</span>
          <h2 className="text-3xl font-bold text-gray-800">Kotek-Niespodzianka 🎁</h2>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Nie możesz się zdecydować na kotka? Proponujemy Kotka-Niespodziankę! Ty deklarujesz wpłatę, a my co miesiąc 
          wysyłamy zdjęcia i informacje o innym kotku. To może być jeden z naszych rezydentów, bądź zupełnie nowy kotek 
          i fotoreportaż z jego złapania. Nigdy nie wiemy, co przyniesie kolejny miesiąc!
        </p>
        <button 
          onClick={() => {
            setSelectedCat({ name: 'Kotek-Niespodzianka 🎁', id: 'niespodzianka' });
            setShowFormModal(true);
          }}
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg"
        >
          Adoptuję Kotka-Niespodziankę 🎁
        </button>
      </div>

      {/* Galeria kotów do adopcji wirtualnej */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Kotki czekające na wirtualnych opiekunów</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {virtualCats.map((cat, index) => (
            <Link
              key={cat.id}
              to={`/adoptuj/${cat.id}`}
              className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 relative"
            >
              {/* Tag */}
              {cat.adopcjaWirtualna && (
                <div className={`absolute top-4 left-4 ${getTagColor(cat.adopcjaWirtualna)} text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-lg`}>
                  {getTagLabel(cat.adopcjaWirtualna)}
                </div>
              )}
              
              {/* Zdjęcie kota */}
              <div 
                className="aspect-square overflow-hidden"
                style={{ 
                  backgroundColor: categories.find(c => c.id === cat.category)?.color || '#e0e0e0'
                }}
              >
                <CatImage
                  apiImage={apiImages[index]}
                  localImage={getLocalCatImage(cat)}
                  color={categories.find(c => c.id === cat.category)?.color || '#e0e0e0'}
                  altText={cat.name}
                />
              </div>
              
              {/* Informacje o kocie */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{cat.name}</h3>
                <p className="text-sm text-gray-600 mb-1">{cat.age}</p>
                <p className="text-sm text-gray-500 capitalize">{categories.find(c => c.id === cat.category)?.name}</p>
                <div className="mt-4 rounded-xl bg-purple-50 p-4">
                  <p className="text-sm font-semibold text-gray-800 mb-2">Wirtualni opiekunowie</p>
                  {cat.wirtualniOpiekunowie && cat.wirtualniOpiekunowie.length > 0 ? (
                    <ul className="space-y-1 text-sm text-gray-700">
                      {cat.wirtualniOpiekunowie.map((person) => (
                        <li key={person}>• {person}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-600">Ten kot czeka na pierwszego opiekuna wirtualnego.</p>
                  )}
                </div>
                <button 
                  onClick={(e) => handleOpenForm(cat, e)}
                  className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Zostań opiekunem
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Chcesz zostać Opiekunem Wirtualnym?</h2>
        <p className="text-xl mb-6">
          Odezwij się do nas, a my odpowiemy na Twoje pytania.
        </p>
        <button 
          onClick={() => {
            setSelectedCat({ name: 'Ogólne zapytanie o adopcję wirtualną', id: 'kontakt' });
            setShowFormModal(true);
          }}
          className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Skontaktuj się z nami
        </button>
      </div>

      {/* Modal z formularzem adopcji wirtualnej */}
      {showFormModal && selectedCat && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowFormModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Formularz adopcji wirtualnej</h2>
                <p className="text-gray-600 mt-1">Kotek: <span className="font-semibold">{selectedCat.name}</span></p>
              </div>
              <button 
                onClick={() => setShowFormModal(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl font-bold"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2">
                  Twój adres e-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="twoj@email.com"
                />
              </div>

              {/* Wiadomość */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-2">
                  Twoja wiadomość <span className="text-gray-500 text-sm">(opcjonalne)</span>
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Napisz coś o sobie lub powód adopcji wirtualnej..."
                />
              </div>

              {/* Podpis */}
              <div className="mb-8">
                <label htmlFor="signature" className="block text-lg font-semibold text-gray-800 mb-2">
                  Twój podpis <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="signature"
                  required
                  value={formData.signature}
                  onChange={(e) => setFormData({...formData, signature: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Twoje imię i nazwisko"
                />
              </div>

              {/* Przyciski */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowFormModal(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Anuluj
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Wyślij zgłoszenie
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

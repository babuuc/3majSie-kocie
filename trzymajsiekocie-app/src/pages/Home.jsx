import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

function CatCarousel() {
  const [cats, setCats] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((res) => res.json())
      .then((data) => {
        setCats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? cats.length - 1 : c - 1));
  }, [cats.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === cats.length - 1 ? 0 : c + 1));
  }, [cats.length]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-80">
        <div className="w-12 h-12 border-4 border-orange-300 border-t-orange-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (cats.length === 0) {
    return <p className="text-center text-gray-500">Nie udało się załadować zdjęć kotów.</p>;
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Główne zdjęcie */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] bg-gray-100">
        <img
          src={cats[current].url}
          alt={`Kot ${current + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Strzałki */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
        >
          <ChevronLeft size={22} className="text-gray-700" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-colors"
        >
          <ChevronRight size={22} className="text-gray-700" />
        </button>

        {/* Licznik */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
          {current + 1} / {cats.length}
        </div>
      </div>

      {/* Miniaturki */}
      <div className="flex justify-center gap-2 mt-4 flex-wrap">
        {cats.map((cat, i) => (
          <button
            key={cat.id}
            onClick={() => setCurrent(i)}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
              i === current ? 'border-orange-500 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={cat.url} alt={`Miniaturka ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero – sekcja podatkowa */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 text-white">
        <div className="max-w-7xl mx-auto px-4 xl:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8 text-sm font-medium">
            <Heart size={16} className="fill-white" />
            Pomóż naszym podopiecznym
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Przekaż nam 1.5% podatku! 😻
          </h1>

          <p className="text-xl md:text-2xl font-light mb-10 text-white/90 max-w-2xl mx-auto">
            Twoja pomoc zmienia kocie życie. Wystarczy wpisać nasze dane w zeznaniu podatkowym.
          </p>

          <div className="inline-block bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-gray-800">
            <div className="space-y-4">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">KRS</span>
                <p className="text-3xl md:text-4xl font-bold tracking-widest mt-1">0000270261</p>
              </div>
              <div className="w-full h-px bg-gray-200"></div>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">Cel szczegółowy</span>
                <p className="text-xl md:text-2xl font-bold mt-1">KOTY TSK 18947</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sekcja – karuzela kotów */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Poznaj naszych podopiecznych 😻
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Każdy z nich czeka na kochający dom. Może to właśnie Ty będziesz ich nowym opiekunem?
            </p>
          </div>

          <CatCarousel />
        </div>
      </section>

      {/* Sekcja – jak pomóc */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 xl:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Jak możesz pomóc?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl">
                🏠
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Adoptuj</h3>
              <p className="text-gray-600">Daj kotowi stały, kochający dom. Adopcja to najpiękniejszy gest.</p>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl">
                🐱
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Dom tymczasowy</h3>
              <p className="text-gray-600">Zapewnij tymczasowe schronienie kotom czekającym na adopcję.</p>
            </div>

            <div className="bg-rose-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl">
                💛
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Wesprzyj</h3>
              <p className="text-gray-600">Każda złotówka pomaga w leczeniu, karmieniu i opiece nad kotami.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import FadeIn from '../components/FadeIn';

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
      <div className="max-w-3xl mx-auto">
        <div className="w-full aspect-[4/3] bg-gray-200 animate-pulse rounded-2xl shadow-lg"></div>
        <div className="flex justify-center gap-2 mt-4">
          {[1,2,3,4,5].map(i => (
             <div key={i} className="w-16 h-16 bg-gray-200 animate-pulse rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  if (cats.length === 0) {
    return <p className="text-center text-muted">Nie udało się załadować zdjęć kotów.</p>;
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3] bg-gray-100">
        <img
          src={cats[current].url}
          alt={`Kot ${current + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

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

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
          {current + 1} / {cats.length}
        </div>
      </div>

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
      <section className="bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 text-white">
        <div className="section-container py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8 text-sm font-medium animate-fade-in">
            <Heart size={16} className="fill-white" />
            Pomóż naszym podopiecznym
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-up delay-100">
            Przekaż nam 1.5% podatku! 😻
          </h1>

          <p className="text-xl md:text-2xl font-light mb-10 text-white/90 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Twoja pomoc zmienia kocie życie. Wystarczy wpisać nasze dane w zeznaniu podatkowym.
          </p>

          <div className="inline-block bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-gray-800 animate-fade-in-scale delay-400">
            <div className="space-y-4">
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-orange-500">KRS</span>
                <p className="text-3xl md:text-4xl font-extrabold tracking-widest mt-1">0000270261</p>
              </div>
              <div className="w-full h-px bg-gray-200"></div>
              <div>
                <span className="text-sm font-bold uppercase tracking-wider text-orange-500">Cel szczegółowy</span>
                <p className="text-xl md:text-2xl font-extrabold mt-1">KOTY TSK 18947</p>
              </div>
            </div>
          </div>
        </div>

        {/* FALA SVG na dole pomarańczowej sekcji */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f9fafb"></path>
            </svg>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="section-container">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="heading-section text-3xl md:text-4xl mb-3">
                Poznaj naszych podopiecznych 😻
              </h2>
              <p className="text-body text-lg max-w-xl mx-auto">
                Każdy z nich czeka na kochający dom. Może to właśnie Ty będziesz ich nowym opiekunem?
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <CatCarousel />
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-container">
          <FadeIn>
            <h2 className="heading-section text-3xl md:text-4xl text-center mb-6">
              Jak możesz pomóc?
            </h2>

            <p className="text-center text-lg text-body max-w-2xl mx-auto mb-14">
              Pod opieką mamy aktualnie <span className="font-bold text-orange-500">ponad 100 kotów</span>.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <FadeIn delay={0}>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-orange-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl">
                🛒
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Napełnij miseczki</h3>
              <p className="text-gray-600 mb-5">
                Napełnij miseczki naszych podopiecznych dokonując zakupu poprzez nasz sklep na stronie
                Stowarzyszenia Ocalone Łapki. Dzięki Tobie karma, żwirek i podkłady trafią prosto do naszych kociaków!
              </p>
              <a
                href="https://ocalonelapki.pl/organizacja/331/trzymaj-sie-kocie"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Sprezentuj naszym kotom karmę 🧡
              </a>
            </div>
            </FadeIn>

            <FadeIn delay={150}>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-rose-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl">
                😻
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Postaw saszetkę na Suppi!</h3>
              <p className="text-gray-600 mb-5">
                Postaw naszym kotom saszetkę — każda porcja to pełny brzuszek dla jednego z naszych podopiecznych!
              </p>
              <a
                href="https://suppi.pl/trzymajsiekocie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md hover:shadow-lg"
              >
                Postaw saszetkę na Suppi 🐾
              </a>
            </div>
            </FadeIn>
          </div>

          <FadeIn>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Wesprzyj nas na Zrzutka.pl</h3>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200" style={{ paddingBottom: '450px' }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src="https://zrzutka.pl/kwn3z8/widget/13"
                frameBorder="0"
                scrolling="no"
                title="Zrzutka - Trzymaj się kocie"
              ></iframe>
            </div>
          </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

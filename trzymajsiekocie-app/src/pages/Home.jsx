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
      <div className="flex justify-center items-center h-80">
        <div className="w-12 h-12 border-4 border-orange-300 border-t-orange-500 rounded-full animate-spin"></div>
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
      <section className="relative bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 text-white overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-orange-600/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-amber-300/10 rounded-full blur-3xl" />
        </div>

        <div className="relative section-container py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8 text-sm font-medium animate-fade-in">
                <Heart size={16} className="fill-white" />
                Pomóż naszym podopiecznym
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-up delay-100">
                Przekaż nam 1.5% podatku! 😻
              </h1>

              <p className="text-xl md:text-2xl font-light mb-10 text-white/90 max-w-2xl animate-fade-in-up delay-200">
                Twoja pomoc zmienia kocie życie. Wystarczy wpisać nasze dane w zeznaniu podatkowym.
              </p>

              <div className="inline-block bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-gray-800 animate-fade-in-scale delay-400">
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

            {/* Hero placeholder image */}
            <div className="hidden lg:flex justify-center animate-fade-in delay-300">
              <div className="img-placeholder w-full max-w-md aspect-square rounded-3xl border-white/20 bg-white/10 backdrop-blur-sm text-white/60 border-2 border-dashed">
                <div className="text-center">
                  <span className="text-6xl block mb-3">🐱</span>
                  <span className="text-sm font-medium">Ilustracja / Zdjęcie<br />800×800</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-50 py-16 lg:py-20 overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        <div className="relative section-container">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-label">Nasi podopieczni</span>
              <h2 className="heading-section text-3xl md:text-4xl mb-4">
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

      <section className="relative bg-white py-16 lg:py-20 overflow-hidden">
        {/* Background treatment */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
        <div className="section-container">
          <FadeIn>
            <div className="text-center mb-6">
              <span className="section-label">Wsparcie</span>
              <h2 className="heading-section text-3xl md:text-4xl mb-4">
                Jak możesz pomóc?
              </h2>
            </div>

            <p className="text-center text-lg text-body max-w-2xl mx-auto mb-14">
              Pod opieką mamy aktualnie <span className="font-bold text-orange-500">ponad 100 kotów</span>.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            <FadeIn delay={0}>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 lg:p-10 text-center hover:shadow-lg transition-all border border-orange-100 hover:-translate-y-1 duration-300 h-full flex flex-col">
              <div className="w-18 h-18 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl">
                🛒
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Napełnij miseczki</h3>
              <p className="text-gray-600 mb-6 flex-grow">
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
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 lg:p-10 text-center hover:shadow-lg transition-all border border-rose-100 hover:-translate-y-1 duration-300 h-full flex flex-col">
              <div className="w-18 h-18 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl">
                😻
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Postaw saszetkę na Suppi!</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Postaw naszym kotom saszetkę — każda porcja to pełny brzuszek dla jednego z naszych podopiecznych!
              </p>
              <a
                href="https://suppi.pl/trzymajsiekocie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-7 py-3 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Postaw saszetkę na Suppi 🐾
              </a>
            </div>
            </FadeIn>
          </div>

          <FadeIn>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Wesprzyj nas na Zrzutka.pl</h3>
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

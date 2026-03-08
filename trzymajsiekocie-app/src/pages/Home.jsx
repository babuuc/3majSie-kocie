import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HandHeart } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import kotyData from '../data/koty.json';

const CATEGORY_LABELS = {
  kociaki: 'KOCIAK',
  starszaki: 'STARSZAK',
  emeryci: 'EMERYT',
  jedynacy: 'JEDYNACZEK',
  dwupaki: 'DWUPAK',
  pingwinki: 'PINGWINEK',
};

function CatCard({ cat, image }) {
  const isKociak = cat.category === 'kociaki';
  const label = CATEGORY_LABELS[cat.category] || cat.category.toUpperCase();

  return (
    <Link to={`/adoptuj/${cat.id}`} className="group block">
      <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-gray-200">
        {image ? (
          <img
            src={image}
            alt={cat.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-gray-100 to-gray-200">
            🐱
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <span
          className={`absolute top-3 left-3 text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md ${
            isKociak ? 'bg-orange-500 text-white' : 'bg-gray-800 text-white'
          }`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  const [catImages, setCatImages] = useState([]);
  const cats = kotyData.koty.slice(0, 4);

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=4')
      .then((res) => res.json())
      .then((data) => setCatImages(data.map((d) => d.url)))
      .catch(() => {});
  }, []);

  return (
    <div>
      {/* ── Hero Section ── */}
      <section className="bg-[#FDF6EE] overflow-hidden">
        <div className="section-container py-4 md:py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Cat Image */}
            <FadeIn>
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/src/assets/home_page_cat.png"
                  alt="Kot - Trzymaj się, Kocie!"
                  className="w-full max-w-[32rem] rounded-2xl object-cover shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]"
                />
              </div>
            </FadeIn>

            {/* Text Content */}
            <FadeIn delay={200}>
              <div className="text-center lg:text-left">
                <span className="inline-block bg-[#F0E6D8] text-[#B8860B] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                  FUNDACJA POMOCY KOTOM
                </span>

                <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-gray-900 leading-[1.08] mb-6">
                  Razem<br />
                  tworzymy<br />
                  <span className="text-orange-500">lepszy świat</span> dla<br />
                  kotów
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                  Pomóż nam ratować bezdomne mruczki i znajdować im kochające domy. Każdy gest,
                  nawet najmniejszy, zmienia ich życie na lepsze.
                </p>

                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Link
                    to="/wsparcie"
                    className="inline-flex items-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <HandHeart size={18} className="text-orange-400" />
                    Przekaż 1.5% podatku
                  </Link>
                  <Link
                    to="/adopcja"
                    className="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-gray-400 text-gray-800 font-semibold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5"
                  >
                    Adoptuj kota
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="bg-[#FDF6EE]">
        <div className="section-container">
          <div className="h-px bg-gradient-to-r from-transparent via-orange-200/60 to-transparent" />
        </div>
      </div>

      {/* ── Poznaj naszych podopiecznych ── */}
      <section className="bg-[#FDF6EE] py-14 lg:py-20">
        <div className="section-container">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Poznaj naszych podopiecznych
                </h2>
                <p className="text-gray-500">
                  Czekają na swoją szansę i nowy, ciepły dom.
                </p>
              </div>
              <Link
                to="/galeria-kotow"
                className="inline-flex items-center gap-1 text-orange-500 font-semibold hover:text-orange-600 transition-colors mt-4 sm:mt-0 shrink-0"
              >
                Zobacz wszystkich
                <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {cats.map((cat, i) => (
                <CatCard key={cat.id} cat={cat} image={catImages[i]} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Jak możesz pomóc? ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="section-container">
          <FadeIn>
            <div className="text-center mb-6">
              <span className="inline-block bg-[#F0E6D8] text-[#B8860B] text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                Wsparcie
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Jak możesz pomóc?
              </h2>
            </div>

            <p className="text-center text-lg text-gray-500 max-w-2xl mx-auto mb-12">
              Pod opieką mamy aktualnie <span className="font-bold text-orange-500">ponad 100 kotów</span>.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <FadeIn delay={0}>
              <div className="bg-[#FDF6EE] rounded-2xl p-8 lg:p-10 text-center border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                  🛒
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Napełnij miseczki</h3>
                <p className="text-gray-500 mb-6 flex-grow leading-relaxed">
                  Napełnij miseczki naszych podopiecznych dokonując zakupu poprzez nasz sklep na stronie
                  Stowarzyszenia Ocalone Łapki. Dzięki Tobie karma, żwirek i podkłady trafią prosto do naszych kociaków!
                </p>
                <a
                  href="https://ocalonelapki.pl/organizacja/331/trzymaj-sie-kocie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  Sprezentuj naszym kotom karmę 🧡
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="bg-[#FDF6EE] rounded-2xl p-8 lg:p-10 text-center border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                  😻
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Postaw saszetkę na Suppi!</h3>
                <p className="text-gray-500 mb-6 flex-grow leading-relaxed">
                  Postaw naszym kotom saszetkę — każda porcja to pełny brzuszek dla jednego z naszych podopiecznych!
                </p>
                <a
                  href="https://suppi.pl/trzymajsiekocie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  Postaw saszetkę na Suppi 🐾
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Wesprzyj nas na Zrzutka.pl</h3>
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

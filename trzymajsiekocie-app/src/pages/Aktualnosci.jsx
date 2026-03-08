import { useState } from 'react';
import { CalendarDays, ChevronDown, ChevronUp, Clock3, MapPin, Newspaper } from 'lucide-react';
import bazarekImage from '../assets/Bazarek.jpg';
import niedzielaImage from '../assets/niedziela.png';

const newsItems = [
  {
    id: 'bazarek-zima',
    title: 'Bazarek na pożegnanie zimy',
    date: '2026-02-27',
    displayDate: '27 lutego 2026',
    category: 'Bazarek',
    image: bazarekImage,
    imageAlt: 'Baner wydarzenia Bazarek na pożegnanie zimy',
    excerpt:
      'Zapraszamy do udziału w kolejnym facebookowym bazarku na naszej grupie. Powoli wchodzimy w wiosenne klimaty, więc to świetna okazja do uzupełnienia garderoby i kosmetyczki 😊',
    badgeClass: 'bg-white/80 text-sky-700',
    accentClass: 'text-sky-700',
    body: [
      'Startujemy już w sobotę, bazarek standardowo potrwa cały tydzień.',
      'Nie za bardzo wiesz, o co w tym chodzi? Spokojnie, to nic trudnego – dołącz do grupy, a następnie zerknij do posta z regulaminem. Gdyby to nie rozwiało Twoich wątpliwości, śmiało pytaj administratorów grupy 😊',
    ],
    details: [
      { label: 'Start', value: '28.02.2026' },
      { label: 'Koniec', value: '08.03.2026' },
      { label: 'Forma', value: 'online na Facebooku' },
    ],
  },
  {
    id: 'niedziela-wydarzenia',
    title: 'Najbliższa niedziela — będzie się działo!',
    date: '2026-02-04',
    displayDate: '4 lutego 2026',
    category: 'Wydarzenia',
    image: niedzielaImage,
    imageAlt: 'Baner wydarzenia Najbliższa niedziela — będzie się działo!',
    excerpt:
      'Serdecznie zapraszamy w najbliższą niedzielę na nasze wydarzenia stacjonarne – będziemy w dwóch miejscach! Przygotowaliśmy między innymi: Wasze ulubione przypinki, breloczki, naklejki, plakaty i torby z autorskimi grafikami, mnóstwo biżuterii i nieco rękodzieła, a także świeżutkie wędki i zabawki dla kotów. Do zobaczenia! 😻',
    badgeClass: 'bg-white/80 text-rose-700',
    accentClass: 'text-rose-700',
    body: [
      'Będziemy w dwóch miejscach, więc możesz spotkać nas zarówno w Gdyni, jak i w Gdańsku. Wpadnij po autorskie fanty, porozmawiać z nami i wesprzeć działania stowarzyszenia.',
      'Każdy zakup realnie pomaga nam zadbać o codzienne potrzeby naszych podopiecznych, dlatego zapraszamy serdecznie i do zobaczenia na miejscu.',
    ],
    schedule: [
      {
        name: 'Targi PupiLove',
        time: '08.02.2026, 11:00-17:00',
        place: 'Centrum Riviera, Gdynia',
      },
      {
        name: 'Targ Miejski: AMORE',
        time: '08.02.2026, 11:00-18:00',
        place: '100cznia, Gdańsk',
      },
    ],
  },
];

function NewsBanner({ item }) {
  return (
    <div className="overflow-hidden rounded-[2rem] bg-slate-100">
      <img src={item.image} alt={item.imageAlt} className="h-auto w-full object-cover" />
    </div>
  );
}

export default function Aktualnosci() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_left,_rgba(251,146,60,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.12),_transparent_30%)]" />
        <div className="relative max-w-7xl mx-auto px-4 xl:px-8 py-16 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              <Newspaper size={16} />
              Bądź na bieżąco
            </span>
            <h1 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Aktualności, wydarzenia i bazarki
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Zebraliśmy tutaj najnowsze informacje o naszych akcjach, spotkaniach i inicjatywach. Każdy wpis możesz rozwinąć, żeby zobaczyć pełne szczegóły.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 xl:px-8 py-14 lg:py-16">
        <div className="space-y-10">
          {newsItems.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <article
                key={item.id}
                className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)]"
              >
                <div className="p-4 md:p-6">
                  <NewsBanner item={item} />
                </div>

                <div className="px-6 pb-6 md:px-10 md:pb-10">
                  <div className="flex flex-col gap-4 border-b border-gray-100 pb-6 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="inline-flex items-center gap-2">
                          <CalendarDays size={16} className={item.accentClass} />
                          <time dateTime={item.date}>{item.displayDate}</time>
                        </span>
                        <span className={`inline-flex rounded-full px-3 py-1 font-semibold ${item.badgeClass}`}>
                          {item.category}
                        </span>
                      </div>

                      <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-[#07105d]">
                        {item.title}
                      </h2>
                    </div>

                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className={`inline-flex items-center justify-center gap-2 self-start rounded-full px-5 py-3 text-sm font-semibold text-white transition-colors ${
                        isExpanded ? 'bg-slate-700 hover:bg-slate-800' : 'bg-orange-500 hover:bg-orange-600'
                      }`}
                    >
                      {isExpanded ? 'Pokaż mniej' : 'Więcej'}
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>

                  <div className="pt-6">
                    <p className="max-w-4xl text-lg leading-8 text-gray-600">{item.excerpt}</p>

                    {!isExpanded && (
                      <button
                        type="button"
                        onClick={() => setExpandedId(item.id)}
                        className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-[#07105d] underline decoration-orange-300 underline-offset-4 transition-colors hover:text-orange-600"
                      >
                        Czytaj dalej
                        <span aria-hidden="true">👉</span>
                      </button>
                    )}

                    {isExpanded && (
                      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)]">
                        <div className="space-y-5 text-lg leading-8 text-gray-700">
                          {item.body.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>

                        <aside className="rounded-[1.75rem] bg-slate-50 p-6 ring-1 ring-gray-100">
                          {item.details && (
                            <div>
                              <h3 className="text-lg font-bold text-gray-800">Szczegóły wydarzenia</h3>
                              <div className="mt-4 space-y-4">
                                {item.details.map((detail) => (
                                  <div key={detail.label} className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-100">
                                    <p className="text-sm font-medium text-gray-500">{detail.label}</p>
                                    <p className="mt-1 font-semibold text-gray-800">{detail.value}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.schedule && (
                            <div>
                              <h3 className="text-lg font-bold text-gray-800">Gdzie nas spotkasz?</h3>
                              <div className="mt-4 space-y-4">
                                {item.schedule.map((event) => (
                                  <div key={event.name} className="rounded-2xl bg-white px-4 py-4 shadow-sm ring-1 ring-gray-100">
                                    <h4 className="font-bold text-[#07105d]">{event.name}</h4>
                                    <p className="mt-3 inline-flex items-center gap-2 text-sm text-gray-600">
                                      <Clock3 size={15} className="text-rose-600" />
                                      {event.time}
                                    </p>
                                    <p className="mt-2 inline-flex items-center gap-2 text-sm text-gray-600">
                                      <MapPin size={15} className="text-rose-600" />
                                      {event.place}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </aside>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

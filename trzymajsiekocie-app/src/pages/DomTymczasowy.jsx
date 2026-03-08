import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ClipboardList,
  Clock3,
  HeartHandshake,
  Home,
  Package,
} from 'lucide-react';

const infoCards = [
  {
    icon: Package,
    title: 'Co zapewniamy domowi tymczasowemu?',
    description:
      'Jeśli zdecydujesz się wziąć kota na tymczas, dostaniesz od nas wyprawkę i zaopatrzenie. Do lecznic będziesz jeździć na nasz rachunek, chyba że zadeklarujesz samodzielne finansowanie. To zależy wyłącznie od Ciebie.',
  },
  {
    icon: ClipboardList,
    title: 'Jak zostać domem tymczasowym?',
    description:
      'Zanim się umówimy, prosimy o wypełnienie ankiety. Będziemy też chcieli poznać Cię osobiście i sprawdzić warunki, jakie możesz zapewnić kotu, dlatego poprosimy Cię o zaproszenie nas do siebie. To będzie po prostu spokojna rozmowa o tym, czego potrzebuje kot.',
  },
  {
    icon: Clock3,
    title: 'Jak długo kot jest w domu tymczasowym?',
    description:
      'Kot w domu tymczasowym pozostaje podopiecznym TSK!. Od Ciebie zależy, jak długo będzie u Ciebie mieszkał. Możesz w każdej chwili zrezygnować. Daj nam tylko znać odpowiednio wcześniej, żebyśmy mieli czas na znalezienie nowego domu.',
  },
  {
    icon: HeartHandshake,
    title: 'Dlaczego warto zostać DT?',
    description:
      'Tymczasowanie to świetna opcja, jeśli chcesz się przekonać, czy nowy kot dogada się z Twoim kotem lub psem. Albo czy w ogóle Ty plus kot to dobry pomysł. A najfajniejsze jest to, że dom tymczasowy ma pierwszeństwo przy adopcji.',
  },
];

const steps = [
  'Wypełniasz ankietę i dajesz nam znać, że chcesz pomóc.',
  'Poznajemy się i rozmawiamy o warunkach, jakie możesz zapewnić kotu.',
  'Ustalamy, jaki kot i jaka forma tymczasu będą dla Ciebie odpowiednie.',
];

export default function DomTymczasowy() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 xl:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 uppercase tracking-wider mb-4">
                <Home size={16} />
                Zostań domem tymczasowym
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-5 leading-tight">
                Dom tymczasowy to najlepsza alternatywa dla schroniska.
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                Dom tymczasowy, inaczej tymczas albo DT, to podstawowa komórka rodzinna w naszym stowarzyszeniu.
                To dom, w którym kot mieszka, aż zgłoszą się chętni do adopcji.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-white font-semibold hover:bg-orange-600 transition-colors"
                >
                  Chcę zostać domem tymczasowym
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/wsparcie"
                  className="inline-flex items-center justify-center rounded-full border border-orange-200 px-6 py-3 text-orange-600 font-semibold hover:border-orange-300 hover:bg-orange-50 transition-colors"
                >
                  Inne formy pomocy
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-orange-100/70 rotate-3" />
              <div className="relative rounded-[2rem] border border-orange-100 bg-white shadow-xl p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500 mb-4">
                  W skrócie
                </p>
                <div className="space-y-5">
                  <div>
                    <p className="text-3xl font-bold text-gray-800">1 kot</p>
                    <p className="text-sm text-gray-500 mt-1">może dostać bezpieczną przestrzeń zamiast schroniska</p>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div>
                    <p className="text-3xl font-bold text-gray-800">Ty decydujesz</p>
                    <p className="text-sm text-gray-500 mt-1">na jak długo możesz przyjąć kota do siebie</p>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div>
                    <p className="text-3xl font-bold text-gray-800">Masz wsparcie</p>
                    <p className="text-sm text-gray-500 mt-1">zapewniamy wyprawkę, zaopatrzenie i opiekę weterynaryjną</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 xl:px-8 py-14 lg:py-16">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
            Najważniejsze informacje o DT
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Jeśli rozważasz tymczasowanie, poniżej znajdziesz najważniejsze odpowiedzi na pytania, które pojawiają się najczęściej.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infoCards.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-5">
                <Icon className="text-orange-500" size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 xl:px-8 py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500 mb-3">
              Jak to wygląda w praktyce
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Zostanie domem tymczasowym to prosty proces.
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-xl">
              Nie robimy nalotu ekipy śledczej. Chcemy po prostu poznać Ciebie, porozmawiać i upewnić się, że kot będzie miał u Ciebie bezpieczne warunki.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex gap-4 rounded-2xl border border-orange-100 bg-orange-50/60 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-orange-500 font-bold shadow-sm">
                  {index + 1}
                </div>
                <p className="text-gray-700 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 xl:px-8 py-16">
        <div className="rounded-[2rem] bg-gray-900 px-6 py-10 lg:px-10 lg:py-12 text-white flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-300 mb-3">
              Chcesz spróbować?
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              Odezwij się do nas i zrób pierwszy krok do zostania domem tymczasowym.
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Tymczasowanie pozwala realnie uratować kota i jednocześnie sprawdzić, czy wspólne życie z nim jest dla Ciebie dobrą drogą.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-orange-50 transition-colors"
            >
              Skontaktuj się z nami
            </Link>
            <Link
              to="/faq"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Zobacz FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

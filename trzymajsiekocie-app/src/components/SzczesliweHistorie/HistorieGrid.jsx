import HistorieCard from './HistorieCard';

const stories = [
  {
    id: 1,
    name: 'Mruczka',
    image: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
    description:
      'Mruczka trafiła do nas wychudzona i przestraszona. Po kilku tygodniach opieki rozkwitła — dziś mieszka z kochającą rodziną w Sopocie i uwielbia drzemać na parapecie.',
    adoptedDate: 'Styczeń 2025',
  },
  {
    id: 2,
    name: 'Rysio',
    image: 'https://cdn2.thecatapi.com/images/MTYxMjA4MQ.jpg',
    description:
      'Rysio był kotem wolno żyjącym, który potrzebował pomocy weterynaryjnej. Po leczeniu znalazł dom u starszej pani — teraz to najlepsi przyjaciele.',
    adoptedDate: 'Marzec 2025',
  },
  {
    id: 3,
    name: 'Luna i Stella',
    image: 'https://cdn2.thecatapi.com/images/MjA0ODI4MQ.jpg',
    description:
      'Nierozłączne siostry, które adoptowano razem. Ich nowi opiekunowie mówią, że to najlepsze kocie duo na świecie!',
    adoptedDate: 'Maj 2025',
  },
  {
    id: 4,
    name: 'Puszek',
    image: 'https://cdn2.thecatapi.com/images/dbn.jpg',
    description:
      'Puszek trafił do nas jako maleńki kociak znaleziony w kartonie. Teraz jest puszystym, pewnym siebie kotem, który rządzi swoim nowym domem.',
    adoptedDate: 'Lipiec 2025',
  },
  {
    id: 5,
    name: 'Bułka',
    image: 'https://cdn2.thecatapi.com/images/e9p.jpg',
    description:
      'Bułka, rudy kocur o wielkim sercu, po adopcji stał się ulubieńcem całej rodziny. Najbardziej kocha wspólne wieczory na kanapie.',
    adoptedDate: 'Wrzesień 2025',
  },
  {
    id: 6,
    name: 'Figa',
    image: 'https://cdn2.thecatapi.com/images/MTk0OTQ4NA.jpg',
    description:
      'Figa była bardzo nieufna wobec ludzi. Cierpliwość i miłość nowych opiekunów sprawiły, że dziś jest prawdziwą przytulaczką.',
    adoptedDate: 'Listopad 2025',
  },
];

export default function HistorieGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-8 py-14">
      <div className="mb-10 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
          Poznaj ich historie
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Każdy z tych kotów przeszedł długą drogę — z ulicy do ciepłego domu.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <HistorieCard key={story.id} {...story} />
        ))}
      </div>
    </section>
  );
}

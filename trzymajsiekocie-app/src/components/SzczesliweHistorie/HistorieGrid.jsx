import HistorieCard from './HistorieCard';
import useCatImages from '../../hooks/useCatImages';

const stories = [
  {
    id: 1,
    name: 'Mruczka',
    description:
      'Mruczka trafiła do nas wychudzona i przestraszona. Po kilku tygodniach opieki rozkwitła — dziś mieszka z kochającą rodziną w Sopocie i uwielbia drzemać na parapecie.',
    adoptedDate: 'Styczeń 2025',
  },
  {
    id: 2,
    name: 'Rysio',
    description:
      'Rysio był kotem wolno żyjącym, który potrzebował pomocy weterynaryjnej. Po leczeniu znalazł dom u starszej pani — teraz to najlepsi przyjaciele.',
    adoptedDate: 'Marzec 2025',
  },
  {
    id: 3,
    name: 'Luna i Stella',
    description:
      'Nierozłączne siostry, które adoptowano razem. Ich nowi opiekunowie mówią, że to najlepsze kocie duo na świecie!',
    adoptedDate: 'Maj 2025',
  },
  {
    id: 4,
    name: 'Puszek',
    description:
      'Puszek trafił do nas jako maleńki kociak znaleziony w kartonie. Teraz jest puszystym, pewnym siebie kotem, który rządzi swoim nowym domem.',
    adoptedDate: 'Lipiec 2025',
  },
  {
    id: 5,
    name: 'Bułka',
    description:
      'Bułka, rudy kocur o wielkim sercu, po adopcji stał się ulubieńcem całej rodziny. Najbardziej kocha wspólne wieczory na kanapie.',
    adoptedDate: 'Wrzesień 2025',
  },
  {
    id: 6,
    name: 'Figa',
    description:
      'Figa była bardzo nieufna wobec ludzi. Cierpliwość i miłość nowych opiekunów sprawiły, że dziś jest prawdziwą przytulaczką.',
    adoptedDate: 'Listopad 2025',
  },
];

export default function HistorieGrid() {
  const { images, loading } = useCatImages(stories.length);

  return (
    <section className="section-container pt-4 pb-12 md:pt-5 md:pb-14 lg:pt-6 lg:pb-[4.5rem]">
      <div className="mb-8 text-center">
        <span className="section-label">Adopcje</span>
        <h2 className="heading-section mb-3">
          Poznaj ich historie
        </h2>
        <p className="text-body max-w-lg mx-auto">
          Każdy z tych kotów przeszedł długą drogę — z ulicy do ciepłego domu.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <HistorieCard key={story.id} {...story} image={images[index] || ''} loading={loading} />
        ))}
      </div>
    </section>
  );
}

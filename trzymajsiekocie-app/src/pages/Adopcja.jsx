import { Link } from 'react-router-dom';
import './Adopcja.css';
import kotyData from '../data/koty.json';

export default function Adopcja() {
  const allCats = kotyData.koty;
  
  // Funkcja do obliczania liczby kotów w kategorii
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'wszystkie') return allCats.length;
    return allCats.filter(cat => cat.category === categoryId).length;
  };

  // Funkcja do określenia formy "kot/koty/kotów"
  const getCatLabel = (count) => {
    if (count === 1) return 'KOT';
    if (count >= 2 && count <= 4) return 'KOTY';
    return 'KOTÓW';
  };

  const categories = [
    { id: 'wszystkie', name: 'Wszystkie', color: '#FF6B6B' },
    { id: 'dwupaki', name: 'Dwupaki', color: '#4ECDC4' },
    { id: 'emeryci', name: 'Emeryci', color: '#FFE66D' },
    { id: 'jedynacy', name: 'Jedynacy', color: '#A8E6CF' },
    { id: 'kociaki', name: 'Kociaki', color: '#FF8B94' },
    { id: 'pingwinki', name: 'Pingwinki', color: '#C7CEEA' },
    { id: 'starszaki', name: 'Starszaki', color: '#FFDAC1' },
  ].map(cat => ({
    ...cat,
    count: getCategoryCount(cat.id),
    label: getCatLabel(getCategoryCount(cat.id))
  }));

  return (
    <div>
      {/* Nagłówek */}
      <div className="text-center py-12 bg-white">
        <h1 className="text-5xl font-bold text-gray-800">Adopcja</h1>
      </div>

      {/* Sekcja z procesem adopcji */}
      <div className="bg-[#7DD3E8] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-gray-700 text-lg mb-4">
              Adopcja to jeden z podstawowych celów naszej działalności. Szukamy naszym podopiecznym domów na całe życie.
            </p>
            <p className="text-gray-700 text-lg">
              Jeśli szukasz kota dla siebie, być może znajdziesz go właśnie u nas.
            </p>
          </div>

          {/* 3 kroki */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Krok 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-[#2C5F8D] mb-4">
                <span className="text-2xl font-bold text-[#2C5F8D]">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Przejrzyj galerię</h3>
              <p className="text-gray-700">
                Wybierz kota, który do Ciebie pasuje. Możesz zajrzeć do kategorii lub przeglądać pełną galerię.
              </p>
            </div>

            {/* Krok 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-[#2C5F8D] mb-4">
                <span className="text-2xl font-bold text-[#2C5F8D]">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Wypełnij ankietę adopcyjną</h3>
              <p className="text-gray-700">
                Po wyborze kota wypełnij ankietę. Porozmawiamy z Tobą o ważnych kwestiach dotyczących adopcji.
              </p>
            </div>

            {/* Krok 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-[#2C5F8D] mb-4">
                <span className="text-2xl font-bold text-[#2C5F8D]">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Podpisz umowę</h3>
              <p className="text-gray-700">
                Jeśli wszystko się zgadza, podpisujemy umowę i możesz zabrać kota do domu! 🐱
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sekcja z kategoriami */}
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-16">
        {/* Grid kategorii */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/galeria-kotow?kategoria=${category.id}`}
              className="category-card rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 block"
            >
              {/* Kolorowe tło */}
              <div 
                className="aspect-square overflow-hidden"
                style={{ backgroundColor: category.color }}
              >
              </div>
              
              {/* Nazwa i liczba */}
              <div className="p-6 text-center bg-white">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 font-medium tracking-wider">
                  {category.count} {category.label}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

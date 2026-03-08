import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import kotyData from '../data/koty.json';
import useCatImages from '../hooks/useCatImages';
import CatImage from '../components/CatImage';

export default function Adopcja() {
  const allCats = kotyData.koty;
  const categories = kotyData.categories;
  const { images: apiImages } = useCatImages(categories.length);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
  
  const getCategoryCount = (categoryId) => {
    if (categoryId === 'wszystkie') return allCats.length;
    return allCats.filter(cat => cat.category === categoryId).length;
  };

  const getCatLabel = (count) => {
    if (count === 1) return 'KOT';
    if (count >= 2 && count <= 4) return 'KOTY';
    return 'KOTÓW';
  };

  const getCategoryPreviewImage = (categoryId, index) => {
    const apiImage = apiImages[index] || null;
    const localPreview = categoryId === 'wszystkie'
      ? allCats.find((cat) => cat.images?.length > 0)?.images?.[0]
      : allCats.find((cat) => cat.category === categoryId && cat.images?.length > 0)?.images?.[0];

    return { apiImage, localPreview };
  };

  const categoriesWithCounts = categories.map(cat => ({
    ...cat,
    count: getCategoryCount(cat.id),
    label: getCatLabel(getCategoryCount(cat.id))
  }));

  return (
    <div>
      <div className="text-center py-12 bg-white">
        <h1 className="heading-page text-5xl">Adopcja</h1>
      </div>

      <div className="bg-orange-100 py-16 px-4">
        <div className="section-container">
          <div className="mb-12">
            <p className="text-body text-lg mb-4">
              Adopcja to jeden z podstawowych celów naszej działalności. Szukamy naszym podopiecznym domów na całe życie.
            </p>
            <p className="text-body text-lg">
              Jeśli szukasz kota dla siebie, być może znajdziesz go właśnie u nas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Przejrzyj galerię', text: 'Wybierz kota, który do Ciebie pasuje. Możesz zajrzeć do kategorii lub przeglądać pełną galerię.' },
              { step: 2, title: 'Wypełnij ankietę adopcyjną', text: 'Po wyborze kota wypełnij ankietę. Porozmawiamy z Tobą o ważnych kwestiach dotyczących adopcji.' },
              { step: 3, title: 'Podpisz umowę', text: 'Jeśli wszystko się zgadza, podpisujemy umowę i możesz zabrać kota do domu! 🐱' },
            ].map(({ step, title, text }) => (
              <div key={step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-orange-500 mb-4">
                  <span className="text-2xl font-bold text-orange-500">{step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
                <p className="text-body">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container section-hero">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {categoriesWithCounts.map((category, index) => {
            const { apiImage, localPreview } = getCategoryPreviewImage(category.id, index);
            return (
              <Link
                key={category.id}
                to={`/galeria-kotow?kategoria=${category.id}`}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 block"
              >
                <div className="aspect-square overflow-hidden" style={{ backgroundColor: category.color }}>
                  <CatImage
                    apiImage={apiImage}
                    localImage={localPreview}
                    color={category.color}
                    altText={`Kot w kategorii ${category.name}`}
                  />
                </div>
                <div className="p-6 text-center bg-white">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-sm text-muted font-medium tracking-wider">
                    {category.count} {category.label}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

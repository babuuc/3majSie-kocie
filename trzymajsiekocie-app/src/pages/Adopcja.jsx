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
      <section className="relative hero-gradient overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="section-container section-hero">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">Znajdź swojego kota</span>
            <h1 className="heading-page mb-4">Adopcja</h1>
            <p className="text-body text-lg max-w-xl mx-auto">
              Adopcja to jeden z podstawowych celów naszej działalności. Szukamy naszym podopiecznym domów na całe życie.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-orange-100 to-orange-50 py-14 lg:py-16 px-4">
        <div className="section-container">
          <div className="max-w-2xl mb-12">
            <h2 className="heading-section mb-4">Jak wygląda proces adopcji?</h2>
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
              <div key={step} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-orange-400 mb-5 shadow-sm">
                  <span className="text-2xl font-bold text-orange-500">{step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
                <p className="text-body">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container section-hero">
        <div className="text-center mb-10">
          <span className="section-label">Galeria</span>
          <h2 className="heading-section mb-3">Wybierz kategorię</h2>
          <p className="text-body max-w-lg mx-auto">Przeglądaj naszych podopiecznych po kategoriach lub zobacz pełną galerię.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {categoriesWithCounts.map((category, index) => {
            const { apiImage, localPreview } = getCategoryPreviewImage(category.id, index);
            return (
              <Link
                key={category.id}
                to={`/galeria-kotow?kategoria=${category.id}`}
                className="card-base card-base-hover overflow-hidden block"
              >
                <div className="aspect-square overflow-hidden" style={{ backgroundColor: category.color }}>
                  <CatImage
                    apiImage={apiImage}
                    localImage={localPreview}
                    color={category.color}
                    altText={`Kot w kategorii ${category.name}`}
                  />
                </div>
                <div className="p-5 text-center bg-white">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{category.name}</h3>
                  <p className="text-sm text-muted font-medium tracking-wider">
                    {category.count} {category.label}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

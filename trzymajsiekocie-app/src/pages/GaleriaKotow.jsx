import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import kotyData from '../data/koty.json';
import useCatImages from '../hooks/useCatImages';
import CatImage from '../components/CatImage';

export default function GaleriaKotow() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('kategoria') || 'wszystkie';
  
  const [selectedCategories, setSelectedCategories] = useState(() => {
    if (categoryFromUrl !== 'wszystkie') {
      return [categoryFromUrl];
    }
    return [];
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const categories = kotyData.categories;
  const allCats = kotyData.koty;
  const { images: apiImages } = useCatImages(allCats.length);

  const getLocalCatImage = (cat) => cat.images?.[0] || null;

  const handleCategoryToggle = (categoryId) => {
    if (categoryId === 'wszystkie') {
      setSelectedCategories([]);
      return;
    }

    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const filteredCats = selectedCategories.length === 0 
    ? allCats 
    : allCats.filter(cat => selectedCategories.includes(cat.category));

  return (
    <div>
      <section className="hero-gradient">
        <div className="section-container section-hero">
          <div className="max-w-2xl">
            <span className="section-label">Galeria</span>
            <h1 className="heading-page mb-4">Galeria kotów do adopcji</h1>
            <p className="text-body text-lg">Przeglądaj naszych podopiecznych i znajdź kota dla siebie.</p>
          </div>
        </div>
      </section>

      <section className="section-container section-content">

      <div className="mb-10 card-base p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Filtruj po kategorii:</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors"
            >
              <input
                type="checkbox"
                checked={category.id === 'wszystkie' ? selectedCategories.length === 0 : selectedCategories.includes(category.id)}
                onChange={() => handleCategoryToggle(category.id)}
                className="w-5 h-5 rounded accent-orange-500"
              />
              <span className="font-medium text-gray-700">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCats.map((cat) => {
          const originalIndex = allCats.findIndex(c => c.id === cat.id);
          return (
          <Link
            key={cat.id}
            to={`/adoptuj/${cat.id}`}
            className="cat-card card-base card-base-hover overflow-hidden"
          >
            <div 
              className="aspect-square overflow-hidden"
              style={{ 
                backgroundColor: categories.find(c => c.id === cat.category)?.color || '#e0e0e0'
              }}
            >
              <CatImage
                apiImage={apiImages[originalIndex]}
                localImage={getLocalCatImage(cat)}
                color={categories.find(c => c.id === cat.category)?.color || '#e0e0e0'}
                altText={cat.name}
              />
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-1">{cat.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{cat.age}</p>
              <p className="text-sm text-muted capitalize">{categories.find(c => c.id === cat.category)?.name}</p>
              <button className="mt-4 w-full btn btn-primary btn-rect text-sm py-2.5">
                Zobacz profil
              </button>
            </div>
          </Link>
          );
        })}
      </div>

      {filteredCats.length === 0 && (
        <div className="text-center py-16">
          <span className="text-5xl block mb-4">🐱</span>
          <p className="text-muted text-lg">Brak kotów w wybranych kategoriach</p>
        </div>
      )}
      </section>
    </div>
  );
}

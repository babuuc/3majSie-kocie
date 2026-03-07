import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import './GaleriaKotow.css';
import kotyData from '../data/koty.json';

export default function GaleriaKotow() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('kategoria') || 'wszystkie';
  
  const [selectedCategories, setSelectedCategories] = useState(() => {
    if (categoryFromUrl !== 'wszystkie') {
      return [categoryFromUrl];
    }
    return [];
  });

  const categories = [
    { id: 'wszystkie', name: 'Wszystkie', color: '#FF6B6B' },
    { id: 'dwupaki', name: 'Dwupaki', color: '#4ECDC4' },
    { id: 'emeryci', name: 'Emeryci', color: '#FFE66D' },
    { id: 'jedynacy', name: 'Jedynacy', color: '#A8E6CF' },
    { id: 'kociaki', name: 'Kociaki', color: '#FF8B94' },
    { id: 'pingwinki', name: 'Pingwinki', color: '#C7CEEA' },
    { id: 'starszaki', name: 'Starszaki', color: '#FFDAC1' },
  ];

  const allCats = kotyData.koty;

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
    <div className="max-w-7xl mx-auto px-4 xl:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Galeria kotów do adopcji</h1>

      {/* Filtry - checkboxy */}
      <div className="mb-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Filtruj po kategorii:</h2>
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
                className="w-5 h-5 rounded text-blue-600"
              />
              <span 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: category.color }}
              ></span>
              <span className="font-medium text-gray-700">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Galeria kotów */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCats.map((cat) => (
          <Link
            key={cat.id}
            to={`/adoptuj/${cat.id}`}
            className="cat-card rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {/* Zdjęcie kota */}
            <div 
              className="aspect-square overflow-hidden"
              style={{ 
                backgroundColor: categories.find(c => c.id === cat.category)?.color || '#e0e0e0'
              }}
            >
              {cat.images && cat.images.length > 0 ? (
                <img
                  src={cat.images[0]}
                  alt={cat.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white text-4xl font-bold">🐱</div>';
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                  🐱
                </div>
              )}
            </div>
            
            {/* Informacje o kocie */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{cat.name}</h3>
              <p className="text-sm text-gray-600 mb-1">{cat.age}</p>
              <p className="text-sm text-gray-500 capitalize">{categories.find(c => c.id === cat.category)?.name}</p>
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Zobacz profil
              </button>
            </div>
          </Link>
        ))}
      </div>

      {filteredCats.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Brak kotów w wybranych kategoriach</p>
        </div>
      )}
    </div>
  );
}

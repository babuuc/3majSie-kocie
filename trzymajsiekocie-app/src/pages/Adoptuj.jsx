import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import kotyData from '../data/koty.json';

const MIN_GALLERY_IMAGES = 3;

export default function Adoptuj() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showZasadyModal, setShowZasadyModal] = useState(false);
  const navigate = useNavigate();
  
  const kot = kotyData.koty.find(k => k.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    setCurrentImageIndex(0);
  }, [id]);

  const galleryImages = kot
    ? (() => {
        const localImages = (kot.images || []).map((image, index) => ({
          src: image,
          fallback: `https://cataas.com/cat?width=900&height=900&random=${encodeURIComponent(`${kot.id}-fallback-${index + 1}`)}`,
        }));

        const apiImages = Array.from({ length: Math.max(MIN_GALLERY_IMAGES - localImages.length, 0) }, (_, index) => ({
          src: `https://cataas.com/cat?width=900&height=900&random=${encodeURIComponent(`${kot.id}-api-${index + 1}`)}`,
          fallback: kot.apiImage || null,
        }));

        const images = [...localImages, ...apiImages];

        if (images.length === 0 && kot.apiImage) {
          return Array.from({ length: MIN_GALLERY_IMAGES }, (_, index) => ({
            src: `https://cataas.com/cat?width=900&height=900&random=${encodeURIComponent(`${kot.id}-api-only-${index + 1}`)}`,
            fallback: kot.apiImage,
          }));
        }

        return images;
      })()
    : [];

  const handleImageError = (event, fallbackImage) => {
    if (fallbackImage && event.currentTarget.getAttribute('src') !== fallbackImage) {
      event.currentTarget.src = fallbackImage;
      return;
    }

    event.currentTarget.style.display = 'none';
    event.currentTarget.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-6xl">🐱</div>';
  };

  if (!kot) {
    return (
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Kot nie został znaleziony</h1>
        <p className="text-gray-600 text-lg">Przepraszamy, nie możemy znaleźć tego kota.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 xl:px-8 py-16">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">{kot.name}</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div>
          <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-square mb-4">
            {galleryImages.length > 0 ? (
              <img
                src={galleryImages[currentImageIndex]?.src || galleryImages[currentImageIndex]?.fallback}
                alt={`${kot.name} - zdjęcie ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(event) => handleImageError(event, galleryImages[currentImageIndex]?.fallback)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-6xl">
                🐱
              </div>
            )}
          </div>
          {galleryImages.length > 1 && (
            <div className="flex gap-2 flex-wrap">
              {galleryImages.map((image, index) => (
                <button
                  key={`${kot.id}-${index}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index ? 'border-orange-500 scale-105' : 'border-gray-300'
                  }`}
                >
                  <img
                    src={image.src || image.fallback}
                    alt={`Miniaturka ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(event) => handleImageError(event, image.fallback)}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Metryczka</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-3">
              <p className="text-sm text-gray-500 mb-1">Wiek:</p>
              <p className="text-lg font-semibold text-gray-800">{kot.age}</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <p className="text-sm text-gray-500 mb-1">Szczepienie:</p>
              <p className="text-lg font-semibold text-gray-800">{kot.szczepienie}</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <p className="text-sm text-gray-500 mb-1">Odrobaczenie:</p>
              <p className="text-lg font-semibold text-gray-800">{kot.odrobaczenie}</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <p className="text-sm text-gray-500 mb-1">Kastracja:</p>
              <p className="text-lg font-semibold text-gray-800">{kot.kastracja}</p>
            </div>
            <div className="border-b border-gray-200 pb-3">
              <p className="text-sm text-gray-500 mb-1">Stosunek do kotów:</p>
              <p className="text-lg font-semibold text-gray-800">{kot.stosunekDoKotow}</p>
            </div>
            <div className="pb-3">
              <p className="text-sm text-gray-500 mb-1">Stosunek do psów:</p>
              <p className="text-lg font-semibold text-gray-800">{kot.stosunekDoPsow}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 rounded-2xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Historia</h2>
        <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
          {kot.historia}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Link
          to={`/adopcja-ankieta/${kot.id}`}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg flex items-center justify-center text-center"
        >
          Wypełnij ankietę adopcyjną
        </Link>
        <button 
          onClick={() => setShowZasadyModal(true)}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg"
        >
          Zasady adopcji
        </button>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Adopcja wirtualna</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Nie masz możliwości przyjęcia kotka pod swój dach? Istnieje opcja adopcji wirtualnej. 
          Możesz zadeklarować stały przelew na ulubionego kota. To nie musi być duża suma – liczy się 
          każdy grosz i za każdy będziemy wdzięczni. W zamian co miesiąc dostaniesz zdjęcie swojego 
          podopiecznego i krótkie sprawozdanie, co u niego słychać 😻
        </p>
        <Link 
          to="/adopcja-wirtualna"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Dowiedz się więcej
        </Link>
      </div>

      {showZasadyModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowZasadyModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">Zasady adopcji</h2>
              <button 
                onClick={() => setShowZasadyModal(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Wypełnij ankietę adopcyjną</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  W tym miejscu trzeba wyjaśnić, że nie dostaniesz kota od ręki. Staramy się zapobiec sytuacji, kiedy zwierzak 
                  po kilku tygodniach wraca do nas – bo to się zdarza. Dlatego będziemy Cię prosić o wypełnienie ankiety adopcyjnej 
                  i pozwolenie na nasze odwiedziny. Chcemy poznać Ciebie i dom, do którego trafi nasz podopieczny. Porozmawiamy z Tobą 
                  o zabezpieczeniu balkonu, o właściwym żywieniu i innych ważnych kwestiach.
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <button 
                  onClick={() => setShowZasadyModal(false)}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Zamknij
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

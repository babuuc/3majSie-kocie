import { Heart } from 'lucide-react';

export default function HistorieCard({ name, image, description, adoptedDate, loading }) {
  return (
    <div className="card-base card-base-hover overflow-hidden group">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-orange-300 border-t-orange-500 rounded-full animate-spin"></div>
          </div>
        ) : image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-orange-50 to-amber-50">🐱</div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm">
          <Heart size={16} className="text-orange-500 fill-orange-500" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          {adoptedDate && (
            <span className="text-xs text-orange-500 font-semibold bg-orange-50 px-2.5 py-1 rounded-full">{adoptedDate}</span>
          )}
        </div>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

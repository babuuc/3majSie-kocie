import { Heart } from 'lucide-react';

export default function HistorieCard({ name, image, description, adoptedDate, loading }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow">
      <div className="relative h-56 overflow-hidden bg-gray-100">
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
          <div className="w-full h-full flex items-center justify-center text-4xl">🐱</div>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-sm">
          <Heart size={16} className="text-orange-500 fill-orange-500" />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          {adoptedDate && (
            <span className="text-xs text-gray-400 font-medium">{adoptedDate}</span>
          )}
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

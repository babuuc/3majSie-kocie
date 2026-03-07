import loveLogo from '../../assets/love.png';

export default function WsparcieHero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <span className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">
              Wsparcie
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-5 leading-tight">
              Jak możesz nam pomóc?
            </h1>
            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
              Jeśli masz jeszcze inny pomysł na wsparcie, zapraszamy do{' '}
              <a href="/kontakt" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                kontaktu
              </a>{' '}
              😸
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={loveLogo}
              alt="Kotek z serduszkami"
              className="w-52 lg:w-60 opacity-80 drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

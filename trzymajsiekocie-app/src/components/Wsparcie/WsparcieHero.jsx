import loveLogo from '../../assets/love.png';

export default function WsparcieHero() {
  return (
    <section className="relative hero-gradient overflow-hidden">
      <div className="section-container pt-2 pb-5 md:pt-3 md:pb-6 lg:pt-3 lg:pb-7">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <span className="section-label">
              Wsparcie
            </span>
            <h1 className="heading-page mb-5">
              Jak możesz nam pomóc?
            </h1>
            <p className="text-body text-lg max-w-xl">
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
              className="w-56 lg:w-64 opacity-85 drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

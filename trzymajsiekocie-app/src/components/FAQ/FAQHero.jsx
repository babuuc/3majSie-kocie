import faqLogo from '../../assets/pytajnik-300x206.png';

export default function FAQHero() {
  return (
    <section className="relative hero-gradient overflow-hidden">
      <div className="section-container py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <span className="section-label">
              FAQ
            </span>
            <h1 className="heading-page mb-2">
              Pytania i odpowiedzi
            </h1>
            <p className="text-body text-lg max-w-xl">
              Znajdziesz tu odpowiedzi na najczęściej pojawiające się pytania.
              Jeśli nie rozwialiśmy wszystkich Twoich wątpliwości, zapraszamy
              do{' '}
              <a href="/kontakt" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                kontaktu
              </a>{' '}
              😸
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={faqLogo}
              alt="Kotek z pytajnikiem"
              className="w-40 lg:w-48 opacity-85 drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

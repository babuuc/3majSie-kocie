import statutPdf from '../assets/STATUT.pdf';

export default function Dokumenty() {
  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-amber-50">
      <section className="max-w-6xl mx-auto px-4 xl:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-[0.2em] mb-4">
            Dokumenty
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">Statut stowarzyszenia</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Poniżej znajdziesz statut Stowarzyszenia Trzymaj Się, Kocie! Możesz otworzyć go w nowej karcie
            albo przejrzeć bezpośrednio na stronie.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-orange-100 shadow-xl p-6 md:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">STATUT.pdf</h2>
              <p className="text-gray-600 leading-7">
                Oficjalny dokument określający zasady działania naszego stowarzyszenia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={statutPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-colors"
              >
                Otwórz statut
              </a>
              <a
                href={statutPdf}
                download="STATUT.pdf"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-full border border-gray-200 shadow-sm transition-colors"
              >
                Pobierz PDF
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
            <iframe
              src={statutPdf}
              title="Statut stowarzyszenia"
              className="w-full h-[75vh] min-h-[700px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

import statutPdf from '../assets/STATUT.pdf';

export default function Dokumenty() {
  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-amber-50">
      <section className="section-container section-hero">
        <div className="max-w-3xl mb-12">
          <span className="section-label">
            Dokumenty
          </span>
          <h1 className="heading-page mb-5">Statut stowarzyszenia</h1>
          <p className="text-body text-lg">
            Poniżej znajdziesz statut Stowarzyszenia Trzymaj Się, Kocie! Możesz otworzyć go w nowej karcie
            albo przejrzeć bezpośrednio na stronie.
          </p>
        </div>

        <div className="card-base shadow-xl border-orange-100 p-6 md:p-8 lg:p-10">
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
                className="btn btn-primary"
              >
                Otwórz statut
              </a>
              <a
                href={statutPdf}
                download="STATUT.pdf"
                className="btn btn-outline bg-white"
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

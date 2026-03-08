import catLoveLogo from '../../assets/love-300x219.png';

export default function HistorieHero() {
  return (
    <section className="relative hero-gradient overflow-hidden">
      <div className="section-container py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2">
            <span className="section-label">
              Nasze sukcesy
            </span>
            <h1 className="heading-page mb-2">
              Szczęśliwe historie
            </h1>
            <p className="text-body text-lg max-w-xl">
              Marzymy o tym, aby każdy kot znalazł dom, w którym będzie kochany, bezpieczny
              i zadbany. Adoptując naszych podopiecznych dajesz im szansę na nowe życie, bez
              bólu, strachu i głodu, który towarzyszył im na ulicy.
            </p>
            <p className="text-body mt-2 max-w-xl">
              Chcemy dzielić się szczęśliwymi historiami i pięknymi przemianami kotów —
              ich zadowolone mruczenie jest dla nas najlepszą nagrodą.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={catLoveLogo}
              alt="Kocie serduszka"
              className="w-44 lg:w-52 opacity-85 drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

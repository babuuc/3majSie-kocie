import catLoveLogo from '../../assets/love-300x219.png';

export default function HistorieHero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-2">
            <span className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">
              Nasze sukcesy
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-5 leading-tight">
              Szczęśliwe historie
            </h1>
            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
              Marzymy o tym, aby każdy kot znalazł dom, w którym będzie kochany, bezpieczny
              i zadbany. Adoptując naszych podopiecznych dajesz im szansę na nowe życie, bez
              bólu, strachu i głodu, który towarzyszył im na ulicy.
            </p>
            <p className="text-gray-500 mt-3 max-w-xl leading-relaxed">
              Chcemy dzielić się szczęśliwymi historiami i pięknymi przemianami kotów —
              ich zadowolone mruczenie jest dla nas najlepszą nagrodą.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={catLoveLogo}
              alt="Kocie serduszka"
              className="w-48 lg:w-56 opacity-80 drop-shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

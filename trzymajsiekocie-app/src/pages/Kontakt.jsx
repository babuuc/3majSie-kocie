import KontaktInfo from '../components/Kontakt/KontaktInfo';
import KontaktLocation from '../components/Kontakt/KontaktLocation';
import KontaktForm from '../components/Kontakt/KontaktForm';
import catPhoto from '../assets/snusia_koksik.webp';

export default function Kontakt() {
  return (
    <div>
      {/* Hero banner */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 xl:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">
                Skontaktuj się
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                Porozmawiajmy!
              </h1>
              <p className="text-gray-500 text-lg max-w-md">
                Masz pytania? Chcesz pomóc? Napisz do nas — chętnie odpowiemy na każdą wiadomość.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-orange-200/30 rounded-3xl rotate-3" />
                <img
                  src={catPhoto}
                  alt="Koty ze stowarzyszenia Trzymaj Się, Kocie!"
                  className="relative rounded-2xl shadow-lg object-cover w-full max-w-sm h-80 lg:h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 xl:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left column — info & location (2/5) */}
          <div className="lg:col-span-2 space-y-8">
            <KontaktInfo />
            <KontaktLocation />
          </div>

          {/* Right column — form (3/5) */}
          <div className="lg:col-span-3">
            <KontaktForm />
          </div>
        </div>
      </section>
    </div>
  );
}

import KontaktInfo from '../components/Kontakt/KontaktInfo';
import KontaktLocation from '../components/Kontakt/KontaktLocation';
import KontaktForm from '../components/Kontakt/KontaktForm';
import catPhoto from '../assets/snusia_koksik.webp';

export default function Kontakt() {
  return (
    <div>
      <section className="relative hero-gradient overflow-hidden">
        <div className="section-container section-hero">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-label">
                Skontaktuj się
              </span>
              <h1 className="heading-page mb-4">
                Porozmawiajmy!
              </h1>
              <p className="text-body text-lg max-w-md">
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

      <section className="section-container section-content">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <KontaktInfo />
            <KontaktLocation />
          </div>

          <div className="lg:col-span-3">
            <KontaktForm />
          </div>
        </div>
      </section>
    </div>
  );
}

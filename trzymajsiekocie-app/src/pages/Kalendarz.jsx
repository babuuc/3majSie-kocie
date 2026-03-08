import { CalendarDays } from 'lucide-react';

export default function Kalendarz() {
  return (
    <div>
      <section className="hero-gradient">
        <div className="section-container section-hero">
          <div className="max-w-2xl">
            <span className="section-label">
              <CalendarDays size={16} />
              Kalendarz
            </span>
            <h1 className="heading-page mb-4">Nadchodzące wydarzenia</h1>
            <p className="text-body text-lg">
              Śledź nasze najbliższe bazarki, kiermasze i spotkania.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container section-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { month: 'Marzec', day: '15', title: 'Bazarek wiosenny', desc: 'Facebookowy bazarek z fantami, biżuterią i gadżetami.', type: 'Bazarek' },
            { month: 'Marzec', day: '22', title: 'Targi PupiLove', desc: 'Spotkaj nas w Centrum Riviera w Gdyni.', type: 'Wydarzenie' },
            { month: 'Kwiecień', day: '05', title: 'Jarmark Wielkanocny', desc: 'Wielkanocne fanty i kocie gadżety na 100czni w Gdańsku.', type: 'Wydarzenie' },
          ].map((event) => (
            <div key={event.title} className="card-base card-base-hover p-6 flex gap-5">
              <div className="flex flex-col items-center justify-center shrink-0 w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100">
                <span className="text-xs font-semibold text-orange-500 uppercase leading-none">{event.month}</span>
                <span className="text-2xl font-bold text-gray-800 leading-none mt-0.5">{event.day}</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">{event.type}</span>
                <h3 className="text-lg font-bold text-gray-800 mt-1 mb-2">{event.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-10 lg:p-14">
          <div className="text-5xl mb-4">📅</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Więcej wydarzeń wkrótce</h2>
          <p className="text-body max-w-md mx-auto mb-6">
            Śledź nas na Facebooku i Instagramie, żeby nie przegapić żadnego wydarzenia!
          </p>
          <div className="img-placeholder mx-auto w-full max-w-lg aspect-[16/9]">
            Placeholder kalendarza<br />1200×675
          </div>
        </div>
      </section>
    </div>
  );
}

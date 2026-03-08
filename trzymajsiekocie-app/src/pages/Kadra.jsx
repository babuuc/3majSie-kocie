import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Gabrysia',
    initials: 'G',
    accent: 'from-slate-700 to-slate-500',
    description:
      'To zjawisko trudno opisać w paru słowach. Kobieta-orkiestra, której niestraszne żadne zadanie. Prowadzi wraz z mężem dom tymczasowy, ogarnia interwencje, administrację, kontakty z mediami, bazarek, a w międzyczasie szyje sławne Kury-Śmierdziury - najlepsze kocie zabawki.',
  },
  {
    name: 'Weronika',
    initials: 'W',
    accent: 'from-orange-400 to-amber-300',
    description:
      'Wszystko, czego dotknie, samo układa się w rządki i zaczyna lśnić. Dlatego w TSK! jest patronką funduszy i administracji. A poza tym ogarnia dom tymczasowy, interwencje i najfajniejsze domówki pod pretekstem narad plemiennej starszyzny.',
  },
  {
    name: 'Ewa',
    initials: 'E',
    accent: 'from-rose-400 to-pink-300',
    description:
      'Siła spokoju, orędowniczka pokojowych rozwiązań, poprawnej polszczyzny i kulturalnej komunikacji, kiedy w ekipie zdarzają się spięcia. W TSK!, jako fachowiec od UX i lekkie pióro. Dokarmia też kilka futrzaków na swojej działce.',
  },
  {
    name: 'Marcin',
    initials: 'M',
    accent: 'from-teal-500 to-cyan-400',
    description:
      '„Facet zsiadł z motoru, wyjął puszkę, nałożył do misek i pojechał. Nawet kasku nie zdjął.” To właśnie Marcin dokarmiający koty. Mistrz podbieraka i podchodów. Niestraszne mu czołganie się po najbrudniejszych miejscach, byle namierzyć ogoniasty cel.',
  },
  {
    name: 'Marcin',
    initials: 'M',
    accent: 'from-indigo-500 to-blue-400',
    description:
      'Macher od statutów, regulaminów, protokołów, KRS-ów i takich tam. Matematyk, który nie może się doliczyć kotów w swoim domu tymczasowym. Wykłady online prowadzi z kotką Haliną. Poważny facet, który wlezie do stawu, żeby złapać chorego łabędzia.',
  },
  {
    name: 'Magda',
    initials: 'M',
    accent: 'from-fuchsia-500 to-rose-400',
    description:
      'Kiedy mieszkała w Gdańsku, ganiała z klatką-łapką za trójmiejskimi kotami, ogarniała kociarnię i kiermasze. Teraz gania po świecie z kontrabasem, ale wciąż pomaga online przy bazarkach i czuwa nad social mediami, na ile jej starcza czasu pomiędzy koncertami.',
  },
];

export default function Kadra() {
  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-amber-50">
      <section className="section-container section-hero">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <span className="section-label">
            O nas
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Stowarzyszenie Trzymaj Się, Kocie!
          </h1>
          <p className="text-body text-lg md:text-xl max-w-3xl mx-auto">
            Jesteśmy grupą osób z Trójmiasta, które nie potrafią żyć bez pomagania. Codziennie uczymy się,
            jak skuteczniej poprawiać los bezdomnych kotów i działać tam, gdzie pomoc jest naprawdę potrzebna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.8fr] gap-8 items-start">
          <div className="card-base bg-white/90 backdrop-blur-sm shadow-xl border-orange-100 p-8 md:p-10 lg:p-12 space-y-6 text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Kim jesteśmy?</h2>
              <p className="text-gray-600 leading-8">
                Grupą osób z Trójmiasta, które nie potrafią żyć bez pomagania. Codziennie uczymy się, jak
                poprawić los bezdomnych kotów. Skoro tu jesteś, to zapewne tak jak my, spoglądając pod nogi,
                dostrzegasz, że w zakamarkach przemykają kocie cienie. Pomyślmy razem, jak im pomóc.
                Potrzebują nas.
              </p>
            </div>

            <p className="text-body leading-8">
              Działamy najskuteczniej, jak potrafimy. Nie cofamy się przed najtrudniejszymi akcjami, z których
              rezygnują państwowe służby. Tak wygląda nasz „wolny czas”. Poza nim mamy rodziny, pracę i własne
              życie. W TSK! działamy bezpłatnie, finansując działania z pieniędzy, które uzbieramy.
            </p>

            <p className="text-body leading-8">
              Chcemy zaprosić do TSK! jak najszersze grono osób, którym nieobojętny jest los zwierząt. Dlatego
              nie założyliśmy fundacji. Grupa wolontariuszy, choćby najsprawniejsza, będzie tylko grupą
              wolontariuszy. Jako społeczność skupiona wokół idei poprawienia kociego, i nie tylko kociego,
              bytu mamy szansę zrobić wyłom w paskudnej rzeczywistości, która niewiele się zmienia mimo wysiłków
              jednostek.
            </p>

            <div className="rounded-2xl bg-orange-50 border border-orange-100 p-6">
              <p className="text-base md:text-lg font-semibold text-gray-800 mb-2">Wszystko to jest zapisane w naszym Statucie.</p>
              <p className="text-body">
                Jeśli też uważasz, że w grupie można zdziałać więcej, przyłącz się do nas.
              </p>
              <Link
                to="/dokumenty"
                className="btn btn-primary mt-5"
              >
                Statut
              </Link>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-gradient-to-br from-orange-500 to-amber-400 rounded-2xl shadow-xl p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80 mb-3">TSK!</p>
              <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
                Chcesz być z nami w kontakcie?
              </h2>
              <p className="text-white/90 leading-7 mb-8">
                Napisz, jeśli chcesz pomóc, dołączyć do działań albo po prostu lepiej poznać nasze
                stowarzyszenie. Chętnie odpowiemy.
              </p>

              <Link
                to="/kontakt"
                className="btn btn-primary w-full sm:w-auto bg-white text-orange-600 hover:text-orange-700 hover:bg-orange-50"
              >
                Napisz do nas 💌
              </Link>
            </div>

            <div className="card-base shadow-lg p-6">
              <p className="section-label text-gray-400">Dlaczego działamy</p>
              <p className="text-gray-600 leading-7">
                Bo każdy kot zasługuje na bezpieczeństwo, leczenie i szansę na lepsze życie, a wspólne działanie
                daje realną sprawczość.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-container pb-20 lg:pb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-label">
            Nasza kadra
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Poznaj osoby, które tworzą TSK!</h2>
          <p className="text-body text-lg">
            Każda z tych osób wnosi do stowarzyszenia inny rodzaj siły, doświadczenia i energii. Razem robimy
            rzeczy, których osobno nie dałoby się udźwignąć.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <article
              key={`${member.name}-${index}`}
              className="card-base bg-white/90 backdrop-blur-sm border-orange-100 shadow-lg p-6 md:p-7 flex flex-col sm:flex-row gap-6 card-base-hover"
            >
              <div className="sm:w-40 sm:flex-shrink-0 flex justify-center sm:justify-start">
                <div
                  className={`w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br ${member.accent} shadow-md flex items-center justify-center text-white text-4xl md:text-5xl font-bold relative overflow-hidden`}
                >
                  <span className="relative z-10">{member.initials}</span>
                  <div className="absolute inset-0 bg-white/10" />
                </div>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{member.name}</h3>
                <p className="text-body text-[15px] md:text-base">{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

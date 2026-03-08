import volunteerPhoto from '../../assets/kitten-volunteer.jpeg';

export default function WolontariatHero() {
  return (
    <section className="relative hero-gradient overflow-hidden">
      <div className="section-container section-hero">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="section-label">
              Wolontariat
            </span>
            <h1 className="heading-page mb-5">
              Zostań wolontariuszem
            </h1>
            <p className="text-body text-lg max-w-md">
              TSK! tworzą ludzie, którzy pomagają kotom na bardzo różne sposoby.
              Wolontariat u nas to nie tylko sprzątanie po kocie — to organizacja,
              komunikacja, wydarzenia, interwencje i wsparcie codziennej pracy fundacji.
            </p>
            <p className="text-body mt-3 max-w-md">
              Jeśli chcesz pomagać, ale nie wiesz jeszcze jak — odezwij się.
              Znajdziemy formę działania, która będzie pasować do Ciebie.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-200/30 rounded-3xl -rotate-2" />
              <img
                src={volunteerPhoto}
                alt="Wolontariusz z kotem"
                className="relative rounded-2xl shadow-lg object-cover w-full max-w-sm h-80 lg:h-[26rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

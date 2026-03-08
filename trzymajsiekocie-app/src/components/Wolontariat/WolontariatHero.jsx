import volunteerPhoto from '../../assets/kitten-volunteer.jpeg';

export default function WolontariatHero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 xl:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">
              Wolontariat
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-5 leading-tight">
              Zostań wolontariuszem
            </h1>
            <p className="text-gray-500 text-lg max-w-md leading-relaxed">
              TSK! tworzą ludzie, którzy pomagają kotom na bardzo różne sposoby.
              Wolontariat u nas to nie tylko sprzątanie po kocie — to organizacja,
              komunikacja, wydarzenia, interwencje i wsparcie codziennej pracy fundacji.
            </p>
            <p className="text-gray-500 mt-3 max-w-md leading-relaxed">
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

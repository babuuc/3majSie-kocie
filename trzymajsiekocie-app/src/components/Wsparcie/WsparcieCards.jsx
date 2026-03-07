import { Link } from 'react-router-dom';
import {
  Heart,
  Receipt,
  Home,
  CreditCard,
  HandHeart,
  ShoppingBag,
  Store,
  Gift,
  ShoppingCart,
  Tag,
  CalendarHeart,
  Puzzle,
} from 'lucide-react';

const cards = [
  {
    icon: Heart,
    title: 'Adoptuj wirtualnie',
    description:
      'Adopcja wirtualna to stały przelew na ulubionego podopiecznego w zamian za comiesięczne zdjęcia i update na jego temat 😻 Zasady i galerię kotów w potrzebie znajdziesz tutaj.',
    link: { to: '/adopcja-wirtualna', label: 'Dowiedz się więcej' },
  },
  {
    icon: Receipt,
    title: 'Przekaż nam 1,5% podatku 😻',
    description: (
      <>
        <span className="font-medium text-gray-800">KRS: 0000270261</span> (Młodzi-Młodym)
        <br />
        <span className="font-medium text-gray-800">Cel szczegółowy:</span> KOTY TSK 18947
        <br />
        <br />
        To tylko chwilka przy wypełnianiu dokumentów, a Twój podatek pomoże zapewnić kotom karmę i leki 💞
      </>
    ),
  },
  {
    icon: Home,
    title: 'Zostań domem tymczasowym',
    description:
      'Bez domów tymczasowych nie jesteśmy w stanie działać! Jeżeli masz trochę miejsca i czasu, które możesz ofiarować wybranemu kotu, zajrzyj tutaj.',
    link: { to: '/dom-tymczasowy', label: 'Dowiedz się więcej' },
  },
  {
    icon: CreditCard,
    title: 'Przekaż darowiznę',
    description: (
      <>
        <span className="font-medium text-gray-800">Nr konta:</span> 07 1240 5400 1111 0011 3421 6831
        <br />
        <span className="font-medium text-gray-800">BLIK na telefon:</span> 733 325 376
        <br />
        <br />
        Do tytułu przelewu prosimy dodać dopisek „cele statutowe".
      </>
    ),
  },
  {
    icon: HandHeart,
    title: 'Wpłać na aktualną zrzutkę',
    description:
      'Często zbieramy fundusze na konkretne przypadki, głównie wtedy, kiedy kot wymaga drogiej diagnostyki i leczenia. Nie bój się — kliknięcie w przycisk nie ściągnie Ci od razu pieniędzy z konta 😁',
    externalLink: { href: '#', label: 'Sprawdzam zrzutki' },
  },
  {
    icon: ShoppingBag,
    title: 'Sprezentuj naszym kotom karmę',
    description:
      'Napełnij miseczki naszych podopiecznych dokonując zakupu poprzez nasz sklep na stronie Stowarzyszenia Ocalone Łapki. Dzięki Tobie karma, żwirek i podkłady trafią prosto do naszych kociaków!',
    externalLink: { href: '#', label: 'Przechodzę do sklepu' },
  },
  {
    icon: Store,
    title: 'Weź udział w bazarku',
    description:
      'Przynajmniej raz w miesiącu odbywa się nasz facebookowy bazarek, na którym możesz znaleźć prawdziwe perełki — biżuterię, gadżety, kosmetyki, ciuchy, dodatki, akcesoria dla zwierząt i wiele innych 🤩 Cały dochód idzie na koty!',
    externalLink: { href: '#', label: 'Dołączam do grupy' },
  },
  {
    icon: Gift,
    title: 'Podaruj fanty lub rzeczy dla kotów',
    description:
      'Zbieramy fanty na bazarek: puzzle, książki, ceramikę, handmade, drobiazgi z kocim motywem — przyjmiemy z otwartymi rękami! Zbieramy także czyste prześcieradła, ręczniki i polarowe kocyki. Jeśli chcesz nam coś ofiarować, napisz do nas 💌',
    link: { to: '/kontakt', label: 'Napisz do nas' },
  },
  {
    icon: ShoppingCart,
    title: 'Zajrzyj na Vinted',
    description:
      'Prowadzimy konto na Vinted, gdzie wystawiamy dary od naszych wspierających. Pełny dochód ze sprzedaży przekazywany jest na potrzeby naszych milusińskich. Zajrzyj, a może coś przyciągnie Twoją uwagę 👀',
    externalLink: { href: '#', label: 'Zaglądam na Vinted' },
  },
  {
    icon: Tag,
    title: 'Sprawdź nas na OLX',
    description:
      'Szukasz ciekawej książki lub planszówki? Sprawdź, czy coś z naszych fantów przypadnie Ci do gustu. Jest w czym wybierać!',
    externalLink: { href: '#', label: 'Zaglądam na OLX' },
  },
  {
    icon: CalendarHeart,
    title: 'Wpadnij na wydarzenia stacjonarne',
    description:
      'Regularnie pojawiamy się na trójmiejskich pchlich targach, jarmarkach i innych eventach. To świetna okazja, żeby kupić coś fajnego, a przy okazji poznać nas osobiście 😎',
  },
  {
    icon: Puzzle,
    title: 'Zainstaluj wtyczkę FaniMani',
    description:
      'FaniMani to fundacja, która wymyśliła zbieranie darowizn przy okazji zakupów. To całkowicie bezpieczne i bezpłatne — część zapłaty za produkt przekazywana jest przez sklep na nasze konto. Ty nie dorzucasz ani grosza!',
    externalLink: { href: '#', label: 'Sprawdzam FaniMani' },
  },
];

function WsparcieCard({ icon: Icon, title, description, link, externalLink }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col hover:shadow-md transition-shadow">
      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4 shrink-0">
        <Icon size={20} className="text-orange-500" />
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed flex-grow">{description}</p>
      {link && (
        <Link
          to={link.to}
          className="inline-flex items-center mt-4 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
        >
          {link.label} →
        </Link>
      )}
      {externalLink && (
        <a
          href={externalLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-4 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
        >
          {externalLink.label} →
        </a>
      )}
    </div>
  );
}

export default function WsparcieCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-8 py-14">
      <div className="mb-10 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
          Sposoby na wsparcie
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Każda forma pomocy jest dla nas ogromnie ważna — wybierz tę, która pasuje do Ciebie.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <WsparcieCard key={i} {...card} />
        ))}
      </div>
    </section>
  );
}

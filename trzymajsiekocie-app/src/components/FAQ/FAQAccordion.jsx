import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    question: 'Jak mogę zaangażować się w pomoc bezdomnym kotom?',
    answer: (
      <>
        Sposobów na pomoc jest mnóstwo, na pewno znajdziesz coś dla siebie ☺️
        Zapraszamy do zakładki{' '}
        <Link to="/wsparcie" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
          Wsparcie
        </Link>.
      </>
    ),
  },
  {
    question: 'Dlaczego muszę wypełnić ankietę, jeśli chcę adoptować kota?',
    answer:
      'Ankieta to pierwszy etap procesu adopcji. Prosimy Cię o jej wypełnienie, żeby wstępnie dowiedzieć się czegoś o Tobie i miejscu, w którym kot zamieszka. Chcemy być pewni, że zdajesz sobie sprawę, z czym wiąże się adopcja zwierzęcia. Zależy nam, żeby zapewnić kotu jak najlepsze warunki. I żeby uniknąć sytuacji, że kot po kilku dniach wraca z adopcji, bo jakaś kwestia nie była przedyskutowana, jasna i zaakceptowana przez osoby adoptujące.',
  },
  {
    question: 'Czy odpowiadacie na wszystkie wypełnione ankiety?',
    answer:
      'Nie. Nie odpowiadamy, jeżeli z odpowiedzi, których udzielisz w ankiecie, wynika, że ciężko nam będzie podjąć decyzję o przekazaniu kota pod Twoją opiekę.',
  },
  {
    question: 'Czy muszę pozbyć się z domu roślin, zanim adoptuję od was kota?',
    answer:
      'Nie. Nie wszystkie rośliny doniczkowe są dla kotów szkodliwe. Ale niektóre są. Warto wiedzieć, które mogą kotu zaszkodzić i zawczasu znaleźć im nowy dom. Na wizycie przedadopcyjnej rozmawiamy o roślinach i doradzamy, jakie bezpieczne kwiaty doniczkowe i balkonowe mogą być w kocim domu.',
  },
  {
    question: 'Czy mogę adoptować od was kota, jeśli chcę go wypuszczać do ogrodu?',
    answer:
      'Nie. Wierzymy, że miejsce kota jest w domu i na zabezpieczonym balkonie czy tarasie. Koty, które wychodzą na dwór, narażone są na śmierć pod kołami samochodu, pogryzienie przez psy, lisy i inne koty. Skrzywdzić je może człowiek. Dlatego przekazujemy koty tylko do bezpiecznych domów, które nazywamy „niewychodzącymi".',
  },
  {
    question: 'Czy mogę wziąć kota już na spotkaniu zapoznawczym?',
    answer:
      'Nie. Po spotkaniu zapoznawczym umówimy się z Tobą na wizytę przedadopcyjną u Ciebie w domu, żeby lepiej poznać Ciebie, domowników i miejsce, w którym kot zamieszka. Po ustaleniu szczegółów i wyjaśnieniu wątpliwości, przywozimy Ci kota albo Ty odbierasz go z domu tymczasowego.',
  },
  {
    question: 'Czy mogę adoptować kota, jeśli mieszkam poza Trójmiastem?',
    answer:
      'Tak. Nasz kot może zamieszkać poza Trójmiastem. Obowiązują te same etapy procesu adopcyjnego. Tak, wizyta przedadopcyjna też. 🙂 Mamy – albo staramy się mieć – swoich ludzi w różnych miejscach kraju.',
  },
  {
    question: 'Czy jeśli po adopcji będę potrzebować rady albo pomocy, czy mogę na was liczyć?',
    answer:
      'Oczywiście. Rodzina adopcyjna może zawsze liczyć na nasze wsparcie. Doradzamy, jeśli pojawią się wyzwania behawioralne. Sugerujemy, co robić w przypadku problemów z kocim zdrowiem.',
  },
  {
    question: 'Czy jeśli moja sytuacja życiowa się zmieni, przyjmiecie kota z powrotem?',
    answer:
      'Tak. Jeżeli zdarzy się cokolwiek, co sprawi, że nie możesz dłużej opiekować się kotem, poinformuj nas o tym. Jeśli możesz, daj nam wystarczający czas na zorganizowanie kotu domu tymczasowego.',
  },
  {
    question: 'Zgłosiłem wam, że potrzebuję pomocy dla kota, ale nikt nie zareagował. Dlaczego?',
    answer:
      'Wszyscy pracujemy zawodowo albo studiujemy. Mamy życie osobiste. Działalność na rzecz zwierząt to nasz wolontariat. W stowarzyszeniu działamy w czasie wolnym od zwykłych życiowych obowiązków. Staramy się podejmować większość interwencji albo przynajmniej przekierować sprawę do innej organizacji czy do służb. Czasem jednak po prostu nie ma nikogo, kto ma wolną chwilę i rękę, żeby odebrać zgłoszenie. Prosimy Cię o wyrozumiałość w tej sprawie.',
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-orange-50/50 transition-colors"
      >
        <span className="font-semibold text-gray-800 text-sm lg:text-base">{question}</span>
        <ChevronDown
          size={18}
          className={`text-orange-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-sm text-muted leading-relaxed border-t border-gray-50 pt-4">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-3xl mx-auto px-4 xl:px-8 section-content">
      <div className="space-y-3">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>

      <div className="mt-14 text-center bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-10 lg:p-12 border border-orange-100">
        <span className="text-4xl block mb-4">😺</span>
        <h3 className="text-xl font-bold text-gray-800 mb-2">Nie znalazłeś odpowiedzi?</h3>
        <p className="text-muted mb-6">Chętnie odpowiemy na każde pytanie.</p>
        <Link
          to="/kontakt"
          className="btn btn-primary btn-rect"
        >
          Skontaktuj się z nami
        </Link>
      </div>
    </section>
  );
}

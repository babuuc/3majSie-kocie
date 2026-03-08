import React, { useState } from 'react';


const labelClass = "block text-sm font-semibold text-gray-700 mb-1 mt-4";
const inputClass = "w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-gray-50 text-gray-900";
const radioLabelClass = "flex items-center space-x-2 text-gray-700 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-colors";





// Emoji koty jako placeholdery (można podmienić na SVG lub obrazy)

const catFaces = [
  '😺', // 1 - lekki uśmiech (kot)
  '😺', // 2 - lekki uśmiech (kot)
  '😸', // 3 - szeroki uśmiech (kot)
  '😻', // 4 - zakochany (kot)
  '😺', // 5 - bardzo szczęśliwy (kot)
  '😻', // 6 - super szczęśliwy (kot)
];

const AdoptionForm = ({ catName }) => {
  const [step, setStep] = useState(1);
  const steps = [
    // Krok 1
    (
      <div className="animate-fadeIn" key={1}>
        <h2 className="text-lg font-bold text-blue-600 border-b pb-2 mb-4">I. Informacje podstawowe</h2>
        <label className={labelClass}>Imię i nazwisko</label>
        <input className={inputClass} placeholder="Imię i nazwisko" />

        <label className={labelClass}>Numer telefonu i e-mail</label>
        <input className={inputClass} placeholder="Telefon i e-mail" />

        <label className={labelClass}>Miejscowość</label>
        <input className={inputClass} placeholder="Miejscowość" />

        <label className={labelClass}>Imię kota, którym są Państwo zainteresowani</label>
        <input className={inputClass} placeholder="Imię kota" value={catName || ''} readOnly />

        <label className={labelClass}>Wiek</label>
        <div className="flex flex-col gap-2">
          <label className={radioLabelClass}>
            <input type="radio" className="w-4 h-4 text-blue-600" name="wiek" />
            <span>18 – 25 lat</span>
          </label>
          <label className={radioLabelClass}>
            <input type="radio" className="w-4 h-4 text-blue-600" name="wiek" />
            <span>26 – 55 lat</span>
          </label>
          <label className={radioLabelClass}>
            <input type="radio" className="w-4 h-4 text-blue-600" name="wiek" />
            <span>powyżej 55 lat</span>
          </label>
        </div>
      </div>
    ),
    // Krok 2
    (
      <div className="animate-fadeIn" key={2}>
        <h2 className="text-lg font-bold text-blue-600 border-b pb-2 mb-4">II. Warunki mieszkaniowe i domownicy</h2>
        <label className={labelClass}>Typ mieszkania</label>
        <div className="flex gap-4">
          <label className={radioLabelClass}>
            <input type="radio" disabled className="w-4 h-4 text-blue-600" />
            <span>Dom jednorodzinny</span>
          </label>
          <label className={radioLabelClass}>
            <input type="radio" disabled className="w-4 h-4 text-blue-600" />
            <span>Mieszkanie w bloku lub kamienicy</span>
          </label>
        </div>

        <label className={labelClass}>Status mieszkania</label>
        <div className="flex gap-4">
          <label className={radioLabelClass}>
            <input type="radio" disabled className="w-4 h-4 text-blue-600" />
            <span>Własnościowe</span>
          </label>
          <label className={radioLabelClass}>
            <input type="radio" disabled className="w-4 h-4 text-blue-600" />
            <span>Wynajmowane</span>
          </label>
        </div>

        <label className={labelClass}>W przypadku wynajmu: Czy posiadają Państwo zgodę właściciela na kota?</label>
        <div className="flex gap-4">
          <label className={radioLabelClass}>
            <input type="radio" disabled className="w-4 h-4 text-blue-600" />
            <span>TAK</span>
          </label>
          <label className={radioLabelClass}>
            <input type="radio" disabled className="w-4 h-4 text-blue-600" />
            <span>NIE</span>
          </label>
        </div>

        <label className={labelClass}>Które to piętro? (jeśli dotyczy)</label>
        <input className={inputClass} placeholder="Piętro" disabled />

        <label className={labelClass}>Ilu dorosłych domowników mieszka w gospodarstwie?</label>
        <input className={inputClass} placeholder="Liczba dorosłych" disabled />

        <label className={labelClass}>Czy w domu są dzieci? (jeśli tak, proszę podać wiek)</label>
        <input className={inputClass} placeholder="Wiek dzieci" disabled />

        <label className={labelClass}>Czy wszyscy domownicy zgadzają się na adopcję i nikt nie ma alergii na kota?</label>
        <div className="flex gap-4">
          <label className={radioLabelClass}>
            <input type="radio" disabled className="w-4 h-4 text-blue-600" />
            <span>TAK</span>
          </label>
          <label className={radioLabelClass}>
            <input type="radio" disabled className="w-4 h-4 text-blue-600" />
            <span>NIE</span>
          </label>
        </div>

        <label className={labelClass}>Czy kot będzie miał swobodny dostęp do wszystkich pomieszczeń?</label>
        <div className="flex gap-4">
          <label className={radioLabelClass}>
            <input type="radio" disabled className="w-4 h-4 text-blue-600" />
            <span>TAK</span>
          </label>
          <label className={radioLabelClass}>
            <input type="radio" disabled className="w-4 h-4 text-blue-600" />
            <span>NIE</span>
          </label>
        </div>
      </div>
    ),
    // Krok 3
    (
      <div className="animate-fadeIn" key={3}>
        <h2 className="text-lg font-bold text-blue-600 border-b pb-2 mb-4">III. Doświadczenie</h2>
        <label className={labelClass}>Czy masz teraz inne zwierzęta?</label>
        <textarea className={inputClass} rows="3" placeholder="Opisz swoje stado..." disabled />
      </div>
    ),
    // Krok 4
    (
      <div className="animate-fadeIn" key={4}>
        <h2 className="text-lg font-bold text-blue-600 border-b pb-2 mb-4">IV. Bezpieczeństwo</h2>
        <label className={labelClass}>Zabezpieczenia</label>
        <div className="space-y-2">
          <label className={radioLabelClass}>
            <input type="checkbox" disabled className="rounded text-blue-600" />
            <span>Siatka na balkonie</span>
          </label>
          <label className={radioLabelClass}>
            <input type="checkbox" disabled className="rounded text-blue-600" />
            <span>Zabezpieczone okna</span>
          </label>
        </div>
      </div>
    ),
    // Krok 5
    (
      <div className="animate-fadeIn" key={5}>
        <h2 className="text-lg font-bold text-blue-600 border-b pb-2 mb-4">V. Życie z kotem</h2>
        <label className={labelClass}>Ile godzin dziennie kot będzie sam?</label>
        <input className={inputClass} disabled />
        <label className={labelClass}>Wakacje i wyjazdy</label>
        <textarea className={inputClass} rows="2" disabled />
      </div>
    ),
    // Krok 6
    (
      <div className="animate-fadeIn text-center py-4" key={6}>
        <h2 className="text-lg font-bold text-blue-600 border-b pb-2 mb-4">VI. Finalizacja</h2>
        <p className="text-sm text-gray-500 mb-6">Przeczytałeś wszystko uważnie? Po kliknięciu wyślij, Twoje zgłoszenie trafi do naszych wolontariuszy.</p>
        <label className={radioLabelClass + " justify-center"}>
          <input type="checkbox" disabled className="rounded text-blue-600" />
          <span className="text-sm font-bold">Akceptuję warunki umowy i wizytę</span>
        </label>
      </div>
    ),
  ];
  const totalSteps = steps.length;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Kot po lewej na desktopie, na górze na mobile */}
        <div className="flex flex-col items-center justify-center md:w-1/3 py-8 bg-gradient-to-b from-blue-50 to-white">
          <span className="text-[7rem] md:text-[8rem] transition-all duration-500" aria-label="kot">
            {catFaces[step - 1]}
          </span>
        </div>
        <div className="md:w-2/3 p-8">
          {/* Progress Bar */}
          <div className="bg-gray-200 h-2 w-full mb-4">
            <div 
              className="bg-blue-600 h-2 transition-all duration-500 ease-out" 
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold text-gray-800">Ankieta Adopcyjna</h1>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Krok {step} z {totalSteps}</span>
          </div>
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            {steps[step - 1]}
            {/* Nawigacja */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              <button 
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${step === 1 ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Wstecz
              </button>
              {step < totalSteps ? (
                <button 
                  type="button" 
                  onClick={nextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 shadow-md shadow-blue-200 transition-all"
                >
                  Dalej
                </button>
              ) : (
                <button 
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 shadow-md shadow-green-200 transition-all"
                >
                  Wyślij ankietę
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdoptionForm;
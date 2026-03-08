import { useState } from 'react';
import cat1Gif from '../assets/cat1.gif';
import cat2Gif from '../assets/cat2.gif';
import cat3Gif from '../assets/cat3.gif';
import cat4Gif from '../assets/cat4.gif';
import cat5Gif from '../assets/cat5.gif';
import cat6Gif from '../assets/cat6.gif';

const titleClass = 'text-base font-bold text-orange-600 border-b border-orange-100 pb-2';
const stepBodyClass = 'animate-fadeIn h-full flex flex-col';
const fieldsGridClass = 'grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3';
const fieldClass = 'min-w-0';
const fullWidthFieldClass = 'md:col-span-2';
const labelClass = 'block text-xs font-semibold text-gray-700 mb-1';
const inputClass = 'input-base !py-2.5 !px-3.5 text-sm';
const radioGroupClass = 'grid grid-cols-1 gap-2 sm:grid-cols-2';
const compactRadioGroupClass = 'grid grid-cols-2 gap-2';
const radioLabelClass = 'flex items-center gap-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md transition-colors leading-tight';
const textareaClass = `${inputClass} resize-none`;

const stepGifs = [cat1Gif, cat2Gif, cat3Gif, cat4Gif, cat5Gif, cat6Gif];

const AdoptionForm = ({ catName }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const [step, setStep] = useState(1);
  const steps = [
    (
      <div className={stepBodyClass} key={1}>
        <h2 className={titleClass}>I. Informacje podstawowe</h2>
        <div className={`${fieldsGridClass} mt-0`}>
          <div className={fieldClass}>
            <label className={labelClass}>Imię i nazwisko</label>
            <input className={inputClass} placeholder="Imię i nazwisko" />
          </div>
          <div className={fieldClass}>
            <label className={labelClass}>Numer telefonu i e-mail</label>
            <input className={inputClass} placeholder="Telefon i e-mail" />
          </div>
          <div className={fieldClass}>
            <label className={labelClass}>Miejscowość</label>
            <input className={inputClass} placeholder="Miejscowość" />
          </div>
          <div className={fieldClass}>
            <label className={labelClass}>Imię kota</label>
            <input className={inputClass} placeholder="Imię kota" value={catName || ''} readOnly />
          </div>
          <div className={fullWidthFieldClass}>
            <label className={labelClass}>Wiek</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <label className={radioLabelClass}>
                <input type="radio" className="w-4 h-4 text-orange-600 accent-orange-500" name="wiek" />
                <span>18 – 25 lat</span>
              </label>
              <label className={radioLabelClass}>
                <input type="radio" className="w-4 h-4 text-orange-600 accent-orange-500" name="wiek" />
                <span>26 – 55 lat</span>
              </label>
              <label className={radioLabelClass}>
                <input type="radio" className="w-4 h-4 text-orange-600 accent-orange-500" name="wiek" />
                <span>55+ lat</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    ),
    (
      <div className={stepBodyClass} key={2}>
        <h2 className={titleClass}>II. Warunki mieszkaniowe i domownicy</h2>
        <div className={`${fieldsGridClass} mt-0`}>
          <div className={fieldClass}>
            <label className={labelClass}>Typ mieszkania</label>
            <div className={radioGroupClass}>
              <label className={radioLabelClass}>
                <input type="radio" disabled className="w-4 h-4 accent-orange-500" />
                <span>Dom</span>
              </label>
              <label className={radioLabelClass}>
                <input type="radio" disabled className="w-4 h-4 accent-orange-500" />
                <span>Mieszkanie</span>
              </label>
            </div>
          </div>
          <div className={fieldClass}>
            <label className={labelClass}>Status mieszkania</label>
            <div className={compactRadioGroupClass}>
              <label className={radioLabelClass}>
                <input type="radio" disabled className="w-4 h-4 accent-orange-500" />
                <span>Własne</span>
              </label>
              <label className={radioLabelClass}>
                <input type="radio" disabled className="w-4 h-4 accent-orange-500" />
                <span>Wynajem</span>
              </label>
            </div>
          </div>
          <div className={fieldClass}>
            <label className={labelClass}>Zgoda właściciela na kota</label>
            <div className={compactRadioGroupClass}>
              <label className={radioLabelClass}>
                <input type="radio" disabled className="w-4 h-4 accent-orange-500" />
                <span>Tak</span>
              </label>
              <label className={radioLabelClass}>
                <input type="radio" disabled className="w-4 h-4 accent-orange-500" />
                <span>Nie</span>
              </label>
            </div>
          </div>
          <div className={fieldClass}>
            <label className={labelClass}>Piętro</label>
            <input className={inputClass} placeholder="Np. 3" disabled />
          </div>
          <div className={fieldClass}>
            <label className={labelClass}>Liczba dorosłych domowników</label>
            <input className={inputClass} placeholder="Liczba dorosłych" disabled />
          </div>
          <div className={fieldClass}>
            <label className={labelClass}>Dzieci w domu i ich wiek</label>
            <input className={inputClass} placeholder="Np. 2 dzieci: 6 i 10 lat" disabled />
          </div>
          <div className={fieldClass}>
            <label className={labelClass}>Wszyscy zgadzają się na adopcję</label>
            <div className={compactRadioGroupClass}>
              <label className={radioLabelClass}>
                <input type="radio" disabled className="w-4 h-4 accent-orange-500" />
                <span>Tak</span>
              </label>
              <label className={radioLabelClass}>
                <input type="radio" disabled className="w-4 h-4 accent-orange-500" />
                <span>Nie</span>
              </label>
            </div>
          </div>
          <div className={fieldClass}>
            <label className={labelClass}>Brak alergii na kota</label>
            <div className={compactRadioGroupClass}>
              <label className={radioLabelClass}>
                <input type="radio" disabled className="w-4 h-4 accent-orange-500" />
                <span>Tak</span>
              </label>
              <label className={radioLabelClass}>
                <input type="radio" disabled className="w-4 h-4 accent-orange-500" />
                <span>Nie</span>
              </label>
            </div>
          </div>
          <div className={fullWidthFieldClass}>
            <label className={labelClass}>Kot będzie miał swobodny dostęp do wszystkich pomieszczeń</label>
            <div className="grid grid-cols-2 gap-2 max-w-xs">
              <label className={radioLabelClass}>
                <input type="radio" disabled className="w-4 h-4 accent-orange-500" />
                <span>Tak</span>
              </label>
              <label className={radioLabelClass}>
                <input type="radio" disabled className="w-4 h-4 accent-orange-500" />
                <span>Nie</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    ),
    (
      <div className={stepBodyClass} key={3}>
        <h2 className={titleClass}>III. Doświadczenie</h2>
        <div className={`${fieldsGridClass} mt-0`}>
          <div className={fullWidthFieldClass}>
            <label className={labelClass}>Czy masz teraz inne zwierzęta?</label>
            <textarea className={textareaClass} rows="4" placeholder="Opisz swoje stado..." disabled />
          </div>
        </div>
      </div>
    ),
    (
      <div className={stepBodyClass} key={4}>
        <h2 className={titleClass}>IV. Bezpieczeństwo</h2>
        <div className={`${fieldsGridClass} mt-0`}>
          <div className={fullWidthFieldClass}>
            <label className={labelClass}>Zabezpieczenia</label>
            <div className={radioGroupClass}>
              <label className={radioLabelClass}>
                <input type="checkbox" disabled className="rounded accent-orange-500" />
                <span>Siatka na balkonie</span>
              </label>
              <label className={radioLabelClass}>
                <input type="checkbox" disabled className="rounded accent-orange-500" />
                <span>Zabezpieczone okna</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    ),
    (
      <div className={stepBodyClass} key={5}>
        <h2 className={titleClass}>V. Życie z kotem</h2>
        <div className={`${fieldsGridClass} mt-0`}>
          <div className={fieldClass}>
            <label className={labelClass}>Ile godzin dziennie kot będzie sam?</label>
            <input className={inputClass} disabled />
          </div>
          <div className={fieldClass}>
            <label className={labelClass}>Wakacje i wyjazdy</label>
            <textarea className={textareaClass} rows="4" disabled />
          </div>
        </div>
      </div>
    ),
    (
      <div className={`${stepBodyClass} justify-center text-center`} key={6}>
        <h2 className={titleClass}>VI. Finalizacja</h2>
        <div className="mt-0 space-y-5">
          <p className="text-sm text-gray-600 max-w-md mx-auto">Przeczytałeś wszystko uważnie? Po kliknięciu wyślij, Twoje zgłoszenie trafi do naszych wolontariuszy.</p>
          <label className={`${radioLabelClass} justify-center max-w-md mx-auto`}>
            <input type="checkbox" disabled className="rounded accent-orange-500" />
            <span className="text-sm font-bold">Akceptuję warunki umowy i wizytę</span>
          </label>
        </div>
      </div>
    ),
  ];
  const totalSteps = steps.length;
  const currentGif = stepGifs[step - 1];

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="overflow-hidden bg-gray-100 px-4 pt-[1.5vh] pb-4 md:pt-[1.5vh] md:pb-3 md:grid md:justify-items-center md:items-start">
      <div className={`w-full ${hasStarted ? 'max-w-6xl' : 'max-w-3xl'} h-[min(92vh,720px)] min-h-[640px] mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 ${hasStarted ? 'md:grid-cols-[280px_minmax(0,1fr)]' : ''}`}>
        {hasStarted && (
          <div className="flex flex-col items-center justify-center p-6 md:p-8 bg-gradient-to-br from-orange-50 via-white to-amber-50 border-b md:border-b-0 md:border-r border-orange-100">
            <div className="flex h-[220px] w-[220px] items-center justify-center md:h-[260px] md:w-[240px] overflow-hidden">
              <img
                src={currentGif}
                alt={`Kot dla kroku ${step}`}
                className="h-full w-full object-contain drop-shadow-sm"
              />
            </div>
            <p className="mt-0 text-center text-sm font-medium text-orange-700">Krok {step} z {totalSteps}</p>
          </div>
        )}
        <div className="min-h-0 px-5 pb-5 pt-0 md:px-6 md:pb-6 md:pt-0 lg:px-8 lg:pb-8 lg:pt-0 flex flex-col">
          {!hasStarted ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="max-w-lg">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Poznajmy Twój przyszły dom dla kota</h1>
                <p className="mt-0 text-sm md:text-base text-gray-600 leading-relaxed">
                  Kliknij start, aby przejść do krótkiej ankiety adopcyjnej. Formularz otworzy się w tym samym oknie, bez przewijania.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setHasStarted(true);
                  }}
                  className="mt-0 px-8 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 shadow-md shadow-orange-200 transition-all"
                >
                  Start
                </button>
              </div>
            </div>
          ) : (
            <>
              {catName && (
                <div className="mb-3 flex justify-center shrink-0">
                  <p className="text-sm font-medium text-gray-700">
                    Kot: <span className="font-bold text-orange-700">{catName}</span>
                  </p>
                </div>
              )}
              <div className="bg-gray-200 h-2 w-full mb-4 rounded-full overflow-hidden shrink-0">
                <div
                  className="bg-orange-500 h-2 transition-all duration-500 ease-out"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
              <div className="flex justify-between items-center gap-4 mb-4 shrink-0">
                <h1 className="text-xl font-bold text-gray-800">Ankieta Adopcyjna</h1>
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:block">Krok {step} z {totalSteps}</span>
              </div>
              <form className="flex-1 min-h-0 flex flex-col" onSubmit={e => e.preventDefault()}>
                <div className="flex-1 min-h-0 overflow-hidden">{steps[step - 1]}</div>
                <div className="flex justify-between mt-0 pt-0 border-t border-gray-100 shrink-0">
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
                      className="px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 shadow-md shadow-orange-200 transition-all"
                    >
                      Dalej
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setStep(1);
                        setHasStarted(false);
                      }}
                      className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 shadow-md shadow-green-200 transition-all"
                    >
                      Wyślij ankietę
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdoptionForm;
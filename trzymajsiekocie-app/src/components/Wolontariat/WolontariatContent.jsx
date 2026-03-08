import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Camera,
  Megaphone,
  Truck,
  Heart,
  Home,
  CalendarHeart,
  Users,
  GraduationCap,
} from 'lucide-react';

const activities = [
  { icon: ShieldCheck, label: 'Interwencje i zabezpieczanie kotów' },
  { icon: Heart, label: 'Dokarmianie kotów wolno żyjących' },
  { icon: Truck, label: 'Transporty do lecznicy' },
  { icon: Camera, label: 'Ogłoszenia adopcyjne i zdjęcia' },
  { icon: CalendarHeart, label: 'Bazarki i wydarzenia' },
  { icon: Megaphone, label: 'Social media i promowanie zbiórek' },
  { icon: Users, label: 'Kontakt z opiekunami i chętnymi do pomocy' },
  { icon: Home, label: 'Domy tymczasowe' },
];

export default function WolontariatContent() {
  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-8 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left — what we do */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">Co robimy?</h2>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Pomagamy kotom na wiele sposobów. Oto część z nich:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activities.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 py-3 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-orange-500" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — who we look for + students */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Kogo szukamy?</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Osób odpowiedzialnych, zaangażowanych i empatycznych. Nie musisz mieć
              doświadczenia — ważniejsze są chęci, komunikacja i gotowość do działania.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mt-3">
              Mile widziane są też konkretne umiejętności: robienie zdjęć, pisanie,
              ogarnianie social mediów, organizacja, kontakt z ludźmi czy pomoc przy wydarzeniach.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-orange-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Uczysz się? Też możesz pomagać</h2>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Jeśli jesteś uczniem albo uczennicą, również możesz do nas dołączyć.
              Pomożemy dobrać odpowiednią formę zaangażowania. Taka aktywność może być
              wartościowym doświadczeniem szkolnym i wolontariackim.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14 text-center bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 lg:p-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Dołącz do nas</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-6">
          Napisz kilka słów o sobie: ile masz czasu, jak chcesz pomagać
          i czy możesz działać na miejscu, czy zdalnie. Może właśnie na Ciebie czekamy.
        </p>
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Napisz do nas
        </Link>
      </div>
    </section>
  );
}

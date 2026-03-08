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
    <section className="section-container section-content">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <div>
          <h2 className="heading-section mb-6">Co robimy?</h2>
          <p className="text-body mb-6">
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

        <div className="space-y-8">
          <div className="card-base p-6 lg:p-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Kogo szukamy?</h2>
            <p className="text-sm text-body">
              Osób odpowiedzialnych, zaangażowanych i empatycznych. Nie musisz mieć
              doświadczenia — ważniejsze są chęci, komunikacja i gotowość do działania.
            </p>
            <p className="text-sm text-body mt-3">
              Mile widziane są też konkretne umiejętności: robienie zdjęć, pisanie,
              ogarnianie social mediów, organizacja, kontakt z ludźmi czy pomoc przy wydarzeniach.
            </p>
          </div>

          <div className="card-base p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-orange-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Uczysz się? Też możesz pomagać</h2>
            </div>
            <p className="text-sm text-body">
              Jeśli jesteś uczniem albo uczennicą, również możesz do nas dołączyć.
              Pomożemy dobrać odpowiednią formę zaangażowania. Taka aktywność może być
              wartościowym doświadczeniem szkolnym i wolontariackim.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 lg:p-14 border border-orange-100">
        <span className="text-5xl block mb-4">😺</span>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Dołącz do nas</h2>
        <p className="text-body max-w-md mx-auto mb-6">
          Napisz kilka słów o sobie: ile masz czasu, jak chcesz pomagać
          i czy możesz działać na miejscu, czy zdalnie. Może właśnie na Ciebie czekamy.
        </p>
        <Link
          to="/kontakt"
          className="btn btn-primary btn-rect"
        >
          Napisz do nas
        </Link>
      </div>
    </section>
  );
}

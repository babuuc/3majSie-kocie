import { MapPin } from 'lucide-react';

export default function KontaktLocation() {
  return (
    <div className="card-base p-6 lg:p-8 space-y-5">
      <h2 className="text-xl font-bold text-gray-800">Nasza lokalizacja</h2>

      <div className="flex items-start gap-3 text-gray-600 text-sm">
        <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
          <MapPin size={18} className="text-orange-500" />
        </div>
        <div className="pt-1.5">
          <p className="font-semibold text-gray-800">Fantownia</p>
          <p>ul. Struga 16, 80-122 Gdańsk</p>
          <p className="text-muted mt-0.5">domofon nr 6</p>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-gray-200">
        <iframe
          title="Lokalizacja Fantownia"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2325.0!2d18.6466!3d54.3520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd749b0e1!2sStruga%2016%2C%2080-122%20Gda%C5%84sk!5e0!3m2!1spl!2spl!4v1700000000000"
          width="100%"
          height="260"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

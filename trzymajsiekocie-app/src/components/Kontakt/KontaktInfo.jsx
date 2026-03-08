import { Mail, Phone, Building2, CreditCard, Hash } from 'lucide-react';

function InfoRow({ icon: Icon, children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
        <Icon size={18} className="text-orange-500" />
      </div>
      <div className="pt-1.5 text-sm">{children}</div>
    </div>
  );
}

export default function KontaktInfo() {
  return (
    <div className="card-base p-6 lg:p-8 space-y-5">
      <h2 className="text-xl font-bold text-gray-800">Dane organizacji</h2>

      <div className="space-y-4 text-gray-600">
        <InfoRow icon={Building2}>
          <p className="font-semibold text-gray-800">Stowarzyszenie Trzymaj Się, Kocie!</p>
          <p>ul. Wały Piastowskie 1, lok. 1508</p>
          <p>80-855 Gdańsk</p>
        </InfoRow>

        <InfoRow icon={Hash}>
          <span className="text-muted">KRS:</span>{' '}
          <span className="font-medium text-gray-800">0001081032</span>
        </InfoRow>

        <InfoRow icon={CreditCard}>
          <span className="text-muted">Nr konta:</span>{' '}
          <span className="font-medium text-gray-800">07 1240 5400 1111 0011 3421 6831</span>
        </InfoRow>

        <InfoRow icon={Mail}>
          <a href="mailto:trzymajsiekocie@gmail.com" className="font-medium text-gray-800 hover:text-orange-500 transition-colors">
            trzymajsiekocie@gmail.com
          </a>
        </InfoRow>

        <InfoRow icon={Phone}>
          <p>
            <a href="tel:+48664429583" className="font-medium text-gray-800 hover:text-orange-500 transition-colors">664 429 583</a>
          </p>
          <p className="mt-0.5">
            <span className="text-muted">BLIK:</span>{' '}
            <a href="tel:+48733325376" className="font-medium text-gray-800 hover:text-orange-500 transition-colors">733 325 376</a>
          </p>
        </InfoRow>
      </div>
    </div>
  );
}

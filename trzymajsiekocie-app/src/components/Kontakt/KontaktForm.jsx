import { useState } from 'react';
import { Send } from 'lucide-react';

export default function KontaktForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate with backend / email service
    alert('Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-colors';

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:p-8 h-full">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Napisz do nas</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Twoje imię i nazwisko
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jan Kowalski"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Twój adres e-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="jan@example.com"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Temat
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={form.subject}
            onChange={handleChange}
            placeholder="W jakiej sprawie piszesz?"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Twoja wiadomość
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Napisz swoją wiadomość..."
            className={`${inputClass} resize-vertical`}
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer"
        >
          <Send size={18} />
          Wyślij wiadomość
        </button>
      </form>
    </div>
  );
}

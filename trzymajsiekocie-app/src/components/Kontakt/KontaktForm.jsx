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
    alert('Dziękujemy za wiadomość! Odpowiemy najszybciej jak to możliwe.');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputClass =
    'input-base';

  return (
    <div className="card-base p-6 lg:p-8 h-full">
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
          className="btn btn-primary btn-rect"
        >
          <Send size={18} />
          Wyślij wiadomość
        </button>
      </form>
    </div>
  );
}

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Cat, Sparkles } from 'lucide-react';

const SUGGESTIONS = [
  'Jak adoptować kota?',
  'Jak zostać wolontariuszem?',
  'Jak wesprzeć fundację?',
  'Czym jest dom tymczasowy?',
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Cześć! 🐱 Jestem asystentem fundacji „Trzymaj Się, Kocie!". Mogę pomóc Ci znaleźć informacje o adopcji, wolontariacie, darowiznach i nie tylko. W czym mogę pomóc?',
    },
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text) => {
    const msg = (text ?? input).trim();
    if (!msg) return;
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: msg },
      {
        role: 'assistant',
        text: 'Przepraszam, ta funkcja jest jeszcze w trakcie budowy. Zapraszam do kontaktu mailowego lub telefonicznego — chętnie pomożemy! 🐾',
      },
    ]);
    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* FAB trigger */}
      <button
        onClick={() => setOpen(!open)}
        className={`group relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 focus:outline-none ${
          open
            ? 'bg-gray-700 hover:bg-gray-800 rotate-0'
            : 'bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:scale-105'
        }`}
        aria-label={open ? 'Zamknij asystenta AI' : 'Otwórz asystenta AI'}
      >
        {open ? (
          <X size={22} className="text-white" />
        ) : (
          <>
            <MessageCircle size={24} className="text-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse" />
          </>
        )}
      </button>

      {/* Chat window */}
      <div
        className={`absolute bottom-[72px] right-0 w-[360px] sm:w-[400px] rounded-2xl shadow-2xl border border-gray-200 bg-white flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          open
            ? 'scale-100 opacity-100 pointer-events-auto'
            : 'scale-90 opacity-0 pointer-events-none'
        }`}
        style={{ height: 520, maxHeight: 'calc(100dvh - 120px)' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-4 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Cat size={22} className="text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm leading-tight">AI Asystent</p>
            <p className="text-orange-100 text-xs">Trzymaj Się, Kocie!</p>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles size={14} className="text-orange-200" />
            <span className="text-[10px] font-semibold text-orange-100 uppercase tracking-wider">Beta</span>
          </div>
        </div>

        {/* Messages area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50/60">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-orange-500 text-white rounded-br-md'
                    : 'bg-white text-gray-700 border border-gray-100 shadow-sm rounded-bl-md'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Suggestion chips (only before user sends first message) */}
          {messages.length === 1 && (
            <div className="pt-2 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSend(s)}
                  className="text-xs font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 border border-orange-200 rounded-full px-3 py-1.5 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Input bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="shrink-0 flex items-center gap-2 px-4 py-3 border-t border-gray-100 bg-white"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none placeholder:text-gray-400 transition-shadow"
            placeholder="Napisz wiadomość..."
          />
          <button
            type="submit"
            className="w-10 h-10 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors shrink-0"
            disabled={!input.trim()}
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}

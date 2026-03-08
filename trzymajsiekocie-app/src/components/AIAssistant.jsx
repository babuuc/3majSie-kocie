import { useState } from 'react';

export default function AIAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center focus:outline-none border border-orange-200 transition-colors"
          aria-label="Otwórz asystenta AI"
        >
          <span className="font-bold text-xl tracking-wide">AI</span>
        </button>
      )}
      {open && (
        <div className="w-64 h-72 bg-white rounded-xl shadow-xl flex flex-col overflow-hidden border border-orange-200">
          <div className="flex items-center justify-between bg-orange-500 text-white px-3 py-2">
            <span className="font-semibold text-base">AI Asystent</span>
            <button
              onClick={() => setOpen(false)}
              className="hover:text-orange-200 text-xl font-bold focus:outline-none"
              aria-label="Zamknij asystenta"
            >
              ×
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center bg-orange-50 text-orange-400">
            <span className="text-5xl font-bold opacity-20">AI</span>
          </div>
          <form className="flex items-center gap-2 p-2 border-t bg-white">
            <input
              type="text"
              className="flex-1 rounded-lg border border-gray-200 px-2 py-1 text-sm focus:ring-2 focus:ring-orange-400 outline-none"
              placeholder="Napisz wiadomość..."
              disabled
            />
            <button
              type="submit"
              className="bg-orange-400 text-white rounded-lg px-3 py-1 font-semibold text-sm shadow opacity-60 cursor-not-allowed"
              disabled
            >
              Wyślij
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

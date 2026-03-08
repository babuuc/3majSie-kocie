import React, { useState } from 'react';

export default function AIAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg p-3 flex items-center justify-center focus:outline-none border border-blue-200"
          aria-label="Otwórz asystenta AI"
          style={{ width: 48, height: 48 }}
        >
          <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: 1 }}>AI</span>
        </button>
      )}
      {open && (
        <div className="w-64 h-72 bg-white rounded-xl shadow-xl flex flex-col overflow-hidden border border-blue-200 animate-fadeIn">
          <div className="flex items-center justify-between bg-blue-500 text-white px-3 py-2">
            <span className="font-semibold text-base">AI Asystent</span>
            <button
              onClick={() => setOpen(false)}
              className="hover:text-blue-200 text-xl font-bold focus:outline-none"
              aria-label="Zamknij asystenta"
            >
              ×
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center bg-blue-50 text-blue-400">
            <span style={{ fontSize: 48, fontWeight: 700, opacity: 0.2 }}>AI</span>
          </div>
          <form className="flex items-center gap-2 p-2 border-t bg-white">
            <input
              type="text"
              className="flex-1 rounded-lg border border-gray-200 px-2 py-1 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Napisz wiadomość..."
              disabled
            />
            <button
              type="submit"
              className="bg-blue-400 text-white rounded-lg px-3 py-1 font-semibold text-sm shadow opacity-60 cursor-not-allowed"
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

import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const DropdownLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
  >
    {children}
  </Link>
);

export default function NavDropdown({ label, children }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleEnter = useCallback(() => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  }, []);

  const handleLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="flex items-center gap-1 hover:text-orange-500 transition-colors">
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export { DropdownLink };

'use client';
import { ChevronDown, MapPin } from 'lucide-react';
import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';

function Localization() {
  const [selectedLocation, setSelectedLocation] = useState('Plaza de la Revolución');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const listboxId = useId();

  const locations = useMemo(
    () => ['Plaza de la Revolución', 'Vedado', 'Miramar', 'Centro Habana'],
    []
  );

  const handleSelect = useCallback((location: string) => {
    setSelectedLocation(location);
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: Event) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        onClick={() => setOpen((o) => !o)}
        className="flex min-w-fit items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-2 transition-colors hover:bg-gray-50"
      >
        <MapPin className="h-4 w-4 text-gray-500" aria-hidden="true" />
        <span className="text-sm text-gray-700">{selectedLocation}</span>
        <ChevronDown className="h-4 w-4 text-gray-500" aria-hidden="true" />
      </button>

      {open && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label="Seleccionar ubicación"
          className="absolute left-0 top-full z-50 mt-1 w-full min-w-48 rounded-md border border-gray-200 bg-white shadow-lg"
        >
          {locations.map((location) => (
            <li key={location} role="option" aria-selected={location === selectedLocation}>
              <button
                type="button"
                onClick={() => handleSelect(location)}
                className="w-full px-3 py-2 text-left text-sm text-gray-700 first:rounded-t-md last:rounded-b-md hover:bg-gray-100"
              >
                {location}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default React.memo(Localization);

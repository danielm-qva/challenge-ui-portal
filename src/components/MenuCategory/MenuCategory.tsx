'use client';
import React, { memo, useEffect, useId, useMemo, useRef, useState } from 'react';
import { ChevronDown, Grid3X3 } from 'lucide-react';

function MenuCategory() {
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Categoria');
  const dropdownRef = useRef(null);
  const IdRender = useId();

  const categories = useMemo(() => {
    return ['Electrónicos', 'Ropa y Accesorios', 'Hogar y Jardín', 'Deportes', 'Libros'];
  }, []);

  useEffect(() => {
    if (!showCategoriesDropdown) return;
    const handleClickOutside = (e: Event) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowCategoriesDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCategoriesDropdown]);

  return (
    <div className="absolute" ref={dropdownRef}>
      <button
        onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
        className="flex items-center gap-2 rounded-md bg-[var(--color-primary)] px-4 py-2 text-white transition-colors hover:bg-[var(--color-secondary)]"
      >
        <Grid3X3 className="h-4 w-4" />
        <span className="text-sm font-medium">{selectedCategory}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      {showCategoriesDropdown && (
        <div
          id={IdRender}
          className="absolute left-0 top-full z-50 mt-1 w-full min-w-48 rounded-md border border-gray-200 bg-white shadow-lg"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setShowCategoriesDropdown(false);
                setSelectedCategory(category);
              }}
              className="w-full px-3 py-2 text-left text-sm text-gray-700 first:rounded-t-md last:rounded-b-md hover:bg-gray-100"
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default memo(MenuCategory);

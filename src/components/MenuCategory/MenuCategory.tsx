'use client'
import React, {memo, useEffect, useId, useMemo, useRef, useState} from "react";
import {ChevronDown, Grid3X3} from "lucide-react";

function MenuCategory() {
    const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Categoria');
    const dropdownRef = useRef(null);
    const Idrender = useId();

    const categories = useMemo(() => {
        return ['Electrónicos', 'Ropa y Accesorios', 'Hogar y Jardín', 'Deportes', 'Libros']
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
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showCategoriesDropdown]);


    return (<div className="absolute" ref={dropdownRef}>
        <button
            onClick={() => setShowCategoriesDropdown(!showCategoriesDropdown)}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white rounded-md transition-colors"
        >
            <Grid3X3 className="h-4 w-4"/>
            <span className="text-sm font-medium">{selectedCategory}</span>
            <ChevronDown className="h-4 w-4"/>
        </button>
        {showCategoriesDropdown && (
            <div
                id={Idrender}
                className="absolute top-full left-0 mt-1 w-full min-w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setShowCategoriesDropdown(false);
                            setSelectedCategory(category)
                        }}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                    >
                        {category}
                    </button>
                ))}
            </div>
        )}
    </div>)
}


export default memo(MenuCategory);

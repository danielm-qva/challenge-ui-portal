'use client';
import React, { useEffect, useRef, useState } from 'react';
import ProductCard from '@/components/ProductCard/product-card';
import { IProduct } from '../../../interface/product';
import { ArrowLeft, ArrowRight } from 'lucide-react';

type Props = {
  products: IProduct[];
};

const ProductCarousel = ({ products }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const child = scrollRef.current.firstElementChild as HTMLElement;
    if (!child) return;
    const gap = 16;
    const width = child.clientWidth + gap;
    scrollRef.current.scrollBy({
      left: direction === 'right' ? width * cardsPerView : -width * cardsPerView,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const updateCardsPerView = () => {
      if (!scrollRef.current) return;
      const child = scrollRef.current.firstElementChild as HTMLElement;
      if (!child) return;

      const gap = 16;
      const width = child.clientWidth + gap;
      const perView = Math.floor(scrollRef.current.clientWidth / width) || 1;
      setCardsPerView(perView);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;

    const handleScroll = () => {
      const child = ref.firstElementChild as HTMLElement;
      if (!child) return;

      const gap = 16;
      const width = child.clientWidth + gap;
      const index = Math.round(ref.scrollLeft / (width * cardsPerView));
      setActiveIndex(index);
    };

    ref.addEventListener('scroll', handleScroll);
    return () => ref.removeEventListener('scroll', handleScroll);
  }, [cardsPerView]);

  return (
    <div className="relative my-[40px] w-full">
      <button
        name={'left'}
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[var(--color-primary)] p-2 shadow-md hover:bg-gray-100"
      >
        <ArrowLeft color="white" />
      </button>
      <button
        name={'right'}
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[var(--color-primary)] p-2 shadow-md hover:bg-gray-100"
      >
        <ArrowRight color="white" />
      </button>

      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-4 overflow-hidden scroll-smooth px-2"
      >
        {products.map((item) => (
          <div key={item._id} className="w-64 flex-shrink-0 snap-start">
            <ProductCard product={item} />
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {Array.from({ length: Math.ceil(products.length / cardsPerView) }).map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              activeIndex === i ? 'h-2 w-7 bg-yellow-500' : 'h-2 w-2 bg-[#f4f6fb]'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;

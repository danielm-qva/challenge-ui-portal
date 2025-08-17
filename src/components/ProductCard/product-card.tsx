import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { IProduct } from '../../../interface/product';
import styles from './styles.module.css';
import Link from 'next/link';

type ProductCardProps = {
  product: IProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [amount, cents] = product?.price?.toFixed(2)?.split('.') || [];

  return (
    <>
      <div className={cn(styles.container)}>
        <Link href={`/product/${product?.slug}`}>
          <Image
            src={product?.image?.url || ''}
            alt={product.name}
            width={product?.image?.width || 276}
            height={product?.image?.height || 240}
            className={'w-full'}
          />
        </Link>
        {product?.isNew && (
          <div className="new-ribbon rounded bg-yellow-600 px-2 py-1 font-bold text-white">
            Nuevo
          </div>
        )}

        <button
          className="group absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-200 hover:shadow-md"
          aria-label={'Agregar a favoritos'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M11.5684 19.0758C11.2567 19.1858 10.7434 19.1858 10.4317 19.0758C7.77337 18.1683 1.83337 14.3825 1.83337 7.96584C1.83337 5.13334 4.11587 2.84167 6.93004 2.84167C8.59837 2.84167 10.0742 3.64834 11 4.89501C11.9259 3.64834 13.4109 2.84167 15.07 2.84167C17.8842 2.84167 20.1667 5.13334 20.1667 7.96584C20.1667 14.3825 14.2267 18.1683 11.5684 19.0758Z"
              stroke="#3D3D3D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        {/*<ProductFavButton className={'absolute right-[12px] top-[12px]'} />*/}
        <div className="recommended-product-data-container bg-[#f4f6fb]">
          <div className="price">
            <div className="amount">${amount}</div>
            {cents && <div className="cents">{cents}</div>}
          </div>
          <div className="title">{product.name}</div>

          <div className="flex items-center gap-1" role="img" aria-label={`${4} de ${5} estrellas`}>
            {Array.from({ length: product?.rate?.start || 0 }, (_, index) => (
              <svg
                key={index}
                className={`h-5 w-5 ${
                  index < (product?.rate?.start || 0)
                    ? 'fill-current text-yellow-400'
                    : 'text-gray-300'
                }`}
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center rounded-lg border border-gray-200">
              <button
                disabled={3 <= 1}
                className="flex h-8 w-8 items-center justify-center text-gray-600 transition-colors hover:text-gray-800 disabled:cursor-not-allowed disabled:text-gray-300"
                aria-label="Disminuir cantidad"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>

              <input
                type="number"
                min="1"
                max="99"
                className="h-8 w-12 border-0 text-center text-sm font-medium focus:ring-0"
                aria-label="Cantidad"
              />

              <button
                disabled={5 >= 99}
                className="flex h-8 w-8 items-center justify-center text-gray-600 transition-colors hover:text-gray-800 disabled:cursor-not-allowed disabled:text-gray-300"
                aria-label="Aumentar cantidad"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors duration-200  hover:shadow-md"
              aria-label="Agregar al carrito"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <path
                  d="M10.6457 2.41699L6.27148 6.80324"
                  stroke="#264092"
                  stroke-width="1.8125"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.3535 2.41699L22.7277 6.80324"
                  stroke="#264092"
                  stroke-width="1.8125"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.41602 9.48503C2.41602 7.24961 3.61227 7.06836 5.09852 7.06836H23.9002C25.3864 7.06836 26.5827 7.24961 26.5827 9.48503C26.5827 12.0829 25.3864 11.9017 23.9002 11.9017H5.09852C3.61227 11.9017 2.41602 12.0829 2.41602 9.48503Z"
                  stroke="#264092"
                  stroke-width="1.8125"
                />
                <path
                  d="M4.22852 12.083L5.93227 22.523C6.31893 24.8672 7.24935 26.583 10.7052 26.583H17.9914C21.7493 26.583 22.3052 24.9397 22.7402 22.668L24.7702 12.083"
                  stroke="#264092"
                  stroke-width="1.8125"
                  stroke-linecap="round"
                />
                <path
                  d="M10.875 19.0312H17.5208"
                  stroke="#264092"
                  stroke-width="1.8125"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1973 15.708V22.3538"
                  stroke="#264092"
                  stroke-width="1.8125"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProductCard);

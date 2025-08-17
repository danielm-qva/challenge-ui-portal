import Image from 'next/image';

export function SectionImgText() {
  return (
    <section className="relative mt-5 overflow-hidden">
      <div className="container relative  z-10 mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left side - Shopping cart image */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/images/canasta.webp"
              alt="Carrito de compras lleno de productos farmacéuticos"
              width={813}
              height={474}
              priority
            />
          </div>
          <div className="text-center lg:text-left lg:w-[60%]">
            <h1 className="mb-6 text-4xl font-bold leading-tight text-[var(--color-primary)] lg:text-4xl">
              {'Encuentra todo en un solo lugar'}
            </h1>
            <p className="mb-3 text-lg leading-relaxed text-gray-500">
              Medicamentos, suplementos, vitaminas, analgésicos y antiinflamatorios, cuidado
              personal y mucho más.
            </p>
            <button className="transform rounded-lg bg-[var(--color-primary)] px-8 py-4 font-semibold text-white shadow-lg transition-colors duration-200  hover:bg-[var(--color-primary)] hover:shadow-xl">
              Explorar productos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

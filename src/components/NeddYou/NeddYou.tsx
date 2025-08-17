import PageWidthContainer from '@/components/Layout/PageWidthContainer';
import CardNedd from '@/components/NeddYou/card-nedd';
import Image from 'next/image';
import { keyOptions } from '../../../constants/app-contanst';

const libCardNed = [
  {
    id: 'payment',
    title: 'Paga desde donde estés',
    description:
      'Paga con tarjeta de débito o crédito desde cualquier parte del mundo donde te encuentres.'
  },
  {
    id: 'delivery',
    title: 'Envío gratis desde $50 USD',
    description: 'Con solo estar registrado, tienes envíos gratis para un grupo de productos. '
  },
  {
    id: 'bill',
    title: 'Entregas en todo el país',
    description: 'LLevamos tu pedido seguro y con garantía hasta la puerta de tu casa.'
  }
];

export async function NeddYou() {
  return (
    <div className={'relative my-4 bg-[var(--color-primary)] p-8'}>
      <Image
        src={'/images/nedd/capsule.webp'}
        alt={'Capsula 1'}
        width={130}
        height={155}
        className={
          'absolute left-[10%]  top-0 -translate-x-1/2 rotate-90 scale-50 md:left-[30%] md:top-[48%]'
        }
      />
      <Image
        src={'/images/nedd/capsule.webp'}
        alt={'Capsula 2'}
        width={130}
        height={155}
        className={'capsule-2'}
        style={{
          position: 'absolute',
          top: 0,
          left: 80,
          transform: 'translateY(-50%) scale(0.3)'
        }}
      />
      <Image
        src={'/images/nedd/capsule.webp'}
        alt={'Capsula 3'}
        width={130}
        height={155}
        className={'capsule-3'}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          transformOrigin: 'center center',
          transform: 'translateY(-50%) scale(0.3) rotate(-90deg)'
        }}
      />
      <PageWidthContainer>
        <div className="flex h-full flex-col items-center justify-between gap-8 lg:flex-row">
          <div
            className="h-full w-full text-center lg:w-1/2 lg:text-left"
            style={{
              fontSize: '42px',
              fontWeight: 700,
              lineHeight: '123%',
              color: 'var(--color-page-bg)'
            }}
          >
            Lo que necesitas, cuando lo necesitas
          </div>
          <div className="flex h-full w-full flex-col gap-3 sm:flex-row lg:items-center lg:justify-end">
            {libCardNed.map((item, index: number) => (
              <CardNedd
                key={index}
                keyId={item.id as keyOptions}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </PageWidthContainer>
    </div>
  );
}

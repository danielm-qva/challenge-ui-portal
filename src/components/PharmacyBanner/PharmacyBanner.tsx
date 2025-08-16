import React, { memo } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { IBanner } from '../../../interface/banner';
import Banner from '@/components/Banner/Banner';
import styles from './styles.module.css';

type DrugStoreBannerProps = {
  className: string | undefined;
};

const banner: IBanner = {
  name: 'Drugs Banner',
  desktop: {
    url: '/images/pharmacy-desktop-banner.webp',
    width: 825,
    height: 85
  },
  mobile: {
    url: '/images/pharmacy-mobile-banner.webp',
    width: 214,
    height: 188
  }
};

const DrugStoreBanner = ({ className }: DrugStoreBannerProps) => {
  return (
    <div className={cn(styles.container, className)}>
      <Banner banner={banner} className={'store-trust-image'} />
      <div className={'store-trust-data'}>
        <div className="store-trust-title">Tu Farmacia Online de Confianza.</div>
        <div className="store-trust-subtitle">
          <span>Amplio catálogo de medicamentos y productos para tu bienestar</span>
          <Link href={'/catalog'}> Explora nuestro catálogo</Link>
        </div>
      </div>
    </div>
  );
};

export default memo(DrugStoreBanner);

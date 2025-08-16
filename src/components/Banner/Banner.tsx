import React, { memo, ReactElement } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { IBanner } from '../../../interface/banner';

type Props = {
  className: string | undefined;
  banner: IBanner;
  desktopClassName?: string;
  mobileClassName?: string;
  priority?: boolean;
  loading?: 'eager' | 'lazy';
};

type WrapperProps = {
  banner: IBanner;
  children: ReactElement;
  styledComponent: string | undefined;
};

const WrapperComponent = ({ banner, children, styledComponent }: WrapperProps) => {
  if (banner.link) {
    return (
      <Link href={banner.link} className={cn('block', styledComponent)}>
        {children}
      </Link>
    );
  }
  return <div className={styledComponent}>{children}</div>;
};

const Banner = ({
  className,
  desktopClassName,
  mobileClassName,
  banner,
  priority,
  loading = 'lazy'
}: Props) => {
  if (banner?.desktop?.url && banner?.mobile?.url) {
    return (
      <WrapperComponent banner={banner} styledComponent={className}>
        <>
          <Image
            alt={banner?.name || ''}
            src={banner?.mobile?.url}
            width={banner?.mobile?.width}
            height={banner?.mobile?.height}
            className={cn('md:hidden', mobileClassName)}
            loading={loading}
            priority={priority}
          />
          <Image
            alt={banner?.name || ''}
            src={banner?.desktop?.url}
            width={banner?.desktop?.width}
            height={banner?.desktop?.height}
            className={cn('hidden md:block', desktopClassName)}
            loading={loading}
            priority={priority}
          />
        </>
      </WrapperComponent>
    );
  }

  if (banner?.desktop?.url || banner?.mobile?.url) {
    return (
      <WrapperComponent banner={banner} styledComponent={className}>
        <Image
          alt={banner?.name || ''}
          loading={loading}
          src={(banner?.desktop?.url || banner?.mobile?.url) as string}
          width={banner?.desktop ? banner?.desktop?.width : banner?.mobile?.width}
          height={banner?.desktop ? banner?.desktop?.height : banner?.mobile?.height}
          className={cn(banner?.desktop?.url ? desktopClassName : mobileClassName)}
        />
      </WrapperComponent>
    );
  }

  return null;
};

export default memo(Banner);

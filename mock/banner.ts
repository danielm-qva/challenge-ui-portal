import { IBanner } from '../interface/banner';

export type keys = 'banner1' | 'banner2';

type BannerType = Record<keys, IBanner[]>;

export const banner: BannerType = {
  banner1: [
    {
      name: 'Banner 1',
      link: '/',
      desktop: {
        url: '/images/banner/desktop/Banner-4.webp',
        width: 469,
        height: 234
      },
      mobile: {
        url: '/images/banner/desktop/Banner-4.webp',
        width: 469,
        height: 234
      }
    },
    {
      name: 'Banner 2',
      link: '/',
      desktop: {
        url: '/images/banner/desktop/Banner-5.webp',
        width: 469,
        height: 234
      },
      mobile: {
        url: '/images/banner/desktop/Banner-5.webp',
        width: 469,
        height: 234
      }
    },
    {
      name: 'Banner 3',
      link: '/',
      desktop: {
        url: '/images/banner/desktop/Banner-6.webp',
        width: 469,
        height: 234
      },
      mobile: {
        url: '/images/banner/desktop/Banner-6.webp',
        width: 469,
        height: 234
      }
    }
  ],
  banner2: [
    {
      name: 'Banner 2',
      desktop: {
        url: '/images/banner/banner-desktop.webp',
        width: 570,
        height: 405
      },
      mobile: {
        url: '/images/banner/banner-mobile.webp',
        width: 391,
        height: 278
      }
    }
  ]
};

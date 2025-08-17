import { PromotionalGrid } from '@/components/GridSectionBanner/GridBannerSection';
import PageWidthContainer from '@/components/Layout/PageWidthContainer';
import MedicationsList from '@/components/CategoryList/CategoryList';
import SectionBanner from '@/components/SectionBanner/SectionBanner';
import DrugStoreBanner from '@/components/PharmacyBanner/PharmacyBanner';
import { Carousel } from '@/components/Carusel';
import { GridBanner } from '@/components/GridBanner';
import { NeddYou } from '@/components/NeddYou/NeddYou';
import { AsymmetricProductGrid } from '@/components/ProductGrid';
import { SectionImgText } from '@/components/SectionImgText/SectionImgText';

export default function Home() {
  return (
    <>
      <PageWidthContainer>
        <PromotionalGrid />
        <MedicationsList />
        <DrugStoreBanner className={'mt-12 px-4 py-8'} />
        <SectionBanner />
        <GridBanner />
        <Carousel />
      </PageWidthContainer>
      <NeddYou />
      <PageWidthContainer>
        <AsymmetricProductGrid />
        <SectionImgText />
      </PageWidthContainer>
    </>
  );
}

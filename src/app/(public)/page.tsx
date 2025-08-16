import {PromotionalGrid} from "@/components/GridSectionBanner/GridBannerSection";
import PageWidthContainer from "@/components/Layout/PageWidthContainer";
import MedicationsList from "@/components/CategoryList/CategoryList";

export default function Home() {
    return (
        <PageWidthContainer>
            <PromotionalGrid/>
            <MedicationsList/>
        </PageWidthContainer>

    );
}

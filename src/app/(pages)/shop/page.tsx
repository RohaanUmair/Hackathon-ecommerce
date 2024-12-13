import CompaniesName from "@/components/CompaniesName";
import Section1 from "@/components/shop-page/Section1";
import Section2 from "@/components/shop-page/Section2";
import Section3 from "@/components/shop-page/Section3";
import Section4 from "@/components/shop-page/Section4";

function ShopPage() {
    return (
        <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <CompaniesName />
        </div>
    )
}

export default ShopPage;
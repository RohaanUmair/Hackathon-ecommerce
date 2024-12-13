import CompaniesName from "@/components/CompaniesName";
import ProductsCard from "./ProductsCard";

function Section3() {
    return (
        <div className="w-full bg-[#fafafa]">

            <div className="py-12 w-[1086px] mx-auto">
                <h3 className="font-bold text-2xl text-[#252B42]">BESTSELLER PRODUCTS</h3>

                <div className="bg-[#ECECEC] h-px w-full my-6"></div>

                <div className="flex justify-between flex-wrap gap-y-6">
                    <ProductsCard imgSrc="/single-product/product-card1.jpg" />
                    <ProductsCard imgSrc="/single-product/product-card2.jpg" />
                    <ProductsCard imgSrc="/single-product/product-card3.jpg" />
                    <ProductsCard imgSrc="/single-product/product-card4.jpg" />

                    <ProductsCard imgSrc="/single-product/product-card5.jpg" />
                    <ProductsCard imgSrc="/single-product/product-card6.jpg" />
                    <ProductsCard imgSrc="/single-product/product-card1.jpg" />
                    <ProductsCard imgSrc="/single-product/product-card2.jpg" />
                </div>

                <CompaniesName />
            </div>

        </div>
    )
}

export default Section3;
'use client'
import Section1 from "@/components/shop-page/single-product/Section1";
import Section2 from "@/components/shop-page/single-product/Section2";
import Section3 from "@/components/shop-page/single-product/Section3";
import { useSearchParams } from "next/navigation";

function SingleProduct() {
    const searchParams = useSearchParams();

    const product = {
        title: searchParams.get("title") || "Product Name",
        price: searchParams.get("price") || "0.00",
        imgSrc: searchParams.get("imgSrc") || "/placeholder.jpg",
        description: searchParams.get("description") || ""
    };


    return (
        <div>
            <Section1 product={product} />
            <Section2 />
            <Section3 />
        </div>
    )
}

export default SingleProduct;
import ImgCard from "./ImgCard";

function Section2() {
    return (
        <div className="h-[272px] flex gap-[15px] justify-center max-md:flex-col max-md:h-full max-md:items-center">
            <ImgCard imgSrc="/shop-card1.jpg" />
            <ImgCard imgSrc="/shop-card2.jpg" />
            <ImgCard imgSrc="/shop-card3.jpg" />
            <ImgCard imgSrc="/shop-card4.jpg" />
            <ImgCard imgSrc="/shop-card5.jpg" />
        </div>
    )
}

export default Section2;
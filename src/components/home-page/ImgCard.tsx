import Image from "next/image";

function ImgCard({ imgSrc, text}: { imgSrc: string, text: string }) {
  return (
    <div>
      <Image
        src={imgSrc}
        alt="bg"
        className={`absolute z-10 inset-0 w-full h-full object-cover`}
        layout="omit"
        width={900}
        height={1600}
      />

      <button className="w-[170px] absolute bottom-6 left-8 h-[48px] z-30 bg-white font-[700] text-base text-[#252b42]">{text}</button>

    </div>
  )
}

export default ImgCard;
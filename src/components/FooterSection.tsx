function FooterSection({ heading, li1, li2, li3, li4 }: { heading: string, li1: string, li2: string, li3: string, li4: string }) {
    return (
        <ul className="flex flex-col gap-[10px] font-bold text-[#737373] w-[148px] text-sm">
            <li className="font-bold text-base mb-[10px] text-[#252B42]">{heading}</li>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            <li>{li4}</li>
        </ul>
    )
}

export default FooterSection;
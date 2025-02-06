'use client';
import { client } from "@/sanity/lib/client";
import DisplayCard from "../displayCard";
import imageUrlBuilder from '@sanity/image-url';
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";


function Section4() {
    const builder = imageUrlBuilder(client);

    function urlFor(source: any) {
        return builder.image(source);
    }

    const [data, setData] = useState<any>([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        client
            .fetch('*[_type == "product"]{title, price, discountPercentage, productImage, description}')
            .then((data) => {
                setData(data);
                setFilteredData(data);
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        const lowercasedTerm = searchTerm.toLowerCase();
        const filtered = data.filter((item) =>
            item.title.toLowerCase().includes(lowercasedTerm)
        );
        setFilteredData(filtered);
    }, [searchTerm, data]);

    if (data.length == 0) {
        return <h1>loading</h1>
    }


    return (
        <div className="scale-95 flex flex-col gap-12">
            <div className="p-4 flex justify-center">
                <SearchBar data={filteredData} setFilteredData={setFilteredData} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>


            <div className="grid grid-cols-4 gap-7 p-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mx-auto">
                {
                    filteredData.map((item: any, index: number) => {
                        return (
                            <DisplayCard
                                key={index}
                                title={item.title}
                                imgSrc={urlFor(item.productImage).url()}
                                price={item.price}
                                discountPercentage={item.discountPercentage}
                                description={item.description}
                            />
                        );
                    })
                }
            </div>

            <ul className="flex border border-[#bdbdbd] w-fit rounded-md mx-auto">
                <li className="w-[84px] justify-center items-center flex h-[74px] bg-[#F3F3F3] border border-[#BDBDBD] text-[#BDBDBD] font-bold text-sm"><p>First</p></li>
                <li className="w-[49px] justify-center items-center flex border border-[#bdbdbd] h-[74px] text-[#23A6F0] font-bold text-sm"><p>1</p></li>
                <li className="w-[49px] justify-center items-center flex border border-[#bdbdbd] h-[74px] bg-[#23a6f0] text-white"><p>2</p></li>
                <li className="w-[49px] justify-center items-center flex border border-[#bdbdbd] h-[74px] text-[#23A6F0] font-bold text-sm"><p>3</p></li>
                <li className="w-[85px] justify-center items-center flex border border-[#bdbdbd] h-[74px] text-[#23a6f0]"><p>Next</p></li>
            </ul>
        </div>
    )
}

export default Section4;
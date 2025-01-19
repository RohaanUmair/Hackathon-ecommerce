'use client';
import React, { useEffect, useState } from 'react'
import DisplayCard from '../displayCard'
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';


function Section3() {
    const builder = imageUrlBuilder(client);

    function urlFor(source: any) {
        return builder.image(source);
    }

    const [data, setData] = useState<any>([]);
    const [data2, setData2] = useState<any>([]);


    useEffect(() => {
        client
            .fetch('*[_type == "product"]{title, price, discountPercentage, productImage}')
            .then((data) => {
                setData(data.slice(0, 4));
                setData2(data.slice(4, 8));
            })
            .catch((err) => console.error(err));
    }, []);

    if (data.length == 0) {
        return <h1>loading</h1>
    }

    console.log(data)


    return (
        <div className='h-[1652px] max-md:h-[5510px] flex flex-col justify-evenly'>


            <div className='h-[102px] max-md:h-[154px] flex flex-col justify-between items-center max-md:w-[261px] max-md:mx-auto max-md:text-center'>
                <h2 className='text-xl font-normal text-[#737373]'>Featured Products</h2>
                <h3 className='text-2xl font-bold'>BESTSELLER PRODUCTS</h3>
                <p className='text-[14px] font-normal font text-[#737373]'>Problems trying to resolve the conflict between </p>
            </div>

            <div className='flex gap-7 justify-center max-md:flex-col max-md:items-center max-md:gap-[30px]'>
                {
                    data.map((item: any, index: number) => {
                        return (
                            <DisplayCard key={index} title={item.title} imgSrc={urlFor(item.productImage).url()} price={item.price} discountPercentage={item.discountPercentage} />
                        )
                    })
                }
            </div>

            <div className='flex gap-7 justify-center md:mt-20 max-md:flex-col max-md:items-center max-md:gap-[30px]'>
                {/* <DisplayCard imgSrc='/card5.jpg' />
                <DisplayCard imgSrc='/card6.jpg' />
                <DisplayCard imgSrc='/card7.jpg' />
                <DisplayCard imgSrc='/card8.jpg' /> */}
                {
                    data2.map((item: any, index: number) => {
                        return (
                            <DisplayCard key={index} title={item.title} imgSrc={urlFor(item.productImage).url()} price={item.price} discountPercentage={item.discountPercentage} />
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Section3

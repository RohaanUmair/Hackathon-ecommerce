import React from 'react';
import PriceCard from './PriceCard';


function Section3() {
    return (
        <div className='bg-[#fafafa] flex justify-center mt-12'>

            <PriceCard backgroundColor='white' color='#252B42' color2='#737373' heading='Free' price='0' />
            <div className='-translate-y-10'>
                <PriceCard backgroundColor='#252b42' color='white' color2='white' heading='Standard' price='9.99' />
            </div>
            <PriceCard backgroundColor='white' color='#252B42' color2='#737373' heading='Premium' price='19.99' />

        </div>
    )
}

export default Section3

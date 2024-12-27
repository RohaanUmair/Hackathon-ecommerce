import CompaniesName from '@/components/CompaniesName'
import React from 'react'

function CompaniesSec() {
    return (
        <div className='py-20 bg-[#fafafa]      max-md:w-[328px] max-md:mx-auto'>
            <div className='text-center'>
                <h2 className='text-[#252B42] text-[40px] font-bold mb-[30px]'>Big Companies Are Here</h2>
                <p className='text-sm font-normal text-[#737373]'>Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <CompaniesName />
        </div>
    )
}

export default CompaniesSec

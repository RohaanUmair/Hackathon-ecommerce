import React from 'react'

function RequestCard({ icon, theme }: { icon: any, theme: 'light' | 'dark' }) {
    
    const isLightTheme: boolean = theme === 'light';


    return (
        <div className={`w-[328px] h-[403px] py-20 flex flex-col items-center justify-between ${isLightTheme ? 'bg-white' : 'bg-[#252B42]'}`}>
            <div className='text-[#23A6F0] text-[72px]'>
                {icon}
            </div>

            <div className={`text-sm font-bold text-center ${isLightTheme ? 'text-[#252B42]' : 'text-white'}`}>
                <h6>georgia.young@example.com</h6>
                <h6>georgia.young@ple.com</h6>
            </div>

            <h5 className={`text-base font-bold ${isLightTheme ? 'text-[#252B42]' : 'text-white'}`}>Get Support</h5>

            <button className='w-[189px] h-[58px] text-[#23A6F0] border border-[#23A6F0] rounded-[37px]'>Submit Request</button>
        </div>
    )
}

export default RequestCard

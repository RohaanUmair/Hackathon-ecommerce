import Section5 from '@/components/other/Section5';
import Section1 from '@/components/other/team/Section1';
import Section2 from '@/components/other/team/Section2';
import Section3 from '@/components/other/team/Section3';
import React from 'react'

function TeamPage() {
    return (
        <div className='pt-[91px]       max-md:pt-[78px]'>
            <Section1 />
            <Section2 />
            <Section3 />

            
            <Section5 />
        </div>
    )
}

export default TeamPage;
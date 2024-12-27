import Section1 from '@/components/other/contact/Section1';
import Section2 from '@/components/other/contact/Section2';
import Section3 from '@/components/other/contact/Section3';
import React from 'react';

function ContactPage() {
    return (
        <div className="pt-[91px]   max-md:pt-[78px]">
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}

export default ContactPage

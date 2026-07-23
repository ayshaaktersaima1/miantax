import CallCenterRegistrationContent from '@/components/contents/CallCenterRegContent';
import PageBanner from '@/components/PageBanner';
import ServiceSidebar from '@/components/ServiceSidebar';
import React from 'react';

const CallCenterRegPage = () => {
    return (
        <div>
            <PageBanner title="Call Center Registration"
                backgroundImage="/images/AboutSec"></PageBanner>

            <section className="bg-[#F8F7F4] py-16 md:py-20">
                <div className="mx-auto grid w-11/12 gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
                    <CallCenterRegistrationContent></CallCenterRegistrationContent>
                    <ServiceSidebar />
                </div>
            </section>
        </div>
    );
};

export default CallCenterRegPage;
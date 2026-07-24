import PageBanner from '@/components/PageBanner';
import PartnershipAOPContent from '@/components/contents/PartnershipAOPContent';
import ServiceSidebar from '@/components/ServiceSidebar';
import React from 'react';

const PartnershipRegPage = () => {
    return (
        <div>
            <PageBanner title="Partnership Registration (AOP)"
                backgroundImage="/images/PartnershipRegistration.webp"></PageBanner>

            <section className="bg-[#F8F7F4] py-16 md:py-20">
                <div className="mx-auto grid w-11/12 gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
                    <PartnershipAOPContent></PartnershipAOPContent>
                    <ServiceSidebar />
                </div>
            </section>
        </div>
    );
};

export default PartnershipRegPage;
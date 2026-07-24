import SoleProprietorshipContent from '@/components/contents/SoleProprietorshipContent';
import PageBanner from '@/components/PageBanner';
import ServiceSidebar from '@/components/ServiceSidebar';

import React from 'react';

const SoleProprietorshipPage = () => {
    return (
        <div>
            <PageBanner title="Sole Proprietorship"
                backgroundImage="/images/SoleProprietorship.webp"></PageBanner>

            <section className="bg-[#F8F7F4] py-16 md:py-20">
                <div className="mx-auto grid w-11/12 gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
                    <SoleProprietorshipContent></SoleProprietorshipContent>
                    <ServiceSidebar />
                </div>
            </section>
        </div>
    );
};

export default SoleProprietorshipPage;
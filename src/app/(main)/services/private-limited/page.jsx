import PrivateLimitedContent from '@/components/contents/PrivateLimitedContent';
import PageBanner from '@/components/PageBanner';
import ServiceSidebar from '@/components/ServiceSidebar';
import React from 'react';

const PrivateLimited = () => {
    return (
        <div>
            <PageBanner title="Private Limited"
                backgroundImage="/images/private-limited-company.webp"></PageBanner>

            <section className="bg-[#F8F7F4] py-16 md:py-20">
                <div className="mx-auto grid w-11/12 gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
                    <PrivateLimitedContent></PrivateLimitedContent>
                    <ServiceSidebar />
                </div>
            </section>
        </div>
    );
};

export default PrivateLimited;
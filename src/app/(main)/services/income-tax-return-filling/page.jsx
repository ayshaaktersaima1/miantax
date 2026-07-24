import IncomeTaxReturnFilingContent from '@/components/contents/IncomeTaxReturnFilingContent';
import PageBanner from '@/components/PageBanner';
import ServiceSidebar from '@/components/ServiceSidebar';
import React from 'react';

const IncomeTaxReturnFillingPage = () => {
    return (
        <div>
            <PageBanner title="Income Tax Return Filling"
                backgroundImage="/images/IncomeTaxReturnFilling.webp"></PageBanner>

            <section className="bg-[#F8F7F4] py-16 md:py-20">
                <div className="mx-auto grid w-11/12 gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
                    <IncomeTaxReturnFilingContent></IncomeTaxReturnFilingContent>
                    <ServiceSidebar />
                </div>
            </section>
        </div>
    );
};

export default IncomeTaxReturnFillingPage;
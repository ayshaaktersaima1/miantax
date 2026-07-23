import IncomeTaxAndSalesTaxContent from '@/components/contents/IncomeTaxAndSalesTaxContent';
import PageBanner from '@/components/PageBanner';
import ServiceSidebar from '@/components/ServiceSidebar';
import React from 'react';

const IncomeTaxAndSalesTaxPage = () => {
    return (
        <div>
            <PageBanner title="Income Tax and Sales Tax Notices"
                backgroundImage="/images/AboutSec"></PageBanner>

            <section className="bg-[#F8F7F4] py-16 md:py-20">
                <div className="mx-auto grid w-11/12 gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
                    <IncomeTaxAndSalesTaxContent></IncomeTaxAndSalesTaxContent>
                    <ServiceSidebar />
                </div>
            </section>
        </div>
    );
};

export default IncomeTaxAndSalesTaxPage;
import SalesTaxRegistrationContent from '@/components/contents/SalesTaxRegistrationContent';
import PageBanner from '@/components/PageBanner';
import ServiceSidebar from '@/components/ServiceSidebar';
import React from 'react';

const SalesTaxRegistrationAndFillingPage = () => {
    return (
        <div>
            <PageBanner title="Sales Tax Registration and Return Filling"
                backgroundImage="/images/SalesTaxRegistrationandReturnFilling.webp"></PageBanner>

            <section className="bg-[#F8F7F4] py-16 md:py-20">
                <div className="mx-auto grid w-11/12 gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
                    <SalesTaxRegistrationContent></SalesTaxRegistrationContent>
                    <ServiceSidebar />
                </div>
            </section>
        </div>
    );
};

export default SalesTaxRegistrationAndFillingPage;
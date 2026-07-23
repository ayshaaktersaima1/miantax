import OurServices from '@/components/OurServices';
import PageBanner from '@/components/PageBanner';
import ReviewSection from '@/components/ReviewSection';
import TaxCtaSection from '@/components/TaxCtaSection';
import React from 'react';

const Services = () => {
    return (
        <div>
            <PageBanner title="Our Services"
                backgroundImage="/images/AboutSec"></PageBanner>
            <OurServices></OurServices>
            <TaxCtaSection></TaxCtaSection>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Services;
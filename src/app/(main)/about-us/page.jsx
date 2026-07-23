import AboutCompany from '@/components/AboutCompany';
import NumbersSection from '@/components/NumberSection';
import PageBanner from '@/components/PageBanner';
import ReviewSection from '@/components/ReviewSection';
import TaxCtaSection from '@/components/TaxCtaSection';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <PageBanner title="About Us"
                backgroundImage="/images/AboutSec"></PageBanner>
            <AboutCompany></AboutCompany>
            <NumbersSection></NumbersSection>
            <ReviewSection></ReviewSection>
            <TaxCtaSection></TaxCtaSection>
        </div>
    );
};

export default AboutUs;
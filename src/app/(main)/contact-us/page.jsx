import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import MapSection from '@/components/MapSection';
import PageBanner from '@/components/PageBanner';
import Link from 'next/link';
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

const page = () => {
    return (
        <div>
            <PageBanner title="Contact Us"
                backgroundImage="/images/AboutSec"></PageBanner>

            <section className=" py-16 md:py-20">
                <div className="mx-auto grid w-11/12 gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:items-center">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </section>

            <MapSection></MapSection>
        </div>
    );
};

export default page;
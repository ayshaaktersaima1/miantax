
import OurBlog from '@/components/OurBlog';
import PageBanner from '@/components/PageBanner';
import TaxCtaSection from '@/components/TaxCtaSection';
import React from 'react';

const BlogPage = () => {
    return (
        <div>
            <PageBanner title="Our Blog"
                backgroundImage="/images/AboutSec"></PageBanner>
            <OurBlog></OurBlog>
            <TaxCtaSection></TaxCtaSection>

        </div>
    );
};

export default BlogPage;
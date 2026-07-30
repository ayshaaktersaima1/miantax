import OurTeam from '@/components/OurTeam';
import PageBanner from '@/components/PageBanner';
import React from 'react';

const OurTeamPage = () => {
    return (
        <div>
            <PageBanner title="Our Team"
                backgroundImage="/images/our-team.jpg"></PageBanner>

            <OurTeam></OurTeam>


        </div>
    );
};

export default OurTeamPage;
import React from 'react';

const CaseStudiesSection = () => {
    return (
        <section className="bg-[#F8F7F4] py-20">
            <div className="mx-auto w-[88%]">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-0.5 w-10 bg-[#D7A332]" />

                        <p className="text-sm font-semibold uppercase tracking-widest text-[#D7A332]">
                            Case Studies
                        </p>

                        <span className="h-0.5 w-10 bg-[#D7A332]" />
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#061D3A] md:text-5xl">
                        The Last Project We Worked On
                    </h2>
                </div>

                <div className="mt-12 min-h-40">
                    {/* Case study content */}
                </div>
            </div>
        </section>
    );
};

export default CaseStudiesSection;
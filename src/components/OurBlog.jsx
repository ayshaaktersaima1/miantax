import React from 'react';

const OurBlog = () => {
    return (
        <div>
            <section className="bg-[#F8F7F4] pb-20 pt-10">
                <div className="mx-auto w-11/12 text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-[#D7A332]">
                        Our Blog
                    </p>

                    <div className="mx-auto mt-3 h-0.5 w-12 bg-[#D7A332]" />

                    <h2 className="mt-5 text-3xl font-semibold text-[#061D3A] md:text-5xl">
                        Latest Blog & News for You
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600">
                        Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut
                        suspendisse pharetra. Finibus condimentum aenean lacinia sem
                        metus Integer.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default OurBlog;
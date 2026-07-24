import Link from "next/link";

import {
    FiArrowRight,
    FiAward,
} from "react-icons/fi";

const TaxCtaSection = () => {
    return (
        <section className="relative bg-[url('/images/tax-cta.webp')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 mx-auto flex min-h-96 w-[88%] items-center justify-center py-16">
                <div className="text-center text-white">
                    <div className="flex items-center justify-center gap-3">
                        <span className="h-0.5 w-10 bg-[#D7A332]" />

                        <FiAward className="hidden md:inline text-xl text-[#D7A332]" />

                        <p className="text-sm font-semibold uppercase tracking-widest text-[#D7A332]">
                            Tax Consulting Experts
                        </p>

                        <span className="h-0.5 w-10 bg-[#D7A332]" />
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
                        Having trouble managing <span className="text-[#D7A332]">
                            your taxes?
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/85">
                        Simplify the process with expert guidance! Avoid
                        penalties, save time, and ensure compliance while we
                        handle your taxes—letting you focus on growing your
                        business.
                    </p>

                    <Link
                        href="/contact-us"
                        className="mt-7 inline-flex items-center gap-3 rounded-lg bg-[#D7A332] px-7 py-4 font-semibold text-[#061D3A] transition duration-300 hover:bg-white"
                    >
                        Contact Us Now

                        <FiArrowRight className="text-lg" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TaxCtaSection;
import Link from "next/link";

import {
    FiArrowRight,
    FiAward,
} from "react-icons/fi";

const TaxCtaSection = () => {
    return (
        <section className="relative flex min-h-96 items-center justify-center overflow-hidden bg-[url('/images/tax-cta')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-[#061D3A]/75" />

            <div className="relative z-10 mx-auto w-11/12 py-16 text-center text-white">
                <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-[#D7A332] px-5 py-2">
                    <FiAward className="text-[#D7A332]" />

                    <p className="text-xs font-medium uppercase tracking-widest">
                        Tax Consulting Experts
                    </p>
                </div>

                <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
                    Having trouble
                    <span className="block">
                        managing{" "}
                        <span className="text-[#D7A332]">
                            your taxes?
                        </span>
                    </span>
                </h2>

                <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="h-px w-16 bg-[#D7A332]" />

                    <span className="h-2 w-2 rounded-full bg-[#D7A332]" />
                    <span className="h-2 w-2 rounded-full bg-[#D7A332]" />
                    <span className="h-2 w-2 rounded-full bg-[#D7A332]" />

                    <span className="h-px w-16 bg-[#D7A332]" />
                </div>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/85 md:text-base">
                    Simplify your taxes with expert guidance and personalized
                    solutions. Save time, reduce stress, and focus on growing your
                    business.
                </p>

                <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-5 rounded-lg bg-[#D7A332] px-7 py-4 text-sm font-semibold uppercase tracking-wide text-[#061D3A] shadow-lg transition duration-300 hover:bg-white"
                >
                    Contact Us Now

                    <FiArrowRight className="text-lg" />
                </Link>
            </div>
        </section>
    );
};

export default TaxCtaSection;
import Image from "next/image";
import Link from "next/link";

import {
    FiArrowRight,
    FiBarChart2,
    FiDollarSign,
} from "react-icons/fi";

const Banner = () => {
    return (
        <section className="overflow-hidden bg-[#F8F7F4]">
            <div className="grid items-center lg:grid-cols-2">
                {/* Left content */}
                <div className="mx-auto w-4/5 py-12 lg:py-16">
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#D7A332] md:text-sm">
                        Welcome to Mian Tax Associates
                    </p>

                    <div className="my-4 h-0.5 w-12 bg-[#061D3A]" />

                    <h1 className="max-w-xl text-4xl font-bold leading-tight text-[#061D3A] md:text-5xl">
                        Expert Tax Solutions for Businesses and{" "}
                        <span className="block text-[#D7A332]">
                            Individuals
                        </span>
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-7 text-[#455468]">
                        Expert tax consulting services in Pakistan for both individuals and
                        businesses, focused on ensuring compliance, maximizing deductions,
                        and offering customized solutions to help reduce your tax
                        liabilities.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-7 inline-flex items-center gap-4 rounded-lg bg-[#061D3A] px-6 py-3 font-medium text-white transition duration-300 hover:bg-[#D7A332]"
                    >
                        Contact Us

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D7A332] text-[#061D3A]">
                            <FiArrowRight />
                        </span>
                    </Link>
                </div>

                {/* Right image */}
                <div className="relative h-96 overflow-hidden rounded-l-3xl lg:h-[560px]">
                    <Image
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=85"
                        alt="Professional working with financial documents and calculator"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-[#061D3A]/10" />

                    <div className="absolute -left-16 -top-20 h-48 w-72 rounded-full bg-[#D7A332]/80" />
                </div>
            </div>

            {/* Feature cards */}
            <div className="relative z-20 mx-auto -mt-20 grid w-11/12 gap-6 pb-14 md:grid-cols-2 lg:ml-auto lg:mr-12 lg:w-3/5">
                <div className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#061D3A] text-3xl text-[#D7A332]">
                        <FiBarChart2 />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-[#061D3A]">
                            Time saving
                        </h2>

                        <div className="my-3 h-0.5 w-10 bg-[#D7A332]" />

                        <p className="text-sm leading-6 text-gray-600">
                            Efficient tax solutions that save you time and maximize savings.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#061D3A] text-3xl text-[#D7A332]">
                        <FiDollarSign />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-[#061D3A]">
                            Cost effective
                        </h2>

                        <div className="my-3 h-0.5 w-10 bg-[#D7A332]" />

                        <p className="text-sm leading-6 text-gray-600">
                            Affordable tax consulting services designed for maximum savings
                            and efficiency.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
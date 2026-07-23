"use client";

import Image from "next/image";
import Link from "next/link";

import {
    FiArrowRight,
    FiBarChart2,
    FiCheck,
    FiDollarSign,
} from "react-icons/fi";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const bannerImages = [
    {
        src: "/images/banner1.jpg",
        alt: "Tax professional reviewing financial documents",
    },
    {
        src: "/images/banner2.jpg",
        alt: "Business professionals discussing financial reports",
    },
    {
        src: "/images/banner3.avif",
        alt: "Professional working with tax documents and calculator",
    },
];

const Banner = () => {
    return (
        <section className="relative -mt-14 mb-28 overflow-visible bg-[#F8F7F4] lg:-mt-20">
            <div className="relative h-[760px] w-full overflow-hidden pt-14 lg:h-[780px] lg:pt-20">
                <div className="absolute inset-0 z-0">
                    <Swiper
                        modules={[Autoplay, EffectFade, Pagination]}
                        effect="fade"
                        fadeEffect={{
                            crossFade: true,
                        }}
                        loop
                        speed={1000}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        className="banner-swiper h-full w-full"
                    >
                        {bannerImages.map((image, index) => (
                            <SwiperSlide
                                key={image.src}
                                className="relative h-full w-full overflow-hidden"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    priority={index === 0}
                                    sizes="100vw"
                                    className="banner-image object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="pointer-events-none absolute inset-0 z-10 bg-[#061D3A]/15" />

                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#061D3A]/75 via-[#061D3A]/35 to-transparent" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-52 bg-gradient-to-t from-[#061D3A]/45 to-transparent" />

                <div className="relative z-20 mx-auto flex h-full w-11/12 items-center pb-32 pt-10 lg:pb-24 lg:pt-14">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4">
                            <span className="h-px w-12 bg-[#D7A332]" />

                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D7A332] md:text-sm">
                                Welcome to Mian Tax Associates
                            </p>
                        </div>

                        <h1 className="mt-7 max-w-4xl font-bold leading-[1.08] text-white text-3xl md:text-6xl">
                            Expert Tax Solutions for <br />
                            <span className="text-[#D7A332]">
                                Businesses and Individuals
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
                            Expert tax consulting services in Pakistan for both
                            individuals and businesses, focused on ensuring
                            compliance, maximizing deductions, and offering
                            customized solutions to help reduce your tax
                            liabilities.
                        </p>

                        <div className="mt-9 flex flex-wrap items-center gap-6">
                            <Link
                                href="/contact-us"
                                className="inline-flex h-14 items-center justify-center gap-4 rounded-xl bg-[#D7A332] px-7 font-semibold text-[#061D3A] transition duration-300 hover:bg-white"
                            >
                                Contact Us

                                <FiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>

                            <div className="flex items-center gap-3 text-sm font-medium text-white">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D7A332]/70 bg-[#D7A332]/10 text-[#D7A332]">
                                    <FiCheck />
                                </span>

                                Trusted Tax Professionals
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-x-0 -bottom-20 z-30">
                <div className="mx-auto grid w-11/12 gap-5 md:grid-cols-2 lg:ml-auto lg:mr-[4.16%] lg:w-[58%]">
                    <div className="flex min-h-36 items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-1">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#061D3A] text-2xl text-[#D7A332]">
                            <FiBarChart2 />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[#061D3A]">
                                Time saving
                            </h2>

                            <div className="my-2 h-0.5 w-10 bg-[#D7A332]" />

                            <p className="text-sm leading-6 text-[#455468]">
                                Efficient tax solutions that save you time and
                                maximize savings.
                            </p>
                        </div>
                    </div>

                    <div className="flex min-h-36 items-center gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-1">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#061D3A] text-2xl text-[#D7A332]">
                            <FiDollarSign />
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-[#061D3A]">
                                Cost effective
                            </h2>

                            <div className="my-2 h-0.5 w-10 bg-[#D7A332]" />

                            <p className="text-sm leading-6 text-[#455468]">
                                Affordable tax consulting designed for maximum
                                savings and efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
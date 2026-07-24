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
        <section className="relative bg-[#F8F7F4] md:-mt-20 md:mb-28">
            <div className="relative h-screen w-full md:h-[110vh] xl:h-[92vh] xl:pt-20">
                <div className="absolute inset-0 overflow-hidden">
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
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        className="banner-swiper h-full w-full"
                    >
                        {bannerImages.map((image, index) => (
                            <SwiperSlide
                                key={image.src}
                                className="relative h-full w-full"
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

                <div className="pointer-events-none absolute inset-0 z-10 bg-black/35" />

                <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

                <div className="relative z-20 mx-auto flex h-full w-[88%] items-center">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-8 bg-[#D7A332] md:w-12" />

                            <p className="text-xs font-semibold uppercase tracking-widest text-[#D7A332] md:text-sm">
                                Welcome to Mian Tax Associates
                            </p>
                        </div>

                        <h1 className="mt-5 text-3xl font-bold leading-tight text-white md:text-5xl xl:text-6xl">
                            Expert Tax Solutions for{" "}
                            <span className="text-[#D7A332]">
                                Businesses and Individuals
                            </span>
                        </h1>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 md:text-lg md:leading-8">
                            Expert tax consulting services in Pakistan for both
                            individuals and businesses, focused on ensuring
                            compliance, maximizing deductions, and offering
                            customized solutions to help reduce your tax
                            liabilities.
                        </p>

                        <div className="mt-7 flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
                            <Link
                                href="/contact-us"
                                className="group flex h-14 items-center gap-3 rounded-xl bg-[#D7A332] px-7 font-semibold text-[#061D3A] hover:bg-white"
                            >
                                Contact Us

                                <FiArrowRight className="text-xl transition group-hover:translate-x-1" />
                            </Link>

                            <div className="flex items-center gap-3 text-sm font-medium text-white">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D7A332] text-[#D7A332]">
                                    <FiCheck />
                                </span>

                                Trusted Tax Professionals
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute inset-x-0 -bottom-20 z-30 hidden md:block">
                    <div className="mx-auto flex w-11/12 gap-5 xl:ml-auto xl:mr-[4%] xl:w-[58%]">
                        <div className="flex flex-1 items-center gap-5 rounded-2xl bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#061D3A] text-2xl text-[#D7A332]">
                                <FiBarChart2 />
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-[#061D3A]">
                                    Time saving
                                </h2>

                                <div className="my-2 h-0.5 w-10 bg-[#D7A332]" />

                                <p className="text-sm leading-6 text-[#455468]">
                                    Efficient tax solutions that save you time
                                    and maximize savings.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-1 items-center gap-5 rounded-2xl bg-white p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#061D3A] text-2xl text-[#D7A332]">
                                <FiDollarSign />
                            </div>

                            <div>
                                <h2 className="text-xl font-semibold text-[#061D3A]">
                                    Cost effective
                                </h2>

                                <div className="my-2 h-0.5 w-10 bg-[#D7A332]" />

                                <p className="text-sm leading-6 text-[#455468]">
                                    Affordable tax consulting designed for
                                    maximum savings and efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
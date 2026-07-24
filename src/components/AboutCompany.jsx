"use client";

import Image from "next/image";
import Link from "next/link";

import { AlertDialog } from "@heroui/react";

import {
    FiArrowRight,
    FiBarChart2,
    FiChevronRight,
    FiPlay,
    FiTarget,
    FiX,
} from "react-icons/fi";
import ScrollReveal from "./GlobalScrollReveal";

const visionItems = [
    "Empowering Business Registration Success.",
    "Ensuring Compliance with Regulations.",
    "Maximizing Tax Savings Opportunities.",
    "Streamlining SECP and FBR Processes.",
];

const missionItems = [
    "Deliver Exceptional Tax Solutions.",
    "Facilitate Hassle-Free Business Registration.",
    "Provide Expert Guidance and Support.",
    "Foster Long-Term Client Relationships.",
];

const AboutCompany = () => {
    return (
        <section className="overflow-hidden bg-[#F8F7F4] py-20">
            <div className="mx-auto grid w-[88%] items-center gap-16 xl:grid-cols-2">
                {/* Left image area */}

                <div className="relative w-full pb-28 xl:mx-auto xl:max-w-2xl">
                    {/* Main image */}
                    <div className="relative aspect-square overflow-hidden rounded-2xl">
                        <Image
                            src="/images/aboutCompany.webp"
                            alt="Legal and tax consultancy office"
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Video modal */}
                    <AlertDialog>
                        <AlertDialog.Trigger className="group absolute bottom-0 right-0 z-10 w-3/5 cursor-pointer overflow-hidden rounded-2xl border-4 border-white bg-white text-left shadow-xl">
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src="/images/aboutCompany2.webp"
                                    alt="Professionals discussing business documents"
                                    fill
                                    sizes="(max-width: 1024px) 60vw, 30vw"
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/15 transition duration-500 group-hover:bg-black/25" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="absolute h-16 w-16 animate-pulse rounded-full bg-[#D7A332]/15" />

                                    <span className="absolute h-14 w-14 animate-[ping_2.5s_ease-out_infinite] rounded-full border border-white/50" />

                                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#D7A332] text-lg text-white shadow-md transition duration-500 group-hover:scale-105">
                                        <FiPlay className="ml-1" />
                                    </span>
                                </div>
                            </div>

                            <div className="bg-white px-4 py-3">
                                <p className="text-sm font-semibold text-[#061D3A]">
                                    How We Help Your Business Succeed
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                    Watch our quick overview
                                </p>
                            </div>
                        </AlertDialog.Trigger>

                        <AlertDialog.Backdrop
                            variant="blur"

                            className="bg-black/75 backdrop-blur-md"
                        >
                            <AlertDialog.Container
                                placement="center"
                                size="lg"
                                className="p-4"
                            >
                                <AlertDialog.Dialog className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-blue-400/15 bg-black p-0 shadow-2xl shadow-blue-950/50">
                                    <AlertDialog.CloseTrigger className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white backdrop-blur transition hover:bg-[#D7A332] hover:text-[#061D3A]">
                                        <FiX />
                                    </AlertDialog.CloseTrigger>

                                    <AlertDialog.Body className="p-0">
                                        <div className="aspect-video w-full">
                                            <iframe
                                                src="https://www.youtube.com/embed/WSEZxPkh_u8?autoplay=1&rel=0"
                                                title="Mian Tax Associates company video"
                                                allow="autoplay; encrypted-media; picture-in-picture"
                                                allowFullScreen
                                                className="h-full w-full"
                                            />
                                        </div>
                                    </AlertDialog.Body>
                                </AlertDialog.Dialog>
                            </AlertDialog.Container>
                        </AlertDialog.Backdrop>
                    </AlertDialog>
                </div>

                {/* Right content */}
                <div>
                    <div className="mb-5 flex items-center gap-4">
                        <p className="text-sm font-semibold uppercase tracking-widest text-[#D7A332]">
                            About Company
                        </p>

                        <span className="h-0.5 w-12 bg-[#D7A332]" />
                    </div>

                    <h2 className="max-w-2xl text-4xl font-bold leading-tight text-[#061D3A] md:text-5xl">
                        Dedicated Tax Experts Committed to Your Success
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-[#243044]">
                        We are a top tax consultancy firm in Pakistan, focusing on
                        providing tax solutions and company registration services for
                        both individuals and businesses. Our skilled professionals work
                        to ensure compliance with tax regulations while helping you
                        maximize your savings and simplify the registration process.
                        Dedicated to excellence and customer satisfaction, we aim to
                        make tax and business setup easier for our clients.
                    </p>

                    <div className="my-8 flex items-center gap-6">
                        <span className="h-px flex-1 bg-gray-300" />

                        <span className="text-2xl text-[#D7A332]">
                            ♜
                        </span>

                        <span className="h-px flex-1 bg-gray-300" />
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">

                        <div className="md:border-r md:border-gray-200 md:pr-8">
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#061D3A] text-2xl text-[#D7A332] ring-1 ring-[#D7A332] ring-offset-4 ring-offset-[#F8F7F4]">
                                    <FiBarChart2 />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-[#061D3A]">
                                        Our Vision
                                    </h3>

                                    <div className="mt-2 h-0.5 w-10 bg-[#D7A332]" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {visionItems.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <FiChevronRight className="mt-1 shrink-0 text-xl text-[#D7A332]" />

                                        <p className="text-sm leading-6 text-[#061D3A]">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mission */}
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#061D3A] text-2xl text-[#D7A332] ring-1 ring-[#D7A332] ring-offset-4 ring-offset-[#F8F7F4]">
                                    <FiTarget />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-[#061D3A]">
                                        Our Mission
                                    </h3>

                                    <div className="mt-2 h-0.5 w-10 bg-[#D7A332]" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {missionItems.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <FiChevronRight className="mt-1 shrink-0 text-xl text-[#D7A332]" />

                                        <p className="text-sm leading-6 text-[#061D3A]">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/about-us"
                        className="mt-9 inline-flex items-center gap-5 rounded-lg bg-[#061D3A] px-6 py-3 font-medium uppercase tracking-wider text-white transition hover:bg-[#D7A332]"
                    >
                        More About Us

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D7A332] text-[#061D3A]">
                            <FiArrowRight />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;
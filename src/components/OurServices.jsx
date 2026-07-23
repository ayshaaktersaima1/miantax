import Link from "next/link";

import {
    FiArrowRight,
    FiBriefcase,
    FiCode,
    FiEdit3,
    FiFileText,
    FiMonitor,
    FiShield,
    FiUsers,
} from "react-icons/fi";

import { AiOutlineFileSearch } from "react-icons/ai";
import { MdOutlineCallMissedOutgoing } from "react-icons/md";
import { PiTrademark } from "react-icons/pi";
import { TbTax } from "react-icons/tb";

const services = [
    {
        id: 1,
        title: "Company Registration",
        description:
            "Starting a business in Pakistan requires legal compliance and proper company registration.",
        href: "/services/company-registration",
        icon: FiBriefcase,
    },
    {
        id: 2,
        title: "Partnership Registration (AOP)",
        description:
            "A Partnership, also known as an Association of Persons (AOP), is a prominent business structure.",
        href: "/services/partnership-registration",
        icon: FiUsers,
    },
    {
        id: 3,
        title: "Limited Liability Partnership (LLP)",
        description:
            "A Limited Liability Partnership is a modern and flexible business structure.",
        href: "/services/limited-liability-partnership",
        icon: FiShield,
    },
    {
        id: 4,
        title: "PSEB Registration",
        description:
            "PSEB Registration is the official process through which IT companies register in Pakistan.",
        href: "/services/pseb-registration",
        icon: FiMonitor,
    },
    {
        id: 5,
        title: "Call Center Registration",
        description:
            "Call Center Registration is the official process required for operating a call center business.",
        href: "/services/call-center-registration",
        icon: MdOutlineCallMissedOutgoing,
    },
    {
        id: 6,
        title: "IT Company Registration",
        description:
            "IT Company Registration is the formal process for businesses operating in the technology sector.",
        href: "/services/it-company-registration",
        icon: FiCode,
    },
    {
        id: 7,
        title: "Trademark Registration",
        description:
            "Trademark Registration helps a business secure exclusive legal rights over its brand identity.",
        href: "/services/trademark-registration",
        icon: PiTrademark,
    },
    {
        id: 8,
        title: "Copyright Registration",
        description:
            "Copyright Registration is a legal process that protects your original creative work.",
        href: "/services/copyright-registration",
        icon: AiOutlineFileSearch,
    },
    {
        id: 9,
        title: "Agreements and Contracts Drafting",
        description:
            "Professional drafting services for clear, secure and legally binding business agreements.",
        href: "/services/agreements-and-contracts-drafting",
        icon: FiEdit3,
    },
    {
        id: 10,
        title: "Litigation",
        description:
            "Tax litigation helps taxpayers challenge decisions made by tax authorities through legal procedures.",
        href: "/services/litigation",
        icon: FiFileText,
    },
    {
        id: 11,
        title: "Tax Services",
        description:
            "Professional tax assistance for individuals and businesses, including filing and compliance.",
        href: "/services/tax-services",
        icon: TbTax,
    },
    {
        id: 12,
        title: "Filer",
        description:
            "Become registered with the Federal Board of Revenue and receive the benefits available to active filers.",
        href: "/services/filer",
        icon: FiFileText,
    },
];

const OurServices = () => {
    return (
        <section className="relative overflow-hidden bg-[#F8F7F4] py-20">
            {/* Top-left decoration */}
            <div className="absolute left-0 top-0 h-40 w-40 rounded-br-full border-b border-r border-[#D7A332]/20" />

            {/* Top-right dots */}
            <div className="absolute right-10 top-10 hidden grid-cols-5 gap-2 opacity-40 lg:grid">
                {Array.from({ length: 20 }).map((_, index) => (
                    <span
                        key={index}
                        className="h-1.5 w-1.5 rounded-full bg-[#D7A332]"
                    />
                ))}
            </div>

            <div className="relative mx-auto w-11/12">
                {/* Section heading */}
                <div className="mx-auto max-w-5xl text-center">
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-0.5 w-10 bg-[#D7A332]" />

                        <p className="text-sm font-semibold uppercase tracking-widest text-[#D7A332]">
                            Our Services
                        </p>

                        <span className="h-0.5 w-10 bg-[#D7A332]" />
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                        Comprehensive Services for Tax Consulting and Business
                        Registration
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
                        We provide thorough tax consulting and smooth business
                        registration services with SECP, PSEB, and FBR to ensure
                        your success.
                    </p>
                </div>

                {/* Services cards */}
                <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.id}
                                className="group relative flex min-h-96 flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#061D3A] hover:bg-[#061D3A] hover:shadow-xl"
                            >
                                {/* Card content */}
                                <div className="relative flex flex-1 flex-col p-7">
                                    {/* Decorative dots */}
                                    <div className="absolute right-6 top-6 grid grid-cols-4 gap-2 opacity-70 transition duration-500 group-hover:opacity-100">
                                        {Array.from({ length: 12 }).map(
                                            (_, index) => (
                                                <span
                                                    key={index}
                                                    className="h-1 w-1 rounded-full bg-[#D7A332]"
                                                />
                                            )
                                        )}
                                    </div>

                                    {/* Icon */}
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-[#D7A332] p-2">
                                        <div className="flex h-full w-full items-center justify-center rounded-full bg-[#D7A332]/10 text-3xl text-[#D7A332] transition duration-500 group-hover:bg-[#D7A332] group-hover:text-[#061D3A]">
                                            <Icon />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-7 max-w-xs text-2xl font-semibold leading-tight text-[#061D3A] transition duration-500 group-hover:text-white">
                                        {service.title}
                                    </h3>

                                    <span className="mt-4 h-0.5 w-12 bg-[#D7A332]" />

                                    {/* Description */}
                                    <p className="mt-5 text-base leading-7 text-gray-600 transition duration-500 group-hover:text-white/75">
                                        {service.description}
                                    </p>

                                    {/* Decorative curved shape */}
                                    <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-[#D7A332]/10 transition duration-500 group-hover:bg-[#D7A332]/15" />
                                </div>

                                {/* Card footer */}
                                <Link
                                    href={service.href}
                                    className="relative flex items-center justify-between border-t border-gray-200 px-7 py-5 transition duration-500 group-hover:border-white/15"
                                >
                                    <span className="text-sm font-semibold uppercase tracking-widest text-[#D7A332]">
                                        Read More
                                    </span>

                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D7A332] text-lg text-[#061D3A] transition duration-300 group-hover:translate-x-1">
                                        <FiArrowRight />
                                    </span>
                                </Link>

                                {/* Bottom strip */}
                                <div className="h-2 bg-[#061D3A] transition duration-500 group-hover:bg-[#D7A332]" />
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
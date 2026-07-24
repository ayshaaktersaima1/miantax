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
            "Starting a business in Pakistan requires legal compliance, and registering your company",
        href: "/services/company-registration",
        icon: FiBriefcase,
    },
    {
        id: 2,
        title: "Partnership Registration (AOP)",
        description:
            "A Partnership, also known as an Association of Persons (AOP), is a prominent business structure",
        href: "/services/partnership-registration",
        icon: FiUsers,
    },
    {
        id: 3,
        title: "Limited Liability Partnership(LLP)",
        description:
            "A Limited Liability Partnership (LLP) is a modern business structure",
        href: "/services/limited-liability-partnership",
        icon: FiShield,
    },
    {
        id: 4,
        title: "PSEB Registration",
        description:
            "PSEB Registration is the official process through which IT companies register with the Pakistan Software Export",
        href: "/services/pseb-registration",
        icon: FiMonitor,
    },
    {
        id: 5,
        title: "Call Center Registration",
        description:
            "Call Center Registration is the official process through which businesses",
        href: "/services/call-center-registration",
        icon: MdOutlineCallMissedOutgoing,
    },
    {
        id: 6,
        title: "IT Company Registration",
        description:
            "IT Company Registration is the formal process through which businesses engaged in",
        href: "/services/it-company-registration",
        icon: FiCode,
    },
    {
        id: 7,
        title: "Trademark Registration",
        description:
            "Trademark Registration is the legal process through which a business secures exclusive",
        href: "/services/trademark-registration",
        icon: PiTrademark,
    },
    {
        id: 8,
        title: "Copyright Registration",
        description:
            "Copyright Registration is a vital legal process that protects your original",
        href: "/services/copyright-registration",
        icon: AiOutlineFileSearch,
    },
    {
        id: 9,
        title: "Agreements and Contracts Drafting",
        description:
            "Agreements and Contracts Drafting is the process of creating legally binding",
        href: "/services/agreements-and-contracts-drafting",
        icon: FiEdit3,
    },
    {
        id: 10,
        title: "Litigation",
        description:
            "Tax Litigation is the legal process through which taxpayers challenge decisions made by tax authorities regarding tax",
        href: "/services/litigation",
        icon: FiFileText,
    },
    {
        id: 11,
        title: "Tax services",
        description:
            "Tax services encompass a range of professional assistance provided to individuals and businesses",
        href: "/services/tax-services",
        icon: TbTax,
    },
    {
        id: 12,
        title: "Filer",
        description:
            "In Pakistan, the term filer refers to individuals or entities registered with the Federal Board of Revenue (FBR)",
        href: "/services/filer",
        icon: FiFileText,
    },
];

const OurServices = () => {
    return (
        <section className="bg-[#F8F7F4] py-20">
            <div className="mx-auto w-[88%]">
                <div className="mx-auto max-w-5xl text-center">
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-0.5 w-10 bg-[#D7A332]" />

                        <p className="text-sm font-semibold uppercase tracking-widest text-[#D7A332]">
                            Our Services
                        </p>

                        <span className="h-0.5 w-10 bg-[#D7A332]" />
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold leading-tight text-[#061D3A] md:text-5xl">
                        Comprehensive Services for Tax Consulting and Business
                        Registration
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
                        We provide thorough tax consulting and smooth business
                        registration services with SECP, PSEB, and FBR to ensure
                        your success.
                    </p>
                </div>

                <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.id}
                                className="group flex min-h-96 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-[#061D3A] hover:shadow-xl"
                            >
                                <div className="flex flex-1 flex-col p-7">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#D7A332]">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#D7A332]/10 text-3xl text-[#D7A332] transition duration-300 group-hover:bg-[#D7A332] group-hover:text-[#061D3A]">
                                            <Icon />
                                        </div>
                                    </div>

                                    <h3 className="mt-7 text-2xl font-semibold leading-tight text-[#061D3A] transition duration-300 group-hover:text-white">
                                        {service.title}
                                    </h3>

                                    <span className="mt-4 h-0.5 w-12 bg-[#D7A332]" />

                                    <p className="mt-5 text-base leading-7 text-gray-600 transition duration-300 group-hover:text-white/80">
                                        {service.description}
                                    </p>
                                </div>

                                <Link
                                    href={service.href}
                                    className="flex items-center justify-between border-t border-gray-200 px-7 py-5 transition duration-300 group-hover:border-white/20"
                                >
                                    <span className="text-sm font-semibold uppercase tracking-widest text-[#D7A332]">
                                        Read More
                                    </span>

                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D7A332] text-lg text-[#061D3A] transition duration-300 group-hover:translate-x-1">
                                        <FiArrowRight />
                                    </span>
                                </Link>

                                <div className="h-2 bg-[#061D3A] transition duration-300 group-hover:bg-[#D7A332]" />
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
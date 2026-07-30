import Image from "next/image";
import Link from "next/link";

import {
    FiChevronRight,
    FiMail,
    FiMapPin,
    FiPhone,
} from "react-icons/fi";

import {
    FaFacebookF,
    FaLinkedinIn,
    FaTiktok,
    FaYoutube,
} from "react-icons/fa";

const quickLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About Us",
        href: "/about-us",
    },
    {
        label: "Services",
        href: "/services",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Contact Us",
        href: "/contact-us",
    },
];

const serviceLinks = [
    {
        label: "Company Registration",
        href: "/services/company-registration",
    },
    {
        label: "Partnership Registration (AOP)",
        href: "/services/partnership-registration-aop",
    },
    {
        label: "Limited Liability Partnership (LLP)",
        href: "/services/limited-liability-partnershipllp",
    },
    {
        label: "PSEB Registration",
        href: "/services/pseb-registration",
    },
    {
        label: "Call Center Registration",
        href: "/services/call-center-registration",
    },
    {
        label: "IT Company Registration",
        href: "/services/it-company-registration",
    },
    {
        label: "Trademark Registration",
        href: "/services/trademark-registration",
    },
    {
        label: "Copyright Registration",
        href: "/services/copyright-registration",
    },
    {
        label: "Agreements and Contracts Drafting",
        href: "/services/agreements-and-contracts-drafting",
    },
    {
        label: "Litigation",
        href: "/services/litigation",
    },
    {
        label: "Tax Services",
        href: "/services/tax-services",
    },
    {
        label: "Filer",
        href: "/services/filer",
    },
];

const FooterLink = ({ href, children }) => {
    return (
        <li>
            <Link
                href={href}
                className="group flex items-center gap-2 text-base text-white/70 transition duration-300 hover:text-white"
            >
                <FiChevronRight className="shrink-0 text-[#D7A332] transition duration-300 group-hover:translate-x-1" />

                <span>{children}</span>
            </Link>
        </li>
    );
};

const FooterHeading = ({ children }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold text-white">
                {children}
            </h2>

            <div className="mt-3 h-0.5 w-10 bg-[#D7A332]" />
        </div>
    );
};

const Footer = () => {


    return (
        <footer className="bg-[#061D3A] text-white">
            <div className="mx-auto grid w-[88%] gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.2fr_1fr] lg:gap-10">
                <div className="lg:border-r lg:border-white/10 lg:pr-10">
                    <Link
                        href="/"
                        aria-label="Mian Tax Associates homepage"
                        className="inline-block"
                    >
                        <Image
                            src="/images/whiteLogoo.png"
                            alt="Mian Tax Associates"
                            width={260}
                            height={100}
                            className="h-auto w-52 object-contain"
                        />
                    </Link>

                    <div className="mt-6 h-0.5 w-12 bg-[#D7A332]" />

                    <p className="mt-6 max-w-sm text-base leading-7 text-white/65">
                        Our firm provides expert tax and business registration
                        services, including company setup, NTN registration, and
                        compliance solutions. We offer affordable, reliable
                        guidance to ensure compliance, save time, and help
                        businesses grow seamlessly in Pakistan.
                    </p>

                    <div className="mt-7 flex items-center gap-3">
                        <Link
                            href="https://www.facebook.com/people/MIAN-TAX-Associates/61575680948948/?rdid=falv9HGk5Mnudp7z&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HXkAySdrC%2F"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7A332] text-[#D7A332] transition duration-300 hover:bg-[#D7A332] hover:text-[#061D3A]"
                        >
                            <FaFacebookF />
                        </Link>

                        <Link
                            href="https://www.linkedin.com/company/mian-tax-associates/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7A332] text-[#D7A332] transition duration-300 hover:bg-[#D7A332] hover:text-[#061D3A]"
                        >
                            <FaLinkedinIn />
                        </Link>

                        <Link
                            href="https://www.tiktok.com/@miantaxassociates?_t=8sQkR4bOLOU&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7A332] text-[#D7A332] transition duration-300 hover:bg-[#D7A332] hover:text-[#061D3A]"
                        >
                            <FaTiktok />
                        </Link>

                        <Link
                            href="https://www.youtube.com/@miantaxassociates?si=R3MVVsTtPAhqi4TC"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7A332] text-[#D7A332] transition duration-300 hover:bg-[#D7A332] hover:text-[#061D3A]"
                        >
                            <FaYoutube />
                        </Link>
                    </div>
                </div>

                <div>
                    <FooterHeading>
                        Quick Links
                    </FooterHeading>

                    <ul className="mt-6 space-y-4">
                        {quickLinks.map((item) => (
                            <FooterLink
                                key={item.label}
                                href={item.href}
                            >
                                {item.label}
                            </FooterLink>
                        ))}
                    </ul>
                </div>

                <div className="lg:border-r lg:border-white/10 lg:pr-10">
                    <FooterHeading>
                        Services
                    </FooterHeading>

                    <ul className="mt-6 space-y-3">
                        {serviceLinks.map((item) => (
                            <FooterLink
                                key={item.label}
                                href={item.href}
                            >
                                {item.label}
                            </FooterLink>
                        ))}
                    </ul>
                </div>

                <div>
                    <FooterHeading>
                        Contact Us
                    </FooterHeading>

                    <div className="mt-6 space-y-6">
                        <Link
                            href="tel:03000053038"
                            className="group flex items-start gap-4"
                        >
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D7A332] text-xl text-[#D7A332] transition duration-300 group-hover:bg-[#D7A332] group-hover:text-[#061D3A]">
                                <FiPhone />
                            </span>

                            <span>
                                <span className="block font-semibold text-white">
                                    Phone
                                </span>

                                <span className="mt-1 block text-sm text-white/65">
                                    0300-0053038
                                </span>
                            </span>
                        </Link>

                        <div className="h-px bg-white/10" />

                        <Link
                            href="mailto:Miantaxassociatespvt.ltd@gmail.com"
                            className="group flex items-start gap-4"
                        >
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D7A332] text-xl text-[#D7A332] transition duration-300 group-hover:bg-[#D7A332] group-hover:text-[#061D3A]">
                                <FiMail />
                            </span>

                            <span className="min-w-0">
                                <span className="block font-semibold text-white">
                                    Email
                                </span>

                                <span className="mt-1 block break-all text-sm leading-6 text-white/65">
                                    Miantaxassociatespvt.ltd@gmail.com
                                </span>
                            </span>
                        </Link>

                        <div className="h-px bg-white/10" />

                        <div className="flex items-start gap-4">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D7A332] text-xl text-[#D7A332]">
                                <FiMapPin />
                            </span>

                            <div>
                                <p className="font-semibold text-white">
                                    Address
                                </p>

                                <p className="mt-1 text-sm leading-6 text-white/65">
                                    Suit No. 202 2nd Floor Dewan Centre 5 Temple
                                    Road Lahore
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="mx-auto flex w-[88%] flex-col items-center justify-between gap-4 py-6 text-center md:flex-row md:text-left">
                    <p className="text-sm text-white/55">
                        © 2026 <span className="font-medium text-[#D7A332]">
                            Mian Tax Associates.
                        </span> All Rights Reserved.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-white/55">
                        <Link
                            href="/privacy-policy"
                            className="transition hover:text-[#D7A332]"
                        >
                            Privacy Policy
                        </Link>

                        <span className="h-4 w-px bg-[#D7A332]/50" />

                        <Link
                            href="/terms-and-conditions"
                            className="transition hover:text-[#D7A332]"
                        >
                            Terms & Conditions
                        </Link>

                        <span className="h-4 w-px bg-[#D7A332]/50" />

                        <Link
                            href="/sitemap"
                            className="transition hover:text-[#D7A332]"
                        >
                            Sitemap
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
    FiChevronDown,
    FiChevronRight,
    FiMenu,
    FiPhone,
    FiX,
} from "react-icons/fi";

const serviceItems = [
    {
        label: "Company Registration",
        href: "/services/company-registration",
        submenu: [
            {
                label: "Private Limited",
                href: "/services/private-limited",
            },
            {
                label: "SECP Compliances",
                href: "/services/secp-compliances",
            },
            {
                label: "Single Member Company (SMC)",
                href: "/services/single-member-company-smc",
            },
            {
                label: "Sole Proprietorship",
                href: "/services/sole-proprietorship",
            },
        ],
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
        submenu: [
            {
                label: "Income Tax and Sales Tax Appeals",
                href: "/services/income-tax-and-sales-tax-appeals",
            },
            {
                label: "Income Tax and Sales Tax Notices",
                href: "/services/income-tax-and-sales-tax-notices",
            },
            {
                label: "Income Tax and Sales Tax Audit",
                href: "/services/income-tax-and-sales-tax-audit",
            },
            {
                label: "Income Tax and Sales Tax Refund",
                href: "/services/income-tax-and-sales-tax-refund",
            },
        ],
    },
    {
        label: "Tax Services",
        href: "/services/tax-services",
        submenu: [
            {
                label: "NTN and Business Registration",
                href: "/services/ntn-and-business-registration",
            },
            {
                label: "Income Tax Return Filing",
                href: "/services/income-tax-return-filling",
            },
            {
                label: "Sales Tax Registration and Return Filing",
                href: "/services/sales-tax-registration-and-return-filling",
            },
            {
                label: "Withholding Statement Filing",
                href: "/services/withholding-statement-filling",
            },
            {
                label: "Filer",
                href: "/services/filer",
            },
        ],
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [activeDesktopSubmenu, setActiveDesktopSubmenu] = useState(null);
    const [desktopSubmenuTop, setDesktopSubmenuTop] = useState(0);

    const desktopServicesRef = useRef(null);

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
        setActiveDesktopSubmenu(null);
    };

    const handleDesktopSubmenu = (event, service) => {
        if (!service.submenu || !desktopServicesRef.current) {
            setActiveDesktopSubmenu(null);
            return;
        }

        const dropdownRect =
            desktopServicesRef.current.getBoundingClientRect();

        const itemRect = event.currentTarget.getBoundingClientRect();

        const estimatedSubmenuHeight =
            service.submenu.length * 48 + 16;

        const availableHeight =
            window.innerHeight - dropdownRect.top - 8;

        const maximumTop = Math.max(
            0,
            availableHeight - estimatedSubmenuHeight
        );

        const itemTop = itemRect.top - dropdownRect.top;

        setDesktopSubmenuTop(
            Math.max(0, Math.min(itemTop, maximumTop))
        );

        setActiveDesktopSubmenu(service);
    };

    return (
        <nav className="sticky top-0 z-50 mx-auto -mt-12 w-[96%] rounded-3xl bg-white shadow-lg">
            <div className="px-4 lg:px-6">
                <div className="flex h-24 items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/images/Logo.png"
                            alt="Mian Tax Associates"
                            width={220}
                            height={80}
                            priority
                            className="h-auto w-40 object-contain lg:w-52"
                        />
                    </Link>

                    <div className="hidden items-center gap-10 md:flex">
                        <Link
                            href="/about-us"
                            className="font-medium text-[#061D3A] transition hover:text-[#D7A332]"
                        >
                            About Us
                        </Link>

                        <div className="group/services relative flex h-24 items-center">
                            <Link
                                href="/services"
                                className="flex items-center gap-1 font-medium text-[#061D3A] transition hover:text-[#D7A332]"
                            >
                                Services

                                <FiChevronDown className="transition-transform duration-500 ease-out group-hover/services:rotate-180" />
                            </Link>

                            <div
                                onMouseLeave={() =>
                                    setActiveDesktopSubmenu(null)
                                }
                                className="invisible absolute left-1/2 top-full -translate-x-1/2 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover/services:visible group-hover/services:translate-y-0 group-hover/services:opacity-100"
                            >
                                <div
                                    ref={desktopServicesRef}
                                    className="max-h-[calc(100vh-110px)] w-82.5 overflow-y-auto overscroll-contain rounded-xl bg-[#061D3A] p-2 shadow-xl"
                                >
                                    {serviceItems.map((service) => (
                                        <div
                                            key={service.label}
                                            onMouseEnter={(event) =>
                                                handleDesktopSubmenu(
                                                    event,
                                                    service
                                                )
                                            }
                                        >
                                            <Link
                                                href={service.href}
                                                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#061D3A]"
                                            >
                                                {service.label}

                                                {service.submenu && (
                                                    <FiChevronRight className="shrink-0 text-[#D7A332]" />
                                                )}
                                            </Link>
                                        </div>
                                    ))}
                                </div>

                                {activeDesktopSubmenu?.submenu && (
                                    <div
                                        style={{
                                            top: `${desktopSubmenuTop}px`,
                                        }}
                                        className="absolute left-full ml-1 max-h-[calc(100vh-110px)] w-77.5 overflow-y-auto overscroll-contain rounded-xl bg-[#061D3A] p-2 shadow-xl"
                                    >
                                        {activeDesktopSubmenu.submenu.map(
                                            (subItem) => (
                                                <Link
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="block rounded-lg px-4 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-[#061D3A]"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            )
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        <Link
                            href="/blog"
                            className="font-medium text-[#061D3A] transition hover:text-[#D7A332]"
                        >
                            Blog
                        </Link>

                        <Link
                            href="/contact-us"
                            className="font-medium text-[#061D3A] transition hover:text-[#D7A332]"
                        >
                            Contact us
                        </Link>
                    </div>

                    <Link
                        href="tel:03000053038"
                        className="hidden items-center gap-3 lg:flex"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D7A332] text-xl text-[#D7A332]">
                            <FiPhone />
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">
                                Call Us Anytime
                            </p>

                            <p className="text-lg font-semibold text-[#061D3A]">
                                0300-0053038
                            </p>
                        </div>
                    </Link>

                    <button
                        type="button"
                        aria-label="Toggle menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-2xl text-[#061D3A] md:hidden"
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="max-h-[calc(100vh-96px)] overflow-y-auto rounded-b-3xl border-t border-gray-200 bg-white px-5 pb-6 md:hidden">
                    <Link
                        href="/about"
                        onClick={closeMenu}
                        className="block border-b border-gray-100 py-4 font-medium text-[#061D3A]"
                    >
                        About Us
                    </Link>

                    <div className="border-b border-gray-100">
                        <button
                            type="button"
                            onClick={() =>
                                setIsServicesOpen(!isServicesOpen)
                            }
                            className="flex w-full items-center justify-between py-4 font-medium text-[#061D3A]"
                        >
                            Services

                            <FiChevronDown
                                className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {isServicesOpen && (
                            <div className="mb-3 max-h-[60vh] overflow-y-auto overscroll-contain rounded-xl bg-[#061D3A] p-2">
                                {serviceItems.map((service) => (
                                    <Link
                                        key={service.label}
                                        href={service.href}
                                        onClick={closeMenu}
                                        className="block rounded-lg px-4 py-3 text-sm text-white transition hover:bg-white hover:text-[#061D3A]"
                                    >
                                        {service.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        href="/blog"
                        onClick={closeMenu}
                        className="block border-b border-gray-100 py-4 font-medium text-[#061D3A]"
                    >
                        Blog
                    </Link>

                    <Link
                        href="/contact"
                        onClick={closeMenu}
                        className="block border-b border-gray-100 py-4 font-medium text-[#061D3A]"
                    >
                        Contact us
                    </Link>

                    <Link
                        href="tel:03000053038"
                        className="mt-5 flex items-center gap-3 rounded-xl bg-[#061D3A] p-4 text-white"
                    >
                        <FiPhone className="text-xl text-[#D7A332]" />

                        <div>
                            <p className="text-xs text-gray-300">
                                Call Us Anytime
                            </p>

                            <p className="font-semibold">
                                0300-0053038
                            </p>
                        </div>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
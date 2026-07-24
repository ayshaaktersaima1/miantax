"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoCallOutline } from "react-icons/io5";
import {
    IoIosArrowDown,
    IoIosArrowForward,
    IoMdClose,
    IoMdMenu,
} from "react-icons/io";

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
    const pathname = usePathname();

    const [activeDesktopSubmenu, setActiveDesktopSubmenu] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
        setOpenMobileSubmenu(null);
    };

    const handleMobileServiceClick = (event, service) => {
        if (!service.submenu) {
            closeMobileMenu();
            return;
        }

        if (openMobileSubmenu !== service.label) {
            event.preventDefault();
            setOpenMobileSubmenu(service.label);
            return;
        }

        closeMobileMenu();
    };

    const isServiceActive = (service) => {
        return (
            pathname === service.href ||
            service.submenu?.some(
                (subItem) => pathname === subItem.href
            )
        );
    };

    const navLinkClass = (href) => {
        return `text-base font-medium transition hover:text-[#D7A332] ${pathname === href
                ? "text-[#D7A332]"
                : "text-[#061D3A]"
            }`;
    };

    return (
        <nav className="sticky top-0 z-50 mx-auto -mt-12 w-full rounded-3xl bg-white shadow-lg lg:w-[96%]">
            <div className="mx-auto w-[88vw]">
                <div className="flex h-20 items-center justify-between lg:h-24">
                    <Link href="/" onClick={closeMobileMenu}>
                        <Image
                            src="/images/Logo.png"
                            alt="Mian Tax Associates"
                            width={220}
                            height={80}
                            priority
                            className="h-auto w-40 object-contain lg:w-52"
                        />
                    </Link>

                    <div className="hidden items-center gap-6 lg:flex">
                        <Link
                            href="/"
                            className={navLinkClass("/")}
                        >
                            Home
                        </Link>

                        <Link
                            href="/about-us"
                            className={navLinkClass("/about-us")}
                        >
                            About Us
                        </Link>

                        <div className="group/services relative">
                            <Link
                                href="/services"
                                className={`flex items-center gap-1 text-base font-medium transition hover:text-[#D7A332] ${pathname === "/services"
                                        ? "text-[#D7A332]"
                                        : "text-[#061D3A]"
                                    }`}
                            >
                                Services

                                <IoIosArrowDown className="transition-transform group-hover/services:rotate-180" />
                            </Link>

                            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition group-hover/services:visible group-hover/services:opacity-100">
                                <div
                                    className="relative"
                                    onMouseLeave={() =>
                                        setActiveDesktopSubmenu(null)
                                    }
                                >
                                    <div className="w-80 rounded-xl bg-[#061D3A] p-2 shadow-lg">
                                        <div className="max-h-[70vh] overflow-y-auto">
                                            {serviceItems.map((service) =>
                                                service.submenu ? (
                                                    <Link
                                                        key={service.href}
                                                        href={service.href}
                                                        onMouseEnter={() =>
                                                            setActiveDesktopSubmenu(
                                                                service
                                                            )
                                                        }
                                                        className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition ${isServiceActive(
                                                            service
                                                        )
                                                                ? "bg-white text-[#061D3A]"
                                                                : "text-white hover:bg-white hover:text-[#061D3A]"
                                                            }`}
                                                    >
                                                        <span>
                                                            {service.label}
                                                        </span>

                                                        <IoIosArrowForward />
                                                    </Link>
                                                ) : (
                                                    <Link
                                                        key={service.href}
                                                        href={service.href}
                                                        onMouseEnter={() =>
                                                            setActiveDesktopSubmenu(
                                                                null
                                                            )
                                                        }
                                                        className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${pathname ===
                                                                service.href
                                                                ? "bg-white text-[#061D3A]"
                                                                : "text-white hover:bg-white hover:text-[#061D3A]"
                                                            }`}
                                                    >
                                                        {service.label}
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {activeDesktopSubmenu && (
                                        <div
                                            className={`absolute left-full z-50 w-80 pl-2 ${activeDesktopSubmenu.label ===
                                                    "Litigation" ||
                                                    activeDesktopSubmenu.label ===
                                                    "Tax Services"
                                                    ? "bottom-0"
                                                    : "top-0"
                                                }`}
                                        >
                                            <div className="w-80 rounded-xl bg-[#061D3A] p-2 shadow-lg">
                                                {activeDesktopSubmenu.submenu.map(
                                                    (subItem) => (
                                                        <Link
                                                            key={subItem.href}
                                                            href={subItem.href}
                                                            className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${pathname ===
                                                                    subItem.href
                                                                    ? "bg-white text-[#061D3A]"
                                                                    : "text-white hover:bg-white hover:text-[#061D3A]"
                                                                }`}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/blog"
                            className={navLinkClass("/blog")}
                        >
                            Blog
                        </Link>

                        <Link
                            href="/contact-us"
                            className={navLinkClass("/contact-us")}
                        >
                            Contact Us
                        </Link>
                    </div>

                    <Link
                        href="tel:03000053038"
                        className="hidden items-center gap-2 text-[#061D3A] lg:flex"
                    >
                        <IoCallOutline
                            size={30}
                            className="text-[#D7A332]"
                        />

                        <p className="font-semibold">
                            0300-0053038
                        </p>
                    </Link>

                    <button
                        type="button"
                        aria-label="Toggle navigation menu"
                        onClick={() =>
                            setIsMobileMenuOpen(
                                (current) => !current
                            )
                        }
                        className="text-3xl text-[#061D3A] lg:hidden"
                    >
                        {isMobileMenuOpen ? (
                            <IoMdClose />
                        ) : (
                            <IoMdMenu />
                        )}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="max-h-[80vh] overflow-y-auto border-t border-gray-200 pb-5 lg:hidden">
                        <Link
                            href="/"
                            onClick={closeMobileMenu}
                            className="block border-b border-gray-100 py-4 text-base font-medium text-[#061D3A]"
                        >
                            Home
                        </Link>

                        <Link
                            href="/about-us"
                            onClick={closeMobileMenu}
                            className="block border-b border-gray-100 py-4 text-base font-medium text-[#061D3A]"
                        >
                            About Us
                        </Link>

                        <div className="border-b border-gray-100">
                            <button
                                type="button"
                                onClick={() =>
                                    setIsMobileServicesOpen(
                                        (current) => !current
                                    )
                                }
                                className="flex w-full items-center justify-between py-4 text-base font-medium text-[#061D3A]"
                            >
                                Services

                                <IoIosArrowDown
                                    className={`transition-transform ${isMobileServicesOpen
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                />
                            </button>

                            {isMobileServicesOpen && (
                                <div className="mb-4 rounded-xl bg-[#061D3A] p-2">
                                    {serviceItems.map((service) => {
                                        const submenuOpen =
                                            openMobileSubmenu ===
                                            service.label;

                                        return (
                                            <div key={service.href}>
                                                <Link
                                                    href={service.href}
                                                    onClick={(event) =>
                                                        handleMobileServiceClick(
                                                            event,
                                                            service
                                                        )
                                                    }
                                                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium ${submenuOpen ||
                                                            isServiceActive(
                                                                service
                                                            )
                                                            ? "bg-white text-[#061D3A]"
                                                            : "text-white"
                                                        }`}
                                                >
                                                    <span>
                                                        {service.label}
                                                    </span>

                                                    {service.submenu && (
                                                        <IoIosArrowForward
                                                            className={`transition-transform ${submenuOpen
                                                                    ? "rotate-90"
                                                                    : ""
                                                                }`}
                                                        />
                                                    )}
                                                </Link>

                                                {service.submenu &&
                                                    submenuOpen && (
                                                        <div className="ml-4 border-l border-white/30 pl-2">
                                                            {service.submenu.map(
                                                                (subItem) => (
                                                                    <Link
                                                                        key={
                                                                            subItem.href
                                                                        }
                                                                        href={
                                                                            subItem.href
                                                                        }
                                                                        onClick={
                                                                            closeMobileMenu
                                                                        }
                                                                        className={`block rounded-lg px-4 py-3 text-sm font-medium ${pathname ===
                                                                                subItem.href
                                                                                ? "bg-white text-[#061D3A]"
                                                                                : "text-white"
                                                                            }`}
                                                                    >
                                                                        {
                                                                            subItem.label
                                                                        }
                                                                    </Link>
                                                                )
                                                            )}
                                                        </div>
                                                    )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/blog"
                            onClick={closeMobileMenu}
                            className="block border-b border-gray-100 py-4 text-base font-medium text-[#061D3A]"
                        >
                            Blog
                        </Link>

                        <Link
                            href="/contact-us"
                            onClick={closeMobileMenu}
                            className="block border-b border-gray-100 py-4 text-base font-medium text-[#061D3A]"
                        >
                            Contact Us
                        </Link>

                        <Link
                            href="tel:03000053038"
                            onClick={closeMobileMenu}
                            className="mt-4 flex items-center gap-2 font-semibold text-[#061D3A]"
                        >
                            <IoCallOutline
                                size={26}
                                className="text-[#D7A332]"
                            />

                            0300-0053038
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
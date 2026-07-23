import Link from "next/link";

import {
    FiMail,
    FiMapPin,
    FiPhone,
} from "react-icons/fi";

const contactItems = [
    {
        id: 1,
        title: "Call Us",
        value: "0300-0053038",
        href: "tel:03000053038",
        icon: FiPhone,
    },
    {
        id: 2,
        title: "Email Us",
        value: "Miantaxassociatespvt.ltd@gmail.com",
        href: "mailto:Miantaxassociatespvt.ltd@gmail.com",
        icon: FiMail,
    },
    {
        id: 3,
        title: "Office Address",
        value: "Suit No. 202 2nd Floor Dewan Centre 5 Temple Road Lahore",
        href: null,
        icon: FiMapPin,
    },
];

const ContactInfo = () => {
    return (
        <div className="flex h-full flex-col justify-center lg:pl-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#D7A332]">
                Contact Us
            </p>

            <div className="mt-3 h-0.5 w-12 bg-[#D7A332]" />

            <h2 className="mt-6 text-4xl font-semibold text-[#061D3A] md:text-5xl">
                Get In Touch!
            </h2>

            <div className="mt-9">
                {contactItems.map((item, index) => {
                    const Icon = item.icon;

                    const content = (
                        <div className="group flex items-start gap-5">
                            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#D7A332] bg-[#061D3A] text-2xl text-[#D7A332] shadow-md transition duration-300 group-hover:bg-[#D7A332] group-hover:text-[#061D3A]">
                                <Icon />
                            </span>

                            <div className="pt-1">
                                <h3 className="text-xl font-semibold text-[#061D3A]">
                                    {item.title}
                                </h3>

                                <p className="mt-2 break-all text-sm leading-6 text-gray-600 md:text-base">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    );

                    return (
                        <div key={item.id}>
                            {item.href ? (
                                <Link href={item.href}>
                                    {content}
                                </Link>
                            ) : (
                                content
                            )}

                            {index !== contactItems.length - 1 && (
                                <div className="my-6 h-px bg-gray-200" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ContactInfo;
"use client";

import {
    Button,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";

import { FiArrowRight } from "react-icons/fi";

const services = [
    "Company Registration",
    "Partnership Registration (AOP)",
    "Limited Liability Partnership (LLP)",
    "PSEB Registration",
    "Call Center Registration",
    "IT Company Registration",
    "Trademark Registration",
    "Copyright Registration",
    "Agreements and Contracts Drafting",
    "Litigation",
    "Tax Services",
];

const ContactForm = () => {
    const inputClassName =
        "h-12 w-full rounded-lg border border-white/20 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#D7A332]";

    return (
        <div className="rounded-3xl bg-[#061D3A] p-6 text-white shadow-xl md:p-8 lg:p-10">
            <h2 className="text-2xl font-semibold md:text-3xl">
                Send Us a Message
            </h2>

            <div className="mt-3 h-0.5 w-12 bg-[#D7A332]" />

            <p className="mt-4 text-sm leading-6 text-white/65">
                Have a question or need assistance? Fill out the form and
                we&apos;ll get back to you shortly.
            </p>

            <form className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                    <TextField
                        name="firstName"
                        type="text"
                        className="w-full"
                    >
                        <Label className="mb-2 block text-sm text-white/90">
                            First Name
                        </Label>

                        <Input
                            placeholder="Enter your first name"
                            className={inputClassName}
                        />
                    </TextField>

                    <TextField
                        name="lastName"
                        type="text"
                        className="w-full"
                    >
                        <Label className="mb-2 block text-sm text-white/90">
                            Last Name
                        </Label>

                        <Input
                            placeholder="Enter your last name"
                            className={inputClassName}
                        />
                    </TextField>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                    <TextField
                        name="email"
                        type="email"
                        className="w-full"
                    >
                        <Label className="mb-2 block text-sm text-white/90">
                            Email
                        </Label>

                        <Input
                            placeholder="Enter your email"
                            className={inputClassName}
                        />
                    </TextField>

                    <div>
                        <label
                            htmlFor="service"
                            className="mb-2 block text-sm text-white/90"
                        >
                            Services
                        </label>

                        <select
                            id="service"
                            name="service"
                            defaultValue=""
                            className="h-12 w-full rounded-lg border border-white/20 bg-[#0B294B] px-4 text-sm text-white outline-none transition focus:border-[#D7A332]"
                        >
                            <option value="" disabled>
                                Select a service
                            </option>

                            {services.map((service) => (
                                <option
                                    key={service}
                                    value={service}
                                    className="bg-[#061D3A] text-white"
                                >
                                    {service}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <TextField
                    name="phone"
                    type="tel"
                    className="w-full"
                >
                    <Label className="mb-2 block text-sm text-white/90">
                        Number
                    </Label>

                    <Input
                        placeholder="Enter your phone number"
                        className={inputClassName}
                    />
                </TextField>

                <TextField
                    name="message"
                    className="w-full"
                >
                    <Label className="mb-2 block text-sm text-white/90">
                        Message
                    </Label>

                    <TextArea
                        rows={5}
                        placeholder="Write your message..."
                        className="w-full resize-none rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#D7A332]"
                    />
                </TextField>

                <Button
                    type="submit"
                    className="group flex h-14 w-full items-center justify-center gap-4 rounded-lg bg-[#D7A332] font-semibold text-[#061D3A] transition duration-300 hover:bg-white"
                >
                    Send Message

                    <FiArrowRight className="text-lg transition duration-300 group-hover:translate-x-1" />
                </Button>
            </form>
        </div>
    );
};

export default ContactForm;
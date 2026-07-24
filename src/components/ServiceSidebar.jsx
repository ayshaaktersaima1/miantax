"use client";

import {
    Button,
    Input,
    Label,
    TextArea,
    TextField,
} from "@heroui/react";

import { FiSend } from "react-icons/fi";

const ServiceSidebar = () => {
    const inputClassName =
        "w-full rounded-lg border border-white/20 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#D7A332]";

    return (
        <aside className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl bg-[url('/images/tax-cta.webp')] bg-cover bg-center px-8 py-12 text-center text-white shadow-lg">
                <div className="absolute inset-0 bg-black/75" />

                <div className="relative z-10">
                    <p className="text-2xl font-semibold leading-tight md:text-3xl">
                        Having trouble managing your taxes?
                    </p>

                    <div className="mt-7 flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-[#D7A332]" />

                        <p className="text-sm font-semibold uppercase tracking-widest text-[#D7A332]">
                            Contact Us Now
                        </p>

                        <span className="h-px w-8 bg-[#D7A332]" />
                    </div>
                </div>
            </div>

            <div className="rounded-3xl bg-[#061D3A] p-6 text-white shadow-lg md:p-7">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#D7A332]">
                    Request Assistance
                </p>

                <h2 className="mt-3 text-2xl font-semibold">
                    Get a Free Quote
                </h2>

                <div className="mt-3 h-0.5 w-10 bg-[#D7A332]" />

                <form className="mt-7 space-y-5">
                    <TextField
                        name="name"
                        type="text"
                        className="w-full"
                    >
                        <Label className="mb-2 block text-sm text-white/80">
                            Name
                        </Label>

                        <Input
                            placeholder="Enter your name"
                            className={`h-12 ${inputClassName}`}
                        />
                    </TextField>

                    <TextField
                        name="email"
                        type="email"
                        className="w-full"
                    >
                        <Label className="mb-2 block text-sm text-white/80">
                            Email
                        </Label>

                        <Input
                            placeholder="Enter your email"
                            className={`h-12 ${inputClassName}`}
                        />
                    </TextField>

                    <TextField
                        name="message"
                        className="w-full"
                    >
                        <Label className="mb-2 block text-sm text-white/80">
                            Message
                        </Label>

                        <TextArea
                            rows={5}
                            placeholder="Write your message..."
                            className={`resize-none py-3 ${inputClassName}`}
                        />
                    </TextField>

                    <Button
                        type="submit"
                        className="group flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-[#D7A332] font-semibold text-[#061D3A] hover:bg-white"
                    >
                        Send Message

                        <FiSend className="group-hover:translate-x-1" />
                    </Button>
                </form>
            </div>


        </aside>
    );
};

export default ServiceSidebar;
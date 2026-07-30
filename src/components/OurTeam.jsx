import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";

const teamMembers = [
    {
        id: 1,
        name: "Muhammad Usman",
        designation: "Founder & Senior Tax Consultant",
        description:
            "Provides professional guidance in taxation, company registration and business compliance matters.",
        image: "/images/c1.webp",
    },
    {
        id: 2,
        name: "Ahmed Raza",
        designation: "Corporate Legal Advisor",
        description:
            "Handles corporate legal matters, agreements, contracts and business registration services.",
        image: "/images/c1.webp",
    },
    {
        id: 3,
        name: "Ali Hassan",
        designation: "Tax Consultant",
        description:
            "Assists individuals and businesses with tax filing, audits and FBR compliance.",
        image: "/images/c1.webp",
    },
    {
        id: 4,
        name: "Ayesha Khan",
        designation: "Business Registration Specialist",
        description:
            "Supports clients with company registration, trademarks and regulatory documentation.",
        image: "/images/c1.webp",
    },
];

const OurTeam = () => {
    return (
        <section className="bg-[#F8F7F4] py-16 md:py-20">
            <div className="mx-auto w-[88%]">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-0.5 w-10 bg-[#D7A332]" />

                        <p className="text-sm font-semibold uppercase tracking-widest text-[#D7A332]">
                            Our Team
                        </p>

                        <span className="h-0.5 w-10 bg-[#D7A332]" />
                    </div>

                    <h2 className="mt-5 text-3xl font-semibold text-[#061D3A] md:text-5xl">
                        Meet Our Professional Team
                    </h2>

                    <p className="mt-5 text-base leading-7 text-[#243044]">
                        Meet the experienced professionals dedicated to providing
                        reliable tax, legal and business consultancy services.
                    </p>
                </div>

                <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teamMembers.map((member) => (
                        <article
                            key={member.id}
                            className="group rounded-3xl border border-gray-200 bg-white px-6 py-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="relative mx-auto h-40 w-40">
                                <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-white shadow-lg">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#061D3A] text-sm text-white shadow-md">
                                    <IoMdCheckmark />
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="text-2xl font-semibold text-[#061D3A]">
                                    {member.name}
                                </h3>

                                <p className="mt-2 text-sm font-semibold text-[#D7A332]">
                                    {member.designation}
                                </p>

                                <div className="mx-auto mt-5 h-px w-full bg-gray-200" />

                                <p className="mt-5 text-base leading-7 text-[#243044]">
                                    {member.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
import Image from "next/image";

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

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {teamMembers.map((member) => (
                        <article
                            key={member.id}
                            className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="relative aspect-square">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-[#061D3A]">
                                    {member.name}
                                </h3>

                                <p className="mt-1 text-sm font-semibold text-[#D7A332]">
                                    {member.designation}
                                </p>

                                <p className="mt-4 text-base leading-7 text-[#243044]">
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
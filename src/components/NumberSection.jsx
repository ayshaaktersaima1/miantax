import {
    FiAward,
    FiBriefcase,
    FiUsers,
} from "react-icons/fi";

const stats = [
    {
        id: 1,
        icon: <FiAward />,
        number: "7+",
        label: "Years Experience",
    },
    {
        id: 2,
        icon: <FiUsers />,
        number: "1,300+",
        label: "Happy Client",
    },
    {
        id: 3,
        icon: <FiBriefcase />,
        number: "2,300+",
        label: "Case Completed",
    },
];

const NumbersSection = () => {
    return (
        <section className="relative overflow-hidden bg-[url('/images/Number.webp')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-black/75" />

            <div className="relative z-10 mx-auto w-[88%] py-12 lg:py-16">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_2fr] lg:items-center">
                    <div className="flex flex-col items-center text-center text-white lg:items-start lg:text-left">
                        <div className="mb-3 flex items-center gap-3">
                            <span className="h-0.5 w-8 bg-[#D7A332]" />

                            <p className="text-xs font-medium uppercase tracking-widest text-[#D7A332]">
                                Our Company In
                            </p>

                            <span className="h-0.5 w-8 bg-[#D7A332] lg:hidden" />
                        </div>

                        <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                            Numbers
                        </h2>

                        <p className="mt-3 max-w-xs text-base leading-7 text-white/90">
                            Delivering measurable results with commitment,
                            expertise, and trust built over the years.
                        </p>
                    </div>

                    <div className="grid w-full gap-8 md:grid-cols-3 lg:border-l-2 lg:border-[#D7A332] lg:pl-12">
                        {stats.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col items-center text-center text-white"
                            >
                                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#D7A332] text-xl text-[#D7A332]">
                                    {item.icon}
                                </div>

                                <h3 className="text-3xl font-semibold md:text-4xl">
                                    {item.number}
                                </h3>

                                <p className="mt-2 text-base font-medium text-white">
                                    {item.label}
                                </p>

                                <span className="mt-3 h-0.5 w-8 bg-[#D7A332]" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NumbersSection;
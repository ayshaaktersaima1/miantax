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
        <section className="relative overflow-hidden bg-[url('/images/AboutSec')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-[#061D3A]/75" />

            <div className="relative z-10 mx-auto w-[90%] py-12 lg:py-16">
                <div className="grid gap-10 lg:grid-cols-[1.1fr_2.4fr] lg:items-center">
                    {/* Left content */}
                    <div className="text-white">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-0.5 w-8 bg-[#D7A332]" />

                            <p className="text-xs font-medium uppercase tracking-widest text-[#D7A332]">
                                Our Company In
                            </p>
                        </div>

                        <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                            Numbers
                        </h2>

                        <p className="mt-4 max-w-xs text-sm leading-7 text-white/80">
                            Delivering measurable results with commitment, expertise, and
                            trust built over the years.
                        </p>
                    </div>

                    {/* Right stats */}
                    <div className="grid gap-8 md:grid-cols-3 md:gap-0">
                        {stats.map((item, index) => (
                            <div
                                key={item.id}
                                className={`flex flex-col items-center text-center text-white ${index !== stats.length - 1
                                    ? "md:border-r md:border-white/20"
                                    : ""
                                    }`}
                            >
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#D7A332] text-xl text-[#D7A332]">
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
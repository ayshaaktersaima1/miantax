import { FiFileText } from "react-icons/fi";

const HelpCard = ({ services }) => {
    return (
        <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
                <article
                    key={service.title}
                    className="rounded-2xl border border-gray-200 bg-[#F8F7F4] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#D7A332] hover:bg-white hover:shadow-md"
                >
                    <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D7A332]/15 text-[#D7A332]">
                            <FiFileText />
                        </span>

                        <h3 className="text-lg font-semibold text-[#061D3A]">
                            {service.title}
                        </h3>
                    </div>

                    <p className="mt-4 text-base leading-7 text-[#243044]">
                        {service.description}
                    </p>
                </article>
            ))}
        </div>
    );
};

export default HelpCard;
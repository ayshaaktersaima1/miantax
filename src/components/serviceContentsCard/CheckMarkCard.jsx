import { FiCheck } from "react-icons/fi";

const CheckMarkCard = ({ items }) => {
    return (
        <div className="grid gap-5 md:grid-cols-2">
            {items.map((item) => (
                <article
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#D7A332] hover:shadow-md"
                >
                    <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D7A332]/15 text-[#D7A332]">
                            <FiCheck />
                        </span>

                        <h3 className="text-lg font-semibold text-[#061D3A]">
                            {item.title}
                        </h3>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-[#455468]">
                        {item.description}
                    </p>
                </article>
            ))}
        </div>
    );
};


export default CheckMarkCard;
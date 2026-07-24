import { FiCheck } from "react-icons/fi";

const CheckNumCard = ({ benefit, index }) => {
    return (
        <article className="group rounded-2xl border border-gray-200 bg-[#F8F7F4] p-5 transition duration-300 hover:border-[#D7A332] hover:bg-white hover:shadow-md md:p-6">
            <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#061D3A] text-[#D7A332]">
                    <FiCheck />
                </span>

                <div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold text-[#D7A332]">
                            {index + 1}
                        </span>

                        <h3 className="text-xl font-semibold text-[#061D3A]">
                            {benefit.title}
                        </h3>
                    </div>

                    <p className="mt-3 text-base leading-7 text-[#243044]">
                        {benefit.description}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default CheckNumCard;
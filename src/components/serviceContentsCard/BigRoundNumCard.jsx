import { FiFileText } from "react-icons/fi";

const BigRoundNumCard = ({ step, index }) => {
    return (
        <div className="rounded-2xl border border-gray-200 p-5">
            <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#061D3A] text-sm font-semibold text-[#D7A332]">
                    {index + 1}
                </span>

                <div>
                    <h3 className="text-lg font-semibold text-[#061D3A]">
                        {step.title}
                    </h3>

                    <p className="mt-2 text-base leading-7 text-[#243044] md:text-base">
                        {step.description}
                    </p>

                    {step.points?.length > 0 && (
                        <div className="mt-4 space-y-3">
                            {step.points.map((point) => (
                                <div
                                    key={point}
                                    className="flex items-start gap-3"
                                >
                                    <FiFileText className="mt-1 shrink-0 text-[#D7A332]" />

                                    <p className="text-sm leading-6 text-[#243044]">
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BigRoundNumCard;
import { FiFileText } from "react-icons/fi";

const BigRoundNumCard = ({ step, index }) => {
    return (
        <div className="rounded-2xl border border-gray-200 p-5">
            <div className="grid grid-cols-[40px_1fr] gap-x-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#061D3A] text-sm font-semibold text-[#D7A332]">
                    {index + 1}
                </span>

                <h3 className="text-lg font-semibold leading-10 text-[#061D3A]">
                    {step.title}
                </h3>

                <div className="col-span-2 mt-0 md:col-span-1 md:col-start-2">
                    <p className="text-base leading-7 text-[#243044]">
                        {step.description}
                    </p>

                    {step.points?.length > 0 && (
                        <div className="mt-3 space-y-3">
                            {step.points.map((point) => (
                                <div
                                    key={point}
                                    className="flex items-start gap-3"
                                >
                                    <FiFileText className="mt-1 shrink-0 text-[#D7A332]" />

                                    <p className="text-base leading-7 text-[#243044]">
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
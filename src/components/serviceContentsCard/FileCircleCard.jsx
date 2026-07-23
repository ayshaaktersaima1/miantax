import { FiFileText } from "react-icons/fi";

const FileCircleCard = ({ requirement, index }) => {
    return (
        <article className="rounded-2xl border border-gray-200 bg-[#F8F7F4] p-5 transition duration-300 hover:border-[#D7A332] hover:bg-white hover:shadow-md md:p-6">
            <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#061D3A] text-[#D7A332]">
                    <FiFileText />
                </span>

                <div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold tracking-widest text-[#D7A332]">
                            {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3 className="text-xl font-semibold text-[#061D3A]">
                            {requirement.title}
                        </h3>
                    </div>

                    <p className="mt-3 text-sm leading-7 text-[#455468] md:text-base">
                        {requirement.description}
                    </p>
                </div>
            </div>
        </article>
    );
};

export default FileCircleCard;
import { FiFileText } from "react-icons/fi";

const FileCircleCard = ({ requirement, index }) => {
    return (
        <article className="rounded-2xl border border-gray-200 bg-[#F8F7F4] p-5 transition duration-300 hover:border-[#D7A332] hover:bg-white hover:shadow-md md:p-6">
            <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#061D3A] text-[#D7A332]">
                    <FiFileText />
                </span>

                <span className="text-sm font-semibold text-[#D7A332]">
                    {index + 1}.
                </span>

                <h3 className="text-xl font-semibold text-[#061D3A]">
                    {requirement.title}
                </h3>
            </div>

            <p className="mt-4 text-base leading-7 text-[#243044]">
                {requirement.description}
            </p>
        </article>
    );
};

export default FileCircleCard;
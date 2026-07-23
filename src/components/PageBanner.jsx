import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const PageBanner = ({ title, backgroundImage }) => {
    return (
        <section
            className="relative h-96 overflow-hidden bg-cover bg-center md:h-[28rem]"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {/* Left dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#061D3A] via-[#061D3A]/75 to-transparent" />

            {/* Light overall overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Banner content */}
            <div className="relative z-10 mx-auto flex h-full w-11/12 items-center">
                <div className="pb-12 text-white">
                    <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
                        {title}
                    </h1>

                    <div className="mt-5 h-1 w-28 bg-[#D7A332]" />

                    <div className="mt-7 flex items-center gap-3 text-base">
                        <Link
                            href="/"
                            className="transition duration-300 hover:text-[#D7A332]"
                        >
                            Home
                        </Link>

                        <FiChevronRight className="text-xl text-[#D7A332]" />

                        <span className="font-medium text-[#D7A332]">
                            {title}
                        </span>
                    </div>
                </div>
            </div>

            {/* Smooth bottom curve */}
            <div className="absolute -bottom-24 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-[50%] border-t-4 border-[#D7A332] bg-[#F8F7F4]" />
        </section>
    );
};

export default PageBanner;
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const PageBanner = ({ title, backgroundImage }) => {
    return (
        <section
            className="relative -mt-12 h-96 bg-cover bg-center md:h-[28rem]"
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

            <div className="relative z-10 mx-auto flex h-full w-[88%] items-center">
                <div className="pt-12 text-white">
                    <h1 className="text-5xl font-semibold leading-tight md:text-6xl">
                        {title}
                    </h1>

                    <div className="mt-5 h-1 w-28 bg-[#D7A332]" />

                    <div className="mt-7 flex items-center gap-3 text-base">
                        <Link
                            href="/"
                            className="transition hover:text-[#D7A332]"
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
        </section>
    );
};

export default PageBanner;
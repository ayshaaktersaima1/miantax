import Link from "next/link";

import {
    FiMail,
    FiMapPin,
} from "react-icons/fi";

import {
    FaTiktok,
    FaYoutube,
} from "react-icons/fa";

const Header = () => {
    return (
        <div className="bg-[#061D3A] text-white h-24">
            <div className="mx-auto h-12 flex w-[93%] items-center justify-between px-5 py-3 lg:px-8">
                <div className="flex items-center gap-6">
                    <div className="hidden items-center gap-2 md:flex">
                        <FiMapPin className="text-lg text-[#D7A332]" />

                        <p className="text-sm">
                            Suit No. 202 2nd Floor Dewan Centre 5 Temple Road Lahore
                        </p>
                    </div>

                    <Link
                        href="mailto:Miantaxassociatespvt.ltd@gmail.com"
                        className="flex items-center gap-2 text-sm hover:text-[#D7A332]"
                    >
                        <FiMail className="text-lg text-[#D7A332]" />

                        <span className="hidden sm:inline">
                            Miantaxassociatespvt.ltd@gmail.com
                        </span>

                        <span className="sm:hidden">
                            Email Us
                        </span>
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="https://www.tiktok.com/@miantaxassociates?_t=8sQkR4bOLOU&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D7A332] text-sm hover:bg-[#D7A332] hover:text-[#061D3A]"
                    >
                        <FaTiktok />
                    </Link>

                    <Link
                        href="https://www.youtube.com/@miantaxassociates?si=R3MVVsTtPAhqi4TC"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D7A332] text-sm hover:bg-[#D7A332] hover:text-[#061D3A]"
                    >
                        <FaYoutube />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
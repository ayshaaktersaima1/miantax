import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <Link
            href="https://api.whatsapp.com/send/?phone=923009298448&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-3xl text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
        >
            <FaWhatsapp />
        </Link>
    );
};

export default WhatsAppButton;
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import MapSection from "@/components/MapSection";
import PageBanner from "@/components/PageBanner";

const Page = () => {
    return (
        <div>
            <PageBanner
                title="Contact Us"
                backgroundImage="/images/AboutSec"
            />

            <section className="py-16 md:py-20">
                <div className="mx-auto grid w-[88%] items-start gap-12 lg:grid-cols-[1.35fr_0.85fr]">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </section>

            <MapSection />
        </div>
    );
};

export default Page;
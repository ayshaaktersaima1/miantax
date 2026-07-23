import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckNumCard from "../serviceContentsCard/CheckNumCard";
import FileCircleCard from "../serviceContentsCard/FileCircleCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const registrationImportance = [
    {
        title: "Legal Protection",
        description:
            "Registering your trademark provides legal protection against infringement and unauthorized use by competitors. It allows you to take legal action against anyone who uses your trademark without permission.",
    },
    {
        title: "Brand Recognition",
        description:
            "A registered trademark helps establish your brand’s identity in the marketplace, fostering customer loyalty and recognition. It differentiates your products or services from those of competitors.",
    },
    {
        title: "Enhanced Business Value",
        description:
            "A trademark can significantly increase the value of your business. It becomes an intangible asset that can be sold, licensed, or used as collateral for loans.",
    },
    {
        title: "Exclusive Rights",
        description:
            "Trademark registration grants you exclusive rights to use your mark in relation to the goods or services for which it is registered. This exclusivity helps build trust and credibility with consumers.",
    },
];

const registrationBenefits = [
    {
        title: "Prevention of Counterfeiting",
        description:
            "A registered trademark helps prevent counterfeiting and imitating your brand, protecting your reputation and consumer trust.",
    },
    {
        title: "Nationwide Coverage",
        description:
            "Once registered, your trademark is protected across Pakistan, providing you with a solid legal footing to defend your brand against infringement.",
    },
    {
        title: "Easier Legal Recourse",
        description:
            "Having a registered trademark simplifies the legal process in case of disputes, as it serves as evidence of ownership and rights to the mark.",
    },
    {
        title: "International Protection",
        description:
            "A registered trademark in Pakistan can be the basis for securing protection in other countries, primarily through international treaties such as the Madrid Protocol.",
    },
];

const registrationSteps = [
    {
        title: "Conduct a Trademark Search",
        description:
            "Before applying, conduct a comprehensive trademark search to ensure that your proposed mark is unique and not already registered by another entity. This step helps avoid potential conflicts and rejections.",
    },
    {
        title: "Prepare Required Documentation",
        description:
            "Gather the necessary documents for registration, including:",
        points: [
            "A completed application form",
            "A representation of the trademark (logo or name)",
            "A list of goods or services associated with the trademark",
            "Identity documents of the applicant (e.g., CNIC or passport)",
        ],
    },
    {
        title: "File the Application",
        description:
            "Submit your trademark application to the Intellectual Property Organization of Pakistan (IPO-Pakistan). You can apply online or in person at the relevant office.",
    },
    {
        title: "Examination Process",
        description:
            "After submission, IPO-Pakistan will examine your application to ensure it meets all legal requirements. If any issues arise, you will be notified to address them.",
    },
    {
        title: "Publication in the Trademark Journal",
        description:
            "Once the application passes the examination, it will be published in the Trademark Journal for opposition. This allows third parties to oppose the registration if they believe it infringes on their rights.",
    },
    {
        title: "Registration Certificate",
        description:
            "If no opposition is filed or if the opposition is resolved in your favor, you will receive your Trademark Registration Certificate. This certificate grants you exclusive rights to the trademark.",
    },
];

const complianceRequirements = [
    {
        title: "Renewal",
        description:
            "Trademark registrations are valid for ten years from the registration date and can be renewed indefinitely for additional ten-year periods. Ensure timely renewal to maintain your trademark rights.",
    },
    {
        title: "Usage",
        description:
            "It is essential to use your trademark actively in commerce. Failure to do so can result in the cancellation or abandonment of your trademark rights.",
    },
];

const supportServices = [
    {
        title: "Consultation Services",
        description:
            "Expert guidance to help you understand the registration process and protect your intellectual property effectively.",
    },
    {
        title: "Trademark Search Assistance",
        description:
            "Conducting comprehensive trademark searches to identify potential conflicts before filing your application.",
    },
    {
        title: "Application Preparation and Filing",
        description:
            "Comprehensive support in preparing and filing your trademark application to ensure compliance with IPO-Pakistan requirements.",
    },
    {
        title: "Ongoing Trademark Management",
        description:
            "Assistance with renewal processes and monitoring for potential infringements on your trademark rights.",
    },
];

const TrademarkRegistrationContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    What is Trademark Registration?
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    Trademark Registration is the legal process through which a
                    business secures exclusive rights to its brand name, logo,
                    slogan, or any distinctive sign that identifies its goods or
                    services. In Pakistan, trademark registration is managed by
                    the Intellectual Property Organization of Pakistan
                    (IPO-Pakistan), ensuring that businesses can protect their
                    intellectual property rights and prevent unauthorized use of
                    their trademarks.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of Trademark Registration
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {registrationImportance.map((item, index) => (
                        <CheckNumCard
                            key={item.title}
                            benefit={item}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Benefits of Trademark Registration
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {registrationBenefits.map((benefit, index) => (
                        <CheckNumCard
                            key={benefit.title}
                            benefit={benefit}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Steps for Trademark Registration in Pakistan
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {registrationSteps.map((step, index) => (
                        <BigRoundNumCard
                            key={step.title}
                            step={step}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Ongoing Compliance Requirements for Registered Trademarks
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {complianceRequirements.map((requirement, index) => (
                        <FileCircleCard
                            key={requirement.title}
                            requirement={requirement}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    How We Can Help with Trademark Registration
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    At MIAN TAX ASSOCIATES, we specialize in assisting
                    businesses with trademark registration, offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={supportServices} />
                </div>
            </section>
        </article>
    );
};

export default TrademarkRegistrationContent;
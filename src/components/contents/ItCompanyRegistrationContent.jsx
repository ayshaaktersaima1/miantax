import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckNumCard from "../serviceContentsCard/CheckNumCard";
import FileCircleCard from "../serviceContentsCard/FileCircleCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const registrationImportance = [
    {
        title: "Legal Compliance",
        description:
            "Registering your IT company ensures adherence to local laws and regulations, helping you avoid legal issues and penalties.",
    },
    {
        title: "Access to Incentives and Support",
        description:
            "Registered IT companies can take advantage of various government incentives, including tax exemptions, grants, and access to funding opportunities, that can significantly reduce operational costs.",
    },
    {
        title: "Enhanced Credibility",
        description:
            "A registered IT company boosts your credibility with clients, partners, and investors, making it easier to attract business and build long-term relationships.",
    },
    {
        title: "Participation in Government Projects",
        description:
            "Registered companies are often prioritized for government contracts and projects, providing opportunities for collaboration and growth.",
    },
];

const registrationBenefits = [
    {
        title: "Operational Legitimacy",
        description:
            "Registration gives your IT company legal recognition, allowing you to operate confidently in the competitive tech landscape.",
    },
    {
        title: "Increased Business Opportunities",
        description:
            "Being a registered entity enhances your prospects for partnerships and collaborations with local and international businesses seeking reliable IT services.",
    },
    {
        title: "Access to Training and Development Programs",
        description:
            "Registered IT companies often gain access to training programs and resources designed to enhance workforce skills and improve service delivery.",
    },
    {
        title: "Networking Opportunities",
        description:
            "Registration connects you with industry networks, facilitating collaboration, knowledge sharing, and innovation within the tech ecosystem.",
    },
];

const registrationSteps = [
    {
        title: "Choose a Business Structure",
        description:
            "Based on your business needs and goals, decide on the legal structure of your IT company (e.g., Private Limited Company, Sole Proprietorship, or Partnership).",
    },
    {
        title: "Prepare Required Documentation",
        description:
            "Gather the necessary documents for registration, including:",
        points: [
            "Company name (with proposed names)",
            "Identity documents of the owners (e.g., CNICs)",
            "Memorandum of Association and Articles of Association (for companies)",
            "National Tax Number (NTN) application form",
        ],
    },
    {
        title: "Submit Application and Documents",
        description:
            "Submit your completed application along with the required documentation to the SECP. Ensure that all information is accurate to avoid processing delays.",
    },
    {
        title: "Payment of Registration Fees",
        description:
            "Pay the applicable registration fees as specified by the SECP. Keep the payment receipt for your records.",
    },
    {
        title: "Obtain National Tax Number (NTN)",
        description:
            "After registering with the SECP, apply for a National Tax Number (NTN) from the Federal Board of Revenue (FBR) to ensure compliance with tax regulations.",
    },
    {
        title: "Receive Registration Certificate",
        description:
            "Once approved, you will receive your IT Company Registration Certificate, allowing you to operate legally and access the benefits of being a registered entity.",
    },
];

const complianceRequirements = [
    {
        title: "Annual Reporting",
        description:
            "Registered IT companies must submit annual returns and financial statements to the SECP to ensure ongoing compliance with regulatory obligations.",
    },
    {
        title: "Tax Compliance",
        description:
            "Maintain compliance with tax regulations and file annual tax returns with the FBR to avoid penalties.",
    },
];

const supportServices = [
    {
        title: "Consultation Services",
        description:
            "Expert advice to guide you through the registration process and help you meet all regulatory requirements.",
    },
    {
        title: "Document Preparation",
        description:
            "Assistance in gathering and preparing the necessary documentation for submission to the SECP and FBR.",
    },
    {
        title: "Application Support",
        description:
            "Comprehensive handling of the registration process to ensure a smooth and efficient experience.",
    },
    {
        title: "Ongoing Compliance Guidance",
        description:
            "Regular support to help you maintain compliance with regulatory requirements and maximize the benefits of your registration.",
    },
];

const ITCompanyRegistrationContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    What is IT Company Registration?
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-6 space-y-5">
                    <p className="text-base leading-8 text-[#243044]">
                        IT Company Registration is the formal process through
                        which businesses engaged in information technology (IT)
                        and software development register with the relevant
                        government authorities in Pakistan. This registration
                        is essential for establishing a legitimate business
                        entity, ensuring compliance with local laws, and
                        accessing various benefits designed to support the
                        growth of the IT sector.
                    </p>

                    <p className="text-base leading-8 text-[#243044]">
                        In Pakistan, IT companies typically register with the
                        Securities and Exchange Commission of Pakistan (SECP)
                        and obtain a National Tax Number (NTN) from the Federal
                        Board of Revenue (FBR). This process not only legitimizes
                        the business but also opens doors to various incentives
                        and support services to foster innovation and
                        competitiveness.
                    </p>
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of IT Company Registration
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
                    Benefits of IT Company Registration
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
                    Steps for IT Company Registration in Pakistan
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
                    Ongoing Compliance Requirements for Registered IT Companies
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
                    How We Can Help with IT Company Registration
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we specialize in assisting
                    entrepreneurs with IT company registration, offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={supportServices} />
                </div>
            </section>
        </article>
    );
};

export default ITCompanyRegistrationContent;
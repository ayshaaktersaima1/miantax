import CheckMarkCard from "../serviceContentsCard/CheckMarkCard";
import CheckNumCard from "../serviceContentsCard/CheckNumCard";
import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const registrationReasons = [
    {
        title: "Legal Recognition",
        description:
            "Registration provides your Partnership with legal standing, making it easier to enter contracts, secure funding, and establish credibility.",
    },
    {
        title: "Limited Liability",
        description:
            "While partners are jointly responsible for the Partnership’s obligations, registration clarifies the legal framework, which can offer some protection.",
    },
    {
        title: "Tax Advantages",
        description:
            "Partnerships are taxed as AOPs, often resulting in lower tax liabilities than other business structures.",
    },
];

const partnershipBenefits = [
    {
        title: "Ease of Formation",
        description:
            "Establishing a Partnership is relatively simple and requires minimal paperwork. This ease of formation makes it an appealing option for entrepreneurs looking to start a business quickly.",
    },
    {
        title: "Flexible Management Structure",
        description:
            "Partnerships allow for customized management arrangements. Through a detailed partnership agreement, partners can define roles, responsibilities, and profit-sharing ratios, fostering efficient decision-making.",
    },
    {
        title: "Credibility and Professional Image",
        description:
            "A registered Partnership enhances your business’s credibility. Clients, suppliers, and investors are more likely to engage with a formally recognized entity, leading to increased opportunities for growth.",
    },
    {
        title: "Reduced Regulatory Compliance",
        description:
            "Partnerships face fewer regulatory requirements than corporations, allowing partners to focus on running their businesses without excessive bureaucratic hurdles.",
    },
    {
        title: "Shared Resources and Expertise",
        description:
            "Partnerships enable individuals to pool their resources, knowledge, and skills. This collaboration can enhance business operations and drive success through diverse perspectives.",
    },
];

const registrationSteps = [
    {
        title: "Draft a Partnership Agreement",
        description:
            "Begin by creating a comprehensive Partnership Agreement outlining each partner’s roles, responsibilities, profit-sharing ratios, and dispute resolution procedures. This document is vital for establishing clarity and understanding among partners.",
    },
    {
        title: "Choose a Unique Business Name",
        description:
            "Select a distinctive name for your Partnership that reflects your business’s purpose and is not already in use. Ensure the name complies with relevant naming regulations.",
    },
    {
        title: "Gather Required Documentation",
        description:
            "Prepare the necessary documents for registration, including:",
        points: [
            "Copies of CNIC (Computerized National Identity Cards) of all partners",
            "The Partnership Agreement",
            "Proof of the business address",
        ],
    },
    {
        title: "Register with the Registrar of Firms",
        description:
            "Submit your application and required documents to the Provincial Registrar of Firms. This formal registration grants legal recognition to your Partnership and is essential for conducting business.",
    },
    {
        title: "Obtain a National Tax Number (NTN)",
        description:
            "After registration, apply for an NTN from the Federal Board of Revenue (FBR). This step is crucial for compliance with tax regulations and allows your Partnership to operate legally.",
    },
    {
        title: "Open a Business Bank Account",
        description:
            "Consider opening a dedicated bank account in the name of the Partnership. Separating personal and business finances enhances transparency and simplifies financial management.",
    },
];

const complianceRequirements = [
    {
        title: "Record Keeping",
        description:
            "Maintain accurate financial records for tax reporting and operational management. This includes tracking income, expenses, and partner distributions.",
    },
    {
        title: "Annual Tax Filings",
        description:
            "As an AOP, your Partnership must file annual tax returns, reporting its income and expenses to the FBR.",
    },
    {
        title: "Documentation of Changes",
        description:
            "If there are any changes in the partnership structure—such as adding or removing partners—these should be documented and communicated to the Registrar of Firms.",
    },
];

const supportServices = [
    {
        title: "Consultation",
        description:
            "Expert guidance tailored to your business needs and objectives.",
    },
    {
        title: "Document Preparation",
        description:
            "Assistance in drafting and reviewing your Partnership Agreement and necessary forms.",
    },
    {
        title: "Registration Support",
        description:
            "Full handling of the registration process with the Registrar of Firms and tax authorities.",
    },
    {
        title: "Ongoing Compliance Assistance",
        description:
            "Regular support to help you maintain compliance and manage business records effectively.",
    },
];

const PartnershipAOPContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    What is a Partnership (AOP)?
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-6 space-y-5">
                    <p className="text-base leading-8 text-[#243044]">
                        A Partnership, also known as an Association of Persons
                        (AOP), is a prominent business structure in Pakistan
                        that facilitates collaborative entrepreneurship. This
                        model is particularly suited for two or more individuals
                        who come together to conduct business for profit. The
                        Partnership is governed by the Partnership Act of 1932,
                        which outlines the legal framework and regulations about
                        partnerships in the country.
                    </p>

                    <p className="text-base leading-8 text-[#243044]">
                        In a Partnership, each partner contributes their unique
                        skills, resources, and expertise, fostering a
                        collaborative environment that enhances the overall
                        effectiveness of the business. This structure allows for
                        the pooling of financial resources and encourages
                        sharing knowledge and responsibilities, enabling
                        partners to capitalize on each other’s strengths.
                    </p>

                    <p className="text-base leading-8 text-[#243044]">
                        By forming a Partnership, individuals can benefit from a
                        flexible management structure. Decisions can be made
                        collectively, reflecting the interests and insights of
                        all partners involved. Additionally, the Partnership
                        model supports a wide range of business activities,
                        making it an attractive choice for various industries.
                    </p>

                    <p className="text-base leading-8 text-[#243044]">
                        Overall, the Partnership structure is an excellent
                        option for those looking to start a business with a
                        shared vision. It allows partners to work together
                        towards mutual success while benefiting from a legally
                        recognized entity.
                    </p>
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Why Register a Partnership (AOP)?
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    Registering your Partnership as an AOP is crucial for
                    several reasons:
                </p>

                <div className="mt-7">
                    <CheckMarkCard items={registrationReasons} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Benefits of Partnership Registration
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {partnershipBenefits.map((benefit, index) => (
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
                    Steps for Partnership Registration (AOP)
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
                    Ongoing Compliance Requirements
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {complianceRequirements.map((requirement, index) => (
                        <article
                            key={requirement.title}
                            className="rounded-2xl border border-gray-200 bg-[#F8F7F4] p-5 transition duration-300 hover:border-[#D7A332] hover:bg-white hover:shadow-md md:p-6"
                        >
                            <div className="flex items-start gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#061D3A] text-sm font-semibold text-[#D7A332]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div>
                                    <h3 className="text-xl font-semibold text-[#061D3A]">
                                        {requirement.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#243044] md:text-base">
                                        {requirement.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    How We Can Help with Partnership Registration
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we offer a comprehensive suite of
                    services to assist you with Partnership registration and
                    ongoing compliance, including:
                </p>

                <div className="mt-7">
                    <HelpCard services={supportServices} />
                </div>
            </section>
        </article>
    );
};

export default PartnershipAOPContent;
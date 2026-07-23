import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckMarkCard from "../serviceContentsCard/CheckMarkCard";
import CheckNumCard from "../serviceContentsCard/CheckNumCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const draftingImportance = [
    {
        title: "Legal Protection",
        description:
            "A well-drafted contract protects the interests of all parties involved by clearly defining obligations, rights, and expectations. In disputes, a legally binding contract serves as essential evidence in court.",
    },
    {
        title: "Clarity and Understanding",
        description:
            "Contracts help avoid misunderstandings by providing clear terms and conditions. This clarity fosters trust and cooperation between parties, reducing the likelihood of conflicts.",
    },
    {
        title: "Risk Management",
        description:
            "Contracts can include clauses that limit liability, outline dispute resolution processes, and specify penalties for breach of contract. This risk management is crucial for maintaining business stability.",
    },
    {
        title: "Compliance with Laws",
        description:
            "Adequately drafted agreements ensure compliance with local laws and regulations, protecting your business from potential legal issues and penalties.",
    },
];

const draftingBenefits = [
    {
        title: "Tailored Solutions",
        description:
            "Professional drafting services provide customized contracts that meet your business’s specific needs and circumstances, ensuring that all relevant factors are considered.",
    },
    {
        title: "Avoiding Ambiguities",
        description:
            "Expert drafters use precise language to eliminate ambiguities that can lead to disputes, ensuring that all parties have a mutual understanding of the terms.",
    },
    {
        title: "Enhanced Enforceability",
        description:
            "A well-structured contract is more likely to be upheld in court, providing greater security for business transactions.",
    },
    {
        title: "Comprehensive Coverage",
        description:
            "To create comprehensive contracts, professional drafters consider all necessary elements, such as termination clauses, confidentiality agreements, and intellectual property rights.",
    },
];

const agreementTypes = [
    {
        title: "Employment Contracts",
        description:
            "Define the terms of employment, including job responsibilities, compensation, and termination procedures.",
    },
    {
        title: "Service Agreements",
        description:
            "Outline the terms of service between a provider and a client, including scope of work, payment terms, and timelines.",
    },
    {
        title: "Partnership Agreements",
        description:
            "Establish the terms and conditions for business partnerships, including profit-sharing, decision-making, and dispute resolution.",
    },
    {
        title: "Lease Agreements",
        description:
            "Detail the terms of property leasing, including rental amounts, duration, and responsibilities of both parties.",
    },
    {
        title: "Non-Disclosure Agreements (NDAs)",
        description:
            "Protect sensitive information shared between parties by outlining confidentiality obligations.",
    },
    {
        title: "Sales and Purchase Agreements",
        description:
            "Specify the terms of sales transactions, including price, delivery, and warranties.",
    },
];

const draftingSteps = [
    {
        title: "Identify the Parties Involved",
        description:
            "Clearly define who is entering into the agreement to avoid confusion.",
    },
    {
        title: "Outline the Purpose of the Agreement",
        description:
            "State the main objectives and the context of the agreement to set the stage for the terms.",
    },
    {
        title: "Detail the Terms and Conditions",
        description:
            "Include all relevant details, such as payment terms, delivery schedules, and each party’s obligations.",
    },
    {
        title: "Include Dispute Resolution Mechanisms",
        description:
            "Specify how disputes will be handled through mediation, arbitration, or litigation.",
    },
    {
        title: "Review and Revise",
        description:
            "Thoroughly review the drafted agreement for clarity, accuracy, and compliance with applicable laws before finalizing it.",
    },
    {
        title: "Sign and Date the Agreement",
        description:
            "Ensure all parties sign and date the contract, acknowledging their agreement to the terms.",
    },
];

const supportServices = [
    {
        title: "Consultation Services",
        description:
            "Expert advice on your specific needs and legal requirements.",
    },
    {
        title: "Customized Drafting",
        description:
            "Tailored contracts that reflect your business goals and protect your interests.",
    },
    {
        title: "Legal Compliance Review",
        description:
            "Ensuring all agreements comply with local laws and regulations.",
    },
    {
        title: "Ongoing Support",
        description:
            "Assistance with contract negotiations and modifications as needed.",
    },
];

const AgreementsContractsContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    What is Agreements and Contracts Drafting?
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    Agreements and Contracts Drafting is the process of creating
                    legally binding documents that outline the terms and
                    conditions between parties involved in a business
                    relationship. In Pakistan, effective contract drafting is
                    essential for safeguarding your rights, managing risks, and
                    ensuring clarity in business transactions. Whether for
                    employment, service, partnership, or lease agreements,
                    well-drafted contracts provide a solid foundation for
                    successful business operations.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of Agreements and Contracts Drafting
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {draftingImportance.map((item, index) => (
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
                    Benefits of Professional Agreements and Contracts Drafting
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {draftingBenefits.map((benefit, index) => (
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
                    Types of Agreements and Contracts We Draft
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8">
                    <CheckMarkCard items={agreementTypes} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Steps for Effective Agreements and Contracts Drafting
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {draftingSteps.map((step, index) => (
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
                    How We Can Help with Agreements and Contract Drafting
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    At MIAN TAX ASSOCIATES, we specialize in providing
                    professional agreements and contract drafting services,
                    offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={supportServices} />
                </div>
            </section>
        </article>
    );
};

export default AgreementsContractsContent;
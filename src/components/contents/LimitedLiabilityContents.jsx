import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckNumCard from "../serviceContentsCard/CheckNumCard";
import FileCircleCard from "../serviceContentsCard/FileCircleCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const keyFeatures = [
    {
        title: "Limited Liability Protection",
        description:
            "Partners in an LLP enjoy limited liability, which shields their personal assets from business debts. This protection is crucial for entrepreneurs seeking to minimize financial risk.",
    },
    {
        title: "Separate Legal Entity",
        description:
            "An LLP operates as a distinct legal entity, separate from its partners. This means the LLP can enter contracts, own property, and be sued in its name, enhancing legal protection.",
    },
    {
        title: "Flexible Management Structure",
        description:
            "LLPs offer flexibility in management. Partners can outline their roles, responsibilities, and profit-sharing ratios through a Partnership Agreement, allowing for efficient decision-making.",
    },
    {
        title: "Tax Benefits",
        description:
            "LLPs are taxed as partnerships, meaning profits are passed through to partners and taxed at their individual tax rates. This can result in lower overall tax liabilities compared to corporate structures.",
    },
    {
        title: "Minimal Regulatory Compliance",
        description:
            "LLPs face fewer regulatory obligations than corporations, making it easier for partners to manage their business without excessive bureaucracy.",
    },
];

const registrationBenefits = [
    {
        title: "Personal Asset Protection",
        description:
            "One of the most significant advantages of LLP registration is the protection of personal assets. In the event of business debts or legal issues, partners’ personal properties are safeguarded.",
    },
    {
        title: "Enhanced Credibility",
        description:
            "Registering as an LLP enhances your business’s credibility. Clients, suppliers, and investors are more likely to trust a formally recognized entity, which can lead to better business opportunities.",
    },
    {
        title: "Shared Responsibility and Expertise",
        description:
            "LLPs allow partners to share responsibilities and leverage each other’s expertise. This collaboration fosters innovation and improves overall business performance.",
    },
    {
        title: "Ease of Raising Capital",
        description:
            "The LLP structure makes it easier to attract investors, as they may feel more secure investing in a business with limited liability and a formalized operational framework.",
    },
];

const registrationSteps = [
    {
        title: "Draft an LLP Agreement",
        description:
            "Begin by drafting a comprehensive LLP Agreement outlining all partners’ roles, responsibilities, and profit-sharing arrangements. This document is essential for establishing a clear operational framework.",
    },
    {
        title: "Choose a Unique Business Name",
        description:
            "Select a distinctive name for your LLP that reflects your business activities. Ensure the name complies with legal naming regulations and is not already in use.",
    },
    {
        title: "Gather Required Documentation",
        description:
            "Prepare the necessary documents for registration, including:",
        points: [
            "Copies of CNIC (Computerized National Identity Cards) of all partners",
            "The drafted LLP Agreement",
            "Proof of the registered office address",
        ],
    },
    {
        title: "Register with the SECP",
        description:
            "Submit your application and required documents to the Securities and Exchange Commission of Pakistan (SECP) for registration. This formal registration provides your LLP with legal recognition.",
    },
    {
        title: "Obtain a National Tax Number (NTN)",
        description:
            "After registration, apply for a National Tax Number (NTN) from the Federal Board of Revenue (FBR). This registration is essential for tax compliance and allows your LLP to operate legally.",
    },
    {
        title: "Open a Business Bank Account",
        description:
            "It is advisable to open a dedicated bank account in the name of the LLP. Separating personal and business finances enhances transparency and simplifies financial management.",
    },
];

const complianceRequirements = [
    {
        title: "Record Keeping",
        description:
            "Maintain accurate financial records for tax reporting and operational management.",
    },
    {
        title: "Annual Filings",
        description:
            "LLPs must file annual returns and financial statements with the SECP to ensure ongoing compliance with regulatory obligations.",
    },
    {
        title: "Document Changes",
        description:
            "Any changes in the LLP structure, such as the addition or removal of partners, must be documented and communicated to the SECP.",
    },
];

const supportServices = [
    {
        title: "Consultation",
        description:
            "Tailored advice to help you choose the proper business structure.",
    },
    {
        title: "Document Preparation",
        description:
            "Assistance drafting and reviewing your LLP Agreement and required registration documents.",
    },
    {
        title: "Registration Support",
        description:
            "Comprehensive handling of the registration process with the SECP and tax authorities.",
    },
    {
        title: "Ongoing Compliance Assistance",
        description:
            "Regular support ensures you meet all compliance requirements and maintain accurate records.",
    },
];

const LimitedLiabilityContents = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    What is a Limited Liability Partnership (LLP)?
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-6 space-y-5">
                    <p className="text-base leading-8 text-[#455468]">
                        A Limited Liability Partnership (LLP) is a modern
                        business structure that combines the operational
                        flexibility of a partnership with the benefits of
                        limited liability protection. Governed by the Limited
                        Liability Partnership Act of 2017, this structure is
                        ideal for professionals and entrepreneurs in Pakistan
                        looking to collaborate while safeguarding their
                        personal assets.
                    </p>

                    <p className="text-base leading-8 text-[#455468]">
                        In an LLP, partners have limited liability, meaning they
                        are only responsible for the business’s debts to the
                        extent of their contributions. This feature protects
                        personal assets from being used to settle business
                        liabilities, making the LLP a popular choice among
                        business owners.
                    </p>
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Key Features of LLP
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {keyFeatures.map((feature, index) => (
                        <CheckNumCard
                            key={feature.title}
                            benefit={feature}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Benefits of LLP Registration in Pakistan
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
                    Steps for LLP Registration in Pakistan
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
                    Ongoing Compliance Requirements for LLPs
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
                    How We Can Help with LLP Registration
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    At MIAN TAX ASSOCIATES, we specialize in assisting
                    businesses with LLP registration and compliance, offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={supportServices} />
                </div>
            </section>
        </article>
    );
};

export default LimitedLiabilityContents;
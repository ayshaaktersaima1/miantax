import FileCircleCard from "../serviceContentsCard/FileCircleCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const complianceRequirements = [
    {
        title: "Annual Returns",
        description:
            "All registered companies are required to submit annual returns to the SECP. This includes filing the company’s financial statements and details of shareholders and directors. The returns must be filed within a specified time frame after the end of the financial year. Non-compliance can lead to penalties or legal action.",
    },
    {
        title: "Financial Statements",
        description:
            "Companies must prepare and submit their financial statements annually, which include the balance sheet, profit and loss account, cash flow statement, and notes to the accounts. These statements must be audited by a registered auditor and filed with the SECP within the prescribed deadline.",
    },
    {
        title: "Director’s Report",
        description:
            "Along with the financial statements, companies must provide a director’s report detailing the company’s performance, operations, and future outlook. This report must comply with the requirements set out in the Companies Act and provide an accurate and fair view of the company’s affairs.",
    },
    {
        title: "Meeting Requirements",
        description:
            "Companies must hold annual general meetings (AGMs) where shareholders can discuss company performance, approve financial statements, and make key decisions. Proper notice must be given to shareholders, and minutes of the meeting must be recorded and maintained.",
    },
    {
        title: "Change in Directors or Shareholders",
        description:
            "Any company directors or shareholders changes must be reported to the SECP. Companies must file the appropriate forms within a specified timeframe to update their records, ensuring accurate and current information is maintained.",
    },
    {
        title: "Maintenance of Statutory Registers",
        description:
            "Companies are required to maintain statutory registers, including registers of members, directors, and charges. These registers must be updated regularly to reflect any changes and should be kept at the registered office for inspection.",
    },
    {
        title: "Share Transfers",
        description:
            "Share transfers must be documented and reported to the SECP. Companies must maintain a register of share transfers and ensure that all transfers comply with the company’s articles of association.",
    },
    {
        title: "Disclosure Requirements",
        description:
            "Companies must comply with various disclosure requirements, including notifying the SECP of any significant changes in the company’s business, operations, or financial position. This includes disclosures related to related-party transactions, director remuneration, and important events that may affect the company.",
    },
    {
        title: "Compliance with Corporate Governance Codes",
        description:
            "Companies are expected to adhere to the corporate governance codes issued by the SECP. This includes establishing proper board structures, ensuring transparency in operations, and safeguarding shareholder rights.",
    },
];

const supportServices = [
    {
        title: "Consultation",
        description:
            "Tailored advice on compliance requirements based on your business structure.",
    },
    {
        title: "Document Preparation",
        description:
            "Assistance in preparing and filing necessary documents, including annual returns and financial statements.",
    },
    {
        title: "Record Maintenance",
        description:
            "Support maintaining statutory registers and ensuring proper documentation for meetings and decisions.",
    },
    {
        title: "Ongoing Compliance Support",
        description:
            "Regular updates and guidance on regulatory changes and compliance best practices.",
    },
];

const SECPComplianceContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Overview
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-6 space-y-5">
                    <p className="text-base leading-8 text-[#455468]">
                        The Securities and Exchange Commission of Pakistan
                        (SECP) is the regulatory authority overseeing corporate
                        sector compliance in Pakistan. All registered companies,
                        including Private Limited, Single Member, and Public
                        Limited, must adhere to the SECP’s regulations to ensure
                        transparency, accountability, and good governance.
                        Compliance with SECP regulations is crucial for
                        maintaining a company’s legal status and avoiding
                        penalties.
                    </p>

                    <p className="text-base leading-8 text-[#455468]">
                        At MIAN TAX ASSOCIATES, we provide expert guidance on
                        SECP compliance, helping businesses navigate regulatory
                        requirements efficiently.
                    </p>
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Key Compliance Requirements
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
                    How We Can Help
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    At MIAN TAX ASSOCIATES, we offer comprehensive compliance
                    services to assist businesses in meeting their SECP
                    obligations, including:
                </p>

                <div className="mt-7">
                    <HelpCard services={supportServices} />
                </div>
            </section>
        </article>
    );
};

export default SECPComplianceContent;
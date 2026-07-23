import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckMarkCard from "../serviceContentsCard/CheckMarkCard";
import CheckNumCard from "../serviceContentsCard/CheckNumCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const incomeTaxNotices = [
    {
        title: "Assessment Notices",
        description:
            "Issued to inform taxpayers of the income tax assessment based on their filed returns or audits.",
    },
    {
        title: "Demand Notices",
        description:
            "Indicate the tax amount owed, including penalties for late payments or discrepancies.",
    },
    {
        title: "Inquiry Notices",
        description:
            "Request additional information or documentation about a specific tax year or transaction.",
    },
];

const salesTaxNotices = [
    {
        title: "Show Cause Notices",
        description:
            "Issued to inform taxpayers of non-compliance or discrepancies in their sales tax filings and require a response.",
    },
    {
        title: "Audit Notices",
        description:
            "Notify taxpayers of an upcoming audit regarding their sales tax records and transactions.",
    },
    {
        title: "Demand Notices",
        description:
            "Indicate the amount of sales tax owed, including any penalties for non-compliance.",
    },
];

const noticeImportance = [
    {
        title: "Compliance with Tax Laws",
        description:
            "Promptly responding to tax notices is essential for compliance with tax laws and regulations. Ignoring notices can lead to further legal action, penalties, or additional assessments.",
    },
    {
        title: "Avoiding Financial Penalties",
        description:
            "Timely and accurate responses can help mitigate or eliminate potential financial penalties associated with non-compliance or discrepancies.",
    },
    {
        title: "Clarifying Tax Obligations",
        description:
            "Addressing notices allows taxpayers to clarify their tax obligations, ensuring a better understanding of their rights and responsibilities.",
    },
    {
        title: "Preserving Taxpayer Rights",
        description:
            "Responding effectively can protect taxpayer rights and provide an opportunity to contest any unjust claims or assessments.",
    },
];

const noticeReasons = [
    {
        title: "Discrepancies in Tax Returns",
        description:
            "Notices may be issued due to inconsistencies or errors in the information reported on tax returns.",
    },
    {
        title: "Late Filings or Payments",
        description:
            "Taxpayers who fail to file returns or make timely payments may receive demand notices or penalties.",
    },
    {
        title: "Audits and Investigations",
        description:
            "Random audits or investigations into specific transactions can trigger notices requiring additional documentation or explanations.",
    },
    {
        title: "Unreported Income or Sales",
        description:
            "Notices may arise if tax authorities identify potential unreported income or sales transactions.",
    },
];

const noticeSteps = [
    {
        title: "Review the Notice Carefully",
        description:
            "Thoroughly read the notice to understand the nature of the issue, the required actions, and the deadlines involved.",
    },
    {
        title: "Gather Relevant Documentation",
        description:
            "Collect all necessary documents related to the notice, such as tax returns, financial records, and correspondence with tax authorities.",
    },
    {
        title: "Consult a Tax Professional",
        description:
            "Seek advice from a qualified tax consultant or lawyer to assess your situation and determine the best action.",
    },
    {
        title: "Prepare Your Response",
        description:
            "Draft a clear and concise response addressing the concerns raised in the notice, including any supporting documentation or explanations.",
    },
    {
        title: "Submit Your Response",
        description:
            "Send your response to the relevant tax authority within the specified timeframe to ensure compliance and avoid penalties.",
    },
    {
        title: "Follow Up",
        description:
            "Monitor the status of your response and be prepared for any follow-up inquiries or actions from tax authorities.",
    },
];

const noticeSupport = [
    {
        title: "Consultation Services",
        description:
            "Expert analysis of your notice and guidance on your rights and obligations.",
    },
    {
        title: "Documentation Support",
        description:
            "Assistance in gathering and preparing the necessary documentation to respond effectively.",
    },
    {
        title: "Response Preparation",
        description:
            "Drafting clear and persuasive responses to address the concerns raised in the notice.",
    },
    {
        title: "Representation",
        description:
            "Skilled representation in communications with tax authorities to advocate for your interests.",
    },
];

const IncomeTaxAndSalesTaxContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    What are Income Tax and Sales Tax Notices?
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    Income Tax and Sales Tax Notices are formal communications
                    issued by the Federal Board of Revenue (FBR) or provincial
                    tax authorities in Pakistan. These notices inform taxpayers
                    about issues related to their tax filings, assessments,
                    compliance requirements, or potential violations.
                    Understanding these notices is crucial for taxpayers to
                    respond appropriately and protect their financial interests.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Types of Tax Notices
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8">
                    <h3 className="mb-5 text-2xl font-semibold text-[#061D3A]">
                        Income Tax Notices
                    </h3>

                    <CheckMarkCard items={incomeTaxNotices} />
                </div>

                <div className="mt-10">
                    <h3 className="mb-5 text-2xl font-semibold text-[#061D3A]">
                        Sales Tax Notices
                    </h3>

                    <CheckMarkCard items={salesTaxNotices} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of Responding to Tax Notices
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {noticeImportance.map((item, index) => (
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
                    Common Reasons for Receiving Tax Notices
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {noticeReasons.map((reason, index) => (
                        <CheckNumCard
                            key={reason.title}
                            benefit={reason}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Steps to Take When Receiving a Tax Notice
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {noticeSteps.map((step, index) => (
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
                    How We Can Assist with Tax Notices
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    At MIAN TAX ASSOCIATES, we specialize in providing
                    comprehensive assistance with Income Tax and Sales Tax
                    Notices, offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={noticeSupport} />
                </div>
            </section>
        </article>
    );
};

export default IncomeTaxAndSalesTaxContent;
import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckMarkCard from "../serviceContentsCard/CheckMarkCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const filingImportance = [
    {
        title: "Legal Compliance",
        description:
            "Filing withholding statements is a legal requirement for businesses making payments subject to withholding tax.",
    },
    {
        title: "Transparency",
        description:
            "Accurate reporting promotes transparency in financial transactions and tax obligations.",
    },
    {
        title: "Avoiding Penalties",
        description:
            "Timely filing helps businesses avoid penalties, interest charges, and audits by tax authorities.",
    },
    {
        title: "Reputation Management",
        description:
            "Complying with withholding tax regulations enhances your business’s reputation with clients and regulatory bodies.",
    },
];

const requiredEntities = [
    "Employers who deduct withholding tax from employee salaries.",
    "Businesses that make payments to vendors, contractors, or service providers are subject to withholding tax.",
    "Taxpayers who are required to withhold tax on specific transactions as mandated by the FBR.",
];

const filingSteps = [
    {
        title: "Determine Your Withholding Tax Obligations",
        description:
            "Understand the applicable withholding tax rates for different types of payments, such as salaries, contracts, and services.",
    },
    {
        title: "Collect Necessary Data",
        description:
            "Gather information on payments made during the relevant period, including names, CNIC numbers, and the amounts withheld.",
    },
    {
        title: "Complete the Withholding Statement Form",
        description:
            "Accurately fill out the withholding statement form detailing the payments made, the tax withheld, and any other required information.",
    },
    {
        title: "Submit the Withholding Statement",
        description:
            "You can file your withholding statement electronically through the FBR’s online portal or submit a physical copy at the relevant tax office.",
    },
    {
        title: "Obtain Acknowledgment Receipt",
        description:
            "After submission, obtain an acknowledgment receipt confirming the successful filing of your withholding statement.",
    },
    {
        title: "Maintain Records",
        description:
            "Keep copies of your filed statements and supporting documents for record-keeping and potential audits.",
    },
];

const supportServices = [
    {
        title: "Consultation Services",
        description:
            "Expert guidance on your withholding tax obligations and applicable rates.",
    },
    {
        title: "Data Collection Support",
        description:
            "Assistance in gathering and organizing necessary data for accurate filing.",
    },
    {
        title: "Form Completion",
        description:
            "Help in accurately completing withholding statement forms to ensure compliance.",
    },
    {
        title: "Electronic Filing",
        description:
            "Support in electronically submitting your withholding statements for efficiency and accuracy.",
    },
    {
        title: "Post-Filing Assistance",
        description:
            "Guidance on tracking your statement status and addressing any inquiries from tax authorities.",
    },
];

const WithholdingStatementFilingContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Overview of Withholding Statement Filing
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-6 space-y-5">
                    <p className="text-base leading-8 text-[#243044]">
                        Withholding Statement Filing is a crucial process for
                        employers and businesses in Pakistan, ensuring compliance
                        with tax regulations set by the Federal Board of Revenue
                        (FBR). Withholding tax is a method where tax is deducted
                        at source from payments made to employees, vendors, and
                        service providers. Filing withholding statements
                        accurately and on time is essential to avoid penalties
                        and maintain good standing with tax authorities.
                    </p>

                    <p className="text-base leading-8 text-[#243044]">
                        At MIAN TAX ASSOCIATES, we provide expert assistance in
                        withholding statement filing, ensuring you meet your tax
                        obligations efficiently.
                    </p>
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    What is a Withholding Statement?
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    A Withholding Statement is a document that reports the amount
                    of tax deducted at source and submitted to the FBR. It
                    provides details about the payments made, the withholding
                    tax deducted, and the corresponding tax liabilities.
                    Employers and businesses must file these statements
                    periodically based on their tax obligations.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of Withholding Statement Filing
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8">
                    <CheckMarkCard items={filingImportance} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Who Needs to File Withholding Statements?
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    In Pakistan, the following entities are required to file
                    withholding statements:
                </p>

                <ul className="mt-6 space-y-4">
                    {requiredEntities.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-[#061D3A]/10 bg-[#F8F7F4] p-4 text-base leading-7 text-[#243044]"
                        >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D7A332]" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Steps for Filing Withholding Statements
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {filingSteps.map((step, index) => (
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
                    How We Can Assist with Withholding Statement Filing
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we offer comprehensive services for
                    Withholding Statement Filing, including:
                </p>

                <div className="mt-7">
                    <HelpCard services={supportServices} />
                </div>
            </section>
        </article>
    );
};

export default WithholdingStatementFilingContent;
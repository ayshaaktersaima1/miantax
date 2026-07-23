import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckMarkCard from "../serviceContentsCard/CheckMarkCard";
import CheckNumCard from "../serviceContentsCard/CheckNumCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const incomeTaxAudits = [
    {
        title: "Routine Audits",
        description:
            "Conducted periodically on a random basis to ensure compliance among taxpayers.",
    },
    {
        title: "Targeted Audits",
        description:
            "Focused on specific taxpayers or sectors that exhibit signs of non-compliance or discrepancies in tax reporting.",
    },
    {
        title: "Post-Audit Assessments",
        description:
            "Occur after filing a return to verify the accuracy of reported information and claims.",
    },
];

const salesTaxAudits = [
    {
        title: "Compliance Audits",
        description:
            "Assess whether businesses comply with sales tax laws, including accurate sales reporting and proper collection of sales tax.",
    },
    {
        title: "Risk-Based Audits",
        description:
            "Target specific industries or sectors identified as high-risk for non-compliance based on historical data.",
    },
    {
        title: "Desk Audits",
        description:
            "Conducted primarily through documentation review without an on-site visit, focusing on submitted returns and records.",
    },
];

const auditImportance = [
    {
        title: "Ensuring Compliance",
        description:
            "Audits help ensure taxpayers comply with tax laws and regulations, promoting fairness in the tax system.",
    },
    {
        title: "Identifying Errors or Fraud",
        description:
            "Audits can uncover errors in tax reporting or potential fraud, allowing taxpayers to rectify issues before they lead to significant penalties.",
    },
    {
        title: "Providing Clarity on Tax Obligations",
        description:
            "The audit process can clarify tax obligations, helping taxpayers understand their legal responsibilities.",
    },
    {
        title: "Opportunity for Improvement",
        description:
            "Audits provide insights into areas for improvement in financial record-keeping and tax compliance practices.",
    },
];

const auditTriggers = [
    {
        title: "Inconsistencies in Reporting",
        description:
            "Discrepancies between reported income, expenses, and tax returns can trigger audits.",
    },
    {
        title: "High Deductions or Exemptions",
        description:
            "Claims for unusually high deductions or exemptions may raise red flags for tax authorities.",
    },
    {
        title: "Large Transactions",
        description:
            "Significant transactions, particularly in cash, can attract scrutiny and lead to audits.",
    },
    {
        title: "Industry-Specific Risks",
        description:
            "Specific industries may be more prone to audits due to historical non-compliance or high fraud rates.",
    },
];

const auditSteps = [
    {
        title: "Gather Documentation",
        description:
            "Collect all relevant documents, including tax returns, financial statements, receipts, and supporting documentation for deductions and credits.",
    },
    {
        title: "Review Records",
        description:
            "Conduct a thorough review of your financial records to ensure accuracy and identify any discrepancies before the audit.",
    },
    {
        title: "Consult a Tax Professional",
        description:
            "Seek guidance from a qualified tax consultant or lawyer to prepare for the audit and understand your rights and responsibilities.",
    },
    {
        title: "Be Responsive and Cooperative",
        description:
            "During the audit, cooperate fully with tax authorities, promptly providing requested documentation and information.",
    },
    {
        title: "Address Issues Promptly",
        description:
            "If discrepancies are identified during the audit, address them immediately to mitigate potential penalties.",
    },
];

const auditSupport = [
    {
        title: "Consultation Services",
        description:
            "Expert advice on audit preparation and your rights as a taxpayer.",
    },
    {
        title: "Documentation Support",
        description:
            "Assistance in gathering and organizing necessary documentation for the audit.",
    },
    {
        title: "Audit Representation",
        description:
            "Skilled representation to advocate for your interests during the audit process.",
    },
    {
        title: "Post-Audit Guidance",
        description:
            "Help in addressing findings and recommendations from the audit to ensure compliance moving forward.",
    },
];

const TaxAuditsContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    What is an Income Tax and Sales Tax Audit?
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    Income Tax and Sales Tax Audits are formal examinations
                    conducted by the Federal Board of Revenue (FBR) or provincial
                    tax authorities to assess taxpayers’ compliance with tax
                    laws and regulations. These audits aim to ensure taxpayers
                    accurately report their income, expenses, and sales and
                    fulfill their tax obligations. Understanding the audit
                    process is crucial for individuals and businesses to
                    navigate potential challenges and protect their financial
                    interests.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Types of Tax Audits
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8">
                    <h3 className="mb-5 text-2xl font-semibold text-[#061D3A]">
                        Income Tax Audits
                    </h3>

                    <CheckMarkCard items={incomeTaxAudits} />
                </div>

                <div className="mt-10">
                    <h3 className="mb-5 text-2xl font-semibold text-[#061D3A]">
                        Sales Tax Audits
                    </h3>

                    <CheckMarkCard items={salesTaxAudits} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of Tax Audits
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {auditImportance.map((item, index) => (
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
                    Common Triggers for Income Tax and Sales Tax Audits
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {auditTriggers.map((trigger, index) => (
                        <CheckNumCard
                            key={trigger.title}
                            benefit={trigger}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Steps to Prepare for a Tax Audit
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {auditSteps.map((step, index) => (
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
                    How We Can Help with Tax Audits
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    At MIAN TAX ASSOCIATES, we specialize in providing
                    comprehensive assistance with Income Tax and Sales Tax
                    Audits, offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={auditSupport} />
                </div>
            </section>
        </article>
    );
};

export default TaxAuditsContent;
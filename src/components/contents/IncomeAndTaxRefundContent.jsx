import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckMarkCard from "../serviceContentsCard/CheckMarkCard";
import CheckNumCard from "../serviceContentsCard/CheckNumCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const incomeTaxRefunds = [
    {
        title: "Overpayment Refunds",
        description:
            "Issued when taxpayers have paid more tax than their actual liability, often due to withholding tax or excess payments.",
    },
    {
        title: "Refunds Due to Adjustments",
        description:
            "Issued when taxpayers correct errors or discrepancies in their previously filed tax returns.",
    },
    {
        title: "Refunds for Tax Credits",
        description:
            "These are available when taxpayers qualify for specific tax credits that reduce their overall tax liability.",
    },
];

const salesTaxRefunds = [
    {
        title: "Export Refunds",
        description:
            "Issued to exporters who pay sales tax on goods and services purchased for export, allowing them to recover tax paid.",
    },
    {
        title: "Input Tax Refunds",
        description:
            "Available for businesses that have paid sales tax on inputs but have lower sales tax liability or no sales tax on their outputs.",
    },
    {
        title: "Refunds Due to Returns",
        description:
            "Issued when customers return goods, resulting in excess sales tax collected.",
    },
];

const refundImportance = [
    {
        title: "Improved Cash Flow",
        description:
            "Tax refunds can significantly enhance cash flow for individuals and businesses, providing necessary funds for operations or personal expenses.",
    },
    {
        title: "Encouragement of Compliance",
        description:
            "A clear refund process encourages taxpayers to comply with tax laws, knowing they can reclaim overpaid amounts.",
    },
    {
        title: "Correction of Errors",
        description:
            "Refunds provide a mechanism for correcting errors in tax filings, ensuring that taxpayers are not penalized for honest mistakes.",
    },
    {
        title: "Support for Businesses",
        description:
            "Refunds can be particularly beneficial for businesses, allowing them to reinvest in operations or manage day-to-day expenses more effectively.",
    },
];

const refundReasons = [
    {
        title: "Excess Tax Withholding",
        description:
            "Employees may have had too much tax withheld from their salaries, resulting in a refund when they file their returns.",
    },
    {
        title: "Business Losses",
        description:
            "Businesses that report losses may be eligible for refunds based on prior tax payments.",
    },
    {
        title: "Claiming Deductions and Credits",
        description:
            "Taxpayers who qualify for deductions or credits that reduce their tax liability may receive refunds.",
    },
    {
        title: "Export Activities",
        description:
            "Exporters can claim refunds for sales tax paid on goods purchased for export purposes.",
    },
];

const refundSteps = [
    {
        title: "Determine Eligibility",
        description:
            "Review your tax payments and filings to determine if you qualify for a refund based on overpayments, deductions, or credits.",
    },
    {
        title: "Gather Documentation",
        description:
            "Collect all necessary documents, including tax returns, proof of payments, and any supporting documentation for deductions or credits.",
    },
    {
        title: "File a Refund Application",
        description:
            "Submit your refund application to the FBR or relevant provincial tax authority, ensuring that all required information and documentation are included.",
    },
    {
        title: "Follow Up on Your Application",
        description:
            "You can monitor the status of your refund application by checking with the tax authority or through their online portal, if available.",
    },
    {
        title: "Respond to Inquiries",
        description:
            "Be prepared to provide additional information or clarification if the tax authorities request it while reviewing your refund application.",
    },
];

const refundSupport = [
    {
        title: "Consultation Services",
        description:
            "Expert advice on your refund eligibility and the application process.",
    },
    {
        title: "Documentation Support",
        description:
            "Assistance in gathering and organizing necessary documentation to support your refund claim.",
    },
    {
        title: "Application Preparation",
        description:
            "Help in preparing and filing your refund application accurately and efficiently.",
    },
    {
        title: "Follow-Up Services",
        description:
            "Support in monitoring the status of your refund and addressing any inquiries from tax authorities.",
    },
];

const TaxRefundsContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    What are Income Tax and Sales Tax Refunds?
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    Income Tax and Sales Tax Refunds refer to the amounts
                    reimbursed to taxpayers when they have overpaid their taxes
                    or are eligible for refunds due to various reasons, such as
                    adjustments, credits, or deductions. In Pakistan, taxpayers
                    can file for refunds with the Federal Board of Revenue (FBR)
                    or provincial tax authorities when they believe they are
                    entitled to a reimbursement. Understanding the refund
                    process is essential for individuals and businesses to
                    manage their cash flow effectively and ensure compliance
                    with tax regulations.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Types of Refunds
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#061D3A] text-sm font-semibold text-[#D7A332]">
                            1
                        </span>

                        <h3 className="text-2xl font-semibold text-[#061D3A]">
                            Income Tax Refunds
                        </h3>
                    </div>

                    <CheckMarkCard items={incomeTaxRefunds} />
                </div>

                <div className="mt-10">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#061D3A] text-sm font-semibold text-[#D7A332]">
                            2
                        </span>

                        <h3 className="text-2xl font-semibold text-[#061D3A]">
                            Sales Tax Refunds
                        </h3>
                    </div>

                    <CheckMarkCard items={salesTaxRefunds} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of Tax Refunds
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {refundImportance.map((item, index) => (
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
                    Common Reasons for Income Tax and Sales Tax Refunds
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {refundReasons.map((reason, index) => (
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
                    Steps to Claim a Tax Refund
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {refundSteps.map((step, index) => (
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
                    How We Can Assist with Tax Refunds
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we specialize in providing
                    comprehensive assistance with Income Tax and Sales Tax
                    Refunds, offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={refundSupport} />
                </div>
            </section>
        </article>
    );
};

export default TaxRefundsContent;
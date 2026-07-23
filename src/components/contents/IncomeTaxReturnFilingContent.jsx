import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckMarkCard from "../serviceContentsCard/CheckMarkCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const filingImportance = [
    {
        title: "Legal Compliance",
        description:
            "Filing your income tax return is mandatory for all eligible taxpayers, ensuring adherence to tax laws in Pakistan.",
    },
    {
        title: "Claim Deductions and Credits",
        description:
            "Accurate filing allows you to claim deductions and tax credits, reducing your overall tax liability.",
    },
    {
        title: "Avoid Penalties",
        description:
            "Timely filing helps avoid penalties and interest charges imposed by tax authorities for late submissions.",
    },
    {
        title: "Access to Tax Refunds",
        description:
            "If you have overpaid taxes or are eligible for refunds, filing your return is necessary to claim these amounts.",
    },
    {
        title: "Establishing Financial Credibility",
        description:
            "Regular filing demonstrates financial responsibility and compliance, enhancing your credibility with banks, investors, and partners.",
    },
];

const requiredFilers = [
    "Individuals with annual income exceeding the prescribed threshold.",
    "Businesses and corporations operate in various sectors.",
    "Salaried individuals whose employers deduct withholding tax.",
    "Self-employed professionals and freelancers earning taxable income.",
    "NTN holder",
];

const filingSteps = [
    {
        title: "Gather Necessary Documents",
        description:
            "Collect all relevant documentation, including salary slips, bank statements, proof of investments, and other income sources.",
    },
    {
        title: "Determine Your Taxable Income",
        description:
            "Calculate your total income, including salary, business income, capital gains, and any other sources of revenue.",
    },
    {
        title: "Identify Deductions and Exemptions",
        description:
            "Review available deductions and exemptions, such as medical expenses, education expenses, and donations, to optimize your taxable income.",
    },
    {
        title: "Choose the Correct Tax Form",
        description:
            "Select the appropriate income tax return form based on your income type and source. Different forms are available for individuals, businesses, and salaried persons.",
    },
    {
        title: "Complete the Tax Return Form",
        description:
            "Fill out the selected tax return form accurately, ensuring all information is complete and truthful.",
    },
    {
        title: "Submit Your Tax Return",
        description:
            "File your income tax return electronically through the FBR’s online portal or submit a physical copy at the relevant tax office.",
    },
    {
        title: "Obtain Acknowledgment Receipt",
        description:
            "After submission, obtain an acknowledgment receipt confirming the successful filing of your tax return.",
    },
    {
        title: "Keep Records",
        description:
            "Maintain copies of your filed return and supporting documents for future reference and potential audits.",
    },
];

const supportServices = [
    {
        title: "Tax Consultation",
        description:
            "Expert advice on tax obligations, income sources, and available deductions.",
    },
    {
        title: "Document Preparation",
        description:
            "Assistance in gathering and organizing necessary documents for accurate filing.",
    },
    {
        title: "Form Selection and Completion",
        description:
            "Help in choosing the proper tax form and accurately completing it.",
    },
    {
        title: "Electronic Filing",
        description:
            "Support in electronically submitting your income tax return for efficiency and accuracy.",
    },
    {
        title: "Post-Filing Assistance",
        description:
            "Guidance on tracking your return status and addressing any inquiries from tax authorities.",
    },
];

const IncomeTaxReturnFilingContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Overview of Income Tax Return Filing
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    Filing an Income Tax Return is a legal obligation for
                    individuals and businesses earning taxable income in
                    Pakistan. It involves reporting your income, deductions, and
                    taxes paid to the Federal Board of Revenue (FBR). Timely and
                    accurate filing is crucial to complying with tax laws and
                    avoiding penalties. At MIAN TAX ASSOCIATES, we provide
                    expert services to help you efficiently navigate the income
                    tax return filing process.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Why is Income Tax Return Filing Important?
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8">
                    <CheckMarkCard items={filingImportance} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Who Needs to File an Income Tax Return?
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    In Pakistan, the following individuals and entities are
                    required to file an income tax return:
                </p>

                <ul className="mt-6 space-y-4">
                    {requiredFilers.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-[#061D3A]/10 bg-[#F8F7F4] p-4 text-base leading-7 text-[#455468]"
                        >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D7A332]" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Steps for Filing Your Income Tax Return
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
                    How We Can Help with Income Tax Return Filing
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    At MIAN TAX ASSOCIATES, we offer comprehensive services for
                    Income Tax Return Filing, including:
                </p>

                <div className="mt-7">
                    <HelpCard services={supportServices} />
                </div>
            </section>
        </article>
    );
};

export default IncomeTaxReturnFilingContent;
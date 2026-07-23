import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckMarkCard from "../serviceContentsCard/CheckMarkCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const registrationImportance = [
    {
        title: "Legal Compliance",
        description:
            "Registration is a legal requirement for businesses selling goods or providing taxable services.",
    },
    {
        title: "Tax Collection",
        description:
            "Once registered, businesses can collect sales tax from customers, which they must remit to the tax authorities.",
    },
    {
        title: "Input Tax Credit",
        description:
            "Registered businesses can claim input tax credits for sales tax paid on purchases, reducing their overall tax liability.",
    },
    {
        title: "Credibility",
        description:
            "Registered taxpayers enhance your business’s credibility with clients, suppliers, and financial institutions.",
    },
    {
        title: "Avoiding Penalties",
        description:
            "Non-compliance with sales tax registration can lead to penalties and legal issues.",
    },
];

const registrationSteps = [
    {
        title: "Determine Eligibility",
        description:
            "Assess whether your business qualifies for sales tax registration based on the nature of your goods or services and annual turnover.",
    },
    {
        title: "Gather Required Documents",
        description:
            "Collect necessary documents, including your business registration certificate, NTN (National Tax Number), proof of business address, and the owner(s) identification documents.",
    },
    {
        title: "Complete the Registration Application",
        description:
            "Fill out the Sales Tax Registration application form accurately, providing all required information.",
    },
    {
        title: "Submit the Application",
        description:
            "Submit your completed application and supporting documents to the FBR through their online portal or at the relevant tax office.",
    },
    {
        title: "Obtain Sales Tax Registration Number (STRN)",
        description:
            "Upon approval, receive your STRN, which must be displayed on invoices and official documents.",
    },
];

const returnFilingImportance = [
    {
        title: "Compliance with Tax Laws",
        description:
            "Timely filing of sales tax returns is essential to comply with tax regulations and avoid penalties.",
    },
    {
        title: "Input Tax Credit Claim",
        description:
            "Filing returns allows businesses to claim input tax credits, offsetting their sales tax liabilities.",
    },
    {
        title: "Transparency",
        description:
            "Accurate return filing promotes transparency and accountability in tax reporting.",
    },
];

const returnFilingSteps = [
    {
        title: "Gather Required Data",
        description:
            "Collect sales and purchase data for the relevant period, including invoices and receipts.",
    },
    {
        title: "Complete the Sales Tax Return Form",
        description:
            "Fill out the sales tax return form accurately, detailing your total sales, purchases, sales tax collected, and input tax claimed.",
    },
    {
        title: "Submit the Return",
        description:
            "You can file your sales tax return electronically through the FBR’s online portal, ensuring that all information is complete and accurate.",
    },
    {
        title: "Obtain Acknowledgment Receipt",
        description:
            "After submission, obtain an acknowledgment receipt confirming the successful filing of your sales tax return.",
    },
    {
        title: "Maintain Records",
        description:
            "Keep copies of your filed returns and supporting documents for record-keeping and potential audits.",
    },
];

const supportServices = [
    {
        title: "Consultation Services",
        description:
            "Expert advice on the sales tax registration process and requirements.",
    },
    {
        title: "Document Preparation",
        description:
            "Assistance in gathering and organizing necessary documents for registration and filing.",
    },
    {
        title: "Application and Return Completion",
        description:
            "Help accurately complete the registration application and sales tax return forms.",
    },
    {
        title: "Electronic Filing",
        description:
            "Support in electronically submitting your registration and returns for efficiency and compliance.",
    },
    {
        title: "Post-Filing Support",
        description:
            "Guidance on tracking your return status and addressing any inquiries from tax authorities.",
    },
];

const SalesTaxRegistrationContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Overview of Sales Tax Registration
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-6 space-y-5">
                    <p className="text-base leading-8 text-[#455468]">
                        Sales Tax Registration is a mandatory process for
                        businesses engaged in taxable activities in Pakistan. It
                        involves obtaining a Sales Tax Registration Number
                        (STRN) from the Federal Board of Revenue (FBR), allowing
                        businesses to legally charge sales tax on their goods
                        and services. This registration is crucial for
                        compliance with sales tax laws and facilitates the
                        collection and remittance of sales tax.
                    </p>

                    <p className="text-base leading-8 text-[#455468]">
                        At MIAN TAX ASSOCIATES, we provide expert services to
                        assist you in obtaining your Sales Tax Registration and
                        filing your sales tax returns accurately and on time.
                    </p>
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Why is Sales Tax Registration Important?
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8">
                    <CheckMarkCard items={registrationImportance} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Steps for Sales Tax Registration
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
                    Sales Tax Return Filing
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    Once registered for sales tax, businesses must file periodic
                    sales tax returns, reporting sales, purchases, and sales tax
                    collected.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of Sales Tax Return Filing
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8">
                    <CheckMarkCard items={returnFilingImportance} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Steps for Filing Sales Tax Returns
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {returnFilingSteps.map((step, index) => (
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
                    How We Can Assist with Sales Tax Registration and Return
                    Filing
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    At MIAN TAX ASSOCIATES, we specialize in providing
                    comprehensive services for Sales Tax Registration and Return
                    Filing, offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={supportServices} />
                </div>
            </section>
        </article>
    );
};

export default SalesTaxRegistrationContent;
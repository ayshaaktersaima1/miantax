import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckMarkCard from "../serviceContentsCard/CheckMarkCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const filerImportance = [
    {
        title: "Legal Compliance",
        description:
            "Registering as a filer ensures adherence to the income tax laws set by the FBR, avoiding penalties and legal issues.",
    },
    {
        title: "Lower Tax Rates",
        description:
            "Filers benefit from reduced tax rates on income compared to non-filers, making tax obligations more manageable.",
    },
    {
        title: "Access to Tax Benefits",
        description:
            "Filers are eligible for various tax credits, deductions, and refunds that non-filers cannot claim.",
    },
    {
        title: "Enhanced Credibility",
        description:
            "Being a registered filer improves your credibility with banks, investors, and business partners, facilitating financial transactions and investments.",
    },
    {
        title: "Eligibility for Government Contracts",
        description:
            "Many government contracts and tenders require bidders to be registered filers, expanding business opportunities.",
    },
];

const eligibleFilers = [
    {
        title: "Individuals",
        description:
            "Salaried employees, self-employed professionals, and freelancers earning taxable income.",
    },
    {
        title: "Businesses",
        description:
            "Sole proprietorships, partnerships, and corporations generate taxable revenue.",
    },
    {
        title: "Property Owners",
        description:
            "Individuals receiving rental income from properties.",
    },
    {
        title: "Non residents",
        description: "",
    },
];

const filerSteps = [
    {
        title: "Obtain National Tax Number (NTN)",
        description:
            "Register with the FBR to obtain your National Tax Number (NTN), which is a prerequisite for becoming a filer.",
    },
    {
        title: "Prepare Necessary Documentation",
        description:
            "Gather all relevant documents, including income statements, bank statements, and proof of deductions.",
    },
    {
        title: "Complete Your Income Tax Return",
        description:
            "Accurately fill out your income tax return, detailing all sources of income and applicable deductions.",
    },
    {
        title: "Submit Your Tax Return",
        description:
            "File your income tax return electronically through the FBR’s online portal or submit a physical copy at the relevant tax office.",
    },
    {
        title: "Obtain Acknowledgment Receipt",
        description:
            "After submission, receive an acknowledgment receipt confirming your filing status.",
    },
    {
        title: "Check Your Filer Status",
        description:
            "You can verify your filer status on the FBR’s official website to ensure active registration.",
    },
];

const supportServices = [
    {
        title: "Consultation Services",
        description:
            "Expert guidance on the requirements and benefits of becoming a filer.",
    },
    {
        title: "NTN Registration",
        description:
            "Assistance in obtaining your National Tax Number (NTN) efficiently.",
    },
    {
        title: "Documentation Support",
        description:
            "Help in gathering and preparing all necessary documents for filing.",
    },
    {
        title: "Income Tax Return Preparation",
        description:
            "Professionally prepare your income tax return to ensure accuracy and compliance.",
    },
    {
        title: "Filing and Follow-Up",
        description:
            "Support in filing your return and checking your filer status with the FBR.",
    },
];

const FilerContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Overview of Filer Status
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-6 space-y-5">
                    <p className="text-base leading-8 text-[#455468]">
                        In Pakistan, the term filer refers to individuals or
                        entities registered with the Federal Board of Revenue
                        (FBR) and filed their income tax returns. Being a
                        registered filer is crucial for compliance with tax laws
                        and provides various benefits, including lower tax rates
                        and access to certain privileges under the tax system.
                    </p>

                    <p className="text-base leading-8 text-[#455468]">
                        At MIAN TAX ASSOCIATES, we help you understand the
                        importance of filer status and guide you through the
                        process of becoming a filer.
                    </p>
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Why is Filer Status Important?
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8">
                    <CheckMarkCard items={filerImportance} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Who Can Be a Filer?
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    Anyone with taxable income can become a filer in Pakistan,
                    including:
                </p>

                <div className="mt-8">
                    <CheckMarkCard items={eligibleFilers} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Steps to Become a Filer
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {filerSteps.map((step, index) => (
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
                    How We Can Assist You in Becoming a Filer
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    At MIAN TAX ASSOCIATES, we provide comprehensive services to
                    help you become a registered filer, including:
                </p>

                <div className="mt-7">
                    <HelpCard services={supportServices} />
                </div>
            </section>
        </article>
    );
};

export default FilerContent;
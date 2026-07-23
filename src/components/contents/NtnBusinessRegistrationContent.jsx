import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckMarkCard from "../serviceContentsCard/CheckMarkCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const ntnImportance = [
    {
        title: "Legal Compliance",
        description:
            "Holding an NTN is essential for complying with Pakistan’s tax laws and regulations.",
    },
    {
        title: "Filing Tax Returns",
        description:
            "NTN must file income tax and sales tax returns, allowing you to fulfill your tax obligations.",
    },
    {
        title: "Access to Tax Benefits",
        description:
            "Taxpayers with an NTN can claim deductions, tax credits, and refunds, optimizing their tax liabilities.",
    },
    {
        title: "Credibility",
        description:
            "Having an NTN enhances your credibility with clients, suppliers, and financial institutions, as it demonstrates your compliance with tax laws.",
    },
];

const registrationSteps = [
    {
        title: "Choose a Business Structure",
        description:
            "Decide on the business entity that best suits your needs, such as a sole proprietorship, Partnership, or limited company.",
    },
    {
        title: "Name Approval",
        description:
            "Select a unique business name and apply for name approval with the Securities and Exchange Commission of Pakistan (SECP) or relevant authority.",
    },
    {
        title: "Documentation Preparation",
        description:
            "Gather necessary documents, including identification, proof of address, and any additional paperwork required for your chosen business structure.",
    },
    {
        title: "File for Registration",
        description:
            "Submit your application and the required documents to the SECP or relevant authority for registration.",
    },
    {
        title: "Obtain Registration Certificate",
        description:
            "Upon approval, receive your business registration certificate, which serves as legal proof of your business’s existence.",
    },
    {
        title: "Apply for NTN",
        description:
            "After registering your business, apply for your National Tax Number (NTN) with the FBR to ensure compliance with tax laws.",
    },
];

const supportServices = [
    {
        title: "Consultation Services",
        description:
            "Expert advice on choosing the proper business structure and understanding the registration process.",
    },
    {
        title: "Documentation Support",
        description:
            "Assistance in gathering and preparing all necessary documents for NTN and business registration.",
    },
    {
        title: "Application Preparation",
        description:
            "Help in accurately filling out and submitting NTN and business registration applications.",
    },
    {
        title: "Follow-Up Services",
        description:
            "Ongoing support to track the status of your applications and address any inquiries from authorities.",
    },
];

const NtnBusinessRegistrationContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Overview of NTN and Business Registration
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-6 space-y-5">
                    <p className="text-base leading-8 text-[#455468]">
                        In Pakistan, obtaining a National Tax Number (NTN) and
                        registering your business are essential steps for
                        operating legally and efficiently. The NTN is a unique
                        identification number issued by the Federal Board of
                        Revenue (FBR), requiring individuals and businesses to
                        file taxes and avail of tax-related services. On the
                        other hand, business registration formalizes your
                        business structure, providing legal recognition and
                        protecting your interests.
                    </p>

                    <p className="text-base leading-8 text-[#455468]">
                        At MIAN TAX ASSOCIATES, we provide comprehensive
                        services to assist you in obtaining your NTN and
                        registering your business, ensuring a smooth and
                        hassle-free process.
                    </p>
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    What is NTN (National Tax Number)?
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    The National Tax Number (NTN) is a unique identifier assigned
                    to taxpayers in Pakistan for tax purposes. It is mandatory
                    for individuals and entities that wish to engage in any
                    taxable activities, including business operations,
                    employment, or investment.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of NTN
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8">
                    <CheckMarkCard items={ntnImportance} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Business Registration in Pakistan
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    Business registration involves formally registering your
                    business entity with the relevant authorities. The process
                    varies depending on the type of business structure you
                    choose (e.g., sole proprietorship, Partnership, or private
                    limited company).
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Steps for Business Registration
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
                    How We Can Assist with NTN and Business Registration
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    At MIAN TAX ASSOCIATES, we specialize in providing
                    comprehensive services for NTN and business registration,
                    offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={supportServices} />
                </div>
            </section>
        </article>
    );
};

export default NtnBusinessRegistrationContent;
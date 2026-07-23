import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckNumCard from "../serviceContentsCard/CheckNumCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const benefits = [
    {
        title: "Ease of Formation",
        description:
            "One of the primary advantages of a Sole Proprietorship is its simplicity in formation. Minimal legal requirements and paperwork are involved, allowing entrepreneurs to start their businesses quickly and with little administrative burden. Registration is straightforward and can often be completed without extensive documentation.",
    },
    {
        title: "Full Control",
        description:
            "As a sole proprietor, you have complete control over all aspects of your business. You make all decisions regarding operations, finances, and management without the need for consultation with partners or shareholders. This autonomy allows for agile decision-making and the ability to respond swiftly to market changes.",
    },
    {
        title: "Direct Tax Benefits",
        description:
            "A sole proprietorship taxes business income as the owner’s income. This means that profits are reported on the owner’s personal tax return, simplifying the tax process. Additionally, certain business expenses can be deducted, which may reduce the overall taxable income.",
    },
    {
        title: "Less Regulatory Oversight",
        description:
            "Sole proprietorships are subject to fewer regulations than other business structures, such as corporations or partnerships. This reduced oversight can make it easier for business owners to operate without the burden of extensive compliance requirements.",
    },
    {
        title: "Business Flexibility",
        description:
            "The Sole Proprietorship structure allows for greater flexibility in terms of business operations. Owners can easily adapt their business model, pivot to new opportunities, and make changes as they see fit without the constraints of corporate governance.",
    },
    {
        title: "Lower Startup Costs",
        description:
            "Establishing a sole proprietorship typically incurs lower startup costs than other business entities. There are no mandatory capital requirements, and many associated expenses are minimal. This affordability is ideal for entrepreneurs just starting their business journey.",
    },
];

const registrationSteps = [
    {
        title: "Choose a Business Name",
        description:
            "The first step is selecting a unique business name. Conducting a name search is advisable to ensure that the chosen name is not already in use. Our team can assist in checking name Availability and ensuring compliance with regulations.",
    },
    {
        title: "Obtain Necessary Licenses and Permits",
        description:
            "Depending on the nature of your business, you may need to obtain specific licenses or permits from local authorities. We can help you identify and secure the necessary regulatory approvals for your industry.",
    },
    {
        title: "Register for Taxation",
        description:
            "you must register with the Federal Board of Revenue (FBR) to obtain a National Tax Number (NTN). This registration is essential for tax purposes and enables you to operate your business legally. We provide support in the tax registration process.",
    },
    {
        title: "Open a Business Bank Account",
        description:
            "Although not mandatory, opening a separate bank account for your business transactions is advisable. Separating personal and business finances helps with better financial management and accountability.",
    },
    {
        title: "Maintain Records",
        description:
            "While a Sole Proprietorship has fewer formalities, it’s crucial to maintain accurate financial records. Keeping track of income, expenses, and other financial data will help you manage your business effectively and comply with tax obligations.",
    },
];

const supportServices = [
    {
        title: "Consultation",
        description:
            "Tailored advice on setting up your Sole Proprietorship.",
    },
    {
        title: "Document Preparation",
        description:
            "Assistance in preparing necessary documentation for licensing and registration.",
    },
    {
        title: "Tax Registration",
        description:
            "Guidance in obtaining your National Tax Number (NTN) and understanding tax obligations.",
    },
    {
        title: "Compliance Support",
        description:
            "Help with maintaining financial records and adhering to regulatory requirements.",
    },
];

const SoleProprietorshipContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Overview
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-6 space-y-5">
                    <p className="text-base leading-8 text-[#455468]">
                        A Sole Proprietorship is the simplest form of business
                        structure in Pakistan. It allows an individual to operate
                        a business under their own name without forming a
                        separate legal entity. Due to its ease of setup and
                        minimal regulatory requirements, this structure is
                        particularly popular among freelancers, consultants, and
                        small business owners.
                    </p>

                    <p className="text-base leading-8 text-[#455468]">
                        At MIAN TAX ASSOCIATES, we provide guidance and
                        assistance to help you establish a Sole Proprietorship,
                        ensure compliance with local regulations, and facilitate
                        a smooth start to your business journey.
                    </p>
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Benefits of a Sole Proprietorship
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {benefits.map((benefit, index) => (
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
                    Steps for Registering a Sole Proprietorship
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
                    How We Can Help
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    At MIAN TAX ASSOCIATES, we offer a range of services to
                    assist with Sole Proprietorship registration and ongoing
                    support, including:
                </p>

                <div className="mt-7">
                    <HelpCard services={supportServices} />
                </div>
            </section>
        </article>
    );
};

export default SoleProprietorshipContent;
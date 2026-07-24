import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckNumCard from "../serviceContentsCard/CheckNumCard";

const taxServices = [
    {
        title: "Tax Consultation Services",
        description: "",
        points: [
            "Individual Tax Planning: Personalized strategies to help individuals manage their tax liabilities, including deductions and credits.",
            "Business Tax Planning: Tailored solutions for businesses to optimize their tax positions and ensure compliance with applicable laws.",
        ],
    },
    {
        title: "Tax Compliance Services",
        description: "",
        points: [
            "Tax Return Preparation: Expert in the preparation and filing of income tax and sales tax returns to ensure accuracy and compliance.",
            "Filing Assistance: Guidance on filing requirements and deadlines for individuals and businesses, helping to avoid penalties.",
        ],
    },
    {
        title: "Tax Audit Support",
        description: "",
        points: [
            "Audit Preparation: Assistance in preparing for tax audits, including organizing documentation and records.",
            "Representation: Professional representation during tax audits to advocate for clients and resolve disputes with tax authorities.",
        ],
    },
    {
        title: "Tax Refund Services",
        description: "",
        points: [
            "Refund Claims: Expert assistance in filing income tax and sales tax refund claims, ensuring clients receive what they are entitled to.",
            "Monitoring Refund Status: Ongoing support to track the status of refund applications and address any inquiries from tax authorities.",
        ],
    },
    {
        title: "Tax Dispute Resolution",
        description: "",
        points: [
            "Appeals and Litigation: Representation in tax appeals and litigation processes to challenge unfavorable tax assessments or decisions.",
            "Negotiation with Tax Authorities: Skilled negotiation on behalf of clients to resolve disputes and reach settlements.",
        ],
    },
    {
        title: "International Tax Services",
        description: "",
        points: [
            "Cross-Border Tax Planning: Strategies to manage tax implications for individuals and businesses engaged in international transactions.",
            "Compliance with International Tax Laws: Guidance on compliance with tax obligations in multiple jurisdictions",
        ],
    },
];

const serviceAdvantages = [
    {
        title: "Expertise and Experience",
        description:
            "Our team of tax professionals has extensive knowledge of Pakistani tax laws and regulations, ensuring that clients receive accurate and up-to-date advice.",
    },
    {
        title: "Personalized Solutions",
        description:
            "We understand that each client has a unique tax situation. Our services are tailored to meet the specific needs of individuals and businesses.",
    },
    {
        title: "Proactive Approach",
        description:
            "We take a proactive approach to tax planning and compliance, helping clients identify potential issues before they become problems.",
    },
    {
        title: "Comprehensive Support",
        description:
            "From tax preparation to audit representation, we provide a full range of tax services to support our clients at every stage.",
    },
    {
        title: "Commitment to Client Satisfaction",
        description:
            "Our priority is to deliver exceptional service and support, ensuring our clients feel confident and informed throughout the tax process.",
    },
];

const TaxServicesContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Overview of Tax Services
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    Tax services encompass a range of professional assistance
                    provided to individuals and businesses to navigate the
                    complexities of Pakistan’s tax laws and regulations. These
                    services are essential for ensuring compliance, optimizing
                    tax liabilities, and minimizing the risk of disputes with
                    tax authorities. At [Your Company Name], we offer
                    comprehensive tax services tailored to meet the unique needs
                    of our clients.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Types of Tax Services We Offer
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {taxServices.map((service, index) => (
                        <BigRoundNumCard
                            key={service.title}
                            step={service}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Why Choose Our Tax Services?
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {serviceAdvantages.map((advantage, index) => (
                        <CheckNumCard
                            key={advantage.title}
                            benefit={advantage}
                            index={index}
                        />
                    ))}
                </div>
            </section>
        </article>
    );
};

export default TaxServicesContent;
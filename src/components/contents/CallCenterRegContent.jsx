import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckNumCard from "../serviceContentsCard/CheckNumCard";
import FileCircleCard from "../serviceContentsCard/FileCircleCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const registrationImportance = [
    {
        title: "Legal Compliance",
        description:
            "Registration ensures that your call center operates within the legal framework set by the PTA and other regulatory bodies. This compliance helps avoid potential legal issues and penalties.",
    },
    {
        title: "Access to Telecommunication Services",
        description:
            "Registered call centers can access essential telecommunication services, including dedicated lines, VoIP services, and customer support solutions, which are vital for efficient operations.",
    },
    {
        title: "Enhanced Credibility",
        description:
            "A registered call center enhances your business’s credibility with clients and partners. It signals professionalism and commitment to quality service delivery, making attracting and retaining customers easier.",
    },
    {
        title: "Government Support and Incentives",
        description:
            "Registered call centers may qualify for government incentives, grants, and support programs to promote the growth of Pakistan’s IT and telecommunications sectors.",
    },
];

const registrationBenefits = [
    {
        title: "Operational Legitimacy",
        description:
            "Registration gives your call center legal recognition, allowing you to operate confidently within the industry.",
    },
    {
        title: "Increased Business Opportunities",
        description:
            "Being a registered entity opens doors to potential partnerships and contracts with local and international businesses seeking reliable call center services.",
    },
    {
        title: "Access to Training and Development Programs",
        description:
            "Registered call centers often gain access to training programs and resources designed to enhance workforce skills and improve service quality.",
    },
    {
        title: "Protection of Intellectual Property",
        description:
            "Registration can help safeguard your business’s intellectual property, ensuring that proprietary processes and technologies are protected under the law.",
    },
];

const registrationSteps = [
    {
        title: "Prepare Required Documentation",
        description:
            "Gather the necessary documents for registration, including:",
        points: [
            "Company registration documents (e.g., Certificate of Incorporation)",
            "National Tax Number (NTN)",
            "Business plan outlining services, operational structure, and staffing",
            "Details of the call center’s infrastructure and technology",
        ],
    },
    {
        title: "Complete the Registration Form",
        description:
            "Visit the Pakistan Telecommunication Authority (PTA) website and complete the call center registration form. Ensure that all information is accurate and comprehensive.",
    },
    {
        title: "Submit Application and Documents",
        description:
            "Please submit your completed application along with the required documentation to the PTA. It is crucial to double-check all information to avoid processing delays.",
    },
    {
        title: "Payment of Registration Fees",
        description:
            "Pay the applicable registration fees as outlined by the PTA. Keep a copy of the payment receipt for your records.",
    },
    {
        title: "Verification and Approval",
        description:
            "The PTA will review your application and documentation. You will receive confirmation of your call center registration if everything is in order.",
    },
    {
        title: "Receive Registration Certificate",
        description:
            "Once approved, you will receive your Call Center Registration Certificate, allowing you to operate legally and access the benefits associated with being a registered entity.",
    },
];

const complianceRequirements = [
    {
        title: "Annual Reporting",
        description:
            "Registered call centers may be required to submit annual reports to the PTA detailing their activities, financial performance, and any changes in management or structure.",
    },
    {
        title: "Adherence to Regulatory Guidelines",
        description:
            "Call centers must comply with PTA regulations and guidelines to maintain their registered status and benefit from associated incentives.",
    },
];

const supportServices = [
    {
        title: "Consultation Services",
        description:
            "Expert advice to guide you through the registration process and help you meet all regulatory requirements.",
    },
    {
        title: "Document Preparation",
        description:
            "Assistance in gathering and preparing the necessary documentation for submission to the PTA.",
    },
    {
        title: "Application Support",
        description:
            "Comprehensive handling of the registration process to ensure a smooth and efficient experience.",
    },
    {
        title: "Ongoing Compliance Guidance",
        description:
            "Regular support to help you maintain compliance with PTA requirements and maximize the benefits of your registration.",
    },
];

const CallCenterRegistrationContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    What is Call Center Registration?
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-6 space-y-5">
                    <p className="text-base leading-8 text-[#243044]">
                        Call Center Registration is the official process through
                        which businesses operating call centers in Pakistan
                        register with the relevant regulatory authorities. This
                        registration is crucial for establishing a legitimate
                        operation, ensuring compliance with local laws, and
                        gaining access to benefits that enhance business
                        credibility and efficiency.
                    </p>

                    <p className="text-base leading-8 text-[#243044]">
                        The Pakistan Telecommunication Authority (PTA) oversees
                        the registration of call centers in Pakistan, ensuring
                        that all operations adhere to legal standards and
                        regulations. Call centers can access necessary
                        telecommunication services and participate in government
                        programs designed to support the IT and telecommunications
                        sectors by registering.
                    </p>
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of Call Center Registration
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {registrationImportance.map((item, index) => (
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
                    Benefits of Call Center Registration
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {registrationBenefits.map((benefit, index) => (
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
                    Steps for Call Center Registration in Pakistan
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
                    Ongoing Compliance Requirements for Registered Call Centers
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {complianceRequirements.map((requirement, index) => (
                        <FileCircleCard
                            key={requirement.title}
                            requirement={requirement}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    How We Can Help with Call Center Registration
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we specialize in assisting
                    entrepreneurs with call center registration, offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={supportServices} />
                </div>
            </section>
        </article>
    );
};

export default CallCenterRegistrationContent;
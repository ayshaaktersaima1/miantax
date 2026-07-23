import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckNumCard from "../serviceContentsCard/CheckNumCard";
import FileCircleCard from "../serviceContentsCard/FileCircleCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const registrationImportance = [
    {
        title: "Legal Protection Against Infringement",
        description:
            "Registering your copyright provides robust legal protection against unauthorized use of your work. It allows you to take legal action against individuals or entities infringing on your rights.",
    },
    {
        title: "Proof of Ownership",
        description:
            "A registered copyright serves as definitive evidence of your ownership, simplifying the process of proving your rights in disputes.",
    },
    {
        title: "Credibility and Professionalism",
        description:
            "Having your copyright registered enhances your credibility as a creator or business entity, showcasing your commitment to protecting your intellectual property.",
    },
    {
        title: "Access to Remedies",
        description:
            "In infringement cases, a registered copyright allows you to seek statutory damages and attorney fees, giving you a stronger position in legal disputes.",
    },
];

const registrationBenefits = [
    {
        title: "Protection from Unauthorized Use",
        description:
            "Copyright registration protects your work from unauthorized reproduction, distribution, or public display, ensuring you retain control over your creative output.",
    },
    {
        title: "Public Notice of Your Rights",
        description:
            "Registration provides public notice of your copyright, deterring potential infringers and informing them of your ownership.",
    },
    {
        title: "Transfer and Licensing Options",
        description:
            "Registered copyrights can be transferred or licensed, providing opportunities for monetization through sales or licensing agreements.",
    },
    {
        title: "Increased Asset Value",
        description:
            "A registered copyright can enhance the value of your intellectual property portfolio, making it a valuable asset for your business.",
    },
];

const registrationSteps = [
    {
        title: "Determine Your Work’s Eligibility",
        description:
            "Ensure that your work is original and qualifies for copyright protection. This includes various forms of creative expression, such as writing, music, art, and software.",
    },
    {
        title: "Prepare Required Documentation",
        description: "Gather the necessary documents, including:",
        points: [
            "A completed copyright application form",
            "A copy of the work to be registered (manuscript, artwork, or software)",
            "Identity documents of the applicant (CNIC or passport)",
        ],
    },
    {
        title: "Submit Your Application",
        description:
            "File your copyright application with the Copyright Office in Pakistan. Depending on the office’s procedures, applications can typically be submitted online or in person.",
    },
    {
        title: "Examination of Your Application",
        description:
            "After submission, the Copyright Office will review your application to ensure compliance with all legal requirements. If there are any issues, you may need to address them.",
    },
    {
        title: "Receive Your Registration Certificate",
        description:
            "Once approved, you will be issued a Copyright Registration Certificate, formally recognizing your rights over the creative work.",
    },
];

const complianceRequirements = [
    {
        title: "Duration of Protection",
        description:
            "In Pakistan, copyright lasts for the creator’s lifetime plus 50 years. Renewals are not required as long as the work remains in use.",
    },
    {
        title: "Proper Copyright Marking",
        description:
            "Although not mandatory, including a copyright notice (© year, name) on your work can help deter infringement and clarify ownership.",
    },
];

const supportServices = [
    {
        title: "Consultation Services",
        description:
            "Expert advice to navigate the complexities of copyright registration and protect your creative works effectively.",
    },
    {
        title: "Document Preparation",
        description:
            "Assistance in compiling and preparing the necessary documentation for submission to the Copyright Office.",
    },
    {
        title: "Application Filing",
        description:
            "Comprehensive support in filing your copyright application to ensure compliance with regulatory standards.",
    },
    {
        title: "Ongoing Monitoring and Support",
        description:
            "Monitoring for potential infringements and guiding how to enforce your rights.",
    },
];

const CopyrightRegistrationContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    What is Copyright Registration?
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    Copyright Registration is a vital legal process that
                    protects your original creations, such as literary works,
                    music, art, software, and more. In Pakistan, copyright
                    registration is administered by the Intellectual Property
                    Organization of Pakistan (IPO-Pakistan). This process grants
                    creators exclusive rights over their works, allowing them to
                    control how their creations are used, reproduced, and
                    distributed.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Why is Copyright Registration Important?
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
                    Benefits of Copyright Registration in Pakistan
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
                    Steps for Copyright Registration in Pakistan
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
                    Ongoing Compliance for Registered Copyrights
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
                    How We Can Assist with Copyright Registration
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    At MIAN TAX ASSOCIATES, we specialize in guiding creators
                    and businesses through the copyright registration process,
                    offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={supportServices} />
                </div>
            </section>
        </article>
    );
};

export default CopyrightRegistrationContent;
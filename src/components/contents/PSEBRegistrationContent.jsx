import CheckNumCard from "../serviceContentsCard/CheckNumCard";

const registrationImportance = [
    {
        title: "Access to Incentives and Grants",
        description:
            "Registered companies can take advantage of various incentives, including tax exemptions, grants, and funding opportunities that can significantly reduce operational costs.",
    },
    {
        title: "Enhanced Market Visibility",
        description:
            "PSEB registration boosts your company’s credibility, making it more attractive to clients and investors, both locally and internationally.",
    },
    {
        title: "Support Services and Resources",
        description:
            "PSEB provides many support services, including market development assistance, training programs, and access to international certifications that can help companies improve their offerings.",
    },
    {
        title: "Facilitation in Government Contracts",
        description:
            "Registered companies are often prioritized for government IT projects and contracts, providing opportunities for growth and collaboration.",
    },
];

const registrationBenefits = [
    {
        title: "Tax Incentives and Benefits",
        description:
            "Companies registered with PSEB may be eligible for various tax incentives, including exemptions from specific taxes, which can result in significant cost savings.",
    },
    {
        title: "Access to International Markets",
        description:
            "PSEB facilitates participation in international trade fairs, exhibitions, and networking events, helping registered companies expand their global reach.",
    },
    {
        title: "Technical Support and Training",
        description:
            "PSEB offers technical assistance and training programs that help registered companies enhance their capabilities, improve service delivery, and stay competitive.",
    },
    {
        title: "Networking Opportunities",
        description:
            "Being part of the PSEB network allows companies to connect with other IT professionals, businesses, and potential clients, fostering collaboration and innovation.",
    },
];

const PSEBRegistrationContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    What is PSEB Registration?
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-6 space-y-5">
                    <p className="text-base leading-8 text-[#455468]">
                        PSEB Registration is the official process through which
                        IT companies register with the Pakistan Software Export
                        Board (PSEB). This government initiative is designed to
                        stimulate the growth and development of Pakistan’s
                        information technology (IT) and software development
                        sectors. By registering with PSEB, companies can access
                        a wide array of resources, incentives, and support
                        services to enhance their operational efficiency and
                        global competitiveness.
                    </p>

                    <p className="text-base leading-8 text-[#455468]">
                        The PSEB functions as a regulatory body that oversees
                        the IT sector and provides strategic support to
                        businesses in various ways. Registered companies can
                        benefit from financial incentives, including tax
                        exemptions and grants, designed to reduce operational
                        costs and encourage innovation. Additionally, PSEB
                        offers guidance on international certifications, market
                        development, and access to training programs that help
                        IT firms sharpen their skills and improve service
                        delivery.
                    </p>

                    <p className="text-base leading-8 text-[#455468]">
                        With PSEB registration, businesses gain credibility in
                        the marketplace, enabling them to attract local and
                        international clients more effectively. Furthermore,
                        registered firms often receive preferential treatment
                        in government contracts and projects, creating
                        additional opportunities for growth and collaboration
                        within the industry.
                    </p>

                    <p className="text-base leading-8 text-[#455468]">
                        By registering with the PSEB, IT companies position
                        themselves for success in a competitive landscape. They
                        leverage the board’s extensive network and resources to
                        thrive in both domestic and international markets.
                    </p>
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of PSEB Registration for IT Companies
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#455468]">
                    Registering with PSEB is essential for IT companies for
                    several key reasons:
                </p>

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
                    Benefits of PSEB Registration
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
        </article>
    );
};

export default PSEBRegistrationContent;
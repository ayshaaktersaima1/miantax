import CheckNumCard from "../serviceContentsCard/CheckNumCard";

const benefits = [
    {
        title: "Limited Liability",
        description:
            "One of the primary advantages of forming a Single Member Company is limited liability protection. The sole member’s liability is restricted to the amount they have invested in the company. In the event of business debts or legal issues, the owner’s personal assets are safeguarded from being pursued to satisfy the company’s obligations.",
    },
    {
        title: "Separate Legal Entity",
        description:
            "A Single Member Company (SMC) is recognized as a distinct legal entity independent from its owner. This separation allows the company to own property, enter into contracts, and conduct business in its name. The owner enjoys the benefits of operating a business without being personally liable for its debts or obligations.",
    },
    {
        title: "Simplicity and Control",
        description:
            "With only one member involved, decision-making processes are streamlined. The sole member has complete authority over all company operations, allowing for quick decisions and flexibility in management. This simplicity primarily benefits small businesses or startups looking for efficient governance.",
    },
    {
        title: "Perpetual Succession",
        description:
            "Similar to other forms of incorporated entities, a Single Member Company enjoys perpetual succession. This means the company continues to exist even if the sole member changes or passes away. This feature enhances business stability and makes the entity more attractive to potential investors and partners in the long run.",
    },
    {
        title: "Credibility and Professionalism",
        description:
            "operating as a Single Member Company (SMC) enhances your business’s credibility. Incorporation lends a professional image to your operations, making establishing relationships with clients, suppliers, and financial institutions more accessible. This added credibility can open doors to more business opportunities and facilitate access to financing.",
    },
    {
        title: "Tax Benefits",
        description:
            "A Single Member Company (SMC) can benefit from various tax advantages unavailable to sole proprietorships. The company is subject to corporate tax rates, which can be lower than individual income tax rates. Additionally, certain business expenses can be deducted from the company’s taxable income, providing further financial advantages.",
    },
];

const SingleMemberCompanyContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Overview
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-6 space-y-5">
                    <p className="text-base leading-8 text-[#455468]">
                        A Single Member Company (SMC) is a unique form of
                        business entity in Pakistan designed for entrepreneurs
                        who wish to operate their business as a separate legal
                        entity without the need for multiple shareholders. This
                        structure provides the benefits of limited liability
                        while allowing a single individual to have complete
                        control over the company’s operations.
                    </p>

                    <p className="text-base leading-8 text-[#455468]">
                        At MIAN TAX ASSOCIATES, we specialize in assisting
                        entrepreneurs with the registration and establishment of
                        Single Member Companies (SMC), ensuring compliance with
                        the legal framework set forth by the Securities and
                        Exchange Commission of Pakistan (SECP).
                    </p>
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Benefits of a Single Member Company
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
        </article>
    );
};

export default SingleMemberCompanyContent;
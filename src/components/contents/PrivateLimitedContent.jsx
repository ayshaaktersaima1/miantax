import CheckNumCard from "../serviceContentsCard/CheckNumCard";

const benefits = [
    {
        title: "Limited Liability",
        description:
            "One of the key advantages of a Private Limited Company is the principle of limited liability. This means that each shareholder’s financial liability is limited to the amount they have invested in the company. In business losses or insolvency, shareholders’ assets are protected, and their exposure to financial risk is confined to their initial capital contribution.",
    },
    {
        title: "Separate Legal Entity",
        description:
            "A Private Limited Company is recognized as a separate legal entity, distinct from its owners and shareholders. This separation provides multiple benefits, including the ability for the company to own property, enter into contracts, and sue or be sued independently. This legal status also makes the company more resilient, as its operations are not directly affected by changes in ownership or management.",
    },
    {
        title: "Perpetual Existence",
        description:
            "Unlike sole proprietorships or partnerships, which may dissolve upon the death or exit of an owner, a Private Limited Company enjoys perpetual existence. This means the company continues to operate regardless of changes in its shareholders or directors. The company’s continuity is precious for long-term ventures. It provides peace of mind for shareholders, knowing the business can be passed on to future generations or sold as a going concern.",
    },
    {
        title: "Increased Credibility",
        description:
            "Being registered as a Private Limited Company boosts your business’s credibility and reputation. An incorporated business is perceived as more stable and reliable by clients, investors, banks, and other stakeholders. This improved credibility can lead to better financing options, increased confidence from potential partners, and stronger relationships with customers who prefer dealing with a formal entity.",
    },
    {
        title: "Ownership Control",
        description:
            "In a Private Limited Company, ownership and control remain tightly held by the existing shareholders. Shares are not publicly traded, and any transfer of shares must be approved by the current shareholders. This ensures that ownership remains within a trusted circle and prevents hostile takeovers or unwanted third-party involvement. This level of control is ideal for family-owned businesses or close-knit partnerships that prioritize maintaining internal control over external influence.",
    },
];

const PrivateLimitedContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Overview
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-6 space-y-5">
                    <p className="text-base leading-8 text-[#455468]">
                        A Private Limited Company (Pvt. Ltd.) is the most popular
                        choice for small and medium-sized businesses in Pakistan,
                        thanks to its flexibility, limited liability protection,
                        and simplified management structure. This type of
                        company restricts the transfer of shares. It limits the
                        number of shareholders, making it an attractive and
                        secure option for entrepreneurs looking to mitigate
                        personal risk while benefiting from a formal business
                        structure.
                    </p>

                    <p className="text-base leading-8 text-[#455468]">
                        At MIAN TAX ASSOCIATES, we provide end-to-end assistance
                        in registering a Private Limited Company, guiding you
                        through every step—from choosing the right company name
                        to ensuring full legal compliance with the Securities
                        and Exchange Commission of Pakistan (SECP).
                    </p>
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Benefits of a Private Limited Company
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

export default PrivateLimitedContent;
import { FiCheck } from "react-icons/fi";
import SmallRoundNumCard from "../serviceContentsCard/SmallRoundNumCard";
import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckMarkCard from "../serviceContentsCard/CheckMarkCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const registrationBenefits = [
    "Legal protection and limited liability for business owners.",
    "Enhanced trust with customers, suppliers, and partners.",
    "Access to government contracts and tenders.",
    "Ability to open a business bank account.",
    "Long-term business sustainability and growth",
];

const companyTypes = [
    {
        title: "Private Limited Company (Pvt. Ltd.)",
        description:
            "A separate legal entity from its shareholders, offering limited liability protection to the owners.",
    },
    {
        title: "Public Limited Company",
        description:
            "This type of company can sell shares to the public and is subject to more regulations.",
    },
    {
        title: "Single Member Company (SMC)",
        description:
            "Similar to a private limited company with only one shareholder.",
    },
];

const registrationProcess = [
    {
        title: "Name Reservation",
        description:
            "Start by selecting a unique name for your company. You can check name Availability and reserve it through SECP’s e-services portal.",
    },
    {
        title: "Submission of Documents",
        description: "Prepare the following documents for submission:",
        points: [
            "Memorandum of Association (MOA): Outlines the company’s objectives.",
            "Articles of Association (AOA): Details the company’s internal regulations.",
            "Copies of CNIC (Computerized National Identity Cards) of the directors and shareholders.",
            "Form 1: Declaration of Compliance.",
            "Form 21: Notice of situation of registered office.",
            "Form 29: Particulars of directors, secretary, etc.",
        ],
    },
    {
        title: "Digital Signature and NTN",
        description:
            "You must obtain a National Tax Number (NTN) from the Federal Board of Revenue (FBR).",
    },
    {
        title: "Submit Online Application",
        description:
            "Register on SECP’s e-services portal, fill out the required forms, and submit your application and the required fees online.",
    },
    {
        title: "Issuance of Incorporation Certificate",
        description:
            "Once your documents are verified and approved, SECP will issue the certificate of incorporation, officially recognizing your company.",
    },
];

const postRegistrationRequirements = [
    {
        title: "Open a Business Bank Account",
        description:
            "Use your incorporation certificate to open a business account in your company’s name.",
    },
    {
        title: "Register for Sales Tax (if applicable)",
        description:
            "Depending on your business activities, you may need to register for sales tax with the Federal Board of Revenue.",
    },
    {
        title: "File Annual Returns",
        description:
            "Ensure you comply with SECP’s annual reporting requirements to avoid penalties.",
    },
];

const privateCompanyBenefits = [
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

const singleMemberBenefits = [
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

const soleProprietorshipBenefits = [
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

const soleProprietorshipSteps = [
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

const soleProprietorshipSupport = [
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

const complianceRequirements = [
    {
        title: "Annual Returns",
        description:
            "All registered companies are required to submit annual returns to the SECP. This includes filing the company’s financial statements and details of shareholders and directors. The returns must be filed within a specified time frame after the end of the financial year. Non-compliance can lead to penalties or legal action.",
    },
    {
        title: "Financial Statements",
        description:
            "Companies must prepare and submit their financial statements annually, which include the balance sheet, profit and loss account, cash flow statement, and notes to the accounts. These statements must be audited by a registered auditor and filed with the SECP within the prescribed deadline.",
    },
    {
        title: "Director’s Report",
        description:
            "Along with the financial statements, companies must provide a director’s report detailing the company’s performance, operations, and future outlook. This report must comply with the requirements set out in the Companies Act and provide an accurate and fair view of the company’s affairs.",
    },
    {
        title: "Meeting Requirements",
        description:
            "Companies must hold annual general meetings (AGMs) where shareholders can discuss company performance, approve financial statements, and make key decisions. Proper notice must be given to shareholders, and minutes of the meeting must be recorded and maintained.",
    },
    {
        title: "Change in Directors or Shareholders",
        description:
            "Any company directors or shareholders changes must be reported to the SECP. Companies must file the appropriate forms within a specified timeframe to update their records, ensuring accurate and current information is maintained.",
    },
    {
        title: "Maintenance of Statutory Registers",
        description:
            "Companies are required to maintain statutory registers, including registers of members, directors, and charges. These registers must be updated regularly to reflect any changes and should be kept at the registered office for inspection.",
    },
    {
        title: "Share Transfers",
        description:
            "Share transfers must be documented and reported to the SECP. Companies must maintain a register of share transfers and ensure that all transfers comply with the company’s articles of association.",
    },
    {
        title: "Disclosure Requirements",
        description:
            "Companies must comply with various disclosure requirements, including notifying the SECP of any significant changes in the company’s business, operations, or financial position. This includes disclosures related to related-party transactions, director remuneration, and important events that may affect the company.",
    },
    {
        title: "Compliance with Corporate Governance Codes",
        description:
            "Companies are expected to adhere to the corporate governance codes issued by the SECP. This includes establishing proper board structures, ensuring transparency in operations, and safeguarding shareholder rights.",
    },
];

const complianceSupport = [
    {
        title: "Consultation",
        description:
            "Tailored advice on compliance requirements based on your business structure.",
    },
    {
        title: "Document Preparation",
        description:
            "Assistance in preparing and filing necessary documents, including annual returns and financial statements.",
    },
    {
        title: "Record Maintenance",
        description:
            "Support maintaining statutory registers and ensuring proper documentation for meetings and decisions.",
    },
    {
        title: "Ongoing Compliance Support",
        description:
            "Regular updates and guidance on regulatory changes and compliance best practices.",
    },
];

const SectionHeading = ({ children }) => {
    return (
        <div className="mb-6">
            <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                {children}
            </h2>

            <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />
        </div>
    );
};

const CompanyRegistrationContent = () => {
    return (
        <article className="min-w-0 space-y-10">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <p className="text-base leading-8 text-[#243044]">
                    Starting a business in Pakistan requires legal compliance,
                    and registering your company is the first key step. This
                    guide outlines the company registration process, the
                    required documents, and the types of companies you can
                    register.
                </p>

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    Company registration provides your business with legal
                    standing, credibility, and access to various benefits,
                    including:
                </p>

                <div className="mt-6 grid gap-3">
                    {registrationBenefits.map((benefit) => (
                        <div
                            key={benefit}
                            className="flex items-start gap-3 rounded-xl bg-[#F8F7F4] px-4 py-3"
                        >
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D7A332] text-sm text-[#061D3A]">
                                <FiCheck />
                            </span>

                            <p className="text-sm leading-6 text-[#243044] md:text-base">
                                {benefit}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <SectionHeading>
                    Types of Companies You Can Register:
                </SectionHeading>

                <p className="mb-7 text-base leading-8 text-[#243044]">
                    In Pakistan, you can choose to register your company under
                    several categories, depending on your business structure
                    and needs:
                </p>

                <SmallRoundNumCard items={companyTypes} />
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <SectionHeading>
                    Process for Company Registration:
                </SectionHeading>

                <p className="mb-7 text-base leading-8 text-[#243044]">
                    The Securities and Exchange Commission of Pakistan (SECP)
                    is the governing body responsible for company registration.
                    Here’s how you can register a company in Pakistan:
                </p>

                <div className="space-y-5">
                    {registrationProcess.map((step, index) => (
                        <BigRoundNumCard
                            key={step.title}
                            step={step}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <SectionHeading>
                    Post-Registration Requirements:
                </SectionHeading>

                <p className="mb-7 text-base leading-8 text-[#243044]">
                    Once your company is registered, there are a few essential
                    post-registration steps to follow:
                </p>

                <SmallRoundNumCard items={postRegistrationRequirements} />
            </section>

            <section className="rounded-3xl bg-[#061D3A] p-6 text-white md:p-8">
                <SectionHeading>
                    <span className="text-white">
                        Why Choose Our Services for Company Registration?
                    </span>
                </SectionHeading>

                <p className="text-base leading-8 text-white/75">
                    Registering a company can be complex and time-consuming.
                    Our expert consultancy services streamline the entire
                    process for you. From name reservation to document
                    submission and post-registration support, we ensure a
                    hassle-free experience.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <SectionHeading>Private Limited Company</SectionHeading>

                <h3 className="text-xl font-semibold text-[#061D3A]">
                    Overview
                </h3>

                <p className="mt-4 text-base leading-8 text-[#243044]">
                    A Private Limited Company (Pvt. Ltd.) is the most popular
                    choice for small and medium-sized businesses in Pakistan,
                    thanks to its flexibility, limited liability protection,
                    and simplified management structure. This type of company
                    restricts the transfer of shares. It limits the number of
                    shareholders, making it an attractive and secure option for
                    entrepreneurs looking to mitigate personal risk while
                    benefiting from a formal business structure.
                </p>

                <p className="mt-5 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we provide end-to-end assistance in
                    registering a Private Limited Company, guiding you through
                    every step—from choosing the right company name to ensuring
                    full legal compliance with the Securities and Exchange
                    Commission of Pakistan (SECP).
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <SectionHeading>
                    Benefits of a Private Limited Company
                </SectionHeading>

                <CheckMarkCard items={privateCompanyBenefits} />
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <SectionHeading>Single Member Company</SectionHeading>

                <h3 className="text-xl font-semibold text-[#061D3A]">
                    Overview
                </h3>

                <p className="mt-4 text-base leading-8 text-[#243044]">
                    A Single Member Company (SMC) is a unique form of business
                    entity in Pakistan designed for entrepreneurs who wish to
                    operate their business as a separate legal entity without
                    the need for multiple shareholders. This structure provides
                    the benefits of limited liability while allowing a single
                    individual to have complete control over the company’s
                    operations.
                </p>

                <p className="mt-5 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we specialize in assisting
                    entrepreneurs with the registration and establishment of
                    Single Member Companies (SMC), ensuring compliance with the
                    legal framework set forth by the Securities and Exchange
                    Commission of Pakistan (SECP).
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <SectionHeading>
                    Benefits of a Single Member Company
                </SectionHeading>

                <CheckMarkCard items={singleMemberBenefits} />
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <SectionHeading>
                    Sole Proprietorship Registration
                </SectionHeading>

                <h3 className="text-xl font-semibold text-[#061D3A]">
                    Overview
                </h3>

                <p className="mt-4 text-base leading-8 text-[#243044]">
                    A Sole Proprietorship is the simplest form of business
                    structure in Pakistan. It allows an individual to operate a
                    business under their own name without forming a separate
                    legal entity. Due to its ease of setup and minimal
                    regulatory requirements, this structure is particularly
                    popular among freelancers, consultants, and small business
                    owners.
                </p>

                <p className="mt-5 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we provide guidance and assistance
                    to help you establish a Sole Proprietorship, ensure
                    compliance with local regulations, and facilitate a smooth
                    start to your business journey.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <SectionHeading>
                    Benefits of a Sole Proprietorship
                </SectionHeading>

                <CheckMarkCard items={soleProprietorshipBenefits} />
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <SectionHeading>
                    Steps for Registering a Sole Proprietorship
                </SectionHeading>

                <SmallRoundNumCard items={soleProprietorshipSteps} />
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <SectionHeading>How We Can Help</SectionHeading>

                <p className="mb-7 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we offer a range of services to
                    assist with Sole Proprietorship registration and ongoing
                    support, including:
                </p>

                <CheckMarkCard items={soleProprietorshipSupport} />
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <SectionHeading>SECP Compliance</SectionHeading>

                <h3 className="text-xl font-semibold text-[#061D3A]">
                    Overview
                </h3>

                <p className="mt-4 text-base leading-8 text-[#243044]">
                    The Securities and Exchange Commission of Pakistan (SECP)
                    is the regulatory authority overseeing corporate sector
                    compliance in Pakistan. All registered companies, including
                    Private Limited, Single Member, and Public Limited, must
                    adhere to the SECP’s regulations to ensure transparency,
                    accountability, and good governance. Compliance with SECP
                    regulations is crucial for maintaining a company’s legal
                    status and avoiding penalties.
                </p>

                <p className="mt-5 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we provide expert guidance on SECP
                    compliance, helping businesses navigate regulatory
                    requirements efficiently.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <SectionHeading>
                    Key Compliance Requirements
                </SectionHeading>

                <SmallRoundNumCard items={complianceRequirements} />
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <SectionHeading>How We Can Help</SectionHeading>

                <p className="mb-7 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we offer comprehensive compliance
                    services to assist businesses in meeting their SECP
                    obligations, including:
                </p>

                <HelpCard services={complianceSupport} />
            </section>
        </article>
    );
};

export default CompanyRegistrationContent;
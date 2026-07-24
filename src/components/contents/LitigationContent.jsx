import BigRoundNumCard from "../serviceContentsCard/BigRoundNumCard";
import CheckMarkCard from "../serviceContentsCard/CheckMarkCard";
import CheckNumCard from "../serviceContentsCard/CheckNumCard";
import HelpCard from "../serviceContentsCard/HelpCard";

const litigationImportance = [
    {
        title: "Protection of Taxpayer Rights",
        description:
            "Tax litigation is a crucial mechanism for safeguarding taxpayers’ rights. It allows individuals and businesses to contest unfair tax assessments, penalties, and other actions taken by tax authorities.",
    },
    {
        title: "Clarity on Tax Obligations",
        description:
            "Engaging in tax litigation can clarify your tax obligations, ensure compliance with laws and regulations, and help you understand your legal rights.",
    },
    {
        title: "Financial Recovery",
        description:
            "Through tax litigation, taxpayers may recover amounts overpaid or contest unjust penalties, mitigating potential financial losses.",
    },
    {
        title: "Influencing Tax Policy",
        description:
            "Tax litigation can establish legal precedents that shape tax policy and practice, benefiting other taxpayers and influencing future regulations.",
    },
];

const litigationBenefits = [
    {
        title: "Expertise in Tax Law",
        description:
            "Experienced tax litigators have extensive knowledge of tax laws and regulations, providing valuable guidance and strategic insights tailored to your case.",
    },
    {
        title: "Thorough Case Evaluation",
        description:
            "A comprehensive assessment of your tax situation helps identify potential weaknesses and strengths, leading to a well-prepared litigation strategy.",
    },
    {
        title: "Effective Legal Representation",
        description:
            "Skilled litigators represent your interests before tax authorities and courts, significantly increasing your chances of achieving a favorable outcome.",
    },
    {
        title: "Negotiation Skills",
        description:
            "Tax professionals can negotiate settlements on your behalf, potentially avoiding lengthy litigation and reducing financial penalties.",
    },
];

const litigationGrounds = [
    {
        title: "Disputed Tax Assessments",
        description:
            "Taxpayers often contest assessments the FBR makes that exceed their actual tax liability or misinterpret the applicable laws.",
    },
    {
        title: "Claims for Tax Refunds",
        description:
            "Disputes may arise over denied tax refund claims, particularly in cases of overpayment or erroneous assessments.",
    },
    {
        title: "Penalty Challenges",
        description:
            "Taxpayers may challenge penalties for alleged late payments, non-compliance, or filing errors.",
    },
    {
        title: "Tax Exemption and Deduction Disputes",
        description:
            "Disagreements over eligibility for tax exemptions, deductions, or credits can lead to litigation.",
    },
    {
        title: "Transfer Pricing Disputes",
        description:
            "Companies involved in cross-border transactions may face litigation related to transfer pricing adjustments imposed by tax authorities.",
    },
];

const litigationSteps = [
    {
        title: "Gather Documentation",
        description:
            "Collect all relevant documentation, including tax returns, correspondence with tax authorities, and evidence supporting your position.",
    },
    {
        title: "File an Appeal",
        description:
            "If you disagree with a tax assessment or decision, file an appeal with the appropriate tax authority or tribunal within the designated timeframe.",
    },
    {
        title: "Prepare Legal Arguments",
        description:
            "Develop strong arguments backed by evidence and relevant tax laws to bolster your case.",
    },
    {
        title: "Representation at Hearings",
        description:
            "Attend hearings and effectively present your case, addressing any inquiries from tax officials or the tribunal.",
    },
    {
        title: "Await the Decision",
        description:
            "After the hearing, await the ruling from the tax authority or tribunal. If the outcome is unfavorable, consider the options for further appeals.",
    },
];

const litigationSupport = [
    {
        title: "Consultation Services",
        description:
            "Expert analysis of your tax situation and potential strategies for litigation.",
    },
    {
        title: "Case Assessment",
        description:
            "Detailed review of your case to identify strengths and areas of concern.",
    },
    {
        title: "Legal Representation",
        description:
            "Skilled advocacy in negotiations and hearings with tax authorities and appellate tribunals.",
    },
    {
        title: "Post-Litigation Guidance",
        description:
            "Support for compliance and tax planning to minimize the risk of future disputes.",
    },
];

const appealImportance = [
    {
        title: "Protection of Taxpayer Rights",
        description:
            "Filing an appeal allows taxpayers to assert their rights against potentially erroneous tax assessments or decisions made by tax authorities, ensuring fair treatment.",
    },
    {
        title: "Financial Recovery",
        description:
            "Appeals can help taxpayers recover overpaid taxes or reverse unjust penalties, helping them maintain their financial stability.",
    },
    {
        title: "Clarification of Tax Obligations",
        description:
            "The appeal process can clarify taxpayers’ obligations, clarifying their rights and responsibilities under tax law.",
    },
    {
        title: "Establishing Legal Precedents",
        description:
            "Appeals contribute to the development of tax law and can set important legal precedents that benefit other taxpayers in similar situations.",
    },
];

const appealBenefits = [
    {
        title: "Expertise in Tax Law",
        description:
            "Tax professionals possess extensive knowledge of income tax and sales tax laws, providing strategic guidance tailored to your specific case.",
    },
    {
        title: "Thorough Case Assessment",
        description:
            "A detailed evaluation of your case helps identify your position’s strengths and weaknesses, leading to a well-prepared appeal.",
    },
    {
        title: "Effective Representation",
        description:
            "Skilled professionals represent your interests during hearings and negotiations with tax authorities, increasing your chances of a favorable outcome.",
    },
    {
        title: "Negotiation Skills",
        description:
            "Tax experts can negotiate on your behalf, seeking settlements or adjustments to tax assessments that may avoid lengthy litigation.",
    },
];

const appealGrounds = [
    {
        title: "Disputed Tax Assessments",
        description:
            "Taxpayers often appeal against assessments that misinterpret income, expenses, or applicable tax laws, leading to inflated tax liabilities.",
    },
    {
        title: "Claim Denials",
        description:
            "Appeals may arise from denying tax deductions, credits, or exemptions that taxpayers believe they are entitled to.",
    },
    {
        title: "Penalties and Fines",
        description:
            "Taxpayers may contest penalties for alleged late filing, non-compliance, or inaccuracies in tax returns.",
    },
    {
        title: "Audit Findings",
        description:
            "Appeals can be filed against findings from tax audits that result in additional tax assessments or penalties.",
    },
    {
        title: "Sales Tax Disputes",
        description:
            "Issues related to sales tax refunds, adjustments, or assessments can also be grounds for filing appeals.",
    },
];

const appealSteps = [
    {
        title: "Review the Assessment Notice",
        description:
            "Carefully review the notice of assessment from the tax authority to understand the basis for the decision.",
    },
    {
        title: "Gather Documentation",
        description:
            "Collect all relevant documentation, including tax returns, correspondence with the tax authority, and evidence supporting your position.",
    },
    {
        title: "Draft the Appeal",
        description:
            "Prepare a formal appeal letter outlining the grounds for your appeal, including relevant facts and legal arguments.",
    },
    {
        title: "File the Appeal",
        description:
            "Submit your appeal to the appropriate tax authority or tribunal within the prescribed timeframe, ensuring compliance with procedural requirements.",
    },
    {
        title: "Attend Hearings",
        description:
            "Participate in hearings to present your case, addressing any questions or concerns the tax officials or tribunal members raise.",
    },
    {
        title: "Await the Decision",
        description:
            "After the hearing, await the decision on your appeal. If the outcome is unfavorable, explore further appeal options, if applicable.",
    },
];

const appealSupport = [
    {
        title: "Consultation Services",
        description:
            "Expert analysis of your tax situation and potential strategies for your appeal.",
    },
    {
        title: "Case Preparation",
        description:
            "Thorough preparation of your appeal, including documentation and legal arguments.",
    },
    {
        title: "Representation",
        description:
            "Skilled advocacy in hearings and negotiations with tax authorities.",
    },
    {
        title: "Post-Appeal Support",
        description:
            "Guidance on compliance and future tax planning to minimize risks.",
    },
];

const incomeTaxNotices = [
    {
        title: "Assessment Notices",
        description:
            "Issued to inform taxpayers of the income tax assessment based on their filed returns or audits.",
    },
    {
        title: "Demand Notices",
        description:
            "Indicate the tax amount owed, including penalties for late payments or discrepancies.",
    },
    {
        title: "Inquiry Notices",
        description:
            "Request additional information or documentation about a specific tax year or transaction.",
    },
];

const salesTaxNotices = [
    {
        title: "Show Cause Notices",
        description:
            "Issued to inform taxpayers of non-compliance or discrepancies in their sales tax filings and require a response.",
    },
    {
        title: "Audit Notices",
        description:
            "Notify taxpayers of an upcoming audit regarding their sales tax records and transactions.",
    },
    {
        title: "Demand Notices",
        description:
            "Indicate the amount of sales tax owed, including any penalties for non-compliance.",
    },
];

const noticeImportance = [
    {
        title: "Compliance with Tax Laws",
        description:
            "Promptly responding to tax notices is essential for compliance with tax laws and regulations. Ignoring notices can lead to further legal action, penalties, or additional assessments.",
    },
    {
        title: "Avoiding Financial Penalties",
        description:
            "Timely and accurate responses can help mitigate or eliminate potential financial penalties associated with non-compliance or discrepancies.",
    },
    {
        title: "Clarifying Tax Obligations",
        description:
            "Addressing notices allows taxpayers to clarify their tax obligations, ensuring a better understanding of their rights and responsibilities.",
    },
    {
        title: "Preserving Taxpayer Rights",
        description:
            "Responding effectively can protect taxpayer rights and provide an opportunity to contest any unjust claims or assessments.",
    },
];

const noticeReasons = [
    {
        title: "Discrepancies in Tax Returns",
        description:
            "Notices may be issued due to inconsistencies or errors in the information reported on tax returns.",
    },
    {
        title: "Late Filings or Payments",
        description:
            "Taxpayers who fail to file returns or make timely payments may receive demand notices or penalties.",
    },
    {
        title: "Audits and Investigations",
        description:
            "Random audits or investigations into specific transactions can trigger notices requiring additional documentation or explanations.",
    },
    {
        title: "Unreported Income or Sales",
        description:
            "Notices may arise if tax authorities identify potential unreported income or sales transactions.",
    },
];

const noticeSteps = [
    {
        title: "Review the Notice Carefully",
        description:
            "Thoroughly read the notice to understand the nature of the issue, the required actions, and the deadlines involved.",
    },
    {
        title: "Gather Relevant Documentation",
        description:
            "Collect all necessary documents related to the notice, such as tax returns, financial records, and correspondence with tax authorities.",
    },
    {
        title: "Consult a Tax Professional",
        description:
            "Seek advice from a qualified tax consultant or lawyer to assess your situation and determine the best action.",
    },
    {
        title: "Prepare Your Response",
        description:
            "Draft a clear and concise response addressing the concerns raised in the notice, including any supporting documentation or explanations.",
    },
    {
        title: "Submit Your Response",
        description:
            "Send your response to the relevant tax authority within the specified timeframe to ensure compliance and avoid penalties.",
    },
    {
        title: "Follow Up",
        description:
            "Monitor the status of your response and be prepared for any follow-up inquiries or actions from tax authorities.",
    },
];

const noticeSupport = [
    {
        title: "Consultation Services",
        description:
            "Expert analysis of your notice and guidance on your rights and obligations.",
    },
    {
        title: "Documentation Support",
        description:
            "Assistance in gathering and preparing the necessary documentation to respond effectively.",
    },
    {
        title: "Response Preparation",
        description:
            "Drafting clear and persuasive responses to address the concerns raised in the notice.",
    },
    {
        title: "Representation",
        description:
            "Skilled representation in communications with tax authorities to advocate for your interests.",
    },
];

const incomeTaxAudits = [
    {
        title: "Routine Audits",
        description:
            "Conducted periodically on a random basis to ensure compliance among taxpayers.",
    },
    {
        title: "Targeted Audits",
        description:
            "Focused on specific taxpayers or sectors that exhibit signs of non-compliance or discrepancies in tax reporting.",
    },
    {
        title: "Post-Audit Assessments",
        description:
            "Occur after filing a return to verify the accuracy of reported information and claims.",
    },
];

const salesTaxAudits = [
    {
        title: "Compliance Audits",
        description:
            "Assess whether businesses comply with sales tax laws, including accurate sales reporting and proper collection of sales tax.",
    },
    {
        title: "Risk-Based Audits",
        description:
            "Target specific industries or sectors identified as high-risk for non-compliance based on historical data.",
    },
    {
        title: "Desk Audits",
        description:
            "Conducted primarily through documentation review without an on-site visit, focusing on submitted returns and records.",
    },
];

const auditImportance = [
    {
        title: "Ensuring Compliance",
        description:
            "Audits help ensure taxpayers comply with tax laws and regulations, promoting fairness in the tax system.",
    },
    {
        title: "Identifying Errors or Fraud",
        description:
            "Audits can uncover errors in tax reporting or potential fraud, allowing taxpayers to rectify issues before they lead to significant penalties.",
    },
    {
        title: "Providing Clarity on Tax Obligations",
        description:
            "The audit process can clarify tax obligations, helping taxpayers understand their legal responsibilities.",
    },
    {
        title: "Opportunity for Improvement",
        description:
            "Audits provide insights into areas for improvement in financial record-keeping and tax compliance practices.",
    },
];

const auditTriggers = [
    {
        title: "Inconsistencies in Reporting",
        description:
            "Discrepancies between reported income, expenses, and tax returns can trigger audits.",
    },
    {
        title: "High Deductions or Exemptions",
        description:
            "Claims for unusually high deductions or exemptions may raise red flags for tax authorities.",
    },
    {
        title: "Large Transactions",
        description:
            "Significant transactions, particularly in cash, can attract scrutiny and lead to audits.",
    },
    {
        title: "Industry-Specific Risks",
        description:
            "Specific industries may be more prone to audits due to historical non-compliance or high fraud rates.",
    },
];

const auditSteps = [
    {
        title: "Gather Documentation",
        description:
            "Collect all relevant documents, including tax returns, financial statements, receipts, and supporting documentation for deductions and credits.",
    },
    {
        title: "Review Records",
        description:
            "Conduct a thorough review of your financial records to ensure accuracy and identify any discrepancies before the audit.",
    },
    {
        title: "Consult a Tax Professional",
        description:
            "Seek guidance from a qualified tax consultant or lawyer to prepare for the audit and understand your rights and responsibilities.",
    },
    {
        title: "Be Responsive and Cooperative",
        description:
            "During the audit, cooperate fully with tax authorities, promptly providing requested documentation and information.",
    },
    {
        title: "Address Issues Promptly",
        description:
            "If discrepancies are identified during the audit, address them immediately to mitigate potential penalties.",
    },
];

const auditSupport = [
    {
        title: "Consultation Services",
        description:
            "Expert advice on audit preparation and your rights as a taxpayer.",
    },
    {
        title: "Documentation Support",
        description:
            "Assistance in gathering and organizing necessary documentation for the audit.",
    },
    {
        title: "Audit Representation",
        description:
            "Skilled representation to advocate for your interests during the audit process.",
    },
    {
        title: "Post-Audit Guidance",
        description:
            "Help in addressing findings and recommendations from the audit to ensure compliance moving forward.",
    },
];

const incomeTaxRefunds = [
    {
        title: "Overpayment Refunds",
        description:
            "Issued when taxpayers have paid more tax than their actual liability, often due to withholding tax or excess payments.",
    },
    {
        title: "Refunds Due to Adjustments",
        description:
            "Issued when taxpayers correct errors or discrepancies in their previously filed tax returns.",
    },
    {
        title: "Refunds for Tax Credits",
        description:
            "These are available when taxpayers qualify for specific tax credits that reduce their overall tax liability.",
    },
];

const salesTaxRefunds = [
    {
        title: "Export Refunds",
        description:
            "Issued to exporters who pay sales tax on goods and services purchased for export, allowing them to recover tax paid.",
    },
    {
        title: "Input Tax Refunds",
        description:
            "Available for businesses that have paid sales tax on inputs but have lower sales tax liability or no sales tax on their outputs.",
    },
    {
        title: "Refunds Due to Returns",
        description:
            "Issued when customers return goods, resulting in excess sales tax collected.",
    },
];

const refundImportance = [
    {
        title: "Improved Cash Flow",
        description:
            "Tax refunds can significantly enhance cash flow for individuals and businesses, providing necessary funds for operations or personal expenses.",
    },
    {
        title: "Encouragement of Compliance",
        description:
            "A clear refund process encourages taxpayers to comply with tax laws, knowing they can reclaim overpaid amounts.",
    },
    {
        title: "Correction of Errors",
        description:
            "Refunds provide a mechanism for correcting errors in tax filings, ensuring that taxpayers are not penalized for honest mistakes.",
    },
    {
        title: "Support for Businesses",
        description:
            "Refunds can be particularly beneficial for businesses, allowing them to reinvest in operations or manage day-to-day expenses more effectively.",
    },
];

const refundReasons = [
    {
        title: "Excess Tax Withholding",
        description:
            "Employees may have had too much tax withheld from their salaries, resulting in a refund when they file their returns.",
    },
    {
        title: "Business Losses",
        description:
            "Businesses that report losses may be eligible for refunds based on prior tax payments.",
    },
    {
        title: "Claiming Deductions and Credits",
        description:
            "Taxpayers who qualify for deductions or credits that reduce their tax liability may receive refunds.",
    },
    {
        title: "Export Activities",
        description:
            "Exporters can claim refunds for sales tax paid on goods purchased for export purposes.",
    },
];

const refundSteps = [
    {
        title: "Determine Eligibility",
        description:
            "Review your tax payments and filings to determine if you qualify for a refund based on overpayments, deductions, or credits.",
    },
    {
        title: "Gather Documentation",
        description:
            "Collect all necessary documents, including tax returns, proof of payments, and any supporting documentation for deductions or credits.",
    },
    {
        title: "File a Refund Application",
        description:
            "Submit your refund application to the FBR or relevant provincial tax authority, ensuring that all required information and documentation are included.",
    },
    {
        title: "Follow Up on Your Application",
        description:
            "You can monitor the status of your refund application by checking with the tax authority or through their online portal, if available.",
    },
    {
        title: "Respond to Inquiries",
        description:
            "Be prepared to provide additional information or clarification if the tax authorities request it while reviewing your refund application.",
    },
];

const refundSupport = [
    {
        title: "Consultation Services",
        description:
            "Expert advice on your refund eligibility and the application process.",
    },
    {
        title: "Documentation Support",
        description:
            "Assistance in gathering and organizing necessary documentation to support your refund claim.",
    },
    {
        title: "Application Preparation",
        description:
            "Help in preparing and filing your refund application accurately and efficiently.",
    },
    {
        title: "Follow-Up Services",
        description:
            "Support in monitoring the status of your refund and addressing any inquiries from tax authorities.",
    },
];

const TaxLitigationContent = () => {
    return (
        <article className="min-w-0 space-y-8">
            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h1 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    What is Tax Litigation?
                </h1>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    Tax Litigation is the legal process through which taxpayers
                    challenge decisions made by tax authorities regarding tax
                    assessments, liabilities, and penalties. In Pakistan, tax
                    litigation primarily involves disputes with the Federal
                    Board of Revenue (FBR) or the Tax Appellate Tribunal.
                    Understanding the intricacies of tax litigation is essential
                    for individuals and businesses to protect their rights and
                    manage their tax obligations effectively.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Why is Tax Litigation Important?
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {litigationImportance.map((item, index) => (
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
                    Benefits of Professional Tax Litigation Services
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {litigationBenefits.map((item, index) => (
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
                    Common Grounds for Tax Litigation in Pakistan
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {litigationGrounds.map((item, index) => (
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
                    Steps Involved in the Tax Litigation Process
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {litigationSteps.map((step, index) => (
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
                    How We Can Assist with Tax Litigation
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we provide comprehensive tax
                    litigation services, offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={litigationSupport} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Income Tax and Sales Tax Appeals in Pakistan: Safeguard Your
                    Financial Interests
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <h3 className="mt-6 text-2xl font-semibold text-[#061D3A]">
                    What are Income Tax and Sales Tax Appeals?
                </h3>

                <p className="mt-4 text-base leading-8 text-[#243044]">
                    Income Tax and Sales Tax Appeals refer to the formal process
                    through which taxpayers contest decisions made by tax
                    authorities regarding their income tax or sales tax
                    assessments. In Pakistan, these appeals are typically filed
                    with the Federal Board of Revenue (FBR) or the Tax Appellate
                    Tribunal when taxpayers believe their tax assessments are
                    incorrect or unjust. Understanding the appeal process is
                    essential for individuals and businesses to protect their
                    financial interests and ensure compliance with tax laws.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of Filing Appeals
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {appealImportance.map((item, index) => (
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
                    Benefits of Professional Assistance in Tax Appeals
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {appealBenefits.map((item, index) => (
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
                    Common Grounds for Income Tax and Sales Tax Appeals
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {appealGrounds.map((item, index) => (
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
                    Steps in the Tax Appeal Process
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {appealSteps.map((step, index) => (
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
                    How We Can Help with Tax Appeals
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we specialize in providing
                    comprehensive assistance with Income Tax and Sales Tax
                    Appeals, offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={appealSupport} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Income Tax and Sales Tax Notices in Pakistan:
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <h3 className="mt-6 text-2xl font-semibold text-[#061D3A]">
                    What are Income Tax and Sales Tax Notices?
                </h3>

                <p className="mt-4 text-base leading-8 text-[#243044]">
                    Income Tax and Sales Tax Notices are formal communications
                    issued by the Federal Board of Revenue (FBR) or provincial
                    tax authorities in Pakistan. These notices inform taxpayers
                    about issues related to their tax filings, assessments,
                    compliance requirements, or potential violations.
                    Understanding these notices is crucial for taxpayers to
                    respond appropriately and protect their financial interests.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Types of Tax Notices
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <h3 className="mt-8 text-2xl font-semibold text-[#061D3A]">
                    Income Tax Notices
                </h3>

                <div className="mt-5">
                    <CheckMarkCard items={incomeTaxNotices} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#061D3A]">
                    Sales Tax Notices
                </h3>

                <div className="mt-5">
                    <CheckMarkCard items={salesTaxNotices} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of Responding to Tax Notices
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {noticeImportance.map((item, index) => (
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
                    Common Reasons for Receiving Tax Notices
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {noticeReasons.map((item, index) => (
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
                    Steps to Take When Receiving a Tax Notice
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {noticeSteps.map((step, index) => (
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
                    How We Can Assist with Tax Notices
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we specialize in providing
                    comprehensive assistance with Income Tax and Sales Tax
                    Notices, offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={noticeSupport} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Income Tax and Sales Tax Audits
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <h3 className="mt-6 text-2xl font-semibold text-[#061D3A]">
                    What is an Income Tax and Sales Tax Audit?
                </h3>

                <p className="mt-4 text-base leading-8 text-[#243044]">
                    Income Tax and Sales Tax Audits are formal examinations
                    conducted by the Federal Board of Revenue (FBR) or provincial
                    tax authorities to assess taxpayers’ compliance with tax
                    laws and regulations. These audits aim to ensure taxpayers
                    accurately report their income, expenses, and sales and
                    fulfill their tax obligations. Understanding the audit
                    process is crucial for individuals and businesses to
                    navigate potential challenges and protect their financial
                    interests.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Types of Tax Audits
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <h3 className="mt-8 text-2xl font-semibold text-[#061D3A]">
                    Income Tax Audits
                </h3>

                <div className="mt-5">
                    <CheckMarkCard items={incomeTaxAudits} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#061D3A]">
                    Sales Tax Audits
                </h3>

                <div className="mt-5">
                    <CheckMarkCard items={salesTaxAudits} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of Tax Audits
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {auditImportance.map((item, index) => (
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
                    Common Triggers for Income Tax and Sales Tax Audits
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {auditTriggers.map((item, index) => (
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
                    Steps to Prepare for a Tax Audit
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {auditSteps.map((step, index) => (
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
                    How We Can Help with Tax Audits
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we specialize in providing
                    comprehensive assistance with Income Tax and Sales Tax
                    Audits, offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={auditSupport} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Income Tax and Sales Tax Refunds
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <h3 className="mt-6 text-2xl font-semibold text-[#061D3A]">
                    What are Income Tax and Sales Tax Refunds?
                </h3>

                <p className="mt-4 text-base leading-8 text-[#243044]">
                    Income Tax and Sales Tax Refunds refer to the amounts
                    reimbursed to taxpayers when they have overpaid their taxes
                    or are eligible for refunds due to various reasons, such as
                    adjustments, credits, or deductions. In Pakistan, taxpayers
                    can file for refunds with the Federal Board of Revenue (FBR)
                    or provincial tax authorities when they believe they are
                    entitled to a reimbursement. Understanding the refund
                    process is essential for individuals and businesses to
                    manage their cash flow effectively and ensure compliance
                    with tax regulations.
                </p>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Types of Refunds
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <h3 className="mt-8 text-2xl font-semibold text-[#061D3A]">
                    Income Tax Refunds
                </h3>

                <div className="mt-5">
                    <CheckMarkCard items={incomeTaxRefunds} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#061D3A]">
                    Sales Tax Refunds
                </h3>

                <div className="mt-5">
                    <CheckMarkCard items={salesTaxRefunds} />
                </div>
            </section>

            <section className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#061D3A] md:text-4xl">
                    Importance of Tax Refunds
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {refundImportance.map((item, index) => (
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
                    Common Reasons for Income Tax and Sales Tax Refunds
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {refundReasons.map((item, index) => (
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
                    Steps to Claim a Tax Refund
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <div className="mt-8 space-y-5">
                    {refundSteps.map((step, index) => (
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
                    How We Can Assist with Tax Refunds
                </h2>

                <div className="mt-4 h-0.5 w-14 bg-[#D7A332]" />

                <p className="mt-6 text-base leading-8 text-[#243044]">
                    At MIAN TAX ASSOCIATES, we specialize in providing
                    comprehensive assistance with Income Tax and Sales Tax
                    Refunds, offering:
                </p>

                <div className="mt-7">
                    <HelpCard services={refundSupport} />
                </div>
            </section>
        </article>
    );
};

export default TaxLitigationContent;
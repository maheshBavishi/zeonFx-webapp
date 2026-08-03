import React from 'react';
import styles from './termsConditions.module.scss';
import ButtonText from '@/components/buttonText';

export default function TermsConditions() {
    return (
        <div className={styles.termsConditions}>
            <div className='container'>
                <div className={styles.center}>
                    <ButtonText text="Legal" />
                </div>
                <h1>Terms & Conditions</h1>

                <div className={styles.contentWrapper}>
                    <p className={styles.lastUpdated}>(Last updated: 30 June 2026)</p>
                    <p className={styles.introText}>
                        These Terms and Conditions (the “Terms” or this “Agreement”) govern the relationship between ZeonFX Limited, a company registered in Saint Lucia under Registration Number 2026-00156, with its registered office at Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros Islet, Saint Lucia (referred to as “ZeonFX”, “the Company”, “we”, “us”, or “our”), and any individual or entity who accesses our website, registers or operates a trading account, or uses any of our services (referred to as “you”, “the Client”, or “the Account Holder”). Please read these Terms carefully. By opening an account or using our services, you confirm that you have read, understood, and agreed to be bound by them.
                    </p>

                    <div className={styles.section}>
                        <h2>1. Introduction and scope</h2>
                        <p>
                            This Agreement sets out the terms on which ZeonFX provides access to trading in foreign exchange and contracts for difference (CFDs) across the instruments made available on our platforms, execution-only trading on the date you accept these Terms, whether by registering an account, funding it, or placing a trade, and remains in force for the duration of your relationship with the Company and is enforceable in accordance with these Terms.
                        </p>
                        <p>
                            ZeonFX operates on an execution-only basis. This means we act on your instructions to execute transactions and do not provide investment advice, portfolio management, or personal recommendations. Any decision to trade is made by you alone. These Terms should be read together with our Risk Disclosure, Privacy Policy, AML Policy, Restricted Countries page, and the specific terms of any promotion you choose to participate in, all of which form part of your agreement with us.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>2. Definitions</h2>
                        <p>
                            In this Agreement, unless the context requires otherwise: “Account” means a trading account held with ZeonFX; “Services” means access to the CFD and forex trading instruments and features provided by the Company; “Platforms” means MetaTrader 5, the ZeonFX Web Terminal, and any other trading software the Company makes available; “Balance” means the total funds in your Account; “Equity” means your Balance adjusted for unrealised profits or losses of open positions; “Margin” means the funds required to open and maintain a position; “Leverage” means the ratio between the value of a position and the margin required to hold it; and “Effective Date” means the date on which you accept these Terms.
                        </p>
                        <p>
                            References to writing include email and electronic messages within the client portal. Headings are for convenience only and do not affect interpretation. Words in the singular include the plural and vice versa.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>3. Eligibility</h2>
                        <p>
                            The Services are available only to individuals who are at least eighteen (18) years of age and who have full legal capacity to enter into a binding contract in their jurisdiction. By opening an Account, you represent and warrant that you meet these requirements and that all information you provide is accurate, current, and complete.
                        </p>
                        <p>
                            ZeonFX does not offer services to residents or citizens of restricted jurisdictions, which currently include the United States, Cuba, Iran, Myanmar, North Korea, Sudan, and the United Arab Emirates, as set out in full on our Restricted Countries page, nor to any person in any country where providing the Services would be contrary to local law. You are responsible for ensuring that your use of the Services is lawful where you reside. The Company may refuse to open, or may close, any Account that does not meet these eligibility requirements.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>4. Account registration and security</h2>
                        <p>
                            To use the Services you must complete our registration process and provide the personal and financial information we request. You agree to keep this information accurate and up to date and to notify us promptly of any changes. You are solely responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your Account, whether or not authorised by you.
                        </p>
                        <p>
                            You must notify us immediately at support@zeonfx.com if you suspect that your credentials have been lost, stolen, or used without your permission. The Company is not liable for any loss arising from unauthorised use of your Account where you have failed to keep your credentials secure. We may suspend access to your Account where we reasonably believe security has been compromised.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>5. Verification and Know Your Customer</h2>
                        <p>
                            Before you can make deposits, or withdrawals, and at any time afterwards, the Company may require you to provide identity verification documents, proof of address, proof of payment, and information about your financial background and the source of your funds. This is required to meet our legal and anti-money laundering obligations, which we must comply with fully in our AML Policy.
                        </p>
                        <p>
                            Your Account may remain restricted until verification is complete. If you fail to provide the information we request, or if we are unable to verify it to our satisfaction, we may restrict, suspend, or close your Account and may withhold withdrawals pending completion of the necessary checks. Accounts showing unusual or suspicious activity may be frozen while we review them.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>6. Execution-only basis</h2>
                        <p>
                            The Company provides an execution venue and the technology to place orders in the instruments we offer. We do not advise you on the merits of any transaction, do not assess the suitability or appropriateness of any instrument for you unless required by law, and do not manage your Account. Any market commentary, analysis, news, calculator output, or educational material we provide is for general information only and must not be treated as advice or a recommendation. You acknowledge that trading leveraged products carries a high level of risk, and that you are responsible for understanding the instruments you trade and for your own trading decisions. You are encouraged to seek independent professional advice where appropriate.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>7. Order execution</h2>
                        <p>
                            The Company will take reasonable steps to execute your orders promptly and fairly, but submission of an order does not guarantee execution. Orders are executed subject to available liquidity and prevailing market conditions. In fast-moving or illiquid markets, the price at which an order is executed may differ from the price shown when the order was placed. A difference known as slippage, which can be positive or negative.
                        </p>
                        <p>
                            The Company may, acting reasonably, decline or cancel, or reverse an executed transaction, or adjust a position in cases of manifest pricing errors, technical failures, feed disruptions, or abnormal market conditions. Quotes and executions affected by an obvious error may be corrected to reflect the fair market price at the relevant time. The Company is not responsible for losses arising from delays or failures in transmission that are outside its reasonable control.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>8. Margin, leverage, and liquidation</h2>
                        <p>
                            You must maintain sufficient margin in your Account to open and hold positions at all times. Leverage increases both potential gains and potential losses, and the margin required for a position depends on the instrument, its class, and the applicable leverage. It is your responsibility to monitor your margin level continuously.
                        </p>
                        <p>
                            If your Equity falls to the margin call level for your Account type, you may be asked to deposit additional funds or reduce your exposure. If your Equity falls to the stop-out level, the Company may close some or all of your open positions automatically and without prior notice, in order to prevent further losses. Positions may be closed at the best price reasonably available at the time, which may be worse than the level at which the stop-out was triggered. You remain responsible for any deficit that arises, subject to the negative balance protection described below.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>9. Negative balance protection</h2>
                        <p>
                            The Company applies negative balance protection to retail trading Accounts. This means that, under normal operation, you will not lose more than the funds deposited in your Account. If your Balance becomes negative, we will reset it to zero. Negative balance protection does not apply where negative balance results from your fraud, abuse of the Services, or breach of these Terms, and does not reduce the underlying risk that you may lose your entire deposit.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>10. Deposits and withdrawals</h2>
                        <p>
                            You may fund your Account using the payment methods made available from time to time, which may include cards, bank transfer, e-wallets, and cryptocurrency. Funds must come from a source held in your own name. The Company does not accept third-party payments, and withdrawals are generally returned to the original funding source in accordance with our anti-money-laundering obligations.
                        </p>
                        <p>
                            ZeonFX does not charge commission on withdrawals, although third-party payment providers may apply their own fees, which are outside our control. We may require completed identity verification before processing any withdrawal, and we may delay or decline a deposit or withdrawal that we cannot reconcile with your verified profile or that we reasonably suspect is connected to prohibited activity. Processing times depend on the method used and the relevant payment providers.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>11. Fees, charges, and swaps</h2>
                        <p>
                            The costs of trading, including spreads, commissions where they apply to your Account type, and overnight financing or swap charges on positions held past the daily rollover, are set out on our website and within the platforms, and may be updated from time to time. By trading, you agree to pay all applicable costs and charges associated with your transactions and your Account.
                        </p>
                        <p>
                            The Company may charge an inactivity or maintenance fee on accounts that remain dormant for an extended period, where this is disclosed in advance. Currency conversions applied to deposits, withdrawals, or positions denominated in a currency other than your Account currency may be subject to a conversion spread.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>12. Promotions and bonuses</h2>
                        <p>
                            From time to time the Company may offer promotions, including the 100% Deposit Bonus, the Trade & Win campaign, and the Rebate Payback promotion. Optional and is governed by its own specific terms and conditions, which are published separately. General acceptance of these Terms does not by itself entitle you to any promotional benefit.
                        </p>
                        <p>
                            Where a promotion applies, bonus funds may be non-withdrawable, may be subject to minimum trading volume requirements before profits or benefits can be withdrawn, and no promotion reduces the risk of trading leveraged products or guarantees any return. The Company may remove promotional benefits and reverse associated profits where it reasonably determines that a promotion has been abused.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>13. Prohibited and abusive trading practices</h2>
                        <p>
                            You agree to use the Services in good faith and not to engage in practices that the Company reasonably considers abusive or manipulative. These include, without limitation, exploiting pricing errors, latency, or delays; arbitrage strategies that rely on off-market or delayed quotes; coordinated trading across multiple accounts to abuse promotions or liquidity; and any use of the Services for market manipulation, fraud, or unlawful purposes.
                        </p>
                        <p>
                            Where the Company reasonably determines that prohibited or abusive activity has occurred, it may cancel or reverse affected transactions, revoke associated profits and bonuses, and restrict, suspend, or close the Account. The Company is not liable for losses arising from action taken in good faith to address such activity.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>14. Non-advisory notice and fiduciary duty</h2>
                        <p>
                            Nothing in the Services, on our website, or in any communication from the Company constitutes investment, legal, tax, or financial advice, or a personal recommendation. The Company does not act as your adviser or fiduciary. Any information provided is for general purposes only and does not take account of your personal circumstances, objectives, or needs. You are solely responsible for evaluating the merits and risks of any transaction and for obtaining independent advice where appropriate.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>15. Intellectual property</h2>
                        <p>
                            All content on the ZeonFX website, platforms, and communications, including text, graphics, logos, trademarks, analysis, and software, is the property of ZeonFX or its licensors and is protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable licence to use the Services for your own personal trading. You must not reproduce, distribute, modify, or make commercial use of any content without our prior written consent.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>16. Communications and notices</h2>
                        <p>
                            You agree that the Company may communicate with you electronically, including by email, through the client portal, and through the platforms, and that such communications satisfy any legal requirement that communications be in writing. It is your responsibility to keep your contact details current and to check for messages from us regularly. Notices to the Company should be sent to support@zeonfx.com.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>17. Complaints</h2>
                        <p>
                            If you are dissatisfied with any aspect of the Services, you may submit a complaint to support@zeonfx.com, setting out the details of your concern and any relevant account or transaction information. The Company will acknowledge and investigate complaints and respond within a reasonable time. We aim to resolve complaints fairly and promptly.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>18. Limitation of liability and indemnity</h2>
                        <p>
                            To the fullest extent permitted by law, the Company shall not be liable for any indirect, consequential, incidental, special, or punitive losses, including loss of profit, loss of opportunity, or loss of data, arising from your use of the Services, platform unavailability or technical failures, price errors, or actions of third parties such as payment providers, liquidity providers, or your reliance on any information published by the Company. Nothing in these Terms excludes liability that cannot lawfully be excluded.
                        </p>
                        <p>
                            You agree to indemnify and hold the Company harmless against any loss, claim, or expense arising from your breach of these Terms, your misuse of the Services, or your violation of any applicable law or the rights of any third party.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>19. Force majeure</h2>
                        <p>
                            The Company shall not be liable for any failure or delay in performing its obligations where that failure or delay results from events beyond its reasonable control. These include, without limitation, acts of nature, government action, war, terrorism, civil disruption, pandemic, failure of communications or power infrastructure, cyber-attacks, and disruption to liquidity providers, exchanges, or payment systems. During such events the Company may suspend or restrict trading and take any action it reasonably considers appropriate to protect clients and the Company.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>20. Suspension and termination</h2>
                        <p>
                            Either party may terminate this Agreement by giving notice, subject to the settlement of all outstanding positions and obligations. The Company may suspend or terminate your Account immediately where you breach these Terms, where required by law or a competent authority, where verification cannot be completed, or where it reasonably suspects fraud or abuse. On termination, open positions may be closed, and the Company will return any remaining Balance to you subject to its verification and anti-money-laundering requirements.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>21. Dormant and inactive accounts</h2>
                        <p>
                            An Account with no trading activity, deposits, or withdrawals for a continuous period may be treated as dormant. The Company may apply a dormant account fee, where disclosed in advance, and may archive or close dormant Accounts after giving reasonable notice to the email address on file. Any remaining Balance will be handled in accordance with applicable law.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>22. Amendments</h2>
                        <p>
                            The Company may update these Terms from time to time to reflect changes in its operations, technology, or legal and regulatory requirements. Amendments are published on our website and take effect on publication, unless a later date is stated. Your continued use of the Services after an amendment constitutes acceptance of the updated Terms. We encourage you to review these Terms periodically.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>23. Assignment and severability</h2>
                        <p>
                            You may not assign or transfer your rights or obligations under this Agreement without the Company's prior written consent. The Company may assign its rights and obligations, including in connection with a merger, acquisition, or reorganisation. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions continue in full force and effect.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>24. Governing law</h2>
                        <p>
                            This Agreement is governed by and construed in accordance with the laws of Saint Lucia, and any dispute arising out of or in connection with it is subject to the jurisdiction of the courts of Saint Lucia, unless applicable mandatory law provides otherwise.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>25. Entire agreement and contact</h2>
                        <p>
                            These Terms, together with the Risk Disclosure, Privacy Policy, AML Policy, Restricted Countries page, and any applicable promotion terms, constitute the entire agreement between you and the Company regarding the Services and supersede any prior understanding. For any question about these Terms, contact ZeonFX Limited at support@zeonfx.com or write to us at Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros Islet, Saint Lucia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


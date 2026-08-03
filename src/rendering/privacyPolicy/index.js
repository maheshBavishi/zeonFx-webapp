import React from 'react';
import styles from './privacyPolicy.module.scss';
import ButtonText from '@/components/buttonText';

export default function PrivacyPolicy() {
    return (
        <div className={styles.privacyPolicy}>
            <div className='container'>
                <div className={styles.center}>
                    <ButtonText text="Legal" />
                </div>
                <h1>Privacy Policy</h1>

                <div className={styles.contentWrapper}>
                    <p className={styles.lastUpdated}>(Last updated: 30 June 2026)</p>
                    <p className={styles.introText}>
                        This Privacy Policy explains how ZeonFX Limited (“ZeonFX”, “we”, “us”, or “our”) collects, uses, stores, shares, and protects your personal information when you visit www.zeonfx.com, open or operate a trading account, or otherwise interact with our services. By using our website and services, you agree to the practices described in this Policy.
                    </p>

                    <div className={styles.section}>
                        <h2>1. Who we are</h2>
                        <p>
                            ZeonFX Limited is a company registered in Saint Lucia under Registration Number 2026-00156, with its registered office at Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros Islet, Saint Lucia. ZeonFX operates as an execution-only broker. For any privacy matter you can reach us at privacy@zeonfx.com.
                        </p>
                        <p>
                            ZeonFX is the data controller responsible for the personal information described in this Policy.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>2. Information we collect</h2>
                        <p>
                            We collect information that you provide directly, information we generate as you use our services, and information we receive from third parties. Specifically, we may collect the following categories:
                        </p>

                        <h3>Identity and contact data</h3>
                        <ul>
                            <li>Full name, date of birth, nationality, and gender.</li>
                            <li>Residential address, email address, and telephone number.</li>
                            <li>Government-issued identification such as passport, national ID, or driving licence, and proof of address.</li>
                        </ul>

                        <h3>Financial and trading data</h3>
                        <ul>
                            <li>Financial information you provide during onboarding, including source of funds and, where required, source of wealth.</li>
                            <li>Trading account details, transaction history, deposits, withdrawals, and payment method information.</li>
                            <li>Information required to assess suitability and appropriateness where applicable.</li>
                        </ul>

                        <h3>Technical and usage data</h3>
                        <ul>
                            <li>Device information, IP address, browser type, operating system, and language settings.</li>
                            <li>Pages visited, time spent, referring pages, and interactions with our website and platforms.</li>
                            <li>Cookies and similar technologies as described in the Cookies section below.</li>
                        </ul>

                        <h3>Verification and compliance data</h3>
                        <ul>
                            <li>Records collected to meet our Know Your Customer and Anti-Money Laundering obligations.</li>
                            <li>Screening results against sanctions, politically exposed persons, and adverse media lists.</li>
                            <li>Records of your communications with us, including customer support tickets, chat, email, and call logs.</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2>3. How we use your information</h2>
                        <p>We use your personal information for the following purposes:</p>
                        <ul>
                            <li>To open, verify, operate, and maintain your trading account.</li>
                            <li>To process deposits, withdrawals, and trading activity.</li>
                            <li>To meet our legal and regulatory obligations, including identity verification, AML checks, and record-keeping.</li>
                            <li>To detect, prevent, and investigate fraud, unauthorized access, and other prohibited activity.</li>
                            <li>To provide customer support and respond to your enquiries.</li>
                            <li>To improve our website, platforms, and services, and to understand how they are used.</li>
                            <li>To send you service messages and, where you have agreed, marketing communications (you can opt out at any time).</li>
                            <li>To enforce our Terms and Conditions and protect our rights, property, and users.</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2>4. Legal bases for processing</h2>
                        <p>
                            Where data-protection law requires a legal basis, we rely on one or more of the following: your consent; the performance of a contract with you; compliance with a legal obligation; and our legitimate interests in operating, securing, and improving our services, provided those interests are not overridden by your rights.
                        </p>
                        <p>
                            Where we rely on consent, for example for certain marketing, you may withdraw that consent at any time without affecting processing carried out before withdrawal.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>5. Cookies and similar technologies</h2>
                        <p>
                            Our website uses cookies and similar technologies to make the site work, remember your preferences, measure performance, and support marketing. Cookies are small text files stored on your device.
                        </p>
                        <p>
                            You can control or delete cookies through your browser settings. Disabling some cookies may affect how parts of the website function. Where required, we request your consent for non-essential cookies through a cookie banner.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>6. How we share your information</h2>
                        <p>
                            We do not sell your personal information. We share it only as needed for the purposes in this Policy, and only with parties bound by appropriate confidentiality and data-protection obligations. These may include:
                        </p>
                        <ul>
                            <li>Service providers who support identity verification, payments, hosting, analytics, communications, and customer support.</li>
                            <li>Liquidity providers and technology partners strictly as needed to execute and settle your trades.</li>
                            <li>Professional advisers such as auditors, lawyers, and accountants.</li>
                            <li>Regulators, law-enforcement bodies, and other authorities where we are legally required to disclose information, or to prevent or investigate crime.</li>
                            <li>A successor entity in the context of a merger, acquisition, or reorganisation, subject to this Policy.</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2>7. International transfers</h2>
                        <p>
                            We operate internationally, so your information may be transferred to and processed in countries other than your own. Where we transfer personal data across borders, we take steps to ensure it remains protected in line with this Policy and applicable law, including contractual safeguards with the parties who process it on our behalf.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>8. Data retention</h2>
                        <p>
                            We keep your personal information for as long as your account is active and for the period afterwards required to meet our legal, regulatory, tax, accounting, and reporting obligations, to resolve disputes, and to enforce our agreements. Retention periods for identity and transaction records are typically several years after the end of the client relationship, as required by anti-money-laundering rules. When information is no longer needed, we delete or anonymise it securely.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>9. How we protect your information</h2>
                        <p>
                            We use technical and organisational measures designed to protect personal information against unauthorised access, loss, misuse, and alteration. These include encryption in transit, access controls, segregation of client funds from company funds, and staff confidentiality obligations. No method of transmission or storage is completely secure, so while we work to protect your information, we cannot guarantee absolute security.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>10. Your rights</h2>
                        <p>Depending on your jurisdiction, you may have some or all of the following rights over your personal information:</p>
                        <ul>
                            <li>Access: to request a copy of the personal data we hold about you.</li>
                            <li>Rectification: to ask us to correct inaccurate or incomplete data.</li>
                            <li>Erasure: to ask us to delete your data where there is no overriding legal reason to keep it.</li>
                            <li>Restriction and objection: to ask us to limit or stop certain processing.</li>
                            <li>Portability: to receive certain data in a portable format.</li>
                            <li>Withdraw consent: where we rely on consent, to withdraw it at any time.</li>
                        </ul>
                        <p>
                            To exercise any of these rights, contact privacy@zeonfx.com. We may need to verify your identity before acting on a request. Some rights are subject to legal limits, for example where we must retain data to meet AML obligations. You also have the right to complain to a relevant data-protection authority.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>11. Children</h2>
                        <p>
                            Our services are intended only for individuals who are at least eighteen (18) years of age. We do not knowingly collect personal information from anyone under 18. If we learn that we have collected such information, we will delete it.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>12. Third-party links</h2>
                        <p>
                            Our website may link to third-party sites and services that we do not control. This Policy does not apply to those third parties, and we are not responsible for their privacy practices. We encourage you to read their privacy notices.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>13. Changes to this Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated version will be published on this page with a revised updated date, and takes effect on publication. We encourage you to review it periodically.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>14. Contact us</h2>
                        <p>
                            If you have questions about this Policy or how we handle your information, contact us at privacy@zeonfx.com or support@zeonfx.com, or write to ZeonFX Limited, Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros Islet, Saint Lucia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


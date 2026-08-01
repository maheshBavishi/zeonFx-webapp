import React from 'react'
import styles from './depositWithdraws.module.scss';
import DepositWithdrawsHero from './depositWithdrawsHero';
import PaymentMethods from './paymentMethods';
import FaqSection from '../forex/faqSection';
const FaqImage = '/assets/images/faq.png';

const faqSectionData = {
    badgeText: 'faqs',
    title: (
        <>
            Frequently asked <span> questions</span>
        </>
    ),
    image: FaqImage,
    faqs: [
        {
            q: 'How long do withdrawals take?',
            a: 'Withdrawal processing times depend on the selected payment method. E-wallets and cryptocurrency withdrawals are typically processed within 24 hours, while card withdrawals and bank transfers take 1 to 3 business days.',
        },
        {
            q: 'Are there any deposit fees?',
            a: 'ZeonFX charges 0% fees on all deposits across cards, bank transfers, e-wallets, and crypto. However, third-party payment providers or intermediary banks may apply their own fees.',
        },
        {
            q: 'Can I withdraw to a different method?',
            a: 'In accordance with Anti-Money Laundering (AML) regulations, withdrawals must be returned to the same payment method and account used for your initial deposit.',
        },
    ],
};
export default function DepositWithdraws() {
    return (
        <div>
            <DepositWithdrawsHero />
            <PaymentMethods />
            <FaqSection data={faqSectionData} />
        </div>
    )
}

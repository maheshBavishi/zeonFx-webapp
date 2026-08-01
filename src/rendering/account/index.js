import React from 'react'
import AccountHero from './accountHero'
import OneAccount from './oneAccount'
import BenefitsSectionindex from './benefitsSection'
import DemoAccount from './demoAccount'
import StandardAccount from './standardAccount'
import FaqSection from '../forex/faqSection'
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
            q: 'What is the difference between STP and ECN?',
            a: 'STP (Straight Through Processing) routes your orders directly to liquidity providers with no dealing desk intervention. ECN (Electronic Communication Network) matches orders directly between market participants in a raw-spread interbank pool with a flat commission per trade.',
        },
        {
            q: 'Is there a demo account?',
            a: 'Yes, ZeonFX provides a 100% free demo account pre-loaded with virtual funds. It mirrors live market conditions so you can test strategies and practice trading on MT5 and the Web Terminal risk-free.',
        },
    ],
};

export default function Account() {
    return (
        <div>
            <AccountHero />
            <OneAccount />
            <BenefitsSectionindex />
            <DemoAccount />
            <StandardAccount />
            <FaqSection data={faqSectionData} />
        </div>
    )
}

import React from 'react'
import styles from './promotions.module.scss';
import PromotionsHero from './promotionsHero';
import HomeBoxList from '../home/homeBoxList';
import Notice from './notice';
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
            q: 'Can I stop copying at any time?',
            a: 'Yes, you can pause or stop copying any trader at any time with a single click in your dashboard. You retain full control to close copied positions whenever you choose.',
        },
        {
            q: 'Do I keep control of my funds?',
            a: 'Yes. Your funds remain in your secure ZeonFX account. Copied trades are executed automatically in proportion to your allocated balance, but only you have access to deposit, allocate, or withdraw your funds.',
        },
        {
            q: 'Are returns guaranteed?',
            a: 'No. All trading involves risk, and past performance of any trader is not a guarantee of future results. We recommend managing your risk carefully and setting appropriate stop-loss limits.',
        },
    ],
};
export default function Promotions() {
    return (
        <div>
            <PromotionsHero />
            <HomeBoxList />
            <Notice />
            <FaqSection data={faqSectionData} />

        </div>
    )
}

import React from 'react'
import PartnersHero from './partnersHero'
import IntroducingBroker from './introducingBroker'
import StartTrading from '../home/startTrading';
import FaqSection from '../forex/faqSection';
const FaqImage = '/assets/images/faq.png';

const startTradingSteps = [
    {
        id: "01",
        title: "Apply Online",
        description: "Apply online and tell us how you plan to refer.",
        icon: '/assets/images/user.png'
    },
    {
        id: "02",
        title: "Get your links and Assets",
        description: "Get your tracking links, dashboard, and marketing assets.",
        icon: '/assets/images/sec.png'
    },
    {
        id: "03",
        title: "Refer & Earn",
        description: "Refer traders and earn on their activity, tracked in real time.",
        icon: '/assets/images/three.png'
    },
];



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
            q: 'What is the difference between IB and Affiliate?',
            a: 'An Introducing Broker (IB) earns ongoing volume-based rebates for actively introducing and supporting clients, while an Affiliate typically earns fixed CPA payouts per qualified client referral.',
        },
        {
            q: 'How and when am I paid?',
            a: 'Partner payouts are processed quickly and reliably. Commissions and rebates are tracked in real-time on your dashboard and paid out via your preferred payment method on a scheduled basis.',
        },
        {
            q: 'Is there a cost to join?',
            a: 'No, joining the ZeonFX Partner Program is 100% free. There are no registration fees, hidden charges, or minimum volume requirements to get started.',
        },
    ],
};

export default function Partners() {
    return (
        <div>
            <PartnersHero />
            <IntroducingBroker />
            <StartTrading
                bgchange
                badgeText="how it works"
                title={
                    <>
                        How To Join <span> IB </span> Program
                    </>
                }
                townImage="/assets/images/town.png"
                primaryBtnText="Open Live account"
                secondaryBtnText="Try Demo"
                stepsData={startTradingSteps}
            />
            <FaqSection data={faqSectionData} />
        </div>
    )
}

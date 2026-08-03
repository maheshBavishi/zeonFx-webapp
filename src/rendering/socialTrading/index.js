import React from 'react'
import styles from './socialTrading.module.scss';
import SocialTradingHero from './socialTradingHero';
import Confidence from './confidence';
import StartTrading from '../home/startTrading';
import RiskWarning from './riskWarning';
import FaqSection from '../forex/faqSection';

const FaqImage = '/assets/images/faq.png';

const startTradingSteps = [
    {
        id: "01",
        title: "Choose a Trader",
        description: "Choose a trader to copy or a  account to invest in, based on performance and risk.",
        icon: '/assets/images/user.png'
    },
    {
        id: "02",
        title: "Allocate & Set Limits",
        description: "Allocate your capital and set your risk limits.",
        icon: '/assets/images/sec.png'
    },
    {
        id: "03",
        title: "Track Results Live",
        description: "Track results live and adjust or stop at any time. by card, bank transfer, e-wallet, or crypto. Funding clears fast.",
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
            q: 'How do I trade gold with ZeonFX?',
            a: 'You can trade Gold (XAU/USD) on ZeonFX as a CFD through MT4, MT5, or the ZeonFX Web Terminal. Simply open an account, deposit funds, and open long or short positions with flexible leverage.',
        },
        {
            q: 'Is silver more volatile than gold?',
            a: 'Yes, silver (XAG/USD) generally exhibits higher percentage price volatility than gold due to its smaller market size and heavy industrial demand, presenting dynamic trading opportunities.',
        },
        {
            q: 'Why trade metals as CFDs?',
            a: 'Trading precious metals as CFDs lets you speculate on price movements in both directions (long and short) with leverage, without the costs, physical storage, and security risks of physical metals.',
        },
    ],
};
export default function SocialTrading() {
    return (
        <div>
            <SocialTradingHero />
            <Confidence />
            <StartTrading
                badgeText="how it works"
                titleMaxWidth={"100%"}
                title={
                    <>
                        How Social Trading <span> Works </span>
                    </>
                }
                townImage="/assets/images/town.png"
                primaryBtnText="Open Live account"
                secondaryBtnText="Try Demo"
                stepsData={startTradingSteps}
            />
            <RiskWarning />
            <FaqSection data={faqSectionData} />
        </div>
    )
}

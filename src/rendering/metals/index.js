import React from 'react'
import MetalsBanner from './metalsBanner'
import ForexTextlist from '../forex/forexTextlist'
import ModernWay from './modernWay';
import ForexZeonfx from '../forex/forexZeonfx';
import InstrumentsTable from './instrumentsTable';
import FaqSection from '../forex/faqSection';

const Gold = '/assets/images/Gold.png';
const Platinum = '/assets/images/Platinum.png';
const Defensive = '/assets/images/Defensive.png';
const Competitive = '/assets/images/Competitive.png';
const Near = '/assets/images/Near.png';
const FaqImage = '/assets/images/faq.png';

const indicesTextListData = [
    '4+ Metals',
    'Spreads from 0.0',
    '1:500 Max leverage',
    'Nearly 24/5 Hours',
];

const indicesfxData = {
    badgeText: 'Why zeonfx',
    title: (
        <>
            Why trade <span> Metals </span> with ZeonFX
        </>
    ),
    cards: [
        { id: 1, title: 'Gold and silver', img: Gold, desc: 'Trade XAU/USD and XAG/USD, two of the most liquid and closely watched instruments in the market.' },

        { id: 2, title: 'Platinum and palladium', img: Platinum, desc: 'Diversify into the industrial precious metals alongside gold and silver.' },

        { id: 3, title: 'Defensive and speculative', img: Defensive, desc: 'Use metals to hedge risk elsewhere in your book, or trade them outright.' },

        { id: 4, title: 'Competitive pricing', img: Competitive, desc: 'Spreads that reflect the real market, with no inflated markup.' },

        { id: 5, title: 'Long or short', img: Defensive, desc: 'Take a view in either direction with CFDs and leverage.' },

        { id: 6, title: 'Near 24-hour access', img: Near, desc: 'Trade metals across almost the full trading week as global sessions rotate.' },
    ],
};

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

export default function Metals() {
    return (
        <div>
            <MetalsBanner />
            <ForexTextlist data={indicesTextListData} />
            <ModernWay />
            <ForexZeonfx data={indicesfxData} />
            <InstrumentsTable />
            <FaqSection data={faqSectionData} />
        </div>
    )
}

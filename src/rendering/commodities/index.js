import React from 'react'
import CommoditiesHero from './commoditiesHero'
import ForexTextlist from '../forex/forexTextlist'
import TradingOpportunities from './tradingOpportunities';
import ForexZeonfx from '../forex/forexZeonfx';
import CommoditiesTable from './commoditiesTable';
import FaqSection from '../forex/faqSection';

const Energy = '/assets/images/Energy.png';
const Agricultural = '/assets/images/Agricultural.png';
const Short = '/assets/images/short.png';
const Event = '/assets/images/Event1.png';
const Competitive = '/assets/images/Competitive.png';
const Spreads = '/assets/images/spreads1.png';
const Diversification = '/assets/images/Diversification.png';
const FaqImage = '/assets/images/faq.png';

const indicesfxData = {
    badgeText: 'Why zeonfx',
    title: (
        <>
            Why trade <span> Commodities </span> with ZeonFX
        </>
    ),
    cards: [
        { id: 1, title: 'Energy exposure', img: Energy, desc: 'Trade WTI Crude, Brent Crude, and natural gas, three of the most actively traded commodities.' },

        { id: 2, title: 'Agricultural commodities', img: Agricultural, desc: 'Add breadth with agricultural markets alongside energy.' },

        { id: 3, title: 'Long or short', img: Short, desc: 'Trade both rising and falling markets with CFDs and leverage.' },


        { id: 4, title: 'Event-driven', img: Event, desc: 'Commodities react sharply to news, which the Economic Calendar helps you plan around.' },

        { id: 5, title: 'Competitive spreads', img: Spreads, desc: 'Sharp pricing on the most-traded energy instruments.' },
        { id: 6, title: 'Diversification', img: Diversification, desc: 'Commodities behave differently from equities and currencies, adding balance to a book.' },
    ],
};

const indicesTextListData = [
    '10+ Instruments',
    'Low Spreads',
    '1:200 Max leverage',
    'Energy + Agri Coverage.',
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

export default function Commodities() {
    return (
        <div>
            <CommoditiesHero />
            <ForexTextlist data={indicesTextListData} />
            <TradingOpportunities />
            <ForexZeonfx data={indicesfxData} />
            <CommoditiesTable />
            <FaqSection data={faqSectionData} />
        </div>
    )
}

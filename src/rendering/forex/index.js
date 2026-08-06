import React from 'react'
import ForexBanner from './forexBanner'
import ForexTextlist from './forexTextlist'
import FinancialMarket from './financialMarket'
import ForexZeonfx from './forexZeonfx'
import MarketGlance from './marketGlance'
import FaqSection from './faqSection'

const Spreads = '/assets/images/Spreads.png';
const Access = '/assets/images/access.png';
const Pairs = '/assets/images/pairs.png';
const Commission = '/assets/images/commission.png';
const Execution1 = '/assets/images/execution1.png';
const Leverage = '/assets/images/leverage.png';

const FaqImage = '/assets/images/faq.png';

const forexTextListData = [
    '50+ Currency pairs',
    'Spreads from 0.0',
    '1:500 Max leverage',
    '24/5 Market hours.',
];

const forexZeonfxData = {
    badgeText: 'Why zeonfx',
    title: (
        <>
            Why trade <span> Forex </span> with ZeonFX
        </>
    ),
    cards: [
        { id: 1, title: 'Tight Spreads', img: Spreads, desc: 'Institutional liquidity means you get sharp pricing on every pair, with raw spreads on Raw ECN and Pro VIP.' },
        { id: 2, title: '50+ currency Pairs', img: Pairs, desc: 'Majors, minors, and exotics from EUR/USD to USD/TRY, all in one account.' },
        { id: 3, title: '24/5 market access', img: Access, desc: 'The forex market never sleeps. Trade from Sunday evening to Friday evening without interruption.' },
        { id: 4, title: 'Zero commission on Standard', img: Commission, desc: 'On the Standard account your cost is built into the spread, so you always know it upfront.' },
        { id: 5, title: 'Fast STP execution', img: Execution1, desc: 'Straight-through routing keeps fills consistent with minimal slippage, even in volatile markets.' },
        { id: 6, title: 'Up to 1:1000 leverage:', img: Leverage, desc: 'Flexible leverage suited to your experience and risk appetite, with clear leverage-risk disclosure.' },
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
            q: 'What is forex trading?',
            a: 'Forex is the global market for buying and selling currencies. Traders aim to profit from movements in the exchange rate between two currencies in a pair. It is the largest and most liquid financial market in the world.',
        },
        {
            q: 'How does leverage work in forex?',
            a: 'Leverage lets you control a larger position with a smaller deposit. It magnifies both gains and losses, so risk management is essential. Always understand your effective leverage before you trade.',
        },
        {
            q: 'What are the trading hours?',
            a: 'The forex market is open 24 hours a day, five days a week, from Sunday evening to Friday evening. The major sessions are Sydney, Tokyo, London, and New York.',
        },
        {
            q: 'What is a spread?',
            a: 'The spread is the difference between the buy and sell price of a pair. It represents your cost of entry. On the Raw ECN account, spreads start from 0.0 pips plus a low commission.',
        },
    ],
};

export default function Forex() {
    return (
        <div>
            <ForexBanner />
            <ForexTextlist data={forexTextListData} />
            <FinancialMarket />
            <ForexZeonfx data={forexZeonfxData} />
            <MarketGlance />
            <FaqSection data={faqSectionData} />
        </div>
    )
}

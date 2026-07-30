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
    '1:1000 Max leverage',
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
            a: 'Forex (foreign exchange) trading is the buying and selling of currencies on the global market. It is the largest and most liquid financial market in the world, with trillions of dollars traded daily.',
        },
        {
            q: 'How much money do I need to start trading?',
            a: 'You can start trading with as little as $100 on a Standard account. However, we recommend starting with at least $500 to manage risk effectively and have enough margin for multiple positions.',
        },
        {
            q: 'What leverage does ZeonFX offer?',
            a: 'ZeonFX offers leverage up to 1:1000 on Standard accounts. Leverage allows you to control a larger position with a smaller deposit, but it also increases risk. Always use leverage responsibly.',
        },
        {
            q: 'Is my money safe with ZeonFX?',
            a: 'Yes. Client funds are held in segregated accounts with tier-1 banks, completely separate from company operating funds. We are regulated and adhere to strict financial standards.',
        },
        {
            q: 'What trading platforms does ZeonFX support?',
            a: 'ZeonFX supports MetaTrader 4 (MT4) and MetaTrader 5 (MT5) — the industry\'s leading platforms available on desktop, web, iOS, and Android.',
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

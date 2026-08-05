import React from 'react'
import StocksHero from './stocksHero'
import ForexTextlist from '../forex/forexTextlist'
import StocksTrading from './stocksTrading';
import ForexZeonfx from '../forex/forexZeonfx';
import StocksTable from './stocksTable';
import FaqSection from '../forex/faqSection';

const Equities = '/assets/images/equities.png';
const Earnings = '/assets/images/Earnings.png';
const Short = '/assets/images/short.png';
const Leverage = '/assets/images/Leverage.png';
const Ownership = '/assets/images/ownership.png';
const Competitive = '/assets/images/Competitive.png';
const Account = '/assets/images/account.png';
const Diversification = '/assets/images/Diversification.png';
const FaqImage = '/assets/images/faq.png';

const indicesfxData = {
    badgeText: 'Why zeonfx',
    title: (
        <>
            Why trade <span> Stocks </span> with ZeonFX
        </>
    ),
    cards: [
        { id: 1, title: 'Global equities', img: Equities, desc: 'Trade leading US, European, and Asian companies as CFDs from one account.' },

        { id: 2, title: 'Long or short', img: Short, desc: 'Position for a rise or a fall, and trade both sides of the market.' },

        { id: 3, title: 'Leverage', img: Leverage, desc: 'Control a larger position with a smaller outlay, with clear risk disclosure.' },


        { id: 4, title: 'Earnings-ready', img: Earnings, desc: 'Trade around earnings season and company news with fast execution' },

        { id: 5, title: 'No share ownership', img: Ownership, desc: 'Skip custody and settlement. CFDs are cash-settled on price movement.' },
        { id: 6, title: 'One account', img: Account, desc: 'Trade stocks alongside forex, indices, metals, commodities, and crypto.' },
    ],
};

const indicesTextListData = [
    '100+ Stocks',
    'Low Spreads',
    '1:50 Max leverage',
    'US-EU-Asia Markets',
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
            q: 'What is a stock CFD?',
            a: 'A stock CFD tracks the price of a company\'s shares. You trade the movement, long or short, with leverage, and never own the underlying share.',
        },
        {
            q: 'Can I short a stock?',
            a: 'Yes. CFDs let you open a sell position to profit from a falling share price, subject to the same market risk as a long.',
        },
        {
            q: 'Do I receive dividends?',
            a: 'CFD positions may be subject to dividend adjustments rather than paid dividends. Check the contract specifications for each instrument.',
        },
    ],
};

export default function Stocks() {
    return (
        <div>
            <StocksHero />
            <ForexTextlist data={indicesTextListData} />
            <StocksTrading />
            <ForexZeonfx data={indicesfxData} />
            <StocksTable />
            <FaqSection data={faqSectionData} />
        </div>
    )
}

import React from 'react'
import CryptoHero from './cryptoHero'
import ForexTextlist from '../forex/forexTextlist'
import CryptoTrading from './cryptoTrading';
import ForexZeonfx from '../forex/forexZeonfx';
import CryptoTable from './cryptoTable';
import FaqSection from '../forex/faqSection';

const MajorCoins = '/assets/images/Major.png';
const Access = '/assets/images/Near.png';
const CustodyRisk = '/assets/images/ownership.png';
const Short = '/assets/images/short.png';
const Leverage = '/assets/images/leverage.png';
const Account = '/assets/images/account.png';
const FaqImage = '/assets/images/faq.png';

const indicesfxData = {
    badgeText: 'Why zeonfx',
    title: (
        <>
            Why trade <span> Crypto </span> with ZeonFX
        </>
    ),
    cards: [
        { id: 1, title: 'Major coins', img: MajorCoins, desc: 'Trade Bitcoin, Ethereum, Solana, XRP, and 20+ crypto CFDs.' },

        { id: 2, title: '24/7 access', img: Access, desc: 'Crypto markets never close, and neither do ZeonFX crypto CFDs.' },

        { id: 3, title: 'No custody risk', img: CustodyRisk, desc: 'No wallet, no keys, no exchange account. Trade price exposure only.' },

        { id: 4, title: 'Long or short', img: Short, desc: 'Trade both directions of a famously two-way market.' },

        { id: 5, title: 'Leverage with control', img: Leverage, desc: 'Access leverage on crypto with negative balance protection and Trade Guard behind you.' },

        { id: 6, title: 'One account', img: Account, desc: 'Trade crypto alongside every other asset class from a single login.' },
    ],
};

const indicesTextListData = [
    '20+ Crypto CFDs',
    'Low Spreads',
    '1:20 Max leverage',
    '24/7 Hours',
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
            q: 'What is a crypto CFD?',
            a: 'A crypto CFD tracks the price of a cryptocurrency. You trade the movement without owning the coin, so there is no wallet or exchange account to manage.',
        },
        {
            q: 'Is crypto trading risky?',
            a: 'Cryptocurrencies are highly volatile and can move sharply in either direction. Only trade with risk capital and use position sizing and stop losses.',
        },
        {
            q: 'Can I trade crypto on weekends?',
            a: 'Yes. Crypto CFDs trade around the clock, seven days a week, unlike traditional markets that close at the weekend.',
        },
    ],
};

export default function Crypto() {
    return (
        <div>
            <CryptoHero />
            <ForexTextlist data={indicesTextListData} />
            <CryptoTrading />
            <ForexZeonfx data={indicesfxData} />
            <CryptoTable />
            <FaqSection data={faqSectionData} />
        </div>
    )
}

import React from 'react'
import IndicesBanner from './indicesBanner'
import ForexTextlist from '../forex/forexTextlist'
import EntireEconomy from './entireEconomy';
import ForexZeonfx from '../forex/forexZeonfx';
import MarketsTable from './marketsTable';
import FaqSection from '../forex/faqSection';


const Global = '/assets/images/global.png';
const Short = '/assets/images/short.png';
const Spreads = '/assets/images/Spreads.png';
const Session = '/assets/images/Session.png';
const Leverage = '/assets/images/Leverage1.png';
const Event = '/assets/images/Event.png';
const FaqImage = '/assets/images/faq.png';


const indicesTextListData = [
    '15+ Global indices',
    'Spreads from 0.0',
    '1:500 Max leverage',
    'US·EU·Asia Sessions',
];

const indicesfxData = {
    badgeText: 'Why zeonfx',
    title: (
        <>
            Why trade <span> Indices </span> with ZeonFX
        </>
    ),
    cards: [
        { id: 1, title: 'Major global indices', img: Global, desc: 'US30, NAS100, SPX500, DAX40, FTSE100, and more, from one account.' },

        { id: 2, title: 'Long or short', img: Short, desc: 'Take a view in either direction and trade both rising and falling markets.' },

        { id: 3, title: 'Competitive spreads', img: Spreads, desc: 'Sharp pricing on the most-traded indices with fast execution.' },

        { id: 4, title: 'Session coverage', img: Session, desc: 'Trade across US, European, and Asian sessions as markets hand off through the day.' },

        { id: 5, title: 'Leverage with control', img: Leverage, desc: 'Amplify exposure with leverage, backed by negative balance protection and Trade Guard.' },

        { id: 6, title: 'Event-ready', img: Event, desc: 'Pair the Economic Calendar with index trading to plan around key releases.' },
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
            q: 'What is an index CFD?',
            a: 'An index CFD is a contract that tracks the price of a stock index. You trade the price movement without owning the underlying shares, and you can go long or short.',
        },
        {
            q: 'Can I short an index?',
            a: 'Yes. CFDs let you open a sell position to profit from a falling index, subject to the same market risk as a long position.',
        },
        {
            q: 'Which indices can I trade?',
            a: 'ZeonFX offers the major global indices including US30, NAS100, SPX500, DAX40, FTSE100, and JP225, with more added over time.',
        },
    ],
};

export default function Indices() {
    return (
        <div>
            <IndicesBanner />
            <ForexTextlist data={indicesTextListData} />
            <EntireEconomy />
            <ForexZeonfx data={indicesfxData} />
            <MarketsTable />
            <FaqSection data={faqSectionData} />
        </div>
    )
}

import React from 'react'
import CommoditiesHero from './commoditiesHero'
import ForexTextlist from '../forex/forexTextlist'
import TradingOpportunities from './tradingOpportunities';

const indicesTextListData = [
    '10+ Instruments',
    'Low Spreads',
    '1:200 Max leverage',
    'Energy + Agri Coverage.',
];

export default function Commodities() {
    return (
        <div>
            <CommoditiesHero />
            <ForexTextlist data={indicesTextListData} />
            <TradingOpportunities />
        </div>
    )
}

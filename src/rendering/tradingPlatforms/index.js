import React from 'react'
import styles from './tradingPlatforms.module.scss';
import TradingPlatformsHero from './tradingPlatformsHero';
import QuickComparison from './quickComparison';
import TradingPlatformsCard from './tradingPlatformsCard';
export default function TradingPlatforms() {
    return (
        <div>
            <TradingPlatformsHero />
            <QuickComparison />
            <TradingPlatformsCard />
        </div>
    )
}

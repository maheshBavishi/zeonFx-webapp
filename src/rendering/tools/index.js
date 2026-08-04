import React from 'react'
import ToolsHero from './toolsHero'
import Calculator from './calculator'
import EconomicCalendar from './economicCalendar'
import MarketInsights from './marketInsights'
import TradeGuard from './tradeGuard'

export default function Tools() {
    return (
        <div>
            <ToolsHero />
            <Calculator />
            <EconomicCalendar />
            <MarketInsights />
            <TradeGuard />
        </div>
    )
}

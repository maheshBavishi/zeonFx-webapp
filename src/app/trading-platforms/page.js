import TradingPlatforms from '@/rendering/tradingPlatforms'
import React from 'react'

export const metadata = {
  title: "Trading Platforms | MetaTrader 5 & ZeonFX Web Terminal | Download",
  description: "Trade on MetaTrader 5 or the ZeonFX Web Terminal. Desktop, web, and mobile with multi-chart layouts, TradingView charts, expert advisors, and one login across all your devices.",
  keywords: "MT5 broker, metatrader 5 download, web trading platform, zeonfx web terminal, mobile trading app",
};

export default function page() {
    return (
        <div>
            <TradingPlatforms />
        </div>
    )
}

import Forex from '@/rendering/forex'
import React from 'react'
export const metadata = {
  title: "Forex Trading | 50+ Pairs | Tight Spreads | MT5 | ZeonFX",
  description: "Trade 50+ major, minor, and exotic currency pairs with ZeonFX. Spreads from 0.0 pips on Raw ECN, fast STP execution, and up to 1:1000 leverage on MT5 and the Web Terminal.",
  keywords: "forex trading, trade forex, currency pairs, forex CFDs, zeonfx forex spreads, MT5 forex",
};

export default function page() {
    return (
        <div>
            <Forex />
        </div>
    )
}

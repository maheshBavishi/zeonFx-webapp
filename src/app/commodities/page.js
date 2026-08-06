import Commodities from '@/rendering/commodities'
import React from 'react'

export const metadata = {
  title: "Commodities & Energy Trading | Oil, Gas | CFDs | ZeonFX",
  description: "Trade energy and commodities with ZeonFX. WTI Crude, Brent Crude, natural gas, and agricultural commodities as CFDs with competitive spreads and fast execution.",
  keywords: "commodities trading, energy trading, oil CFDs, WTI, Brent, natural gas, trade commodities zeonfx",
};

export default function page() {
    return (
        <div>
            <Commodities />
        </div>
    )
}

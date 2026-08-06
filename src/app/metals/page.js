import Metals from '@/rendering/metals'
import React from 'react'

export const metadata = {
  title: "Metals Trading | Gold XAU/USD, Silver | Tight Spreads | ZeonFX",
  description: "Trade gold, silver, platinum, and palladium with ZeonFX. Competitive spreads on XAU/USD and XAG/USD, fast execution, and leverage on MT5 and the Web Terminal.",
  keywords: "metals trading, gold trading, XAU/USD, silver trading, XAG/USD, trade metals zeonfx",
};

export default function page() {
    return (
        <div>
            <Metals />
        </div>
    )
}

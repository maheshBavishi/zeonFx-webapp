import Stocks from '@/rendering/stocks'
import React from 'react'

export const metadata = {
  title: "Stock CFD Trading | Apple, Tesla, Amazon | Long or Short | ZeonFX",
  description: "Trade global stocks as CFDs with ZeonFX. Go long or short on Apple, Tesla, Amazon, and more with leverage, without owning the shares. Fast execution on MT5 and the Web Terminal.",
  keywords: "stock CFD trading, trade stocks, share CFDs, Apple Tesla Amazon CFD, stocks zeonfx",
};

export default function page() {
    return (
        <div>
            <Stocks />
        </div>
    )
}

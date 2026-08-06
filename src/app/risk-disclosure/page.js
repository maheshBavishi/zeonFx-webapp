import RiskDisclosure from '@/rendering/riskDisclosure'
import React from 'react'

export const metadata = {
  title: "Risk Disclosure | Trading Risks Explained | ZeonFX",
  description: "Review the ZeonFX Risk Disclosure Statement. Understand the risks associated with forex and CFD trading, leverage, and market volatility before opening an account.",
  keywords: "risk disclosure, trading risks, forex risk, CFD trading risks, ZeonFX legal",
};

export default function page() {
    return (
        <div>
            <RiskDisclosure />
        </div>
    )
}


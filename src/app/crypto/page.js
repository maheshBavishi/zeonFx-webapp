import Crypto from '@/rendering/crypto'
import React from 'react'

export const metadata = {
  title: "Crypto CFD Trading | Bitcoin, Ethereum | 24/7 | ZeonFX",
  description: "Trade Bitcoin, Ethereum, and 20+ crypto CFDs with ZeonFX. Price exposure around the clock with no exchange account, no wallet, and no custody risk. Long or short with leverage.",
  keywords: "crypto CFD trading, bitcoin CFD, ethereum CFD, trade crypto cfds, crypto zeonfx",
};

export default function page() {
    return (
        <div>
            <Crypto />
        </div>
    )
}

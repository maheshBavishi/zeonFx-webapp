import Indices from '@/rendering/indices'
import React from 'react'

export const metadata = {
  title: "Indices Trading | US30, NAS100, SPX500, DAX | CFDs | ZeonFX",
  description: "Trade the world's major stock indices as CFDs with ZeonFX. US30, NAS100, SPX500, DAX40, FTSE100 and more with competitive spreads, fast execution, and one account.",
  keywords: "indices trading, index CFDs, US30, NAS100, SPX500, DAX40, trade indices zeonfx",
};

export default function page() {
    return (
        <div>
            <Indices />
        </div>
    )
}

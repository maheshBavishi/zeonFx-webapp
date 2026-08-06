import SocialTrading from '@/rendering/socialTrading'
import React from 'react'

export const metadata = {
  title: "Social Trading | Follow Top Traders | ZeonFX",
  description: "Copy top-performing traders in real time with ZeonFX. You control your risk limits. Hands-free market exposure on MT5 and the Web Terminal.",
  keywords: "Social Trading, account, social trading, managed forex account, follow traders zeonfx",
};

export default function page() {
    return (
        <div>
            <SocialTrading />
        </div>
    )
}

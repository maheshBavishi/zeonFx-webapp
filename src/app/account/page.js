import Account from '@/rendering/account'
import React from 'react'

export const metadata = {
  title: "Trading Accounts | Standard, Raw ECN, Pro VIP | Compare | ZeonFX",
  description: "Three ZeonFX account tiers on MT5 and the Web Terminal. Standard from $10, Raw ECN from $500 with 0.0 spreads, and Pro VIP for high volume. Compare and open in minutes.",
  keywords: "zeonfx account types, raw ECN account, standard account, pro vip forex, compare trading accounts",
};

export default function page() {
    return (
        <div>
            <Account />
        </div>
    )
}

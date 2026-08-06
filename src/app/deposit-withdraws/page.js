import DepositWithdraws from '@/rendering/depositWithdraws'
import React from 'react'

export const metadata = {
  title: "Deposits & Withdrawals | Card, Bank, E-Wallet, Crypto | ZeonFX",
  description: "Fund your ZeonFX account by card, bank transfer, e-wallet, or crypto, credited fast. Withdraw your profits with 0% ZeonFX commission. See methods, timings, and limits.",
  keywords: "forex deposits withdrawals, fund trading account, crypto deposit broker, instant withdrawal forex, zeonfx payments",
};

export default function page() {
    return (
        <div>
            <DepositWithdraws />
        </div>
    )
}

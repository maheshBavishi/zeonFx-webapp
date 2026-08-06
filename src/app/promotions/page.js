import Promotions from '@/rendering/promotions'
import React from 'react'

export const metadata = {
  title: "Promotions | 100% Deposit Bonus, Trade & Win, Rebate Pool | ZeonFX",
  description: "ZeonFX rewards active trading. Claim a 100% deposit bonus, unlock prizes with Trade & Win, and earn cash rebates on every lot with the Rebate Pool. See terms and how to qualify.",
  keywords: "forex deposit bonus, trading promotions, forex rebates, trade to win, zeonfx promotions",
};

export default function page() {
  return (
    <div>
        <Promotions/>
    </div>
  )
}

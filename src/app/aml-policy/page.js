import AmlPolicy from '@/rendering/amlPolicy'
import React from 'react'


export const metadata = {
  title: "AML Policy | Anti-Money Laundering Regulations | ZeonFX",
  description: "Read the ZeonFX Anti-Money Laundering (AML) Policy. Learn about our commitment to secure trading, identity verification, and compliance with international regulations.",
  keywords: "AML policy, anti-money laundering, ZeonFX compliance, secure trading, identity verification forex",
};

export default function page() {
    return (
        <div>
            <AmlPolicy />
        </div>
    )
}

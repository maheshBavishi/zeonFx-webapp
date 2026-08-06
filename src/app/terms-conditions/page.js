import TermsConditions from '@/rendering/termsConditions'
import React from 'react'

export const metadata = {
  title: "Terms & Conditions | Client Agreement | ZeonFX",
  description: "Read the ZeonFX Terms and Conditions. Review our client agreement, trading rules, and platform policies before opening your trading account.",
  keywords: "terms and conditions, client agreement, trading rules, ZeonFX terms, forex broker terms",
};

export default function page() {
    return (
        <div>
            <TermsConditions />
        </div>
    )
}

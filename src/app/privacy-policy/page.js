import PrivacyPolicy from '@/rendering/privacyPolicy'
import React from 'react'

export const metadata = {
  title: "Privacy Policy | Data Protection & Security | ZeonFX",
  description: "Read the ZeonFX Privacy Policy. Learn how we collect, use, and protect your personal data, ensuring your information remains secure while trading with us.",
  keywords: "privacy policy, data protection, secure forex broker, ZeonFX privacy, personal data security",
};

export default function page() {
    return (
        <div>
            <PrivacyPolicy />
        </div>
    )
}

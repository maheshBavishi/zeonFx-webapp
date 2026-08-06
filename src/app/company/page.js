import Company from '@/rendering/company'
import React from 'react'

export const metadata = {
  title: "About ZeonFX | Our Story, Mission & Values | Multi-Asset Broker",
  description: "ZeonFX is a next-generation multi-asset broker built for traders who want more speed, more control, and more opportunity. Learn who we are, what we stand for, and how we operate.",
  keywords: "about zeonfx, zeonfx company, multi-asset broker, who is zeonfx, zeonfx mission",
};

export default function page() {
    return (
        <div>
            <Company />
        </div>
    )
}

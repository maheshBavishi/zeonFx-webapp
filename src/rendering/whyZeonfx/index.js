import React from 'react'
import styles from './whyZeonfx.module.scss';
import ExperienceInstitutional from './experienceInstitutional';
import WhyZeonfxHero from './whyZeonfxHero';
import ZeonfxDifference from './zeonfxDifference';
export default function WhyZeonfx() {
    return (
        <div>
            <WhyZeonfxHero />
            <ZeonfxDifference />
            <ExperienceInstitutional />
        </div>
    )
}

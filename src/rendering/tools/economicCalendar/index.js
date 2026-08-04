'use client'
import React, { useEffect, useRef, memo } from 'react'
import styles from './economicCalendar.module.scss';
import ButtonText from '@/components/buttonText';

const TradingViewWidget = memo(() => {
  const container = useRef();

  useEffect(() => {
    // Clean up previous widget in case of strict mode or re-renders
    const widget = container.current.querySelector('.tradingview-widget-container__widget');
    if (widget) {
      widget.innerHTML = '';
    }
    const existingScript = container.current.querySelector('script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": "en",
        "countryFilter": "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
        "importanceFilter": "0,1",
        "width": "100%",
        "height": "100%"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "600px", width: "100%" }}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/economic-calendar/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Economic Calendar</span>
        </a>
        <span className="trademark"> by TradingView</span>
      </div>
    </div>
  );
});

export default function EconomicCalendar() {
  return (
    <div className={styles.economicCalendar}>
      <div className='container'>
        <div className={styles.center}>
          <ButtonText text="Economic Calendar" />
        </div>
        <h2>
          Upcoming <span> Market</span> Events
        </h2>
        <div style={{ height: '600px' }}>
          <TradingViewWidget />
        </div>
      </div>
    </div>
  )
}

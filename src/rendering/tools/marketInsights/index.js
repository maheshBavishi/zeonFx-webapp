'use client'
import React, { useEffect, useRef, memo } from 'react'
import styles from './marketInsights.module.scss';
import ButtonText from '@/components/buttonText';

const TradingViewTimelineWidget = memo(() => {
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
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "displayMode": "regular",
        "feedMode": "all_symbols",
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": "en",
        "width": "100%",
        "height": "100%"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "600px", width: "100%" }}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/news/top-providers/tradingview/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Top stories</span>
        </a>
        <span className="trademark"> by TradingView</span>
      </div>
    </div>
  );
});

export default function MarketInsights() {
    return (
        <div className={styles.marketInsights} id='marketnews'>
            <div className='container'>
                <div className={styles.center}>
                    <ButtonText text="market news" />
                </div>
                <h2>
                    Real-Time Market <span> Insights</span>
                </h2>
                <div style={{ height: '600px' }}>
                    <TradingViewTimelineWidget />
                </div>
            </div>
        </div>
    )
}

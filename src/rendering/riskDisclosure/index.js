import React from 'react';
import styles from './riskDisclosure.module.scss';
import ButtonText from '@/components/buttonText';

export default function RiskDisclosure() {
    return (
        <div className={styles.riskDisclosure}>
            <div className='container'>
                <div className={styles.center}>
                    <ButtonText text="Legal" />
                </div>
                <h1>Risk Disclosure</h1>

                <div className={styles.contentWrapper}>
                    <p className={styles.lastUpdated}>(Last updated: 30 June 2026)</p>
                    <p className={styles.introText}>
                        This Risk Disclosure explains the principal risks of trading foreign exchange and contracts for difference (CFDs) with ZeonFX Limited (“ZeonFX”). It is provided so that you can make an informed decision about whether these products are appropriate for you. It does not describe every risk, and it is not advice. You should read it in full, together with our Terms and Conditions, and seek independent professional advice if you are in any doubt. By opening an Account and trading, you confirm that you have read and understood this disclosure and that you accept the risks involved.
                    </p>

                    <div className={styles.section}>
                        <h2>1. General risk of trading leveraged products</h2>
                        <p>
                            Trading in forex and CFDs carries a high level of risk and may not be suitable for all investors. These are complex, leveraged products, and the high degree of leverage can work against you as well as for you. You may sustain a total loss of the funds you deposit, and you should not trade with money you cannot afford to lose. Before trading, you should carefully consider your investment objectives, level of experience, and appetite for risk.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>2. Leverage and margin risk</h2>
                        <p>
                            Leverage allows you to open a position that is much larger than the margin you deposit to support it. While this magnifies potential profits, it equally magnifies potential losses, and losses can accumulate very quickly. A small movement in the market can have a proportionally much larger effect on the funds in your Account. For example, a position opened with high leverage can lose a large percentage of the allocated margin from only a small adverse price move.
                        </p>
                        <p>
                            You must maintain sufficient margin at all times. If the market moves against you and your Equity falls to the stop-out level, your positions may be closed automatically and without notice, potentially crystallising a significant loss. You are responsible for monitoring your open positions and margin level continuously.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>3. Market risk and volatility</h2>
                        <p>
                            Prices in forex and CFD markets can move rapidly and unpredictably in response to economic data, central bank decisions, geopolitical events, and shifts in market sentiment. Volatility can be extreme, particularly around scheduled news releases and at market open or close. Sudden price movements can result in immediate and substantial losses, and there is no assurance that any strategy will protect you from adverse market conditions.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>4. Liquidity and gapping risk</h2>
                        <p>
                            Some instruments or market conditions may have limited liquidity, which can make it difficult to open or close a position at your desired price, or at all. Markets can also gap, meaning the price jumps from one level to another without trading at the levels in between, for example over weekends or around major announcements. When a market gaps, orders including stop-loss orders may be executed at a price significantly worse than the level you set.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>5. Execution and slippage risk</h2>
                        <p>
                            Because prices move continuously, the price at which your order is executed may differ from the price displayed when you placed it. This difference is called slippage and may be positive or negative. In fast markets, slippage can be substantial. Stop orders are not guaranteed to be executed at the specified level and become market orders once triggered, so they may be filled at a worse price during volatile conditions.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>6. Technical and platform risk</h2>
                        <p>
                            Trading through electronic platforms carries risks associated with technology, including internet connectivity failures, hardware and software malfunctions, server interruptions, delays, and latency. The Company cannot guarantee uninterrupted access to its platforms. You are responsible for maintaining a reliable internet connection and suitable devices. Where access is disrupted, you may be unable to open, modify, or close positions when you wish to, which could result in losses.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>7. Communication and third-party risk</h2>
                        <p>
                            Communications sent electronically can be delayed, intercepted, or fail to arrive. The Company is not responsible for losses arising from communications that are delayed or not received for reasons outside its reasonable control. The Services also depend on third parties, including liquidity providers, payment processors, and data feeds, and disruption to any of these may affect pricing, execution, or your ability to deposit or withdraw.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>8. Currency risk</h2>
                        <p>
                            If you trade instruments denominated in a currency other than your Account currency, or hold an Account in a currency other than your home currency, changes in exchange rates will affect the value of your positions, profits, and losses when converted. Currency movements can add to your losses independently of the performance of the underlying instrument.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>9. Counterparty and off-exchange nature</h2>
                        <p>
                            CFDs are traded off-exchange, or over the counter, rather than on a regulated exchange. When you trade a CFD you are entering into a contract with the Company or its liquidity arrangements rather than buying the underlying asset, and you have no rights to the underlying instrument. You are exposed to the risk that the counterparty to a transaction may not perform its obligations. The Company holds client funds in segregated accounts separate from its own operating funds to reduce this risk, but segregation does not remove all counterparty risk.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>10. Costs and financing charges</h2>
                        <p>
                            The costs of trading, including spreads, any applicable commissions, and overnight financing or swap charges, will reduce your net returns and can turn an otherwise profitable position into a loss, particularly on positions held for a long time. You should understand all applicable costs before trading, as set out on our website and platforms.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>11. No guarantee of profit and past performance</h2>
                        <p>
                            No representation is made that you will achieve profits or avoid losses, and no such outcome can be guaranteed. Past performance of any instrument, strategy, trader, or account is not a reliable indicator of future results. Simulated or demo results have inherent limitations and do not reflect the psychological pressures and market conditions of live trading, so they are not indicative of live performance.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>12. Copy trading and managed account risk</h2>
                        <p>
                            If you use copy trading or invest in a managed or PAMM account, you take on the same market risks as trading yourself, in addition to risks specific to relying on another person's decisions. The past performance of any trader or manager does not predict their future results, returns are not guaranteed, and you may lose money. You remain responsible for setting your own risk limits and for the capital you allocate. You should review the risk profile of any trader or manager before you copy or invest.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>13. Suitability and independent judgement</h2>
                        <p>
                            ZeonFX operates on an execution-only basis and does not assess whether trading forex or CFDs is suitable or appropriate for you. It is your responsibility to determine whether these products match your financial situation, objectives, and risk tolerance. All trading decisions are made solely by you, and you are encouraged to seek independent financial advice before trading if you are uncertain.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>14. Tax</h2>
                        <p>
                            The tax treatment of trading profits and losses depends on your individual circumstances and the laws of your country of residence, and may change. The Company does not provide tax advice. You are responsible for understanding and meeting any tax obligations that arise from your trading, and you should consult a professional tax adviser where appropriate.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>15. Limitation of liability</h2>
                        <p>
                            To the fullest extent permitted by law, ZeonFX's liability for losses arising from your trading activity, from technical or platform failures, from pricing errors, or from the failure of third-party systems is limited as set out in our Terms and Conditions. ZeonFX is not liable for indirect or consequential losses arising from your use of the Services or from your trading decisions.
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h2>16. Acknowledgement</h2>
                        <p>
                            By opening and operating an Account with ZeonFX, you acknowledge that you have read and understood this Risk Disclosure, that you understand the risks of trading leveraged products, that you are trading on your own judgement and at your own risk, and that you accept responsibility for your trading decisions and their outcomes. If you do not understand any of these risks, you should not trade until you have obtained independent advice.
                        </p>
                        <p>
                            For any question about this disclosure, contact ZeonFX Limited at support@zeonfx.com or compliance@zeonfx.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


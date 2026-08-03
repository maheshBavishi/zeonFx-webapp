import React from 'react';
import styles from './quickComparison.module.scss';
import ButtonText from '@/components/buttonText';

const ROWS = [
    { feature: 'Best for', mt5: 'Power users, algo traders', webTerminal: 'Fast browser trading' },
    { feature: 'Install', mt5: 'Desktop and mobile app', webTerminal: 'Runs in browser' },
    { feature: 'Charts', mt5: '80+ indicators, custom', webTerminal: 'TradingView, multi-chart' },
    { feature: 'Automation', mt5: 'Expert Advisors, algos', webTerminal: 'Manual, tool-assisted' },
    { feature: 'Devices', mt5: 'Windows, Mac, iOS, Android', webTerminal: 'Any modern browser' },
];

export default function QuickComparison() {
    return (
        <div className={styles.quickComparison}>
            <div className='container'>
                <div className={styles.center}>
                    <ButtonText text="quick comparison" />
                </div>
                <h2>
                    Find the Platform That <span> Fits </span> You
                </h2>
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>METATRADER 5</th>
                                <th>ZEONFX WEB TERMINAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ROWS.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.feature}</td>
                                    <td>{row.mt5}</td>
                                    <td>{row.webTerminal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

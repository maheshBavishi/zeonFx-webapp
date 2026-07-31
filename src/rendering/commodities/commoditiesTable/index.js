import React from 'react';
import styles from './commoditiesTable.module.scss';
import ButtonText from '@/components/buttonText';

const ROWS = [
    { instrument: 'WTI', description: 'US Crude Oil', spread: 'Low', leverage: '1:200' },
    { instrument: 'BRENT', description: 'Brent Crude Oil', spread: 'Low', leverage: '1:200' },
    { instrument: 'NATGAS', description: 'Natural Gas', spread: 'Low', leverage: '1:100' },
    { instrument: 'COFFEE', description: 'Coffee', spread: 'Low', leverage: '1:50' },
    { instrument: 'WHEAT', description: 'Coffee', spread: 'Low', leverage: '1:50' },
];

export default function CommoditiesTable() {
    return (
        <div className={styles.marketsTable}>
            <div className='container'>
                <div className={styles.center}>
                    <ButtonText text="instruments table" />
                </div>
                <h2>
                    Markets at a <span> Glance</span>
                </h2>
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>INSTRUMENT</th>
                                <th>DESCRIPTION</th>
                                <th className={styles.number}>MIN.<br /> SPREAD</th>
                                <th className={styles.number}>LEVERAGE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ROWS.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.instrument}</td>
                                    <td>{row.description}</td>
                                    <td className={styles.number}>{row.spread}</td>
                                    <td className={styles.number}>{row.leverage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={styles.bottomText}>
                    <p>
                        Spreads shown are indicative and may vary with market conditions. Leverage
                        shown is the maximum available and depends on account type and instrument.
                    </p>
                </div>
            </div>
        </div>
    );
}


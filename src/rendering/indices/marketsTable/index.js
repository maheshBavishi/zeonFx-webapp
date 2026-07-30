import React from 'react'
import styles from './marketsTable.module.scss';
import ButtonText from '@/components/buttonText';

const ROWS = [
    { instrument: 'US30', description: 'Wall Street 30', spread: 'Low', leverage: '1:500' },
    { instrument: 'NAS100', description: 'US Tech 100', spread: 'Low', leverage: '1:500' },
    { instrument: 'SPX500', description: 'US 500', spread: 'Low', leverage: '1:500' },
    { instrument: 'DAX40', description: 'Germany 40', spread: 'Low', leverage: '1:500' },
    { instrument: 'FTSE100', description: 'UK 100', spread: 'Low', leverage: '1:500' },
    { instrument: 'JP225', description: 'Japan 225', spread: 'Low', leverage: '1:500' },
];

export default function MarketsTable({ data }) {
    const tableData = data || ROWS;

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
                            {tableData.map((row, i) => (
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
                        Spreads shown are indicative and may vary with market conditions. Leverage shown is the maximum available
                        and depends on account type and instrument.
                    </p>
                </div>
            </div>
        </div>
    )
}


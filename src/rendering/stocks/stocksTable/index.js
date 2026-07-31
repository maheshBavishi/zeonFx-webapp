import React from 'react';
import styles from './stocksTable.module.scss';
import ButtonText from '@/components/buttonText';

const TSLA = '/assets/icons/TSLA.svg';
const AAPL = '/assets/icons/AAPL.svg';
const AMZN = '/assets/icons/AMZN.svg';
const MSFT = '/assets/icons/MSFT.svg';
const NVDA = '/assets/icons/NVDA.svg';
const META = '/assets/icons/META.svg';

const ROWS = [
    { icon: AAPL, instrument: 'AAPL', description: 'Apple Inc.', spread: 'Low', leverage: '1:50' },
    { icon: TSLA, instrument: 'TSLA', description: 'Tesla Inc.', spread: 'Low', leverage: '1:50' },
    { icon: AMZN, instrument: 'AMZN', description: 'Amazon.com Inc.', spread: 'Low', leverage: '1:50' },
    { icon: MSFT, instrument: 'MSFT', description: 'Microsoft Corp.', spread: 'Low', leverage: '1:50' },
    { icon: NVDA, instrument: 'NVDA', description: 'NVIDIA Corp.', spread: 'Low', leverage: '1:50' },
    { icon: META, instrument: 'META', description: 'Meta Platforms Inc.', spread: 'Low', leverage: '1:50' },
];

export default function StocksTable() {
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
                                    <td>
                                        <div className={styles.instrument}>
                                            <img src={row.icon} alt={row.instrument} />
                                            <span>{row.instrument}</span>
                                        </div>
                                    </td>
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


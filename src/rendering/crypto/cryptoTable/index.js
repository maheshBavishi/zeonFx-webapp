import React from 'react';
import ButtonText from '@/components/buttonText';
import styles from './cryptoTable.module.scss';

const BTC = '/assets/icons/BTC.svg';
const ETH = '/assets/icons/ETH.svg';
const SOL = '/assets/icons/SOL.svg';
const XRP = '/assets/icons/XRP.svg';
const LTC = '/assets/icons/LTC.svg';

const ROWS = [
    { icon: BTC, instrument: 'BTC/USD', description: 'Bitcoin / US Dollar', spread: 'Competitive', leverage: '1:20' },
    { icon: ETH, instrument: 'ETH/USD', description: 'Ethereum / US Dollar', spread: 'Competitive', leverage: '1:20' },
    { icon: SOL, instrument: 'SOL/USD', description: 'Solana / US Dollar', spread: 'Competitive', leverage: '1:10' },
    { icon: XRP, instrument: 'XRP/USD', description: 'XRP / US Dollar', spread: 'Competitive', leverage: '1:10' },
    { icon: LTC, instrument: 'LTC/USD', description: 'Litecoin / US Dollar', spread: 'Competitive', leverage: '1:10' },
];

export default function CryptoTable() {
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
                        Spreads shown are indicative and may vary with market conditions. Leverage shown
                        is the maximum available and depends on account type and instrument.
                    </p>
                </div>
            </div>
        </div>
    );
}


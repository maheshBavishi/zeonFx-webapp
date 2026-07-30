import React from 'react'
import styles from './instrumentsTable.module.scss';
import ButtonText from '@/components/buttonText';

const XauIcon = '/assets/icons/xau.svg';

const ROWS = [
    { icon: XauIcon, instrument: 'XAU/USD', description: 'Gold / US Dollar', spread: '0.1', leverage: '1:500' },
    { icon: XauIcon, instrument: 'XAG/USD', description: 'Silver / US Dollar', spread: '0.2', leverage: '1:500' },
    { icon: XauIcon, instrument: 'XPT/USD', description: 'Platinum / US Dollar', spread: '0.5', leverage: '1:500' },
    { icon: XauIcon, instrument: 'XPD/USD', description: 'Palladium / US Dollar', spread: '0.5', leverage: '1:500' },
];

export default function InstrumentsTable({ data }) {
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
    )
}


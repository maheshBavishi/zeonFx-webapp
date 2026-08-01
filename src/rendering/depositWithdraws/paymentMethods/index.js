import React from 'react';
import styles from './paymentMethods.module.scss';
import ButtonText from '@/components/buttonText';

const ROWS = [
    { method: 'Cards (Visa / Mastercard)', depositTime: 'Instant', withdrawalTime: '1 to 3 business days', fee: '0%' },
    { method: 'Bank transfer', depositTime: 'Same to 1 business day', withdrawalTime: '1 to 3 business days', fee: '0%' },
    { method: 'E-wallets (Skrill / Neteller)', depositTime: 'Instant', withdrawalTime: 'Within 24 hours', fee: '0%' },
    { method: 'Crypto (USDT and major coins)', depositTime: 'On network confirmation', withdrawalTime: 'Within 24 hours', fee: '0%' },
];

export default function PaymentMethods() {
    return (
        <div className={styles.paymentMethods}>
            <div className='container'>
                <div className={styles.center}>
                    <ButtonText text='Payment Methods' />
                </div>
                <h2>
                    <span> Seamless </span> Deposits & Withdrawals
                </h2>
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>METHOD</th>
                                <th>DEPOSIT TIME</th>
                                <th>WITHDRAWAL TIME</th>
                                <th>ZEONFX FEE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ROWS.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.method}</td>
                                    <td>{row.depositTime}</td>
                                    <td>{row.withdrawalTime}</td>
                                    <td style={{ color: '#149EF5', fontWeight: 600 }}>{row.fee}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={styles.bottomText}>
                    <p>
                        ZeonFX does not charge a commission on withdrawals. Third-party payment providers may apply their own fees, which are outside ZeonFX control. Withdrawals are processed to the original funding method where required by anti-money-laundering rules.
                    </p>
                    <p>
                        Client funds are held in segregated accounts, separate from company operating capital. Identity verification is required before your first withdrawal, in line with the ZeonFX AML Policy.
                    </p>
                </div>
            </div>
        </div>
    );
}

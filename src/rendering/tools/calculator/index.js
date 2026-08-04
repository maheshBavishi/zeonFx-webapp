import React from 'react'
import styles from './calculator.module.scss';
import Button from '@/components/button';

const FormGroup = ({ label, children }) => (
    <div className={styles.formGroup}>
        <label>{label}</label>
        {children}
    </div>
);

const NumberInput = ({ value }) => (
    <div className={styles.numberInput}>
        <button>-</button>
        <input type="text" defaultValue={value} />
        <button>+</button>
    </div>
);

const TextInput = ({ value }) => (
    <div className={styles.textInput}>
        <input type="text" defaultValue={value} />
    </div>
);

const ToggleInput = () => (
    <div className={styles.toggleInput}>
        <button className={styles.active}>BUY</button>
        <button>SELL</button>
    </div>
);

export default function Calculator() {
    return (
        <div className={styles.calculator}>
            <div className='container'>
                <div className={styles.allBox}>

                    {/* Pip Value Calculator */}
                    <div className={styles.box}>
                        <h2 className={styles.title}>Pip <span>Value</span> Calculator</h2>
                        <div className={styles.threeCol}>
                            <div>
                                <FormGroup label="SYMBOL"><TextInput value="EUR/USD" /></FormGroup>
                            </div>
                            <div>
                                <FormGroup label="PIP AMMOUNT"><NumberInput value="1.0" /></FormGroup>
                            </div>
                            <div>
                                <FormGroup label="VOLUME"><NumberInput value="1.0" /></FormGroup>
                            </div>

                        </div>
                        <div className={styles.twoCol}>
                            <FormGroup label="ACCOUNT CURRENCY"><TextInput value="USD" /></FormGroup>
                            <FormGroup label="ASK PRICE"><TextInput value="1.433" /></FormGroup>
                        </div>
                        <div className={styles.resultBoxSingle}>
                            <span className={styles.resultLabel}>PIP VALUE</span>
                            <span className={styles.resultValue}>$0.00</span>
                        </div>
                    </div>

                    {/* Profit Calculator */}
                    <div className={styles.box}>
                        <h2 className={styles.title}><span>Profit</span> Calculator</h2>
                        <div className={styles.formGrid}>
                            <div className={styles.col4}>
                                <FormGroup label="SYMBOL"><TextInput value="EUR/USD" /></FormGroup>
                            </div>
                            <div className={styles.col4}>
                                <FormGroup label="OPEN PRICE"><NumberInput value="1.0" /></FormGroup>
                            </div>
                            <div className={styles.col4}>
                                <FormGroup label="CLOSE PRICE"><NumberInput value="1.0" /></FormGroup>
                            </div>

                            <div className={styles.col3}>
                                <FormGroup label="ACCOUNT CURRENCY"><TextInput value="USD" /></FormGroup>
                            </div>
                            <div className={styles.col3}>
                                <FormGroup label="PERIOD IN DAYS"><NumberInput value="1.0" /></FormGroup>
                            </div>
                            <div className={styles.col3}>
                                <FormGroup label="VOLUME, LOTS"><NumberInput value="1.0" /></FormGroup>
                            </div>
                            <div className={styles.col3}>
                                <FormGroup label="TYPE"><ToggleInput /></FormGroup>
                            </div>
                        </div>
                        <div className={styles.widthfull}>
                            <Button text="CALCULATE" primary />
                        </div>
                        <div className={styles.resultBoxMulti}>
                            <div className={styles.resultRow}>
                                <span>PROFIT</span>
                                <span className={styles.green}>+$0.00</span>
                            </div>
                            <div className={styles.resultRow}>
                                <span>GROSS PROFIT</span>
                                <span className={styles.green}>+$0.00</span>
                            </div>
                            <div className={styles.resultRow}>
                                <span>FEES</span>
                                <span>$0.00</span>
                            </div>
                        </div>
                    </div>

                    {/* Trading Calculator */}
                    <div className={styles.box}>
                        <h2 className={styles.title}><span>Trading</span> Calculator</h2>
                        <div className={styles.formGrid}>
                            <div className={styles.col4}>
                                <FormGroup label="SYMBOL"><TextInput value="EUR/USD" /></FormGroup>
                            </div>
                            <div className={styles.col4}>
                                <FormGroup label="OPEN PRICE"><NumberInput value="1.0" /></FormGroup>
                            </div>
                            <div className={styles.col4}>
                                <FormGroup label="CLOSE PRICE"><NumberInput value="1.0" /></FormGroup>
                            </div>

                            <div className={styles.col4}>
                                <FormGroup label="ACCOUNT CURRENCY"><TextInput value="USD" /></FormGroup>
                            </div>
                            <div className={styles.col4}>
                                <FormGroup label="LEVERAGE"><TextInput value="1.0" /></FormGroup>
                            </div>
                            <div className={styles.col4}>
                                <FormGroup label="VOLUME, LOTS"><NumberInput value="1.0" /></FormGroup>
                            </div>
                        </div>
                        <div className={styles.widthfull}>
                            <Button text="CALCULATE" primary />
                        </div>
                        <div className={styles.resultBoxMulti}>
                            <div className={styles.resultRow}>
                                <span>PIP VALUE</span>
                                <span>$10.00</span>
                            </div>
                            <div className={styles.resultRow}>
                                <span>REQUIRED MARGIN</span>
                                <span>$0.00</span>
                            </div>
                            <div className={styles.resultRow}>
                                <span>PROFIT/LOSS</span>
                                <span>$0.00</span>
                            </div>
                            <div className={styles.resultRow}>
                                <span>SWAP CHARGES</span>
                                <span>$0.00</span>
                            </div>
                            <div className={styles.resultRow}>
                                <span>COMMISSION</span>
                                <span>$0.00</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

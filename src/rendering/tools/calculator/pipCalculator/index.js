'use client';
import React, { useState, useEffect } from 'react';
import styles from '../calculator.module.scss';
import { INSTRUMENTS, ACCOUNT_CURRENCIES, FormGroup, SelectInput, NumberInput, TextInput } from '../constants';

export default function PipCalculator() {
    const [pipSymbol, setPipSymbol] = useState('EUR/USD');
    const [pipAmount, setPipAmount] = useState(1.0);
    const [pipVolume, setPipVolume] = useState(1.0);
    const [pipAccountCurrency, setPipAccountCurrency] = useState('USD');
    const [pipAskPrice, setPipAskPrice] = useState('1.16956');
    const [liveRates, setLiveRates] = useState({});

    // Auto-fetch live rates
    useEffect(() => {
        let isMounted = true;
        async function fetchRates() {
            try {
                const res = await fetch('https://open.er-api.com/v6/latest/USD');
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.rates && isMounted) {
                        setLiveRates(data.rates);
                    }
                }
            } catch (err) {
                console.log('Live rate fetch fallback active');
            }
        }
        fetchRates();
        return () => { isMounted = false; };
    }, []);

    const handlePipSymbolChange = (newSymbol) => {
        setPipSymbol(newSymbol);
        const inst = INSTRUMENTS[newSymbol] || INSTRUMENTS['EUR/USD'];
        setPipAskPrice(inst.defaultPrice.toString());
    };

    // Real-Time Pip Value Calculation
    const calculatePipValue = () => {
        const inst = INSTRUMENTS[pipSymbol] || INSTRUMENTS['EUR/USD'];
        const pAmt = parseFloat(pipAmount) || 0;
        const vol = parseFloat(pipVolume) || 0;
        const ask = parseFloat(pipAskPrice) || inst.defaultPrice || 1.0;

        // Base Pip Value = (Pip Size * Volume * Contract Size * Pip Amount)
        const basePipValue = inst.pipSize * vol * inst.contractSize * pAmt;

        let pipValInAccount = basePipValue;

        if (pipAccountCurrency === inst.quote) {
            pipValInAccount = basePipValue;
        } else if (pipAccountCurrency === inst.base) {
            pipValInAccount = ask > 0 ? basePipValue / ask : 0;
        } else {
            const quoteRate = liveRates[inst.quote] || 1;
            const accRate = liveRates[pipAccountCurrency] || 1;
            if (quoteRate > 0) {
                pipValInAccount = (basePipValue / quoteRate) * accRate;
            }
        }

        const currSymbol = ACCOUNT_CURRENCIES.find((c) => c.code === pipAccountCurrency)?.symbol || '$';
        return `${currSymbol}${pipValInAccount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    const symbolOptions = Object.keys(INSTRUMENTS);

    return (
        <div className={styles.box}>
            <h2 className={styles.title}>Pip <span>Value</span> Calculator</h2>
            <div className={styles.threeCol}>
                <div>
                    <FormGroup label="SYMBOL">
                        <SelectInput
                            value={pipSymbol}
                            onChange={handlePipSymbolChange}
                            options={symbolOptions}
                        />
                    </FormGroup>
                </div>
                <div>
                    <FormGroup label="PIP AMOUNT">
                        <NumberInput
                            value={pipAmount}
                            onChange={setPipAmount}
                            step={0.1}
                            min={0.1}
                        />
                    </FormGroup>
                </div>
                <div>
                    <FormGroup label="VOLUME">
                        <NumberInput
                            value={pipVolume}
                            onChange={setPipVolume}
                            step={0.1}
                            min={0.01}
                        />
                    </FormGroup>
                </div>
            </div>
            <div className={styles.twoCol}>
                <FormGroup label="ACCOUNT CURRENCY">
                    <SelectInput
                        value={pipAccountCurrency}
                        onChange={setPipAccountCurrency}
                        options={ACCOUNT_CURRENCIES}
                    />
                </FormGroup>
                <FormGroup label="ASK PRICE">
                    <TextInput
                        value={pipAskPrice}
                        onChange={setPipAskPrice}
                    />
                </FormGroup>
            </div>
            <div className={styles.resultBoxSingle}>
                <span className={styles.resultLabel}>PIP VALUE</span>
                <span className={styles.resultValue}>{calculatePipValue()}</span>
            </div>
        </div>
    );
}

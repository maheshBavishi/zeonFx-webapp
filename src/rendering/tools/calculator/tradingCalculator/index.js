'use client';
import React, { useState } from 'react';
import styles from '../calculator.module.scss';
import Button from '@/components/button';
import { INSTRUMENTS, ACCOUNT_CURRENCIES, FormGroup, SelectInput, NumberInput } from '../constants';

const LEVERAGE_OPTIONS = [
    { code: '1', label: '1:1' },
    { code: '10', label: '1:10' },
    { code: '50', label: '1:50' },
    { code: '100', label: '1:100' },
    { code: '200', label: '1:200' },
    { code: '500', label: '1:500' },
    { code: '1000', label: '1:1000' },
];

export default function TradingCalculator() {
    const [tradeSymbol, setTradeSymbol] = useState('EUR/USD');
    const [tradeOpenPrice, setTradeOpenPrice] = useState(1.1700);
    const [tradeClosePrice, setTradeClosePrice] = useState(1.1710);
    const [tradeAccountCurrency, setTradeAccountCurrency] = useState('USD');
    const [tradeLeverage, setTradeLeverage] = useState('100');
    const [tradeVolume, setTradeVolume] = useState(1.0);

    const handleSymbolChange = (newSymbol) => {
        setTradeSymbol(newSymbol);
        const inst = INSTRUMENTS[newSymbol] || INSTRUMENTS['EUR/USD'];
        setTradeOpenPrice(inst.defaultOpen || 1.1700);
        setTradeClosePrice(inst.defaultClose || 1.1710);
    };

    const calculateTrading = () => {
        const inst = INSTRUMENTS[tradeSymbol] || INSTRUMENTS['EUR/USD'];
        const openP = parseFloat(tradeOpenPrice) || 0;
        const closeP = parseFloat(tradeClosePrice) || 0;
        const vol = parseFloat(tradeVolume) || 0;
        const lev = parseFloat(tradeLeverage) || 100;

        // Pip Value
        const basePipVal = inst.pipSize * vol * inst.contractSize;
        let pipValInAccount = basePipVal;
        if (tradeAccountCurrency === inst.base && openP > 0) {
            pipValInAccount = basePipVal / openP;
        }

        // Required Margin = (Lot * Contract Size * Open Price) / Leverage
        const marginQuote = (vol * inst.contractSize * openP) / (lev > 0 ? lev : 1);
        let marginInAccount = marginQuote;
        if (tradeAccountCurrency === inst.base && openP > 0) {
            marginInAccount = marginQuote / openP;
        }

        // Profit / Loss
        const pnlQuote = (closeP - openP) * vol * inst.contractSize;
        let pnlInAccount = pnlQuote;
        if (tradeAccountCurrency === inst.base && openP > 0) {
            pnlInAccount = pnlQuote / openP;
        }

        const currSymbol = ACCOUNT_CURRENCIES.find((c) => c.code === tradeAccountCurrency)?.symbol || '$';

        const formatCurr = (val, showSign = false) => {
            const isNeg = val < 0;
            const absVal = Math.abs(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            const sign = showSign ? (isNeg ? '-' : '+') : (isNeg ? '-' : '');
            return `${sign}${currSymbol}${absVal}`;
        };

        return {
            pipVal: formatCurr(pipValInAccount),
            margin: formatCurr(marginInAccount),
            pnl: formatCurr(pnlInAccount, false),
            pnlVal: pnlInAccount,
            swap: `${currSymbol}0.00`,
            commission: `${currSymbol}0.00`,
        };
    };

    const symbolOptions = Object.keys(INSTRUMENTS);
    const result = calculateTrading();

    const getPnlColorClass = (val) => {
        if (val > 0) return styles.green;
        if (val < 0) return styles.red;
        return '';
    };

    return (
        <div className={styles.box}>
            <h2 className={styles.title}><span>Trading</span> Calculator</h2>
            <div className={styles.formGrid}>
                <div className={styles.col4}>
                    <FormGroup label="SYMBOL">
                        <SelectInput
                            value={tradeSymbol}
                            onChange={handleSymbolChange}
                            options={symbolOptions}
                        />
                    </FormGroup>
                </div>
                <div className={styles.col4}>
                    <FormGroup label="OPEN PRICE">
                        <NumberInput
                            value={tradeOpenPrice}
                            onChange={setTradeOpenPrice}
                            step={0.0001}
                            min={0.00001}
                        />
                    </FormGroup>
                </div>
                <div className={styles.col4}>
                    <FormGroup label="CLOSE PRICE">
                        <NumberInput
                            value={tradeClosePrice}
                            onChange={setTradeClosePrice}
                            step={0.0001}
                            min={0.00001}
                        />
                    </FormGroup>
                </div>

                <div className={styles.col4}>
                    <FormGroup label="ACCOUNT CURRENCY">
                        <SelectInput
                            value={tradeAccountCurrency}
                            onChange={setTradeAccountCurrency}
                            options={ACCOUNT_CURRENCIES}
                        />
                    </FormGroup>
                </div>
                <div className={styles.col4}>
                    <FormGroup label="LEVERAGE">
                        <SelectInput
                            value={tradeLeverage}
                            onChange={setTradeLeverage}
                            options={LEVERAGE_OPTIONS}
                        />
                    </FormGroup>
                </div>
                <div className={styles.col4}>
                    <FormGroup label="VOLUME, LOTS">
                        <NumberInput
                            value={tradeVolume}
                            onChange={setTradeVolume}
                            step={0.1}
                            min={0.01}
                        />
                    </FormGroup>
                </div>
            </div>
            <div className={styles.widthfull}>
                <Button text="CALCULATE" primary />
            </div>
            <div className={styles.resultBoxMulti}>
                <div className={styles.resultRow}>
                    <span>PIP VALUE</span>
                    <span>{result.pipVal}</span>
                </div>
                <div className={styles.resultRow}>
                    <span>REQUIRED MARGIN</span>
                    <span>{result.margin}</span>
                </div>
                <div className={styles.resultRow}>
                    <span>PROFIT/LOSS</span>
                    <span className={getPnlColorClass(result.pnlVal)}>{result.pnl}</span>
                </div>
                <div className={styles.resultRow}>
                    <span>SWAP CHARGES</span>
                    <span>{result.swap}</span>
                </div>
                <div className={styles.resultRow}>
                    <span>COMMISSION</span>
                    <span>{result.commission}</span>
                </div>
            </div>
        </div>
    );
}

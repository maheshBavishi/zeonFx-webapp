'use client';
import React, { useState } from 'react';
import styles from '../calculator.module.scss';
import Button from '@/components/button';
import { INSTRUMENTS, ACCOUNT_CURRENCIES, FormGroup, SelectInput, NumberInput, ToggleInput } from '../constants';

export default function ProfitCalculator() {
    const [profitSymbol, setProfitSymbol] = useState('EUR/USD');
    const [profitOpenPrice, setProfitOpenPrice] = useState(1.1700);
    const [profitClosePrice, setProfitClosePrice] = useState(1.1710);
    const [profitAccountCurrency, setProfitAccountCurrency] = useState('USD');
    const [profitPeriod, setProfitPeriod] = useState(1.0);
    const [profitVolume, setProfitVolume] = useState(1.0);
    const [profitType, setProfitType] = useState('BUY');

    const handleSymbolChange = (newSymbol) => {
        setProfitSymbol(newSymbol);
        const inst = INSTRUMENTS[newSymbol] || INSTRUMENTS['EUR/USD'];
        setProfitOpenPrice(inst.defaultOpen || 1.1700);
        setProfitClosePrice(inst.defaultClose || 1.1710);
    };

    const calculateProfit = () => {
        const inst = INSTRUMENTS[profitSymbol] || INSTRUMENTS['EUR/USD'];
        const openP = parseFloat(profitOpenPrice) || 0;
        const closeP = parseFloat(profitClosePrice) || 0;
        const vol = parseFloat(profitVolume) || 0;

        // Buy: (Close - Open) * Volume * Contract Size
        // Sell: (Open - Close) * Volume * Contract Size
        const diff = profitType === 'BUY' ? (closeP - openP) : (openP - closeP);
        const grossQuote = diff * vol * inst.contractSize;

        let grossAccount = grossQuote;
        if (profitAccountCurrency === inst.base && openP > 0) {
            grossAccount = grossQuote / openP;
        }

        // Optional Swap fees based on holding period (e.g. $0.50/lot/day default)
        const swapRatePerDay = 0.50;
        const fees = parseFloat((vol * Math.max(0, profitPeriod - 1) * swapRatePerDay).toFixed(2));
        const netAccount = grossAccount - fees;

        const currSymbol = ACCOUNT_CURRENCIES.find((c) => c.code === profitAccountCurrency)?.symbol || '$';

        const formatCurrency = (val) => {
            const isNegative = val < 0;
            const absVal = Math.abs(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            return `${isNegative ? '-' : '+'}${currSymbol}${absVal}`;
        };

        return {
            netFormatted: formatCurrency(netAccount),
            grossFormatted: formatCurrency(grossAccount),
            feesFormatted: `${currSymbol}${fees.toFixed(2)}`,
            netVal: netAccount,
            grossVal: grossAccount,
        };
    };

    const symbolOptions = Object.keys(INSTRUMENTS);
    const result = calculateProfit();

    const getResultColorClass = (val) => {
        if (val > 0) return styles.green;
        if (val < 0) return styles.red;
        return '';
    };

    return (
        <div className={styles.box}>
            <h2 className={styles.title}><span>Profit</span> Calculator</h2>
            <div className={styles.formGrid}>
                <div className={styles.col4}>
                    <FormGroup label="SYMBOL">
                        <SelectInput
                            value={profitSymbol}
                            onChange={handleSymbolChange}
                            options={symbolOptions}
                        />
                    </FormGroup>
                </div>
                <div className={styles.col4}>
                    <FormGroup label="OPEN PRICE">
                        <NumberInput
                            value={profitOpenPrice}
                            onChange={setProfitOpenPrice}
                            step={0.0001}
                            min={0.00001}
                        />
                    </FormGroup>
                </div>
                <div className={styles.col4}>
                    <FormGroup label="CLOSE PRICE">
                        <NumberInput
                            value={profitClosePrice}
                            onChange={setProfitClosePrice}
                            step={0.0001}
                            min={0.00001}
                        />
                    </FormGroup>
                </div>

                <div className={styles.col3}>
                    <FormGroup label="ACCOUNT CURRENCY">
                        <SelectInput
                            value={profitAccountCurrency}
                            onChange={setProfitAccountCurrency}
                            options={ACCOUNT_CURRENCIES}
                        />
                    </FormGroup>
                </div>
                <div className={styles.col3}>
                    <FormGroup label="PERIOD IN DAYS">
                        <NumberInput
                            value={profitPeriod}
                            onChange={setProfitPeriod}
                            step={1}
                            min={1}
                        />
                    </FormGroup>
                </div>
                <div className={styles.col3}>
                    <FormGroup label="VOLUME, LOTS">
                        <NumberInput
                            value={profitVolume}
                            onChange={setProfitVolume}
                            step={0.1}
                            min={0.01}
                        />
                    </FormGroup>
                </div>
                <div className={styles.col3}>
                    <FormGroup label="TYPE">
                        <ToggleInput
                            value={profitType}
                            onChange={setProfitType}
                        />
                    </FormGroup>
                </div>
            </div>
            <div className={styles.widthfull}>
                <Button text="CALCULATE" primary />
            </div>
            <div className={styles.resultBoxMulti}>
                <div className={styles.resultRow}>
                    <span>PROFIT</span>
                    <span className={getResultColorClass(result.netVal)}>
                        {result.netFormatted}
                    </span>
                </div>
                <div className={styles.resultRow}>
                    <span>GROSS PROFIT</span>
                    <span className={getResultColorClass(result.grossVal)}>
                        {result.grossFormatted}
                    </span>
                </div>
                <div className={styles.resultRow}>
                    <span>FEES</span>
                    <span>{result.feesFormatted}</span>
                </div>
            </div>
        </div>
    );
}

'use client';
import React from 'react';
import styles from './calculator.module.scss';

export const INSTRUMENTS = {
    'EUR/USD': { base: 'EUR', quote: 'USD', contractSize: 100000, pipSize: 0.0001, defaultPrice: 1.16956, defaultOpen: 1.1700, defaultClose: 1.1710 },
    'GBP/USD': { base: 'GBP', quote: 'USD', contractSize: 100000, pipSize: 0.0001, defaultPrice: 1.26500, defaultOpen: 1.2650, defaultClose: 1.2680 },
    'USD/JPY': { base: 'USD', quote: 'JPY', contractSize: 100000, pipSize: 0.01, defaultPrice: 150.000, defaultOpen: 150.00, defaultClose: 150.50 },
    'EUR/JPY': { base: 'EUR', quote: 'JPY', contractSize: 100000, pipSize: 0.01, defaultPrice: 165.000, defaultOpen: 165.00, defaultClose: 165.40 },
    'GBP/JPY': { base: 'GBP', quote: 'JPY', contractSize: 100000, pipSize: 0.01, defaultPrice: 190.000, defaultOpen: 190.00, defaultClose: 190.60 },
    'AUD/USD': { base: 'AUD', quote: 'USD', contractSize: 100000, pipSize: 0.0001, defaultPrice: 0.66000, defaultOpen: 0.6600, defaultClose: 0.6625 },
    'USD/CAD': { base: 'USD', quote: 'CAD', contractSize: 100000, pipSize: 0.0001, defaultPrice: 1.36000, defaultOpen: 1.3600, defaultClose: 1.3640 },
    'USD/CHF': { base: 'USD', quote: 'CHF', contractSize: 100000, pipSize: 0.0001, defaultPrice: 0.89000, defaultOpen: 0.8900, defaultClose: 0.8930 },
    'XAU/USD': { base: 'XAU', quote: 'USD', contractSize: 100, pipSize: 0.01, defaultPrice: 2400.00, defaultOpen: 2400.00, defaultClose: 2410.00 },
    'XAG/USD': { base: 'XAG', quote: 'USD', contractSize: 5000, pipSize: 0.01, defaultPrice: 28.50, defaultOpen: 28.50, defaultClose: 28.80 },
    'BTC/USD': { base: 'BTC', quote: 'USD', contractSize: 1, pipSize: 1.0, defaultPrice: 65000.00, defaultOpen: 65000.00, defaultClose: 66000.00 },
    'ETH/USD': { base: 'ETH', quote: 'USD', contractSize: 1, pipSize: 0.1, defaultPrice: 3400.00, defaultOpen: 3400.00, defaultClose: 3450.00 },
};

export const ACCOUNT_CURRENCIES = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' },
    { code: 'GBP', symbol: '£' },
    { code: 'JPY', symbol: '¥' },
    { code: 'AUD', symbol: 'A$' },
    { code: 'CAD', symbol: 'C$' },
    { code: 'CHF', symbol: 'CHF' },
];

export const FormGroup = ({ label, children }) => (
    <div className={styles.formGroup}>
        <label>{label}</label>
        {children}
    </div>
);

export const SelectInput = ({ value, onChange, options }) => (
    <div className={styles.selectInput}>
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((opt) => (
                <option key={opt.code || opt} value={opt.code || opt}>
                    {opt.label || opt.code || opt}
                </option>
            ))}
        </select>
        <div className={styles.dropdownArrow}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 6L8 10.5L12.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    </div>
);

export const NumberInput = ({ value, onChange, step = 0.1, min = 0.01 }) => {
    const handleDecrement = () => {
        const val = parseFloat(value) || 0;
        const newVal = Math.max(min, val - step);
        onChange(Number(newVal.toFixed(5)));
    };

    const handleIncrement = () => {
        const val = parseFloat(value) || 0;
        const newVal = val + step;
        onChange(Number(newVal.toFixed(5)));
    };

    return (
        <div className={styles.numberInput}>
            <button type="button" onClick={handleDecrement}>-</button>
            <input
                type="number"
                step={step}
                min={min}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <button type="button" onClick={handleIncrement}>+</button>
        </div>
    );
};

export const TextInput = ({ value, onChange, placeholder = "", readOnly = false }) => (
    <div className={styles.textInput}>
        <input
            type="text"
            value={value}
            placeholder={placeholder}
            readOnly={readOnly}
            onChange={(e) => onChange && onChange(e.target.value)}
        />
    </div>
);

export const ToggleInput = ({ value, onChange }) => (
    <div className={styles.toggleInput}>
        <button
            type="button"
            className={value === 'BUY' ? styles.active : ''}
            onClick={() => onChange('BUY')}
        >
            BUY
        </button>
        <button
            type="button"
            className={value === 'SELL' ? styles.active : ''}
            onClick={() => onChange('SELL')}
        >
            SELL
        </button>
    </div>
);

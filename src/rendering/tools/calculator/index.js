'use client';
import React from 'react';
import styles from './calculator.module.scss';
import PipCalculator from './pipCalculator';
import ProfitCalculator from './profitCalculator';
import TradingCalculator from './tradingCalculator';

export default function Calculator() {
    return (
        <div className={styles.calculator}>
            <div className='container'>
                <div className={styles.allBox}>
                    {/* 1. Pip Value Calculator Component */}
                    <PipCalculator />

                    {/* 2. Profit Calculator Component */}
                    <ProfitCalculator />

                    {/* 3. Trading Calculator Component */}
                    <TradingCalculator />
                </div>
            </div>
        </div>
    );
}

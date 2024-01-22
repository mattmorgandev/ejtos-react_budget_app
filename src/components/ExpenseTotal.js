import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
    const { expenses, currency, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleCurrencyChange = (newCurrency) => {
        // Assuming dispatch is available in the context to update the currency
        // Update the currency throughout the entire app
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });

        // For demonstration purposes, you can set the local state only
        setSelectedCurrency(newCurrency);
    };

    return (
        <div className='alert alert-primary p-4 d-flex align-items-center justify-content-between'>
            <span>Spent so far: {selectedCurrency === '$' ? '$' : selectedCurrency === '£' ? '£' : selectedCurrency === '€' ? '€' : '₹'}{totalExpenses}</span>

                <select
                    id="currencySelect" 
                    onChange={(e) => handleCurrencyChange(e.target.value)} 
                    value={selectedCurrency}
                    style={{ backgroundColor: '#badbcc' }}>
                        <option value="$">Dollar ($)</option>
                        <option value="£">Pound (£)</option>
                        <option value="€">Euro (€)</option>
                        <option value="₹">Ruppee (₹)</option>
                </select> 
        </div>
    );
};

export default ExpenseTotal;
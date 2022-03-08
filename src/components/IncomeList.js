import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeList = () => {
    const { incomeTransactions } = useContext(GlobalContext)

    return (
        <div className="transactions transactions-income">
            <h2>Historique des transactions</h2>
            <ul className="transaction-list">
                { incomeTransactions.map(incomeTransactions =>(
                    <li className="transaction">
                        <span className="transaction-text">Salaire</span>
                        <span className="transaction-amount">€ 3800</span>
                        <button className="delete-btn">
                            <i className="fas fa-trash"></i>
                        </button>
                    </li>
                ))}
                
            </ul>
        </div>
    );
};

export default IncomeList;
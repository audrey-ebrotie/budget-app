import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransaction from './components/AddTransaction';
import IncomeList from './components/IncomeList';
import ExpenseList from './components/ExpenseList';
import { GlobalContextProvider } from './context/GlobalState';
import './App.css';

const App = () => {
    return (
        <GlobalContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <div className="left-wrapper">
                        <Header />
                        <Balance />
                    </div>
                    <div className="right-wrapper">
                        <AddTransaction />
                        <div className="transactions-wrapper">
                            <IncomeList />
                            <ExpenseList />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalContextProvider>
    );
};

export default App;
import React from 'react';
import Header from './components/Header';
import Balence from './components/Balance';
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
                    <Header />
                    <Balence />
                    <AddTransaction />
                    <IncomeList />
                    <ExpenseList />
                </div>
            </div>
        </GlobalContextProvider>
    );
};

export default App;
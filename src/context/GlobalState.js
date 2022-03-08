import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    incomeTransactions : [
        { id:1, incomeText: "Salaire Audrey", incomeAmount: 1000 },
        { id:2, incomeText: "Salaire Tristan", incomeAmount: 3800 }
    ],
    expenseTransactions : [
        { id:3, expenseText: "Loyer", expenseAmount: 650 },
        { id:4, expenseText: "Assurance auto", expenseAmount: 100 },
        { id:5, expenseText: "Mutuelle", expenseAmount: 100 }
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions:state.expenseTransactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
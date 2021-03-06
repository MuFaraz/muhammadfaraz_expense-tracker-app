import React,{useContext} from 'react'

import {Transaction} from './Transaction';
import GlobalProvider, { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);
    // console.log(context);
    return (
        <div>
            <h3>History</h3>
            <ul className="list">{transactions.map(transactions => (<Transaction key={transactions.id} transactions = {transactions}/>))}
                
            </ul>
        </div>
    )
}

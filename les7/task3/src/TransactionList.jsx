import React from 'react';
import Transaction from './Transaction.jsx';

const TransactionList = ({ transactions }) => (
  <ul className="transactions">
    {transactions.map(transaction => (
      <Transaction key={transaction.id} {...transaction} />
    ))}
  </ul>
);

export default TransactionList;

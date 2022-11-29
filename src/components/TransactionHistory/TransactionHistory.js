import PropTypes from 'prop-types';
import { Transaction } from './TransactionItem';

import { TransactionTable, ColumnTitle } from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <thead>
        <tr>
          <ColumnTitle>Type</ColumnTitle>
          <ColumnTitle>Amount</ColumnTitle>
          <ColumnTitle>Currency</ColumnTitle>
        </tr>
      </thead>

      {transactions.map(transaction => (
        <tbody key={transaction.id}>
          <Transaction
            transaction={transaction}
            id={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        </tbody>
      ))}
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};

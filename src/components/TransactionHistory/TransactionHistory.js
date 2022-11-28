// import PropTypes from 'prop-types';
import { Transaction } from './TransactionItem';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {transactions.map(transaction => (
        <tbody key={transaction.id}>
          <Transaction
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        </tbody>
      ))}
    </table>
  );
};

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div style={styles.card}>
      <div style={styles.box}>
        <h4 style={styles.label}>Income</h4>
        <p style={{ ...styles.amount, color: '#2ecc71' }}>
          +${numberWithCommas(income)}
        </p>
      </div>
      <div style={styles.divider} />
      <div style={styles.box}>
        <h4 style={styles.label}>Expense</h4>
        <p style={{ ...styles.amount, color: '#e74c3c' }}>
          -${numberWithCommas(expense)}
        </p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    marginBottom: '20px',
  },
  box: {
    flex: 1,
    textAlign: 'center',
  },
  label: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '5px',
    fontWeight: '500',
  },
  amount: {
    fontSize: '1.5rem',
    margin: 0,
    fontWeight: '600',
  },
  divider: {
    width: '1px',
    backgroundColor: '#eee',
    margin: '0 20px',
  }
};

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div style={styles.balanceCard}>
      <p style={styles.label}>Your Balance</p>
      <h2 style={styles.amount}>${numberWithCommas(total)}</h2>
    </div>
  );
};

const styles = {
  balanceCard: {
    backgroundColor: '#fff',
    padding: '20px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    marginBottom: '20px',
  },
  label: {
    fontSize: '1rem',
    color: '#888',
    marginBottom: '5px',
    fontWeight: '500',
  },
  amount: {
    fontSize: '2rem',
    color: '#2ecc71',
    margin: 0,
    fontWeight: '600',
  }
};

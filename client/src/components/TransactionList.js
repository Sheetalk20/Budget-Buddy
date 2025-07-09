import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.heading}>Transaction History</h3>
      <ul style={styles.list}>
        {transactions.map(transaction => (
          <li
            key={transaction._id}
            style={{
              ...styles.listItem,
              borderRight: transaction.amount < 0 ? '5px solid #e74c3c' : '5px solid #2ecc71',
            }}
          >
            <span style={styles.text}>{transaction.text}</span>
            <span style={styles.amount}>
              {transaction.amount < 0 ? '-' : '+'}${numberWithCommas(Math.abs(transaction.amount))}
            </span>
            <button
              onClick={() => deleteTransaction(transaction._id)}
              style={styles.deleteBtn}
              title="Delete transaction"
            >
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  wrapper: {
    marginTop: '20px',
  },
  heading: {
    borderBottom: '1px solid #bbb',
    paddingBottom: '10px',
    marginBottom: '20px',
    fontSize: '20px',
    color: '#333',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#fff',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    borderRadius: '8px',
  },
  text: {
    flex: 1,
    fontSize: '16px',
  },
  amount: {
    fontWeight: 'bold',
    marginLeft: '10px',
  },
  deleteBtn: {
    position: 'absolute',
    top: '50%',
    left: '-30px',
    transform: 'translateY(-50%)',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    fontSize: '16px',
    lineHeight: '22px',
    cursor: 'pointer',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
};

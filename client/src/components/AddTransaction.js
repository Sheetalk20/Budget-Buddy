import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    if (!text || !amount) {
      alert('Please enter both description and amount');
      return;
    }

    const newTransaction = {
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <div style={styles.wrapper}>
      <h3 style={styles.heading}>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Description</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g. Grocery, Freelance"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Amount <br />
            <small>(+ve for income, -ve for expense)</small>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 500 or -300"
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.btn}>Add Transaction</button>
      </form>
    </div>
  );
};

const styles = {
  wrapper: {
    marginTop: '20px',
  },
  heading: {
    marginBottom: '15px',
    borderBottom: '1px solid #bbb',
    paddingBottom: '10px',
    fontSize: '20px',
    color: '#333',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  btn: {
    width: '100%',
    backgroundColor: '#6366f1',
    color: '#fff',
    border: 'none',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }
};

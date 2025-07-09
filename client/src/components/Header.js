import React from 'react';

export const Header = () => {
  return (
    <header style={styles.header}>
      <h2 style={styles.title}>💰 Budget Buddy</h2>
      <p style={styles.subtitle}>Track your expenses & income smartly</p>
    </header>
  );
};

const styles = {
  header: {
    textAlign: 'center',
    marginTop: '30px',
    marginBottom: '20px',
  },
  title: {
    margin: '0',
    fontSize: '2.5rem',
    color: '#4a4a4a',
    fontWeight: '700',
    fontFamily: 'Poppins, sans-serif',
  },
  subtitle: {
    marginTop: '8px',
    fontSize: '1rem',
    color: '#888',
    fontFamily: 'Lato, sans-serif',
  }
};

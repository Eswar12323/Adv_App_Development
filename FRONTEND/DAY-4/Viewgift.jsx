import React from 'react';

const Viewgift = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Gift Details</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Product Image</th>
            <th style={styles.tableHeader}>Product Url</th>
            <th style={styles.tableHeader}>Product Amount</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Add table rows here */}
          <tr style={styles.tableRow}>
            <td style={styles.tableCell}>Customized Mug</td>
            <td style={styles.tableCell}>Product Url 1</td>
            <td style={styles.tableCell}>500</td>
            <td style={styles.tableCell}>
              <button style={styles.actionButton}>Edit</button>
              <button style={styles.actionButton}>Delete</button>
            </td>
          </tr>
          <tr style={styles.tableRow}>
            <td style={styles.tableCell}>Photo Frame</td>
            <td style={styles.tableCell}>Product Url 2</td>
            <td style={styles.tableCell}>400</td>
            <td style={styles.tableCell}>
              <button style={styles.actionButton}>Edit</button>
              <button style={styles.actionButton}>Delete</button>
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  tableHeader: {
    backgroundColor: '#f2f2f2',
    padding: '8px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
  },
  tableRow: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd',
  },
  tableCell: {
    padding: '8px',
    borderBottom: '1px solid #ddd',
  },
  actionButton: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '8px 16px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '14px',
    margin: '4px 2px',
    cursor: 'pointer',
  },
};

export default Viewgift;

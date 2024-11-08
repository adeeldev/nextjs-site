"use client";

import { useState } from 'react';

export default function DeleteRequest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    deleteOption: 'accountOnly',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/send-delete-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert('Request sent successfully!');
      } else {
        alert('Failed to send request.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <h1 style={styles.title}>Delete Account Request</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Delete Option:</label>
            <div style={styles.radioContainer}>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="deleteOption"
                  value="accountOnly"
                  checked={formData.deleteOption === 'accountOnly'}
                  onChange={handleChange}
                  style={styles.radioInput}
                />
                Delete Account Only
              </label>
              <label style={styles.radioLabel}>
                <input
                  type="radio"
                  name="deleteOption"
                  value="accountWithData"
                  checked={formData.deleteOption === 'accountWithData'}
                  onChange={handleChange}
                  style={styles.radioInput}
                />
                Delete Account with Data
              </label>
            </div>
          </div>
          <button type="submit" style={styles.submitButton}>Submit Request</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
    boxSizing: 'border-box',
  },
  radioContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  radioLabel: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
  },
  radioInput: {
    marginRight: '8px',
  },
  submitButton: {
    padding: '12px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#d9534f',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  submitButtonHover: {
    backgroundColor: '#c9302c',
  },
};

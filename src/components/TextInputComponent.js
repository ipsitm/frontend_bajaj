import React, { useState } from 'react';

const TextInputComponent = ({ onSubmit }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      if (parsedData && Array.isArray(parsedData.data)) {
        onSubmit(parsedData);
        setError('');
      } else {
        setError('Invalid JSON format: "data" should be an array.');
      }
    } catch (e) {
      setError('Invalid JSON format.');
    }
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', textAlign: 'center' }}>
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        placeholder='API Input'
        rows={5}
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
          boxSizing: 'border-box',
        }}
      />
      {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
      <button
        onClick={handleSubmit}
        style={{
          width: '100%',
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default TextInputComponent;

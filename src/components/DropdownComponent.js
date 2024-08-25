import React from 'react';

const DropdownComponent = ({ options, onChange }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <select
        multiple={true}
        onChange={onChange}
        style={{
          width: '80%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          fontSize: '16px',
          boxSizing: 'border-box',
        }}
      >
        <option disabled value="">
          Multi Filter
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;

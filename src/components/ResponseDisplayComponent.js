import React from 'react';

const ResponseDisplayComponent = ({ response, selectedOptions }) => {
  const formatResponse = (response, options) => {
    const formattedResponse = options.map((option) => {
      const key = option.toLowerCase().replace(/ /g, '_'); // Convert option to lowercase and replace spaces with underscores
      const data = response[key] || [];

      if (data.length > 0) {
        return `${option}: ${data.join(', ')}`;
      } else {
        return `${option}: No data`;
      }
    });

    return formattedResponse.join(' | ');
  };

  return (
    <div style={{ textAlign: 'left', margin: '20px', paddingLeft: '100px' }}>
      <h3>Filtered Response:</h3>
      <p style={{ fontSize: '18px', fontWeight: 'bold' }}>
        {formatResponse(response, selectedOptions)}
      </p>
    </div>
  );
};

export default ResponseDisplayComponent;

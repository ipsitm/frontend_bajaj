import React, { useState } from 'react';
import TextInputComponent from './components/TextInputComponent';
import DropdownComponent from './components/DropdownComponent';
import ResponseDisplayComponent from './components/ResponseDisplayComponent';

const App = () => {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = async (jsonData) => {
    try {
      const res = await fetch('https://backendflaskbajaj-ipsit-mauryas-projects.vercel.app/bfhl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
        mode: 'cors',  // Ensure CORS mode is included
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDropdownChange = (e) => {
    const options = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedOptions(options);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>21BCE5390</h1>
      <TextInputComponent onSubmit={handleSubmit} />
      {response && (
        <>
          <DropdownComponent
            options={['Alphabets', 'Numbers', 'Highest lowercase alphabet']}
            onChange={handleDropdownChange}
          />
          <ResponseDisplayComponent response={response} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
};

export default App;

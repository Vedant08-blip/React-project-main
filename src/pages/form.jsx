import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [data, setData] = useState([]);
 

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      name,
      fatherName,
      age,
      country,
      phone,
    };

    setData([...data, newEntry]);

  
    setName('');
    setFatherName('');
    setAge('');
    setCountry('');
    setPhone('');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">User Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Enter father's name"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Submitted Data:</h3>
       <pre>{JSON.stringify(data,null,2)}</pre>
      </div>
    </div>
  );
}

export default Form;

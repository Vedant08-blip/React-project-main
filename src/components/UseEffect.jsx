import React, { useEffect, useState } from 'react';

const ApiDatafetch = () => {
  const [users, setUsers] = useState([]);
  const [inputdata, setInput] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
    console.log("data fetched successfully");
  }, []);

  return (
    <div>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <input className='border'
        type='text'
        value={inputdata}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default ApiDatafetch;
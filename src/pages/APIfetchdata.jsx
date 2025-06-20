import React, { useState } from 'react';

function APIfetchdata() {
  const [apidata, setApidata] = useState([]);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users') 
      .then((res) => res.json())
      .then((data) => setApidata(data))
      .catch((err) => console.log(err));
  };

  console.log(apidata);

  return (


  <div className="p-6 bg-gray-50 min-h-screen dark:bg-gray-900">
      <button
        onClick={fetchUsers}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Fetch Data
      </button>

    <div className="flex justify-center">
  < div className="flex flex-wrap justify-center gap-10 mt-6">

        {apidata.map((user) => (
          <div
            key={user.id}
            className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow hover:shadow-md transition"
          >
            <p className="text-lg font-semibold mb-1"><span className="font-medium">Name:</span>  {user.name}</p>
            <p><span className="font-medium">Username:</span> {user.username}</p>
            <p><span className="font-medium">Email:</span> {user.email}</p>
            <p><span className="font-medium">Street:</span> {user.address.street}</p>
            <p><span className="font-medium">Suite:</span> {user.address.suite}</p>
            <p><span className="font-medium">City:</span> {user.address.city}</p>
            <p><span className="font-medium">Zipcode:</span> {user.address.zipcode}</p>
            <p><span className="font-medium">Phone:</span> {user.phone}</p>
            <p><span className="font-medium">Website:</span> {user.website}</p>
            <p><span className="font-medium">Company:</span> {user.company.name}</p>
            <p><span className="font-medium">CatchPhrase:</span> {user.company.catchPhrase}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

  
  );
}

export default APIfetchdata;

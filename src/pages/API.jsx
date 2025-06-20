import React, { useState } from 'react';

function API() {
  const [data, setApidata] = useState([]);

  const fetchUsers = () => {
    fetch('https://api.artic.edu/api/v1/artworks?page=2&limit=100')
      .then((res) => res.json())
      .then((data) => setApidata(data.data)) 
      .catch((err) => console.log(err));
  };

  console.log(data);

  return (
    <div>
      <button
        onClick={fetchUsers}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mt-3"
      >
        Fetch Data
      </button>

      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-10 mt-6">
          {Array.isArray(data) && data.map((user) => (
            <div
              key={user.id}
              className="w-80 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow hover:shadow-md transition"
            >
              <img
                src={user.thumbnail?.lqip}
                alt={user.thumbnail?.alt_text || 'Thumbnail'}
                className="w-full h-48 rounded-xl object-cover mb-4"
              />
              <p className="text-lg font-semibold mb-1">
                <span className="font-medium">Id:</span> {user.id}
              </p>
              <p>
                <span className="font-medium">Model:</span> {user.api_model}
              </p>
              <p>
                <span className="font-medium">Title:</span> {user.title}
              </p>
              <p>
                <span className="font-medium">Text:</span> {user.thumbnail?.alt_text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default API;

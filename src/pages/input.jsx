import React, { useState } from "react";


const Input = () => {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-sm">
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="mt-4 text-lg font-medium text-gray-700">
         Hello {name}
        </p>
      </div>
    </div>
  );
};

export default Input;

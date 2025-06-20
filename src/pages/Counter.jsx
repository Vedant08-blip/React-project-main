import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(""); 

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4 text-blue-300">Counter: {count}</h1>

      <div className="mb-6">
        <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} className="border-2 border-gray-300 rounded p-2 w-40 text-center" placeholder="Enter increment value"
        />
      </div>

      <div className="space-x-4">
        <button
          onClick={() => setCount(count + step)}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(count - step)}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Decrement
        </button>
     <button
  onClick={() => {setCount(0);setStep("");}}
  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  Reset
</button>
      </div>
    </div>
  );
};

export default Counter;


















// import React, { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="text-center mt-10">


//       <h1 className="text-3xl font-bold mb-4 text-blue-300">Counter: {count}</h1>

      
//       <div className="space-x-4">
//         <button
//           onClick={() => setCount(count + 5)}
//           className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Increment
//         </button>
//         <button
//           onClick={() => setCount(count - 5)}
//           className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Decrement
//         </button>
//         <button
//           onClick={() => setCount(0)}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
//         >
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Counter;

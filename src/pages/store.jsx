import React, { useState } from "react";

const Store = () => {
  const greet = () => "Hello, have a good day!";
  const [func, setFunc] = useState("");

  const handleClick = () => {
    setFunc(greet());
  };

  return (
    <div>
      <button onClick={handleClick}>Greet</button>
      <p>{func}</p>
    </div>
  );
};

export default Store;

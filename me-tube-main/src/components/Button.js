import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 py-2 mx-2 my-4 bg-gray-200 rounded-lg hover:bg-gray-300">
        {name}
      </button>
    </div>
  );
};

export default Button;

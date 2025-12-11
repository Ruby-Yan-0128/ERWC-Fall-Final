import React, { useState } from "react";
import "../App.css";
/*
PARAMS
name = String name of item
image_url = String image url 
unit_of_measurement = List ['singular', 'plural'] eg ['egg', 'eggs']
calculation_function = Function() used to calculate, returns number of years
*/
export default function Item({
  name,
  image_url,
  unit_of_measurement,
  calculation_function,
  setDotArrangment,
  shortName,
}) {
  const [quantity, setQuantity] = useState(0);
  function recalculate(value) {
    setDotArrangment((prev) => ({
      ...prev,
      [shortName]: calculation_function(value),
    }));
  }

  function increment() {
    setQuantity(quantity + 1);
    recalculate(quantity + 1); 
  }

  function decrement() {
    if (quantity == 0) {
      return;
    }
    setQuantity(quantity - 1);
    recalculate(quantity - 1);
  }

  return (
    <div className="bg-white rounded-xl p-6 max-w-sm flex flex-col items-center mb-5">
      <img
        src={image_url}
        alt={name}
        className="w-full h-48 object-contain rounded-lg mb-4 border-0"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
        {name}
      </h3>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={decrement}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200"
        >
          {" "}
          -{" "}
        </button>
        <p className="text-lg font-semibold text-gray-800 min-w-[120px] text-center">
          {quantity}{" "}
          {quantity > 1 ? unit_of_measurement[1] : unit_of_measurement[0]}
        </p>
        <button
          onClick={increment}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200"
        >
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
}

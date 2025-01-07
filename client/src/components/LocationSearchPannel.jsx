import React, { act } from "react";

const LocationSearchPannel = ({ setPanelopen,activeField, setvehiclePanel, suggestions, setpickup, setdropoff }) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setpickup(suggestion);
    } else if(activeField === "dropoff") {
      setdropoff(suggestion);
    }

  };

  return (
    <div>
      {suggestions.map((suggestion, index) => (
        <div key={index}
          onClick={() => handleSuggestionClick(suggestion)}
          className="flex gap-4 border-2  border-gray-50 active:border-black p-3 rounded-xl  mb-8 items-center justify-start"
        >
          <h2 className="bg-[#eee] h-12 w-16 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium ">{suggestion}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPannel;

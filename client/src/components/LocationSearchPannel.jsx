import React from "react";

const LocationSearchPannel = ({ setPanelopen, setvehiclePanel }) => {
  const loactions = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id,",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora id,",
    "loremd2,",
  ];
  return (
    <div>
      {loactions.map((location, index) => (
        <div key={index}
          onClick={() => {
            setvehiclePanel(true);
            setPanelopen(false);
          }}
          className="flex gap-4 border-2  border-gray-50 active:border-black p-3 rounded-xl  mb-8 items-center justify-start"
        >
          <h2 className="bg-[#eee] h-12 w-16 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPannel;

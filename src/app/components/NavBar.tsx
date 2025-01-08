import React from "react";
import MapPinIcon from "@heroicons/react/24/outline/MapPinIcon";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <MapPinIcon className="size-6 text-blue-500" />
        <span className="text-white text-lg ml-2">Charger Map</span>
      </div>
      <button className="text-white bg-blue-500 px-4 py-2 rounded">
        Privacy
      </button>
    </nav>
  );
};

export default NavBar;

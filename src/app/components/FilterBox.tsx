import React, { useEffect, useState } from "react";
import { IFilterConfig } from "../interfaces/IFilterConfig";

interface IFilterBoxProps {
  onFilterConfigChanged: (filterConfig: IFilterConfig) => void;
  initFilterConfig: IFilterConfig;
}

const FilterBox = (props: IFilterBoxProps) => {
  const [numOfResults, setNumOfResults] = useState<number>(
    props.initFilterConfig.maxresults
  );
  const [radius, setRadius] = useState<number>(props.initFilterConfig.distance);
  const [connectionTypes, setConnectionTypes] = useState<string[]>(
    props.initFilterConfig.connectiontypeid
  );

  const toggleConnectionType = (type: string) => {
    setConnectionTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  useEffect(() => {
    console.log("filter config changed", {
      numOfResults,
      radius,
      connectionTypes,
    });
    props.onFilterConfigChanged({
      maxresults: numOfResults,
      distance: radius,
      connectiontypeid: connectionTypes,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numOfResults, radius, connectionTypes]);

  return (
    <div className="p-4 bg-gray-100 flex justify-between items-center text-black">
      <div>
        <span className="p-2">No: of Stations Displayed</span>
        <select
          value={numOfResults}
          onChange={(e) => setNumOfResults(Number(e.target.value))}
          className="border border-gray-300 rounded"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
          <option value={50}>50</option>
          <option value={60}>60</option>
          <option value={70}>70</option>
          <option value={80}>80</option>
          <option value={90}>90</option>
          <option value={100}>100</option>
        </select>
      </div>
      <div className="flex items-center space-x-4 text-black">
        <span className="mr-5">Connector Types</span>
        <label className="flex items-center text-black">
          <input
            type="checkbox"
            className="mr-2"
            checked={connectionTypes.includes("25")}
            onChange={() => toggleConnectionType("25")}
          />
          Type 2
        </label>
        <label className="flex items-center text-black">
          <input
            type="checkbox"
            className="mr-2"
            checked={connectionTypes.includes("2")}
            onChange={() => toggleConnectionType("2")}
          />
          CHAdeMO
        </label>
        <label className="flex items-center text-black">
          <input
            type="checkbox"
            className="mr-2"
            checked={connectionTypes.includes("33")}
            onChange={() => toggleConnectionType("33")}
          />
          CCS
        </label>
      </div>
      <div className="flex items-center space-x-2 text-black">
        <span>Radius</span>
        {/* <select
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded"
        >
          <option value={10}>10 kms</option>
          <option value={20}>20 kms</option>
          <option value={40}>40 kms</option>
          <option value={60}>60 kms</option>
          <option value={100}>100 kms</option>
        </select> */}
        <input
          type="number"
          value={radius}
          onChange={(e) =>
            setRadius(e.target.value ? Number(e.target.value) : 1)
          }
        />
      </div>
    </div>
  );
};

export default FilterBox;

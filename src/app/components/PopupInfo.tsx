import React from "react";
import { POI } from "../interfaces/POI";

export interface IProps {
  station: POI;
}

const PopupInfo = (props: IProps) => {
  return (
    <div className="p-0 w-64 bg-white font-sans text-sm h-96 overflow-y-auto">
      <h2 className="text-md font-bold">
        {props.station.AddressInfo.Title} (
        {props.station.AddressInfo.Country.Title})
      </h2>
      <div className="grid grid-cols-2 gap-1 text-xs mt-4">
        <div>
          <span>
            <strong>Operator:</strong> {props.station.DataProvider.Title}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-1">
          <span>
            <strong>Latitude:</strong>{" "}
            {props.station.AddressInfo.Latitude.toFixed(3)}
          </span>
          <span>
            <strong>Longitude:</strong>{" "}
            {props.station.AddressInfo.Longitude.toFixed(3)}
          </span>
          <span>
            <strong>Distance:</strong>{" "}
            {props.station.AddressInfo.Distance.toFixed(1)}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-1 mt-4">
        <span>
          <strong>Status</strong>{" "}
          {props.station.StatusType.Title === "Operational"
            ? "Operational"
            : "Non-Operational"}
        </span>
        <div></div>
      </div>
      <div className="grid grid-cols-1 gap-1 mt-4">
        <span>
          <strong>Connectors</strong>
        </span>
        <table className="table table-auto w-full text-xs">
          <thead>
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Plug Type</th>
              <th className="px-4 py-2">Max Power</th>
            </tr>
          </thead>
          <tbody>
            {props.station.Connections.map((connection, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">
                  {connection.ConnectionType.Title}
                </td>
                <td className="border px-4 py-2">{connection.PowerKW} kW</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="grid grid-cols-1 gap-1 mt-4">
          <span>
            <strong>Pricing Info</strong>{" "}
            {props.station.UsageCost ? props.station.UsageCost : "N/A"}
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default PopupInfo;

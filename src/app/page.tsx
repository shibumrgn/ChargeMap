"use client";
// import { BeakerIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import MapComponent from "./components/MapComponent";
import { http } from "./instances/axiosInstance";
import { API } from "./constants/API";
import useCurrentPosition from "./hooks/useCurrentPosition";
import { objectToUrlParams } from "./constants/helpers";
import { IPosition } from "./interfaces/IPosition";
import NavBar from "./components/NavBar";
import FilterBox from "./components/FilterBox";
import { IFilterConfig } from "./interfaces/IFilterConfig";
import { POI } from "./interfaces/POI";

const Page = () => {
  const { position } = useCurrentPosition();
  const [stations, setStations] = useState<POI[]>([]);

  const [currentPosition, setCurrentPosition] = useState<IPosition>();
  const [filterConfig, setFilterConfig] = useState<IFilterConfig>({
    distance: 10,
    maxresults: 60,
    connectiontypeid: ["25", "2", "33"],
  });

  useEffect(() => {
    if (position) {
      setCurrentPosition(position);
    }
  }, [position]);

  useEffect(() => {
    if (currentPosition === undefined) return;
    console.log(
      "fetching stations",
      objectToUrlParams({
        ...filterConfig,
        ...{
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
        },
      })
    );
    http
      .get(
        API.GET_CHARGING_STATIONS +
          "?" +
          objectToUrlParams({
            ...filterConfig,
            ...{
              latitude: currentPosition.latitude,
              longitude: currentPosition.longitude,
            },
          })
      )
      .then((res) => {
        console.log(res.data);
        setStations(res.data);
      });
  }, [currentPosition, filterConfig]);

  const centerChanged = (center: IPosition) => {
    if (
      center.latitude === currentPosition?.latitude &&
      center.longitude === currentPosition?.longitude
    )
      return;
    setCurrentPosition(center);
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <NavBar />
      <FilterBox
        onFilterConfigChanged={setFilterConfig}
        initFilterConfig={filterConfig}
      />
      <MapComponent
        stations={stations}
        currentPosition={currentPosition}
        centerChanged={centerChanged}
        radius={filterConfig.distance}
      />
    </div>
  );
};

export default Page;

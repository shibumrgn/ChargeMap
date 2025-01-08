import { useEffect, useState } from "react";
import { http } from "../instances/axiosInstance";
import { API } from "../constants/API";
import { POI } from "../interfaces/POI";
import { objectToUrlParams } from "../constants/helpers";
import { IFilterConfig } from "../interfaces/IFilterConfig";

const useChargingStations = (
  filterConfig: IFilterConfig & { latitude?: number; longitude?: number }
) => {
  const [stations, setStations] = useState<POI[]>([]);

  useEffect(() => {
    if (
      filterConfig.latitude === undefined ||
      filterConfig.longitude === undefined
    )
      return;
    http
      .get(
        API.GET_CHARGING_STATIONS +
          "?" +
          objectToUrlParams({
            ...filterConfig,
          })
      )
      .then((res) => {
        console.log(res.data);
        setStations(res.data);
      });
  }, [filterConfig]);

  return stations;
};

export default useChargingStations;

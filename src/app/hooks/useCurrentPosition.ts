import { useState, useEffect } from "react";
import { IPosition } from "../interfaces/IPosition";

const useCurrentPosition = () => {
  const [position, setPosition] = useState<IPosition>();
  const [error, setError] = useState<GeolocationPositionError | null>(null);

  useEffect(() => {
    console.log("Getting position");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log("new position", pos);
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (err) => {
        setError(err);
      }
    );
  }, []);

  return { position, error };
};

export default useCurrentPosition;

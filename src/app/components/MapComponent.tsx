import L, { Map as LeafletMap } from "leaflet";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { POI } from "../interfaces/POI";
import { IPosition } from "../interfaces/IPosition";
import PopupInfo from "./PopupInfo";

export interface IProps {
  currentPosition?: IPosition;
  stations: POI[];
  radius: number;
  centerChanged: (center: IPosition) => void;
}

const MapComponent = (props: IProps) => {
  const mapRef = React.useRef<LeafletMap>(null);

  React.useEffect(() => {
    if (props.currentPosition && mapRef.current) {
      mapRef.current.setView(
        [props.currentPosition.latitude, props.currentPosition.longitude],
        13
      );
    }
  }, [props.currentPosition, mapRef]);

  const CharginStations = () => {
    return props.stations.map((station: POI) => {
      return (
        <Marker
          key={station.ID}
          position={[
            station.AddressInfo.Latitude,
            station.AddressInfo.Longitude,
          ]}
          icon={L.icon({
            iconUrl: station.StatusType.IsOperational
              ? "/markers/green.svg"
              : "/markers/red.svg",
            iconSize: [24, 24],
          })}
        >
          <Popup>
            <PopupInfo station={station} />
          </Popup>
        </Marker>
      );
    });
  };

  const CurrentPositionMarker = ({ position }: { position?: IPosition }) => {
    if (!position) return null;
    return (
      <Marker
        position={[position.latitude, position.longitude]}
        icon={L.icon({
          iconUrl: "/markers/blue.svg",
          iconSize: [24, 24],
        })}
        draggable={true}
        eventHandlers={{
          dragend: (e) => {
            const marker = e.target;
            const position = marker.getLatLng();
            props.centerChanged({
              latitude: position.lat,
              longitude: position.lng,
            });
          },
        }}
      >
        <Popup>
          <div>
            <h1>Current Position</h1>
          </div>
        </Popup>
      </Marker>
    );
  };

  return (
    <MapContainer
      center={
        props.currentPosition
          ? [props.currentPosition.latitude, props.currentPosition.longitude]
          : undefined
      }
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "calc(100% - 150px)", width: "100%" }}
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <CharginStations />
      <CurrentPositionMarker position={props.currentPosition} />
      {/* {props.currentPosition && (
        <LayerGroup>
          <Circle
            center={[
              props.currentPosition?.latitude,
              props.currentPosition?.longitude,
            ]}
            pathOptions={{ color: "red", opacity: 0.5 }}
            radius={1000 * props.radius * map}
          />
        </LayerGroup>
      )} */}
      {/* <LocationMarker /> */}
    </MapContainer>
  );
};

export default MapComponent;

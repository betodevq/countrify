// Libraries
import L, { LatLngExpression, icon } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Types
import { CountriesResponse } from "lib/types/countries.types";

// Styles (required for react-leaflet)
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface MapProps {
  handleCountryClick: (countryCode: string) => void;
  countries: CountriesResponse[];
  className?: string;
}

export default function Map({
  countries,
  handleCountryClick,
  className = "",
}: MapProps) {
  const position: LatLngExpression = { lat: 0, lng: 0 }; // Updated coordinates to center of USA
  return (
    <MapContainer
      className={className}
      zoom={2}
      center={position}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {countries &&
        countries.map((country, index) => (
          <Marker
            key={index}
            position={[country.Latitude, country.Longitude]}
            eventHandlers={{
              click: (e) => {
                handleCountryClick(country["ISO Code"]);
              },
            }}
          >
            <Popup>
              <strong>Name:</strong> {country.Country}
              <br />
              <strong>ISO Code:</strong> {country["ISO Code"]}
              <br />
              <strong>Longitude:</strong> {country.Longitude}
              <br />
              <strong>Latitude:</strong> {country.Latitude}
              <br />
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}

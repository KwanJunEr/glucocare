"use client";
import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const GoogleMaps = ({ handleAddress, handleHospital }: any) => {
  const [currentPosition, setCurrentPosition] = useState(center);
  const [currentAddress, setCurrentAddress] = useState('');
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB6sGJbdrGbO0zwHPJBrmRZkEYZV49RYb4",
  });

  const getAddressFromLatLng = (lat: number, lng: number) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyB6sGJbdrGbO0zwHPJBrmRZkEYZV49RYb4`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results && data.results[0]) {
          const address = data.results[0].formatted_address;
          setCurrentAddress(address);
          handleAddress(address);
        } else {
          console.error('No address found');
        }
      })
      .catch((error) => console.error('Error fetching address:', error));
  };

  const findNearbyHospitals = (lat: number, lng: number) => {
    fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=100000&type=hospital&key=AIzaSyB6sGJbdrGbO0zwHPJBrmRZkEYZV49RYb4`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          const hospitalsData = data.results.map((hospital: any) => ({
            name: hospital.name,
            address: hospital.vicinity,
            lat: hospital.geometry.location.lat(),
            lng: hospital.geometry.location.lng(),
          }));
          handleHospital(hospitalsData); // Update hospital list in parent component
        } else {
          console.error('No hospitals found');
        }
      })
      .catch((error) => console.error('Error fetching hospitals:', error));
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          setCurrentPosition({ lat, lng });
          getAddressFromLatLng(lat, lng);
          findNearbyHospitals(lat, lng); // Fetch nearby hospitals after getting position
        },
        () => {
          console.error("Error fetching the location");
        }
      );
    } else {
      console.error("Geolocation not supported by this browser");
    }
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentPosition}
      zoom={15}
    >
      <Marker position={currentPosition} label="My Location" />
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default GoogleMaps;

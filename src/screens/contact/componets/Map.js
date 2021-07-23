import React from "react";
import { compose, withProps } from "recompose";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const mapURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`;

const MapComponent = compose(
  withProps({
    googleMapURL: mapURL,
    containerElement: <div style={{ height: "400px", margin: "2em" }} />,
    mapElement: (
      <div style={{ height: "100%", maxWidth: "1140px", margin: "0 auto" }} />
    ),
    loadingElement: <div style={{ height: "100%" }}>Cargando...</div>,
  }),

  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
));

export default MapComponent;

import React from 'react';
import { compose, withProps } from "recompose";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  TrafficLayer
  
} from "react-google-maps";
const MyMapComponent = compose(

  withProps({
   
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDOMnaImFMqWRCYCOzNITnh0Zt_dYagvW8&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `700px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)
 (props => (
   <GoogleMap defaultZoom={14} defaultCenter={{ lat: 41.3966908, lng: 2.1921909 }}>
   {props.isMarkerShown && (
      <Marker position={{ lat: 41.3966908, lng: 2.1921909 }} />

      )
   }

   
   <TrafficLayer  />

 </GoogleMap>
));
export default (MyMapComponent);

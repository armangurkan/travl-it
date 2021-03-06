//this is a react component wow

import React from 'react';
import Map from "./Map";

const MapDisplay = (props) => {
  return (
    <div>
      <div style={{ width: '100vw', height: '100vh' }}>
        <Map
          googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyANq9H8F3LekACFLwylqb9dGv-Bgj2-kww'}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    </div>
  )
};
export default MapDisplay;

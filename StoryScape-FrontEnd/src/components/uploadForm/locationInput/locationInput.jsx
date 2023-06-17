import { useState } from 'react';
import PlacesAutocomplete, {geocodeByAddress,getLatLng} from 'react-places-autocomplete';
import {
  useJsApiLoader
} from '@react-google-maps/api'
import NavBar from '../../navBar/navBar';

function LocationInput() {
// const {isLoaded} = useJsApiLoader({
//   googleMapsApiKey: process.env.VITE_GOOGLE_MAP_KEY,
//   libraries: ['places']
// })

  return (
    <>
    <NavBar /> 
    <div className="location-search-input">
    <input
        placeholder= "Search Places ..."
    />

    </div>

    </>
        

  );
}

export default LocationInput;
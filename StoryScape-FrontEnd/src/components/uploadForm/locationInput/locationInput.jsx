import './locationInput.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../navBar/navBar';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { useState } from 'react';
// import PlacesAutocomplete, {geocodeByAddress,getLatLng} from 'react-places-autocomplete';
// import {
//   useJsApiLoader
// } from '@react-google-maps/api'

function LocationInput() {
// const {isLoaded} = useJsApiLoader({
//   googleMapsApiKey: process.env.VITE_GOOGLE_MAP_KEY,
//   libraries: ['places']
// })

  return (
    <>
    <NavBar /> 
    
    <div className="location-search-input">
    <i className="bi bi-cursor-fill" id='nav-icon'></i>
    <input type="text" className="form-control" id="location-input" aria-describedby="locationInput" placeholder="Search Places ..."/>
    <button className='search-location-btn'><i className="bi bi-search" id='search-icon'></i></button>
  
    </div>

    </>
        

  );
}

export default LocationInput;
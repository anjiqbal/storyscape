import './locationInput.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../navBar/navBar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useRef } from 'react';

import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  Marker,
} from '@react-google-maps/api'
import Container from 'react-bootstrap/esm/Container';

// this center is the center of the map and is currently set to Birmingham, we can change this later
const center = { lat: 52.476992, lng: -1.9026911 }

function LocationInput() {
  const { isLoaded } = useJsApiLoader({
    // this is the google map api key which is stored in the .env file
    //using import.meta.env to access the env variables. process.env did not work for some reason
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAP_KEY,
    //this will get the location names using the places library from google maps api
    libraries: ['places'],
  })
// this is the map state which is set to null, also able to change the maptype 
  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const originRef = useRef()

  //this function will be called when a place is selected from the autocomplete dropdown
  const handlePlaceSelect = () => {
  //get the autocomplete instance from the ref
  const autocomplete = originRef.current.getAutocomplete()
  
  //get the selected place from the autocomplete dropdown
  const place = autocomplete.getPlace()
  
  if (place.geometry) {
    //set the map center to the selected place
    map.setCenter(place.geometry.location)

  //create a marker for the selected place's location
  const marker = new window.google.maps.Marker({
    position: place.geometry.location,
    map: map,
  })
  //create an info window for the marker
  const infowindow = new window.google.maps.InfoWindow({
    content: `<div><strong>${place.name}</strong></div>`,
  })
  //open the info window on the marker
  infowindow.open(map, marker)
  }
}


// if the map is not loaded then show the loading spinner with Loading... text, not sure if this works tbh 
  if (!isLoaded) {
    return <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
  }

  return (
    // used fragment to wrap the components at the top level
    <>
    <NavBar /> 
    <div className="location-search-input">
    {/* i is the pre-built icon that was imported from bootstrap-icons and this one is the navigation arrow */}
    <i className="bi bi-cursor-fill" id='nav-icon'></i>
    {/* Put the input in the Autocomplete which will then use the Google map API to find matches according to what the user types in */}
    <Autocomplete onLoad={(autocomplete) => originRef.current = autocomplete}>
    {/* class name form-control is built in and gives the input styles from bootstrap. aria-describedby is a good attribute to have to help accessibility ref uses originRef which takes in useRef from react */}
    <input type="text" className="form-control" id="location-input" aria-describedby="locationInput" placeholder="Search Places ..." />
    </Autocomplete>
    {/* A button with the prebuilt search icon inside, that was imported from bootstrap-icons */}
    <button className='search-location-btn' onClick={handlePlaceSelect}><i className="bi bi-search" id='search-icon'></i></button>
    {/* The Container for the map  */}
    <Container > 
    <GoogleMap
            center={center}
            zoom={10}
            mapContainerStyle={{ width: '100%', height: '100%' }}
          // these are the options for the map, we can change these later
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
          }}
          // when the map loads it will set the map to the map state
          onLoad={map => setMap(map)}
        />
    </Container>
    </div>
  </>
        
  );
}

export default LocationInput;
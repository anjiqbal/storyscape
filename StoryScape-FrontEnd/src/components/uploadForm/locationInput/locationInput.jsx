import './locationInput.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../navBar/navBar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState, useRef } from 'react';

import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete
} from '@react-google-maps/api'
import Container from 'react-bootstrap/esm/Container';

// this center is the center of the map and is currently set to Birmingham
const center = { lat: 52.476992, lng: -1.9026911 }

function LocationInput() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAP_KEY,
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))

  const originRef = useRef()


  if (!isLoaded) {
    return <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
  }

  return (
    <>
    <NavBar /> 
    
    <div className="location-search-input">
    <i className="bi bi-cursor-fill" id='nav-icon'></i>
    <Autocomplete>
    <input type="text" className="form-control" id="location-input" aria-describedby="locationInput" placeholder="Search Places ..." ref={originRef}/>
    </Autocomplete>
    <button className='search-location-btn'><i className="bi bi-search" id='search-icon'></i></button>
    {/* The Container for the map  */}
    <Container > 
    <GoogleMap
          center={center}
          zoom={10}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
          }}
          onLoad={map => setMap(map)}
        >
        </GoogleMap></Container>
  
    </div>

    </>
        

  );
}

export default LocationInput;
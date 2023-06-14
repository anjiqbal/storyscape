import React, { useEffect, useState } from 'react';
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from 'react-places-autocomplete';

function LocationInput() {
  // const [address, setAddress] = useState('');

  // const handleChange = (address) => {
  //   setAddress(address);
  // };

  // useEffect(() => {
  //   const handleSelect = async (address) => {
  //     try {
  //       const results = await geocodeByAddress(address);
  //       const latLng = await getLatLng(results[0]);
  //       //used meta.env instead of process.env as it is recommended by vite
  //       const API_KEY = import.meta.env.VITE_GOOGLE_MAP_KEY;
  //       console.log('Success', latLng);

  //       const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng.lat},${latLng.lng}&key=${API_KEY}`;
  //       const response = await fetch(URL);
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.error('Error', error);
  //     }
  //   };

  //   if (address) {
  //     handleSelect(address);
  //   }
  // }, [address]);

  return (

    <div className="location-search-input">
      <input
        placeholder="Search Places ..."
    />
    </div>
        
    // <PlacesAutocomplete value={address} onChange={handleChange}>
    //   {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
    //     <div>
    //       <input
    //         {...getInputProps({
    //           placeholder: 'Search Places ...',
    //           className: 'location-search-input',
    //         })}
    //       />
    //       <div className="autocomplete-dropdown-container">
    //         {loading && <div>Loading...</div>}
    //         {suggestions.map((suggestion) => {
    //           const className = suggestion.active
    //             ? 'suggestion-item--active'
    //             : 'suggestion-item';
    //           const style = suggestion.active
    //             ? { backgroundColor: '#fafafa', cursor: 'pointer' }
    //             : { backgroundColor: '#ffffff', cursor: 'pointer' };
    //           return (
    //             <div
    //               {...getSuggestionItemProps(suggestion, {
    //                 className,
    //                 style,
    //               })}
    //             >
    //               <span>{suggestion.description}</span>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   )}
    // </PlacesAutocomplete>
  );
}

export default LocationInput;
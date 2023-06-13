 import React, { useState } from 'react';
 import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
 import './locationInput.css'

 function LocationInput() {
   const [address, setAddress] = useState('');

   const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = async (address) => {
    const results = await geocodeByAddress(address);
    const latLng = await getLatLng(results[0]);
    console.log('Latitude and Longitude:', latLng);
  };

  return (
    <div>
      <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "Type address" })} />
            <div>
              {loading ? <div>Loading...</div> : null}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
}

export default LocationInput;
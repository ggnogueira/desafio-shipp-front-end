import React from 'react';
import Script from 'react-load-script';

import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

import SearchIcon from '@material-ui/icons/Search';


class SearchAutocomplete extends React.Component {
  
  // Define Constructor
  constructor(props) {
    super(props);

    // Declare State
    this.state = {
      city: '',
      query: ''
    };

    // Bind Functions
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);

  }

  handleScriptLoad() { 

    // Initialize Google Autocomplete 
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
                          document.getElementById('autocomplete')); 
    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed',
                                  this.handlePlaceSelect); 
  }

  handlePlaceSelect() {

    // Extract City From Address Object
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.address_components;
    let lat = addressObject.geometry.location.lat();
    let lng = addressObject.geometry.location.lng();

    // Check if address is valid
    if (address) {
      // Set State
      this.setState(
        {
          address: address,
          query: addressObject.formatted_address,
          lat : lat,
          lng : lng,
        }
      );
    }
  }

  render() {
    //console.log(this.state.address, this.state.lat, this.state.lng)
    return (
      <div>
        <Script 
          url="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <TextField
        id="autocomplete"
        placeholder="Buscar Endereço"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      </div>
    );
  }
}

export default SearchAutocomplete;

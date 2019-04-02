import React from 'react';
import Script from 'react-load-script';
import { compose, withProps, lifecycle } from "recompose";


import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button'

import SearchIcon from '@material-ui/icons/Search';


import { StandaloneSearchBox } from "react-google-maps/lib/components/places/StandaloneSearchBox";

const PlacesWithStandaloneSearch = compose(
  withProps({
    // googleMapURL:
    //   "https://maps.googleapis.com/maps/api/js?key=AIzaSyDYE-toUOpOxTafX7-agwEuRndBwE5valw&v=3.exp&libraries=geometry,drawing,places",
    // loadingElement: <div style={{ height: `100%` }} />,
    // containerElement: <div style={{ height: `400px` }} />,
    // mapElement: <div style={{ height: `100%` }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      this.setState({
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();

          this.setState({
            places
          });
        }
      });
    },
  }),
  // withScriptjs,
  // withGoogleMap
)(props => (
  <div data-standalone-searchbox="">
    <h1 style={{margin:" 3% 0"}}>Adicionar<br/> endereço</h1>
    <h4 style={{margin:" 3% 0"}}>Endereço de entrega:</h4>
    <StandaloneSearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      onPlacesChanged={props.onPlacesChanged}
    >
      <TextField
        style={{
          width:"100%",
          margin:"3% 0"
        }}
        id="input-with-icon-textfield"
        placeholder='Buscar Endereco'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </StandaloneSearchBox>
    
    <ol>
      {props.places.map(
        ({ place_id, formatted_address, geometry: { location } }) => (
          <li key={place_id}>
            {formatted_address}
            {/* {" at "}({location.lat()}, {location.lng()}) */}
          </li>
        )
      )}
    </ol>
    <FormControlLabel
      style={{margin:"3% 0"}}
      value="end"
      control={<Radio color="primary" />}
      label="Sem Complemento"
      labelPlacement="end"
    />
    <TextField
        style={
          {width:"60%",
          margin:"3% 0"}
        }
        id="input-with-icon-textfield"
        placeholder='Complemento'
      />
      <div style={{margin: '3% auto', textAlign: 'center'}}>
        <Button
          variant="contained"
          color="primary"
          disableRipple
          style={{
            boxShadow: 'none',
            textTransform: 'none',
            fontSize: 16,
            padding: '6px 12px',
            border: '1px solid',
            lineHeight: 1.5,
            backgroundColor: '#7967FFf',
            borderColor: '#7967FF',
          }}
        >
          Adicionar
        </Button>
      </div>
    {/* <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} /> */}
  </div>
));

export default PlacesWithStandaloneSearch;

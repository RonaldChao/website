// Read more
// Example: https://github.com/istarkov/google-map-clustering-example/blob/master/src/GMap.js
// API Doc: https://github.com/istarkov/google-map-react/blob/master/DOC.md

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const apiKey = 'AIzaSyAJIoOD-LKtucYaDuyalOjvwb4sdaYAP_k'


/////////////////////////////Start
/////////////////////////////  fake data
const TOTAL_COUNT = 10;
const susolvkaCoords = { lat: 60.814305, lng: 47.051773 };
const markersData = [...Array(TOTAL_COUNT)].fill(0) // fill(0) for loose mode
  .map((__, index) => ({
    id: index,
    lat: susolvkaCoords.lat +
      0.01 * index *
      Math.sin(30 * Math.PI * index / 180) *
      Math.cos(50 * Math.PI * index / 180) + Math.sin(5 * index / 180),
    lng: susolvkaCoords.lng +
      0.01 * index *
      Math.cos(70 + 23 * Math.PI * index / 180) *
      Math.cos(50 * Math.PI * index / 180) + Math.sin(5 * index / 180),
  }));
/////////////////////////////  fake data
///////////////////////////// End


const divStyle = {
    color: 'blue',
    background: 'grey',
    width: '50px',
    height: '25px'
  };
const AnyReactComponent = ({ text }) => <div  style={divStyle}>{text}</div>;

const redStyle = {
    borderRadius: '50px',
    background: 'red',
    width: '25px',
    height: '25px'
  };
const RedSpot = ({ text }) => <div  style={redStyle}>{text}</div>;


console.log('markersData: ', markersData)

const WIDTH = 400, HEIGHT = 900

class SimpleMap extends Component {
    constructor (props) {
      super(props)
      this.state = {
          cenSqure: {lat: 59.955413, lng: 30.337844},
          nwSpot: {lat: null,lng: null}
      }
    }

  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    size: { WIDTH, HEIGHT},
    zoom: 11,
    clusterRadius: 60,
    hoverDistance: 30,
    options: {
        minZoom: 3,
        maxZoom: 15,
    }
  };

  render() {

    const onChange= (e) => {
        console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
        console.log('e : ', e)
        console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
        
        const {center} = e
        const {lat, lng} = center

        this.setState({
            cenSqure: {lat, lng},
            nwSpot: {...e.bounds.nw},
        })
    }
    

    return (
      <GoogleMapReact
        bootstrapURLKeys={{key: apiKey}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onChange={onChange}        
      >
        <AnyReactComponent
          lat={this.state.cenSqure.lat}
          lng={this.state.cenSqure.lng}
          text={'Kreyser Avrora'}
        />


        {
            (this.state.nwSpot && this.state.nwSpot.lat)
            ? <RedSpot
                lat={this.state.nwSpot.lat}
                lng={this.state.nwSpot.lng}
                text={'NW'}
                />
            : null
        }

        
      </GoogleMapReact>
    );
  }
}


export default SimpleMap

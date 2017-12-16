// Read more
// Example: https://github.com/istarkov/google-map-clustering-example/blob/master/src/GMap.js
// API Doc: https://github.com/istarkov/google-map-react/blob/master/DOC.md

import React, { Component } from 'react';
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react';
import SimpleMarker from './SimpleMarker';

const apiKey = 'AIzaSyAJIoOD-LKtucYaDuyalOjvwb4sdaYAP_k'
const taipeiLocation = {lat: 25.0329694, lng: 121.5654177}
const WIDTH = 400
const HEIGHT = 900
const defaultZoom = 11

class SimpleMap extends Component {
  constructor (props) {
    super(props)

    this.state = {
      center: taipeiLocation,
      size: { WIDTH, HEIGHT},
      zoom: defaultZoom,
      clusterRadius: 60,
      hoverDistance: 30,
      options: {
        minZoom: 3,
        maxZoom: 15,
      }
    }
  }

  render() {
    const onChange = (e) => {
      console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
      console.log('e : ', e)
      console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

      const {center} = e
      const {lat, lng} = center

      this.setState({
        cenSqure: {lat, lng},
        zoom: e.zoom,
        nwSpot: {...e.bounds.nw},
      })
    }

    const onClick = (e) => {
      console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
      console.log('e : ', e)
      console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

      const {lat, lng} = e

      this.setState({
        center: {lat, lng},
        zoom: this.state.zoom + 1,
      })
    }


    const {cinList} = this.props

    return (
      <GoogleMapReact
        bootstrapURLKeys={{key: apiKey}}
        defaultCenter={taipeiLocation}
        defaultZoom={defaultZoom}
        onChange={onChange}
        onClick={onClick}
      >
        {
          cinList.map((marker, index) => {
            const {geo, name} = marker
            const [lat, lng] = geo

            return <SimpleMarker
              lat={lat}
              lng={lng}
              text={name}
              zoom={ this.state.zoom}
              key={index}
            />
          })
        }
      </GoogleMapReact>
    );
  }
}

SimpleMap.propTypes = {
  cinList: PropTypes.array.isRequired,
}

export default SimpleMap

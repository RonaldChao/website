import { connect } from 'react-redux'

import Map from './../pages/Map'
import globalStyle from '../styles/global.css'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

MapContainer.initState = (store, req, res) => {
  return (dispatch, getState) => {
      return Promise.resolve()
  }
}


export default MapContainer
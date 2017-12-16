import { connect } from 'react-redux'
import api from '../actions/api'

import Map from './../pages/Map'
import globalStyle from '../styles/global.css'

const mapStateToProps = (state, ownProps) => {
  return {
    cinList: state.cin.list
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
    return Promise.all([api.getCinList()]).then((result) => {
      const list = result[0]
      dispatch({type: 'SET_CIN_LIST', list})
      return Promise.resolve()
    })
  }
}


export default MapContainer
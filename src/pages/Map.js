

import React  from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './Map.css'
import GoogleMap from '../components/shared/GoogleMap';

class Map extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
          <GoogleMap />
      </div>
    )
  }
}


Map.propTypes = {
}

export default Map

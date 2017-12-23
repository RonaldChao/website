

import React  from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import style from './Map.css'
import GoogleMap from '../components/shared/GoogleMap';

class Map extends React.Component {
  constructor (props) {
    super(props)
    const {cinList} = props
    this.state = {
      cinList,
      isLoading: false
    }
  }

  render () {
    const {cinList, isLoading} = this.state

    const containCSS = classNames(style['containerStyle'])
    return (
        <div className={containCSS}>
            <GoogleMap 
              cinList = {cinList}
            />
        </div>
    )
  }
}


Map.propTypes = {
}

export default Map

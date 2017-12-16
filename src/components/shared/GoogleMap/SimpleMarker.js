import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './SimpleMarker.css'
import classNames from 'classnames'

const thresholdZoom = 14

class SimpleMarker extends Component {
  render () {
    const {text, onClick, zoom} = this.props
    const simpleMarkStyle = zoom >= thresholdZoom ? classNames(style['bigMarker']) : classNames(style['marker'])
    const _text = zoom >= thresholdZoom ? text.substr(0, 4) : text.substr(0, 2)

    return <div className={simpleMarkStyle} onClick={onClick}>
      <p>
        {_text}
      </p>
    </div>
  }
}

SimpleMarker.propTypes = {
  zoom: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
export default SimpleMarker

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './Selector.css'

class Selector extends React.Component {
  render () {
    const { options, updateCin } = this.props
    const selectCSS = classNames(style['selectStyle'])

    const onChange = (e) => updateCin(e.target.value)

    return (<div>
      <select onChange={onChange} className={selectCSS}>
        {options.map(
          (op, i) => <option value={op.value} key={i}>{op.title}</option>
        )}
      </select>
    </div>)
  }
}

Selector.propTypes = {
  options: PropTypes.array.isRequired,
  updateCin: PropTypes.func.isRequired,
}

export default Selector

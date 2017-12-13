import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import style from './EditableDiv.css'

class EditableDiv extends React.Component {
  constructor (props) {
    super(props)
    const {value} = props
    this.state = {value}
  }

  render () {
    const ENTER_CODE = 13
    const { value, onChange, onUpdate } = this.props
    const _onChange = (e) => {
      this.setState({value: e.target.textContent})
      if (onChange) {
        onChange(e.target.textContent)
      }
    }
    const css = classNames(style['single-line'])
    const handleKeyPress = (target) => {
      target.charCode === ENTER_CODE ? onUpdate(this.state.value) : null
    }
    return (<div
      className={css}
      contentEditable="true"
      onChange={_onChange}
      onKeyPress={handleKeyPress}
      onInput={_onChange} >
      {value}
    </div>)
  }
}

EditableDiv.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onUpdate: PropTypes.func,
}

export default EditableDiv

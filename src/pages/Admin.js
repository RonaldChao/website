import React  from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// import Selector from './shared/Selector'

import style from './Admin.css'
import Selector from 'react-select';

class Admin extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (<div>
            admin
          </div>)
  }
}


Admin.propTypes = {
  // onClick: PropTypes.func.isRequired,
  // message: PropTypes.string.isRequired
}

export default Admin

import React  from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// import Selector from './shared/Selector'

import style from './Admin.css'
// import Selector from 'react-select';

class Admin extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    const {cinList} = this.props
    const tableCSS = classNames(style['tableStyle'])
    const rowCSS = classNames(style['rowStyle'])
    const cellCSS = classNames(style['cellStyle'])
    const geoCSS = classNames(style['cellStyle'], style['geoStyle'])

    return (<div>
            admin

      <div className={tableCSS}>
        {
          cinList.map((element, i) => {
            return <div className={rowCSS} key={i}>
              <div className={cellCSS}>{element.name}</div>
              <div className={cellCSS}>{element.alias}</div>
              <div className={cellCSS}>{element.location}</div>
              <div className={geoCSS} contentEditable="true">{element.geo}</div>
            </div>
          })
        }
      </div>

      <div>
        {JSON.stringify(cinList)}
      </div>
    </div>)
  }
}


Admin.propTypes = {
  cinList: PropTypes.array.isRequired,
  // message: PropTypes.string.isRequired
}

export default Admin

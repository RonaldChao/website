import React  from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// import Selector from './shared/Selector'

import style from './Admin.css'
// import Selector from 'react-select';
import EditableDiv from '../components/shared/EditableDiv';
import Loading from '../components/shared/Loading';
import {arrayToString, coorStrToArray} from '../utils/string.js'

class Admin extends React.Component {
  constructor (props) {
    super(props)
    const {cinList} = props
    this.state = {
      cinList: cinList.map(item => {
        return {
          ...item,
          geo: arrayToString(item.geo)
        }
      }),
      isLoading: false
    }
  }

  render () {
    const {cinList, isLoading} = this.state
    const {updateCinByIdApi} = this.props
    const tableCSS = classNames(style['tableStyle'])
    const rowCSS = classNames(style['rowStyle'])
    const cellCSS = classNames(style['cellStyle'])
    // const geoCSS = classNames(style['cellStyle'], style['geoStyle'])

    const loadingControl = isLoading ? 'loading-overlay' : ''

    // const findObjById = _id => item => item.id === _id

    const turnOnLoading = () => this.setState({isLoading: true})
    const turnOffLoading = () => this.setState({isLoading: false})

    const onUpdate = id => _v => {
      const geo = coorStrToArray(_v)
      turnOnLoading()
      updateCinByIdApi(id, {geo})
        .then((result) => turnOffLoading())
    }

    return (
      <div>
        <Loading isLoading={isLoading}/>
        <div className={loadingControl}>
          admin

          <div className={tableCSS}>
            {
              cinList.map((ele, i) => {
                return <div className={rowCSS} key={ele.id}>
                  <div className={cellCSS}>{ele.name}</div>
                  <div className={cellCSS}>{ele.alias}</div>
                  <div className={cellCSS}>{ele.location}</div>
                  <EditableDiv value={ele.geo} onUpdate={onUpdate(ele.id)}/>
                </div>
              })
            }
          </div>

        </div>
      </div>
    )
  }
}


Admin.propTypes = {
  cinList: PropTypes.array.isRequired,
  updateCinByIdApi: PropTypes.func.isRequired
}

export default Admin

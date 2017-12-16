import React  from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// import Selector from './shared/Selector'

import style from './Admin.css'

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

    const updateField = (id, field, value) => {
      const payload = {}
      payload[field] = value
      turnOnLoading()
      updateCinByIdApi(id, payload)
        .then((result) => turnOffLoading())
    }

    const onUpdateGeo = id => _v => {
      updateField(id, 'geo', coorStrToArray(_v))
    }

    const onUpdateHOF = (id, field) => _v => {
      updateField(id, field, _v)
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
                  <EditableDiv value={ele.name} onUpdate={onUpdateHOF(ele.id, 'name')}/>
                  <EditableDiv value={ele.alias} onUpdate={onUpdateHOF(ele.id, 'alias')}/>
                  <div className={cellCSS}>{ele.location}</div>
                  <EditableDiv value={ele.geo} onUpdate={onUpdateGeo(ele.id)}/>
                  <EditableDiv value={ele.address} onUpdate={onUpdateHOF(ele.id, 'address')}/>
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

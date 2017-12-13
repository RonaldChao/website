import React  from 'react'

import classNames from 'classnames'
import style from './Loading.css'

const LOADING_ICON = `./loading.gif`

const renderLoading = () => (
  <div className={classNames(style['loaderBox'])}>
    <img className="loader" src={LOADING_ICON} />
  </div>
)

const Loading = (props) => {
  const { isLoading } = props
  return isLoading ? renderLoading() : null
}

export default Loading

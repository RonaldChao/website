import { connect } from 'react-redux'
import api from '../actions/api'

// import helloActionCreator from '../actions/hello'
import Admin from './../pages/Admin'
import globalStyle from '../styles/global.css'

const mapStateToProps = (state, ownProps) => {
  return {
    cinList: state.cin.list
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
    //   dispatch(helloActionCreator.helloWorld());
    }
  }
}

const AdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin)

AdminContainer.initState = (store, req, res) => {
  return (dispatch, getState) => {
    return Promise.all([api.getCinList()]).then((result) => {
      const list = result[0]
      dispatch({type: 'SET_CIN_LIST', list})
      return Promise.resolve()
    })
  }
}


export default AdminContainer
import { connect } from 'react-redux'
import Admin from './../pages/Admin'
// import helloActionCreator from '../actions/hello'
import globalStyle from '../styles/global.css'

const mapStateToProps = (state, ownProps) => {
  return {
    // message: state.hello.message
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
    return new Promise((resolve, reject) => {
      resolve()
    })
  }
}


export default AdminContainer
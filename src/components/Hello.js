import React  from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// import Selector from './shared/Selector'

import style from './Hello.css'
import Selector from 'react-select';

class Hello extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedOption: '',
    }
    this.updateStateCin = this.updateStateCin.bind(this);
  }

  updateStateCin(selectedOption){
    console.log(`Selected: ${selectedOption.label}`);
    this.setState({ selectedOption:  selectedOption.label});
  }

  render () {
    const {message, onClick} = this.props
    const {updateStateCin} = this
    const options = [
      {value : 'a', label: 'alabel'},
      {value : 'b', label: 'blabel'},
      {value : 'c', label: 'clabel'},
    ]

    const selectTitle = classNames(style['selectTitleStyle'])
    
    return (<div>
            <h1 className={classNames(style['title'])}>{ message }</h1>
            <button onClick={onClick}>Click</button>

            <form>
              <div>
                <div className={selectTitle}> 
                  <p>Name( {this.state.selectedOption}): </p>
                </div>
                <Selector
                  name="form-field-name"
                  value={this.state.cin}
                  options={options} 
                  onChange={updateStateCin}
                />
              </div>
            </form>
          </div>)
  }
}


Hello.propTypes = {
  onClick: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
}

export default Hello

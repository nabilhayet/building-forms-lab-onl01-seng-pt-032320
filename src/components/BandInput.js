// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit = (event) => {
    this.props.addBand(this.state)
  }
  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.name}></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
 
    return {
      addBand: formData => dispatch({type: 'ADD_BAND', payload: formData })
    }
  }



export default connect(null,mapDispatchToProps)(BandInput)

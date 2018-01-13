import React, { Component } from 'react';
import Select from './select'

export default class Selector extends Component {
  constructor(props) {
  super(props);
    this.state = {
      fromType: '',
      toType: ''
    }
}

executeTrade(e) {
  e.preventDefault();
  alert(`Conversion executed for ${e.value}!`)
}

setFromType(type) {
  console.log(`From set to ${type}`)
  this.setState({fromType: type})
}

setToType(value) {
  console.log(`To set to ${value.select}`)
  this.setState({toType: value.select})
}

render() {
  var execute = {"paddingTop": "20px"}
    return (
      <div>
        <p>Convert: {this.state.fromType}</p>
        <form onSubmit={(e) => this.executeTrade(e)}>

          <Select select={(e) => this.setFromType(e)}/>
          <span>
                        <p>To: <span role="img" aria-labelledby="US-Dollars"> 💵  </span></p>
                    </span> {this.state.toType}
          {/* <Select select={(e) => this.setToType(e)}/>
          <div> */}
        {/* <button type="submit">
          Execute
        </button> */}
        <div style={execute}>
          <button  type="submit" value={this.state.fromType}><p>Execute Trade</p></button>
        </div>

      </form>
      </div>
    );
}
}

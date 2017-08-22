import React, { Component } from 'react';

import HelloReact from './helloReact'

class App extends Component {
  render() {
    return (
      <div>
         <HelloReact />
      </div>
    );
  }
}

export default App;


{/* <h1>{this.props.message + " " + this.state.firstName + " " + this.state.lastName}</h1>
                <input type="text"  ref={(value)=> {
                    this.input = value
                }} placeholder="First Name" disabled={!this.state.isEdditingFirstName}/>

                <button onClick={() => {
                    this.setState({
                        firstName: this.input.value,
                        isEdditingFirstName: !this.state.isEdditingFirstName
                    })
                    }}>{this.state.isEdditingFirstName ? 'Update': 'Edit'}</button><br/>
                <input className={this.isEdditing ? '': ''}type="text" ref={(value)=> {
                    this.lastName = value
                }}placeholder="Last Name" disabled={!this.state.isEdditingLastName}/>
                <button onClick={(e) => {
                    this.setState({
                        lastName: this.lastName.value,
                        isEdditingLastName: !this.state.isEdditingLastName
                    })
                    this.editToggle
                    }}>{this.state.isEdditingLastName ? 'Update': 'Edit'}
                    </button> */}

import React from 'react';

import InputText from './inputText';

export default class HelloReact extends React.Component {
    title = "Welcome"
    constructor(){
        super()

        this.state = {
            newState: {
                firstName: '',
                lastName: ''
            }
        }
        this.update = this.update.bind(this)
    }

    update(key, value){
        var newState = this.state.newState
         newState[key] = value
        this.setState({
            newState
        });
    }
    render(){
        return(
            <div>
                <h1>{this.title + " " + this.state.newState.firstName + " " + this.state.newState.lastName}</h1>
                <InputText label="FirstName" update={this.update.bind(null, 'firstName')}/>
                <InputText label="LastName" update={this.update.bind(null, 'lastName')}/>
            </div>
        )
    }
} 
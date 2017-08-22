import React from 'react';


export default class InputText extends React.Component {
    constructor(){
        super()
        this.state ={
            isEdditing: false,
        }
    }
    
    updateValue(newValue){
        this.props.update(newValue)
        this.setState({
            isEdditing: !this.state.isEdditing
        })
    }
    edit(){
        this.setState({
            isEdditing: !this.state.isEdditing
        })
        console.log(this.state.isEdditing)
    }

    render(){
        return(
            <div>
                <p>{this.props.label + ":"}</p>
                <input type="text" ref={(value) => {
                    this.input = value
                }} disabled={!this.state.isEdditing}/>
                {
                    this.state.isEdditing ? 
                <button onClick={() => this.updateValue(this.input.value)}>Update</button> :
                <button onClick={() => this.edit()}>edit</button>    
                }  
            </div>
        )
    }
}
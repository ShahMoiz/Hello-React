import React from 'react'


export default class Glyphicons extends React.Component {
    render(){
        return(
            <span className={"glyphicon glyphicon-" + this.props.icon}></span>
        )
    }
}
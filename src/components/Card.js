import React from 'react'
import './styles/Card.css'

export default class Card extends React.Component{
    render(){
        return (
            <div className="card-container">
                <img src={this.props.urlImage} alt="rick and morty"/>
                <div className="card-name">
                    <p>{this.props.name}</p>
                </div>
            </div>
        )
    }
}
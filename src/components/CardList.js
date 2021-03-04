import React from 'react'
import Card from './Card'
import './styles/CardList.css'

export default class CardList extends React.Component{
    render(){
        return(
            <div className="CardList-container">
                <ul>
                    {this.props.data.map((item)=>{
                        return(
                            <li id={item.id}>
                                <Card
                                name={item.name}
                                urlImage = {item.image}
                                />
                            </li>
                        )
                        
                    })}
                </ul>
                <button onClick={this.props.click}>Load More</button>
            </div>
        )
    }
}
import React from 'react';
import CardList from '../components/CardList'
import './styles/Home.css'


const URL_ENDPOINT = "https://rickandmortyapi.com/api/character/?page=";

export default class Home extends React.Component{

    constructor(props){
        super(props)
        this.page = 1
        this.state= {
            loading : true,
            error: null,
            data: []
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    async fetchData(){
        try {
            const response = await fetch(`${URL_ENDPOINT}${this.page}`)
            const data = await response.json()
            this.setState({
                loading:false,
                error:null,
                data: [].concat(this.state.data, data.results)
            })
        } catch (error) {
            this.setState({
                error: error.message
            })
        }     
    }

    handleOnClickEvent = (e) => {
        this.page ++;
        this.fetchData();
        
    }


    render(){
        if(this.state.loading === true){
            return <h1>Cargando</h1>
        }
        return(
            <React.Fragment>
                <div className="main-image">
                    <img src="https://i.ibb.co/JxTPDH7/rick-And-Morty.png"/>
                </div>
                <CardList data= {this.state.data} click={this.handleOnClickEvent}/>
            </React.Fragment>
        )
    }
}
import React, { Component } from 'react'
import {InfoConsumer } from '../context';
import Auth from '../Auth';

 class PageDetallesReserva extends Component {
    state={
        id: this.props.match.params.id,
        tour:[{}]
    }
    componentDidMount(){
        console.log(`http://localhost:5000/tour/${this.state.id}`);
        fetch(`http://localhost:5000/tour/${this.state.id}`)
        .then(response => response.json())
        .then(tourJson=>this.setState({ tour: tourJson}))
    }

    render() {
        return (
           <div>
               <div className="conteiner-fluid align-items-center">
                   <h1 className="display-1 font-weight-bold">{this.state.tour[0].tnombre}</h1>
                    <h4 className="display-5">{this.state.tour[0].tnombre}</h4>
                    <p>{this.state.tour[0].tdescripcion}</p>
                    <div className="container mt-5">
                        <div className="row justify-content-center">
                            <div className="col-2">
                                <i className="fab fa-facebook-f"/>
                            </div>
                            <div className="col-2">
                                <i className="fab fa-twitter"/>
                            </div>
                            <div className="col-2">
                                <i className="fab fa-google-plus-g"/>
                            </div>
                            <div className="col-2">
                                <i className="fab fa-whatsapp"/>
                            </div>
                            <div className="col-2">
                                <i className="fab fa-instagram"/>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}

export default PageDetallesReserva;

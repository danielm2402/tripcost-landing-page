import React, { Component } from 'react'
import {InfoConsumer } from '../context';
import Auth from '../Auth';
import Navbar from '../componentesTripcost/Navbar';
import styled from 'styled-components';

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
               <Navbar/>
               <HeaderDetails className="conteiner-fluid align-items-center">
                   <h1 className="display-1 font-weight-bold">{this.state.tour[0].tnombre}</h1>
                    <h4 className="display-5">TOUR</h4>
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
               </HeaderDetails>
               <div className="container">
                   <ul className="nav nav-tabs">
                       <li className="nav-item">
                           <a href="#aboutPlace" className="nav-link active" role="tab" 
                           data-toggle="tab">Acerca de</a>
                       </li>
                       <li className="nav-item">
                           <a href="#reviews" className="nav-link" role="tab" 
                           data-toggle="tab">Calificaciones</a>
                       </li>
                       <li className="nav-item">
                           <a href="#map" className="nav-link" role="tab" 
                           data-toggle="tab">Mapa</a>
                       </li>
                   </ul>
                   <div className="tab-content mb-5">
                       <div id="aboutPlace"className="tab-pane in active text-center mt-5" role="tabpanel">
                            <h2 className="mb-3">{this.state.tour[0].tnombre}</h2>
                            <p>Incluye: {this.state.tour[0].tincluye}</p>
                            <img src="https://cdn.civitatis.com/brasil/rio-de-janeiro/galeria/playa-buzios.jpg" alt={this.state.tour[0].tnombre} className="img-thumbnail img-fluid"/>
                       </div>
                       <div className="tab-panel" id="reviews" role="tabpanel">
                       </div>
                       <div className="tab-panel" id="map" role="tabpanel">
                            <iframe src="" style={{border: '0', height:'28.125rem', width:'100%', frameborder:'0'}}></iframe>
                       </div>
                   </div>
               </div>

           </div>
        )
    }
}

export default PageDetallesReserva;

const HeaderDetails = styled.header`
background: linear-gradient(180deg, rgba(21,101,128,1) 0%, rgba(255,255,255,1) 100%); 
height: 80vh;
text-transform: uppercase;
color: #000;
text-align: center;

h1{
    padding-top:10%;
    color: #A7CB41;
}
h4{
    color:#0F3744;
}
p{
    padding-left:10%;
    padding-right:10%;
    margin-bottom: 10%;
    color: #0F3744;
}
i{
    font-size: 1.875rem;
    color: #0F3744;
}
i:hover{
    color:#A7CB41;
    cursor: pointer;
}
.nav-item{
    height:18.75rem;
}

@media(max-width:760px){
    h1,h4{
        color:#FFF;
    }
}
`;
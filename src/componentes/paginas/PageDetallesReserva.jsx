import React, { Component } from 'react'
import {InfoConsumer } from '../context';
import Auth from '../Auth';

 class PageDetallesReserva extends Component {



    render() {
        return (
            <button to="" className="button" onClick={
                ()=>{
                    Auth.logout(()=>{
                        this.props.history.push("/home");
                    })
                }
            }> logout </button>    
        )
    }
}

export default PageDetallesReserva;

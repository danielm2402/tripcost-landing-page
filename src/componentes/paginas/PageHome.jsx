import React, { Component } from 'react'
import Footer from '../componentesTripcost/Footer';
import Navbar from '../componentesTripcost/Navbar';

class PageHome extends Component {
    render() {
        return (
            
            <div>
                <Navbar/>
                <h1>Home PAge...</h1>
                <Footer/>
            </div>
        )
    }
}

export default PageHome;
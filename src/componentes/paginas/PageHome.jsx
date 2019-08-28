import React, { Component } from 'react'

import Footer from '../componentesTripcost/Footer';
import Navbar from '../componentesTripcost/Navbar';
import { InfoConsumer } from '../context';
import Info from '../componentesTripcost/Info';

class PageHome extends Component {
    render() {
        return (
            <div>
                <Navbar/>
            <div className="container">
                <div className="row mt-5">
                    <InfoConsumer>
                        {value => {
                            return value.tours.map(item =>{
                                return <Info key={item.id} item={item}/>
                            })
                        }}
                    </InfoConsumer>


                </div>
            </div>
            <Footer/>
            </div>
        )
    }
}

export default PageHome;
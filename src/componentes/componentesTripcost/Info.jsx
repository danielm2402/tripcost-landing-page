import React, { Component } from 'react'
import { InfoConsumer } from '../context';
import { Link } from 'react-router-dom';
import { withRouter, Router, Route } from "react-router-dom";
import Auth from '../Auth';
import PageDetallesReserva from '../paginas/PageDetallesReserva';


class Info extends Component {


    render() {

        const {
            tid,
            tnombre,
            tdescripcion,
            imlink
        } = this.props.item

        return (
            <InfoConsumer>
                {data => (
                    

                        <div className="col-10 col-lg-4 mx-auto mb-5">
                            <div className="fancy-cards">

                                <div className="fancy-card" >
                                    <div className="top" style={{ backgroundImage: `url('${imlink}'` }}>
                                        <div className="caption">
                                            <h3 className="title">{tnombre}</h3>
                                            <h5 className="title">{tdescripcion}</h5>
                                            <h1>{tid}</h1>
                                            <Link to={
                                                {
                                                    pathname:`/${tid}`,
                                                    tid:`${tid}`,                                    
                                                }
                                            }>asdad</Link>

                                        </div>
                                    </div>
                                    <div className="middle"></div>
                                    <div className="bottom"></div>
                                </div>
                            </div>
                        </div>

                       
                )



                }
            </InfoConsumer>
        )

    }
}
export default withRouter(Info);

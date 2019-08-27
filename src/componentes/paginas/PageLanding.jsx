import React from 'react';
import '../css/style.css'
import { Link } from 'react-router-dom';
class PageLanding extends React.Component{
    render(){
        return(
           <div className="">
               <div className="container__item landing-page-container">
                    <div className="content_wrapper">
                        <header className="header">
                            <div className="menu-icon header__item">
                                <span className="menu-icon__line"></span>
                            </div>

                            <h1 className="heading header__item">T R I P C O S T</h1>
                            <ul className="social-container.header__item">
                                <li className="social__icon social__icon--fb">
                                    

                                </li>
                                <li className="social__icon social__icon--in">
                                   
                                    
                                </li>
                                <li className="social__icon social__icon--tw">
                               
                                    
                                </li>
                            </ul>
                        </header>
                        <div className="ellipse-container">
                            <h2 className="greeting">EXPLORE</h2>
                            <div className="ellipse ellipse__outer--thin">

                                <div className="ellipse ellipse__orbit"></div>
                            </div>
                            <div className="ellipse ellipse__outer--thick"></div>
                            <div className="btnStart">
                            <Link className="as" to="/home">Start</Link>

                            </div>
                            


                        </div>
                    </div>
               </div>
           </div>
        );
    }
}
export default PageLanding;
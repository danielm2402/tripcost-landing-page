import React from 'react';
import '../css/footer.css'
import styled from 'styled-components';

class Footer extends React.Component{
    render(){
        return(
            <FooterContainer className="main-footer">
                <div className="footer-middle">
                <div className="container">
                    <div className="row">
                    {/* Column 1*/}
                    <div className="col-md-6 col-sm-3 ">
                        <h4>CONTACT</h4>
                        <ul className="list-unstyled">
                            <li className="font">managertripcost@gmail.com</li>
                
                        </ul>
                    </div>
                    {/* Column 1*/}
                    <div className="col-md-6 col-sm-3 ">
                        <h4>SOCIAL</h4>
                        <ul className="list-unstyled">
                            <li><a href="https://www.instagram.com/tripcost/" target="_blank">Instagram &nbsp;<i class="fab fa-instagram"></i> </a></li>
                            <li><a href="https://www.facebook.com/tripcostcol/"target="_blank">Facebook&nbsp;<i class="fab fa-facebook"></i> </a></li>
                            <li><a href="">Twitter&nbsp;<i class="fab fa-twitter"></i> </a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Tripcost - All Rights Reserved
                        </p>
                    </div>
                </div>
                </div>
            </FooterContainer>
        );
    }
}
export default Footer

const FooterContainer = styled.footer`
.footer-middle {
    background: #0F3744;
    padding-top: 3rem;
    color: white;
}
.Title{
    color:
}
.font{
    color: #A7CB41;
}

.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color: #A7CB41; 
}

ul li a:hover{
    color: #ED8323;
}

`;
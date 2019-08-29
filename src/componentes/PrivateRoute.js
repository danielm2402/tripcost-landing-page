import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import Auth from './Auth';


export const PrivateRoute = ({component: Component, ...rest})=> {
    return (
       <Route 
      {...rest} 
      render={props=>{
          if(Auth.estaAutentificado()){
            return <Component {...props}/>
          }
          else{
              return <Redirect to={
                  {
                      pathname:"/home",
                      state:{
                          from: props.location
                      }
                  }
              }/>
          }
              
           }
       }/>
    );
};



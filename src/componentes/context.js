import React, { Component } from 'react'
const InfoContext = React.createContext();
//Provider
//Consumer

 class InfoProvider extends Component {

        state={
            tours: [{}]
        }
     componentDidMount(){
         fetch('http://localhost:5000/tours')
         .then(response => response.json())
         .then(toursJson=>this.setState({ tours: toursJson}))
     }

    render() {
        return (
            <InfoContext.Provider value={{
                tours: this.state.tours
            }}>
               {this.props.children}
            </InfoContext.Provider>
        )
    }
}

const InfoConsumer = InfoContext.Consumer;

export{ InfoProvider, InfoConsumer };
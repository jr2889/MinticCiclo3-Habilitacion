import React, { Component } from "react";
import {Login} from "../components/Login/logingoogle"
import ventas from './ventas.png'
import devsapps from './Logo2.png'
import "semantic-ui-css/semantic.min.css";

import {
  //Button,
  Form,
  Grid,
  Header,
  Message,
  //Segment
} from "semantic-ui-react";

import "../App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid textAlign="center" verticalAlign="middle">
        
          <Grid.Column style={{ maxWidth: 450 }}>
          
          <img src={ventas} className="photo"  alt="ventasLogo" />;
          <img src={devsapps} className="photo"  alt="devsappsLogo" />;
            <Header as="h2" color="teal" textAlign="center">
             
              Ingreso a la Aplicacion
            </Header>
            <Form size="large">
              
            </Form>
            <Message>
              Accede con Google <Login/>
            </Message>          
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
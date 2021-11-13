import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
//import {useNavigate} from 'react-router-dom';
import Header from './HeaderUsers';
  
export default function CreateUsers() {
  let history = useHistory();
  /*const navigate = useNavigate();
  navigate('/home')*/
  const [cedula, setCedula] = useState( );
  const [name, setName] = useState( );
  const [email, setEmail] = useState( );
  const [role, setRol] = useState( )
 
  const postData = () => {
    axios.post(`http://localhost:5000/usuario`, {
    cedula,
    name,
    email,
    role,
   
    }).then(() => {
      history.push('/createusers')
      //navigate.push('/createusers')
    })
  }
  return (
    <div>

      <Header/>

      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
        <Grid.Column style={{ maxWidth: 450, backgroundColor: '#0B0B2F' }}>
          
          <Form className="create-form">
          
         
            <Segment stacked style={{ maxWidth: 450, backgroundColor: "#0B0B2F" }} inverted  >
    
              <Form.Input  type='number' fluid icon='write' iconPosition='left' placeholder='Cédula' onChange={(e) => setCedula(e.target.value)} required  />
              <Form.Input fluid icon='product hunt' iconPosition='left' placeholder='Nombre'  onChange={(e) => setName(e.target.value)} required/>
              <Form.Input type='String'  iconPosition='left' placeholder='email'  onChange={(e) => setEmail(e.target.value)} required />
              <Form.Input type='String'  iconPosition='left' placeholder='rol'  onChange={(e) => setRol(e.target.value)} required />

              <Button onClick={postData} type='submit' color='purple' fluid size='large'   >   Guardar  </Button>
            </Segment>
          </Form>
       
       
        </Grid.Column>
      </Grid>
    </div>
  )
}
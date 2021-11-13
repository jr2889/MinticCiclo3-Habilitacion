import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
 import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
//import {useNavigate} from 'react-router-dom';
import Headerproducts from './Headerproducts';
import Swal from 'sweetalert2';

export default function Create() {

  let history = useHistory();
  /*const navigate = useNavigate();
  navigate('/home')*/
  const [dni, setProduct] = useState('');
  const [descrip, setDescrip] = useState('');
  const [value, setValue] = useState('');
  const [cantidad, setCantidad] = useState('');

  const postData = () => {  
    if (cantidad!=='') {  
        axios.post(`http://localhost:5000/productos`, {dni, descrip, value, cantidad }).then(
        //axios.post(`mongodb+srv://dbmanager:dbmanager@cluster0.klsd9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {dni, descrip, value, cantidad }).then(
        history.push('/readprod') ,
        //navigate.push('/readprod') ,
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto agregado',
          showConfirmButton: true,
          timer: 1500
        }) 
      )
    }    
  }

  return (
    <div >
      <Headerproducts />

      <Grid textAlign='center' style={{ height: '450px' }} verticalAlign='middle' >
        <Grid.Column style={{ maxWidth: 450, backgroundColor: '#0B0B2F' }}>
          <Form className="create-form">
            <Segment stacked style={{ maxWidth: 450, backgroundColor: "#0B0B2F" }} inverted  >
              <h1> INCLUIR PRODUCTOS</h1>
              <Form.Input type='number' fluid icon='write' iconPosition='left' placeholder='Iup' onChange={(e) => setProduct(e.target.value)}  />
              <Form.Input type="string" fluid icon='cart arrow down' iconPosition='left' placeholder='Descripción' onChange={(e) => setDescrip(e.target.value)} required />
              <Form.Input type='number' fluid icon='money bill  ' iconPosition='left' placeholder='valor'       onChange={(e) => setValue(e.target.value)}  required />
              <Form.Input type='number' fluid icon='sign in alternate'       iconPosition='left' placeholder='Cantidad'    onChange={(e) => setCantidad(e.target.value)}  required  />
              <Button onClick={postData} type='submit' color='green' fluid size='large'   >   Guardar  </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </div>
  )
}
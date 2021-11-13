import React, { useState, useEffect } from 'react';
import { Button , Form,Grid,Segment } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
//import {useNavigate} from 'react-router-dom';
import Header from './HeaderUsers';

export default function Update() {
    let history = useHistory();
    /*const navigate = useNavigate();
    navigate('/home')*/
    const [_id, setID] = useState(null);
    const [cedula, setCedula] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRol] = useState('');
    
   
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setCedula(localStorage.getItem('Cédula'))
        setName(localStorage.getItem('Nombre'));
        setEmail(localStorage.getItem('Email'));
        setRol(localStorage.getItem('Rol'));
       // setCheckbox(localStorage.getItem('Checkbox Value'));
      
    }, []);

    const updateAPIData = () => {
        //axios.put(`mongodb+srv://betadev:betadev@cluster0.anesk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/${_id}`, {
        axios.put(`mongodb+srv://dbmanager:dbmanager@cluster0.klsd9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/${_id}`, {    
           
        cedula,
        name,
        email,
        role,
          
        }).then(() => {
            history.push('/readusers')
            //navigate.push('/readusers')
        })
    }
    return (
        <div>
            <Header/>

<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
        <Grid.Column style={{ maxWidth: 450, backgroundColor: '#0B0B2F' }}>

            <Form className="create-form">  
            <Segment stacked style={{ maxWidth: 450, backgroundColor: "#0B0B2F" }} inverted  >

            <Form.Field>
                    <label>Cédula</label>
                    <input fluid icon='user' iconPosition='left' placeholder='Cédula' value={cedula} onChange={(e) => setCedula(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    <label>Nombre</label>
                    <input placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Field>

                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Field>
                
                <Form.Field>
                     <label>Rol</label>
                    <input placeholder='Rol' value={role} onChange={(e) => setRol(e.target.value)}/>
               </Form.Field>
               
                <Button type='submit'  color='purple' fluid size='large'  onClick={updateAPIData}>Actualizar</Button>
                </Segment>
            </Form>

            
        </Grid.Column>
      </Grid>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
//import {useNavigate} from 'react-router-dom';
import Headerproducts from './Headerproducts';

export default function Update() {
    let history = useHistory();
    /*const navigate = useNavigate();
    navigate('/home')*/

    useEffect(() => {
        setID(localStorage.getItem('ID'))
       
        setDescrip(localStorage.getItem('DESCRIPCION'));
        setValue(localStorage.getItem('VALOR'));
        setCantidad(localStorage.getItem('CANTIDAD'));
    }, []);

    const [_id, setID] = useState(null); 
    const [descrip, setDescrip] = useState('');
    const [value, setValue] = useState('');
    const [cantidad, setCantidad] = useState('');

    const updateAPIData = () => {
        axios.put(`http://localhost:5000/productos/${_id}`, {


          token:sessionStorage.getItem('token'),
            descrip,
            value,
            cantidad
        }).then(() => {
            history.push('./readprod')
            //navigate.push('/readprod')
        })  }

    return (
        <div>
            <Headerproducts />
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 450, backgroundColor: '#0B0B2F' }}>
                    <Form className="create-form">
                        <Segment stacked style={{ maxWidth: 450, backgroundColor: "#0B0B2F" }} inverted  >

                            <h1>Actualizar Productos</h1>
                           

                            <Form.Field>
                                <label>DESCRIPCION</label>
                                <input value={descrip} onChange={(e) => setDescrip(e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>VALOR</label>
                                <input value={value} type="number" onChange={(e) => setValue(e.target.value)} />
                            </Form.Field>

                            <Form.Field>
                                <label>CANTIDAD</label>
                                <input value={cantidad} type="number" onChange={(e) => setCantidad(e.target.value)} />
                            </Form.Field>

                            <Button type='submit' color='green' fluid size='large' onClick={updateAPIData}>Actualizar</Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}
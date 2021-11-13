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
        setProduct(localStorage.getItem('IUP'))
        setDescrip(localStorage.getItem('DESCRIPCION'));
        setValue(localStorage.getItem('VALOR'));
        setCantidad(localStorage.getItem('CANTIDAD'));
    }, []);

    const [_id, setID] = useState(null);
    const [dni, setProduct] = useState('');
    const [descrip, setDescrip] = useState('');
    const [value, setValue] = useState('');
    const [cantidad, setCantidad] = useState('');

    const updateAPIData = () => {
        //axios.put(`mongodb+srv://betadev:betadev@cluster0.anesk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/${_id}`, {
            axios.put(`mongodb+srv://dbmanager:dbmanager@cluster0.klsd9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/${_id}`, {
            dni,
            descrip,
            value,
            cantidad
        }).then(() => {
            history.push('./readprod')
            //navigate.push('./readprod')
        })  }

    return (
        <div>
            <Headerproducts />
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >
                <Grid.Column style={{ maxWidth: 450, backgroundColor: '#0B0B2F' }}>
                    <Form className="create-form">
                        <Segment stacked style={{ maxWidth: 450, backgroundColor: "#0B0B2F" }} inverted  >

                            <h1>Actualizar productos </h1>
                            <Form.Field>
                                <label>IUP</label>
                                <input fluid icon='write' type="number" iconPosition='left' disabled value={dni} onChange={(e) => setProduct(e.target.value)} />
                            </Form.Field>

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
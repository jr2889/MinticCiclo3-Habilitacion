import React, { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button,  Input,Table,Grid} from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
//import {useNavigate} from 'react-router-dom';
import Headerproducts from './Headerproducts';
import Swal from 'sweetalert2'; 
export default function Create() {

  let history = useHistory();
  /*const navigate = useNavigate();
  navigate('/home')*/
  const [dniventa, setVenta] = useState('');
  const [fecha, setFecha] = useState('');
  const [cliente, setCliente] = useState('');
  const [dnicliente, setCedula] = useState('');  
  const [dni, setDni] = useState('');
  const [cantidad, setCantidad] = useState('');
  const[estado, setEstado]= useState('');
  const [total, setTotal] = useState('');
  const [APIData, setAPIData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
        try {
            //const res = await axios.get('mongodb+srv://betadev:betadev@cluster0.anesk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
            const res = await axios.get('mongodb+srv://dbmanager:dbmanager@cluster0.klsd9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
            setAPIData(res.data);
            
                    }
        catch (err) { throw new Error(err); }
    };
    fetchData();
}, [])
  
const getData = () => {
  //axios.get(`mongodb+srv://betadev:betadev@cluster0.anesk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  axios.get(`mongodb+srv://dbmanager:dbmanager@cluster0.klsd9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`).then((getData) => {
          setAPIData(getData.data);
      
      })
}

  const postData = () => {  
    if (total!=='') {    
       // axios.post(`http://localhost:5000/productos`, {dni, descrip, value, cantidad }).then(
        axios.post(`mongodb+srv://dbmanager:dbmanager@cluster0.klsd9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { dniventa, fecha ,cliente,dnicliente,dni,cantidad,estado,total  })
      .then(
        history.push('/readsale') ,
        //navigate.push('/readsale') ,
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto guardado',
          showConfirmButton: true,
          timer: 1500
        }) 
      )
    }    
  }

 const seleccion=''; 

  return (
    <div style={{ alignItems:'center', }}>



      <Headerproducts />  
      <h1> INGRESO VENTAS</h1>

      <Grid textAlign='center'  verticalAlign='middle' >

        <div>

      Codigo producto: <Input type='number' size="30" onChange={(e) => setVenta(e.target.value)} required   />
          Fecha: <Input type="date"     min="2021-01-01" max="2040-12-31"  onChange={(e) => setFecha(e.target.value)}  required />        
        Cliente: <Input type="text"   size="30" onChange={(e) => setCliente(e.target.value)} required /> 
 Identificación: <Input type="number" size="30" onChange={(e) => setCedula(e.target.value)}  required   />
 
</div>
<div>

  dni: < Input type='select'  value={seleccion}   size="30"onChange={(e) => setDni(e.target.value)}  required  />            
        cantidad: < Input type='number' size="30"onChange={(e) => setCantidad(e.target.value)}  required  /> 
      
          Total: < Input type='number' size="30"onChange={(e) => setTotal(e.target.value)}  required  /> 
          Estado: < Input type='number' size="30"onChange={(e) => setEstado(e.target.value)}  required  /> 
       
          </div>
          
                <Button onClick={postData} type='submit' color='green' fluid size='large'   >   Guardar  </Button>


                <Table className='ui red table' style={{ backgroundColor: 'rgba(5, 4, 22, 0.8)', color: 'white', }}>
                        <Table.Header >
                            <Table.Row class="center aligned" >
                                <Table.HeaderCell style={{ backgroundColor: 'rgba(5, 4, 22, 0.8)', color: 'white' }}>
                                   
                                </Table.HeaderCell>
                                <Table.HeaderCell style={{ backgroundColor: 'rgba(5, 4, 22, 0.8)', color: 'white' }} ><h4>Gestión de productos</ h4></Table.HeaderCell>

                            </Table.Row>

                            <Table.HeaderCell>IUP</Table.HeaderCell>
                            <Table.HeaderCell>DESCRIPCION</Table.HeaderCell>
                            <Table.HeaderCell>VALOR</Table.HeaderCell>
                            <Table.HeaderCell>CANTIDAD</Table.HeaderCell>
                            <Table.HeaderCell>ESTADO</Table.HeaderCell>
                            <Table.HeaderCell>ACCIONES</Table.HeaderCell>
                            <Table.HeaderCell > 
                            </Table.HeaderCell>

                        </Table.Header>
                        <Table.Body>
                            {APIData.map((data) => {
                                let count = data.cantidad
                                if (count > 0) {
                                    count = "Disponible"
                                }
                                else 
                                    count = "No Disponible"
                                return (
                                    <Table.Row class="center aligned">
                                        <Table.Cell>{data.dni}</Table.Cell>
                                        <Table.Cell>{data.descrip}</Table.Cell>
                                        <Table.Cell>{data.value}</Table.Cell>
                                        <Table.Cell >{data.cantidad}</Table.Cell>
                                        <Table.Cell >{count }</Table.Cell>
                                        <Table.Cell>  
                                        </Table.Cell>
                                        
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
 
                    </Grid>

    </div>
  )
}
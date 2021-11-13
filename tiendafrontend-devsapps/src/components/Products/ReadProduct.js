import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Headerproducts from './Headerproducts';
import Swal from 'sweetalert2';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    const [filtered, setFilterd] = useState([]);
    const [result, setResult] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/productos');
                setAPIData(res.data);
                setFilterd(res.data);
                        }
            catch (err) { throw new Error(err); }
        };
        fetchData();
    }, [])

    useEffect(() => {
        const results = filtered.filter  ((res) =>{
            
            if(res.dni.toString().toLowerCase().includes(result.toLowerCase())
            || res.descrip.toString().toLowerCase().includes(result.toLowerCase())
            )
            {
              return res;
            }  } );

        setAPIData(results)
    }, [result])


    const onChange = (e) => {
        setResult(e.target.value);
    }    

    const setData = (data) => {
        let { _id, dni, descrip, value, cantidad } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('DNI', dni);
        localStorage.setItem('DESCRIPCION', descrip);
        localStorage.setItem('VALOR', value);
        localStorage.setItem('CANTIDAD', cantidad)
    }

    const getData = () => {
        axios.get(`http://localhost:5000/productos`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (_id) => {
        axios.delete(`http://localhost:5000/productos/${_id}`)
        Swal.fire({
            title: 'Deseas borrar producto?',
            showDenyButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Cancelar`,
        }).then((result) => {           
            if (result.isConfirmed) {
                Swal.fire('Producto eliminado!', '', 'success')
                getData();
            } else if (result.isDenied) {
                Swal.fire('Proceso cancelada', '', 'info')
            }
        })};

    return (
        <div>
            <Headerproducts />
            <div class="ui container " >
                <div class="ui menu" style={{ backgroundColor: 'rgba(5, 4, 22, 0.8)' }}>
                    <Table className='ui red table' style={{ backgroundColor: 'rgba(5, 4, 22, 0.8)', color: 'white', }}>
                        <Table.Header >
                            <Table.Row class="center aligned" >
                                <Table.HeaderCell style={{ backgroundColor: 'rgba(5, 4, 22, 0.8)', color: 'white' }}>
                                    <div className="ui icon input">
                                        <input type="text" placeholder="Buscar producto..." value={result} onChange={onChange} />
                                        <i class="inverted circular search link icon"></i>
                                    </div>
                                </Table.HeaderCell>
                                <Table.HeaderCell style={{ backgroundColor: 'rgba(5, 4, 22, 0.8)', color: 'white' }} ><h4>Gestión de Productos</ h4></Table.HeaderCell>

                            </Table.Row>

                            <Table.HeaderCell>IUP</Table.HeaderCell>
                            <Table.HeaderCell>DESCRIPCION</Table.HeaderCell>
                            <Table.HeaderCell>VALOR</Table.HeaderCell>
                            <Table.HeaderCell>CANTIDAD</Table.HeaderCell>
                            <Table.HeaderCell>ESTADO</Table.HeaderCell>
                            <Table.HeaderCell>ACCIONES</Table.HeaderCell>
                            <Table.HeaderCell ><Link to='/createprod' >
                                <Button class='ui left button' color='green' ali  >Agregar Producto</Button>
                            </Link>
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
                                        <Table.Cell> <Link to='/updateprod'>
                                            <Button onClick={() => setData(data)} color='orange'>Actualizar</Button>
                                        </Link>
                                        </Table.Cell>
                                        <Table.Cell> <Button onClick={() => onDelete(data._id)} color='red'>Eliminar</Button>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            })}
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    )
}
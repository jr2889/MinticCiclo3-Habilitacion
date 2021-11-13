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
                //const res = await axios.get('mongodb+srv://betadev:betadev@cluster0.anesk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
                const res = await axios.get('mongodb+srv://dbmanager:dbmanager@cluster0.klsd9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
                setAPIData(res.data);
                setFilterd(res.data);
                        }
            catch (err) { throw new Error(err); }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const results = filtered.filter((res) => res.descrip.toLowerCase().includes(result),
        );
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
        //axios.get(`mongodb+srv://betadev:betadev@cluster0.anesk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
        axios.get(`mongodb+srv://dbmanager:dbmanager@cluster0.klsd9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (_id) => {
        //axios.delete(`mongodb+srv://betadev:betadev@cluster0.anesk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/${_id}`)
        axios.delete(`mongodb+srv://dbmanager:dbmanager@cluster0.klsd9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority/${_id}`)
        Swal.fire({
            title: 'Borrar producto?',
            showDenyButton: true,

            confirmButtonText: 'Eliminar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Producto eliminado!', '', 'success')
                getData();
            } else if (result.isDenied) {
                Swal.fire('Operación cancelada', '', 'info')

            }
        })

    };

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
                                <Table.HeaderCell style={{ backgroundColor: 'rgba(5, 4, 22, 0.8)', color: 'white' }} ><h4>Gestión de Ordenes</ h4></Table.HeaderCell>

                            </Table.Row>

                            <Table.HeaderCell>CODIGO</Table.HeaderCell>
                            <Table.HeaderCell>FECHA</Table.HeaderCell>
                            <Table.HeaderCell>CLIENTE</Table.HeaderCell>                         
                            <Table.HeaderCell>CEDULA</Table.HeaderCell>
                            <Table.HeaderCell>ESTADO</Table.HeaderCell>
                            <Table.HeaderCell>ACCIONES</Table.HeaderCell>
                            <Table.HeaderCell ><Link to='/createprod' >
                                <Button class='ui left button' color='green' ali  >Ingresar Producto</Button>
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
                                        <Table.Cell>{data.dniventa}</Table.Cell>
                                        <Table.Cell >{data.fecha}</Table.Cell>
                                        <Table.Cell>{data.cliente}</Table.Cell>
                                        <Table.Cell>{data.dnicliente}</Table.Cell>
                                        <Table.Cell >{data.total}</Table.Cell>
                                       
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
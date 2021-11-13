import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import HeaderUsers from './HeaderUsers';
import Swal from 'sweetalert2';

export default function ReadUsers() {
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
    }, [])

    useEffect(() => {
        const results = filtered.filter  ((res) =>{
            
            if(res.cedula.toString().toLowerCase().includes(result.toLowerCase())
            || res.email.toString().toLowerCase().includes(result.toLowerCase())
            )
            {
              return res ;
            }  } );

        setAPIData(results)
    }, [result])


    const onChange = (e) => {
        setResult(e.target.value);
    }    

    const setData = (data) => {
        let { _id, cedula, name, email, role } = data;
        localStorage.setItem('ID', _id);
        localStorage.setItem('Cédula', cedula);
        localStorage.setItem('nombre', name);
        localStorage.setItem('email', email);
        localStorage.setItem('rol', role)
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
            title: 'Borrar usuario?',
            showDenyButton: true,
            confirmButtonText: 'Eliminar',
            denyButtonText: `Cancelar`,
        }).then((result) => {           
            if (result.isConfirmed) {
                Swal.fire('Usuario eliminado!', '', 'success')
                getData();
            } else if (result.isDenied) {
                Swal.fire('Operación cancelada', '', 'info')
            }
        })};

    return (
        <div>
            <HeaderUsers />
            <div class="ui container " >
                <div class="ui menu" style={{ backgroundColor: 'rgba(5, 4, 22, 0.8)' }}>
                    <Table className='ui red table' style={{ backgroundColor: 'rgba(5, 4, 22, 0.8)', color: 'white', }}>
                        <Table.Header >
                            <Table.Row class="center aligned" >
                                <Table.HeaderCell style={{ backgroundColor: 'rgba(5, 4, 22, 0.8)', color: 'white' }}>
                                    <div className="ui icon input">
                                        <input type="text" placeholder="Buscar usuario..." value={result} onChange={onChange} />
                                        <i class="inverted circular search link icon"></i>
                                    </div>
                                </Table.HeaderCell>
                                <Table.HeaderCell style={{ backgroundColor: 'rgba(5, 4, 22, 0.8)', color: 'white' }} ><h4>Gestión de Usuarios</ h4></Table.HeaderCell>

                            </Table.Row>

                            <Table.HeaderCell>ID</Table.HeaderCell>
                            <Table.HeaderCell>CEDULA</Table.HeaderCell>
                            <Table.HeaderCell>NOMBRE</Table.HeaderCell>
                            <Table.HeaderCell>EMAIL</Table.HeaderCell>
                            <Table.HeaderCell>ROL</Table.HeaderCell>
                            
                            <Table.HeaderCell ><Link to='/createusers' >
                                <Button class='ui left button' color='green' ali  >Ingresar Usuario</Button>
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
                                        <Table.Cell>{data._id}</Table.Cell>
                                        <Table.Cell>{data.cedula}</Table.Cell>
                                        <Table.Cell>{data.name}</Table.Cell>
                                        <Table.Cell >{data.email}</Table.Cell>
                                        <Table.Cell >{data.role}</Table.Cell>
                                        <Table.Cell> <Link to='/updateusers'>
                                            <Button onClick={() => setData(data)} color='orange'>Actualizar</Button>
                                        </Link>
                                        </Table.Cell>
                                        <Table.Cell> <Button onClick={() => onDelete(data._id)} color='red'>Borrar</Button>
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
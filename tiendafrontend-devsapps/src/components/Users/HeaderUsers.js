import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const DropdownExamplePointing = () => (

  <div >

    <Menu color={"red"} inverted >
      <Menu.Item> <i class="shopping cart icon"> </i>Sistema de Ventas DevApps</Menu.Item>
      <Menu.Item pointing className='link item' href="./Home"  ><i class="home icon" ></i>Inicio</Menu.Item>

      <Dropdown text='Ventas' className='link item' >
        <Dropdown.Menu>
        <Dropdown.Item  href="./createsale" >  Realizar Ventas</Dropdown.Item>
          <Dropdown.Item  href="./readsale" >Gestionar Ventas</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown text='Productos' pointing className='link item'>
        <Dropdown.Menu>
        <Dropdown.Item href="./createprod">Ingresar Productos</Dropdown.Item>
          <Dropdown.Item href="./readprod">Gestionar Productos   </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown text='Usuarios' pointing className='link item'>
        <Dropdown.Menu>
          <Dropdown.Item href="./createusers">Ingresar Usuarios</Dropdown.Item>
          <Dropdown.Item href="./readusers">Gestionar Usuarios   </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Item>About</Menu.Item>

      <Dropdown text='Usuario' className='link item' >
        <Dropdown.Menu>
          <Dropdown.Item>Salir</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

    </Menu>
    
  </div>

)
export default DropdownExamplePointing
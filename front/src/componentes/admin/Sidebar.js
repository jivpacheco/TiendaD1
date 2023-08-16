import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar-wrapper'>
            <nav id='sidebar'>
                <ul>
                    <li>
                        <Link to='/'><i className='fa fa-tachometer'>Administración</i></Link>
                    </li>
                    {/* botones de producto */}
                    <li>
                        <a href='#productSubmenu' data-toggle='collapse' aria-expanded='false' className='dropdown-toggle'>
                            <i className='fa fa-product-hunt'></i>Productos</a>
                        <ul className='collapse list-unstyled' id='productSubmenu'>
                            <li>
                                <Link to='/'><i className='fa fa-clipboard'></i>Lista de Productos</Link>
                            </li>
                            <li>
                                <Link to='/'><i className='fa fa-plus'></i>Crear Productos</Link>
                            </li>
                        </ul>
                    </li>
                    {/* botones de Pedidos */}
                    <li>
                        <Link to='/'><i className='fa fa-shopping-basket'></i>Pedidos</Link>
                    </li>
                    <li>
                        <Link to='/'><i className='fa fa-shopping-users'></i>Usuarios</Link>
                    </li>
                    <li>
                        <Link to='/'><i className='fa fa-shopping-users'></i>Reviews</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Sidebar
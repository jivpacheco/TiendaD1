import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/Metadata'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';
import { Link } from 'react-router-dom';
import { useAlert } from 'react-alert'


const Home = () => {

    const { loading, productos, error } = useSelector(state => state.productos)
    const alert = useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            return alert.error(error);
        }

        dispatch(getProducts());
        // alert.success('todo OK')
    }, [dispatch])

    return (
        <Fragment>
            {loading ? <i class='fa fa-spinner fa-spin fa-3x fa-fw'></i> : (
                <Fragment>
                    <MetaData title="¡Si lo quieres lo Tienes!"></MetaData>
                    <h1 id='encabezado_productos'>Ultimos Productos</h1>

                    <section id='productos' className='container mt-5'>
                        <div className='row'>

                            {productos && productos.map(producto => (
                                <div key={producto._id} className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                    <div className='card p-3 rounded'>
                                        <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img>
                                        <div className='card-body d-flex flex-column'>
                                            <h5 id='titulo_producto'>
                                                <Link to={`/producto/${producto._id}`}>{producto.nombre}</Link>
                                            </h5>
                                            <div className='rating mt-auto'>
                                                <div className='rating-outer'>
                                                    <div className='rating-inner' style={{ width: `${(producto.calificacion / 5) * 100}%` }}></div>
                                                </div>
                                                <span id='No_de_opiniones'> {producto.numCalificaciones} Reviews</span>
                                            </div>
                                            <p className='card-text'>${producto.precio} </p>
                                            <Link to={`/producto/${producto._id}`} id='view_btn' className='btn btn-block'>Ver Detalle</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}


                            {/* para omotir el detalle de productos }*/}
                            {/* Producto 1 */}
                            {/* <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/productos/aceitediana.jpg' alt='Aceite Diana'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_producto'>
                                <a href='http://localhost:3000'>Aceite Diana 2000cc</a>
                                </h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'> 5 Reviews</span>
                                </div>
                                <p className='card-text'>$22.600 </p>
                                <a href='http://localhost:3000' id='view_btn' className='btn btn-block'>Ver Detalle</a>
                            </div>
                        </div>
                    </div> */}
                            {/* Producto 2 */}
                            {/* <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/productos/arrozdintegral.jpg' alt='Arroz integral Diana'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_producto'>
                                <a href='http://localhost:3000'>Arroz Diana Integral</a>
                                </h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'> 5 Reviews</span>
                                </div>
                                <p className='card-text'>$5.600 </p>
                                <a href='http://localhost:3000' id='view_btn' className='btn btn-block'>Ver Detalle</a>
                            </div>
                        </div>
                    </div> */}

                            {/* Producto 3 */}
                            {/* <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/productos/chocolateDiana.jpg' alt='Chocolate Diana'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_producto'>
                                <a href='http://localhost:3000'>Chocolate Diana 500g</a>
                                </h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'> 5 Reviews</span>
                                </div>
                                <p className='card-text'>$8.350 </p>
                                <a href='http://localhost:3000' id='view_btn' className='btn btn-block'>Ver Detalle</a>
                            </div>
                        </div>
                    </div> */}

                            {/* Producto 4 */}
                            {/* <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/productos/frijolcalima.jpg' alt='Frijol Calima Diana'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_producto'>
                                <a href='http://localhost:3000'>Frijol Calima 500gr</a>
                                </h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'> 5 Reviews</span>
                                </div>
                                <p className='card-text'>$9.800 </p>
                                <a href='http://localhost:3000' id='view_btn' className='btn btn-block'>Ver Detalle</a>
                            </div>
                        </div>
                    </div> */}

                            {/* Producto 5 */}
                            {/* <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/productos/aceitediana.jpg' alt='Aceite Diana'></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id='titulo_producto'>
                                <a href='http://localhost:3000'>Aceite Diana 2000cc</a>
                                </h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id='No_de_opiniones'> 5 Reviews</span>
                                </div>
                                <p className='card-text'>$22.600 </p>
                                <a href='http://localhost:3000' id='view_btn' className='btn btn-block'>Ver Detalle</a>
                            </div>
                        </div>
                    </div> */}




                        </div>
                    </section>
                </Fragment>
            )}
        </Fragment>
    )
}

export default Home
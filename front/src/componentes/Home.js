import React, { Fragment } from 'react'
import Metadata from './layout/Metadata'

const Home = () => {
    return (
        <Fragment>
            <Metadata title="¡Si lo quieres lo Tienes!"></Metadata>
            <h1 id='encabezado_productos'>Ultimos Productos</h1>

            <section id='productos' className='container mt-5'>
                <div className='row'>
                    {/* Producto 1 */}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/aceitediana.jpg' alt='Aceite Diana'></img>
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
                    </div>
                    {/* Producto 2 */}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/arrozdintegral.jpg' alt='Arroz integral Diana'></img>
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
                    </div>

                    {/* Producto 3 */}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/chocolateDiana.jpg' alt='Chocolate Diana'></img>
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
                    </div>

                    {/* Producto 4 */}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/frijolcalima.jpg' alt='Frijol Calima Diana'></img>
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
                    </div>

                    {/* Producto 5 */}
                    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>
                            <img className='card-img-top mx-auto' src='./images/aceitediana.jpg' alt='Aceite Diana'></img>
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
                    </div>


                </div>
            </section>

        </Fragment>
    )
}

export default Home
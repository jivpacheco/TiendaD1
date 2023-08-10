import React, { Fragment} from 'react'
import MetaData from '../layout/Metadata'

const ProductDetails = () => {
    
    
  return (
    
    <Fragment>
        <MetaData title="¡Si lo quieres lo Tienes!"></MetaData>
        <div className='row-d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id='imagen_producto'>
                <img src='../../images/productos/aceitediana.jpg' alt='imagen del producto' height={'450'} width={'450'}></img>
                {/* <img src='../../images/productos/aceitediana.jpg' height='450' width='450'></img> */}
                <div className='col-12 col-lg-5 mt-5'>
                    <h3>Aceite Diana 2000ml</h3>
                    <p id='product_id'>producto #325395</p>
                </div>
            </div>
        </div>


    </Fragment>
    
  )
}

export default ProductDetails
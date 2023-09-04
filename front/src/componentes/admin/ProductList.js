import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { getProducts } from '../../actions/productActions';
import Metadata from '../layout/Metadata';
import Sidebar from './Sidebar';
import { MDBDataTable } from 'mdbreact';

const ProductList = () => {

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


    const setProducts = () => {

        //json de muestra
        const data = {
            columns: [
                {
                    label:  'ID',
                    field:  'id',
                    sort:   'asc'
                },
                {
                    label: 'Nombre',
                    field: 'nombre',
                    sort: 'asc'
                },
                {
                    label: 'Precio',
                    field: 'precio',
                    sort: 'asc'
                },
                {
                    label: 'Inventario',
                    field: 'inventario',
                    sort: 'asc'
                },
                {
                    label: 'Vendedor',
                    field: 'vendedor',
                    sort: 'asc'
                },
                {
                    label: 'Acciones',
                    field: 'acciones',
                },
            ],
            rows: []
        }

        productos.forEach(producto  =>{
            data.rows.push({
                id: producto._id,
                nombre: producto.nombre,
                precio: `$${producto.precio}`,
                inventario: producto.inventario,
                vendedor: producto.vendedor
            })
        })
        return data;

    }

    return (
        <Fragment>
            <Metadata title={'Todos los Productos'}></Metadata>
            <div className='row'>
                <div className='col-12 col-md-2'>
                    <Sidebar />
                </div>
                <div className='col-12 col-md-10'>

                    <Fragment>
                        <h1 className='my-5'> Productos Registrados</h1>
                        {loading ? <i class='fa fa-spinner fa-spin fa-3x fa-fw'></i> : (
                            <MDBDataTable data={setProducts()} 
                            className='px-3' bordered striped hover small 
                            entriesLabel='Mostrar'
                            searchLabel="Buscar Producto"
                            infoLabel={["Mostrando", "a", "de", "Entradas"]} 
                            paginationLabel={["Anterior","Proximo"]}>
                            </MDBDataTable>
                        )}
                    </Fragment>

                </div>

            </div>

        </Fragment>
    )
}

export default ProductList
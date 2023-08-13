const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const producto = require('../models/productos');
const ErrorHandler = require('../utils/errorHandler');
// const fetch = (url) => import('node-fetch').then(({ default: fetch }) => fetch(url)); //Usurpación del require

// consulta de todos los productos
exports.getProducts = catchAsyncErrors(async (req, res, next) => {

    const productos = await producto.find();

    if (!productos) {
        return next(new ErrorHandler('Información No Encontrada', 404))
        // return res.status(404).json({
        //     success: false,
        //     error: true
        // })
    }
    res.status(200).json({
        success: true,
        cantidad: productos.length,
        productos
    })
})

// consultar un producto por id
exports.getProductById = catchAsyncErrors(async (req, res, next) => {

    const product = await producto.findById(req.params.id);
    if (!product) {
        // return res.status(404).json({
        //     success: false,
        //     message: "Producto no Encontrado",
        //     error: true
        // })
        return next(new ErrorHandler('Producto no Encontrado', 404))
    }
    res.status(200).json({
        success: true,
        message: "Aqui encontrala la informacion de su producto..",
        product
    })
})

//actualizar un producto - update

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {

    let product = await producto.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Producto no Encontrado', 404))
        // return res.status(404).json({
        //     success: false,
        //     message: "Producto no Encontrado"
        // })
    }

    product = await producto.findByIdAndUpdate(req.params.id, req.body, {

        new: true,
        runValidators: true

    });

    res.status(200).json({
        success: true,
        message: "Producto Actualizado con Exito..",
        product
    })
})

//Eliminar un producto

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await producto.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Producto no Encontrado', 404))
        // return res.status(404).json({
        //     success: false,
        //     message: "Producto no Encontrado"
        // })
    }

    // await product.remove(); // deprecated
    await product.deleteOne();

    res.status(200).json({
        success: true,
        message: "Producto Eliminado con Exito..",
        product
    })
})

//crear un producto
exports.newProducto = catchAsyncErrors(async (req, res, nex) => {
    const product = await producto.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
})

//HABLEMOS DE FETCH
//Ver todos los productos
function verProductos() {
    fetch('http://localhost:4000/api/productos')
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}

//verProductos(); LLamamos al metodo creado para probar la consulta

//Ver por id
function verProductoPorID(id) {
    fetch('http://localhost:4000/api/producto/' + id)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}

//verProductoPorID('63456a8d9163cb9dbbcaa235'); Probamos el metodo con un id



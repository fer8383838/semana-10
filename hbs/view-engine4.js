const express = require('express')
const { engine } = require('express-handlebars')
const app = express()

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: `${__dirname}/views/index.hbs`,  
    layoutsDir: `${__dirname}/views/layout`,
    partialsDir: `${__dirname}/views/partials`
}))

app.set('views', './views')
app.set('view engine', 'hbs')

let productos = []
const alumnos = [
    { nombre: 'Aaron', apellidos: 'Jallaza'},
    { nombre: 'Agustina', apellidos: 'Prats'},
    { nombre: 'Alan', apellidos: 'Mathiasen'},
    { nombre: 'Alejandro', apellidos: 'Zapata'},
    { nombre: 'Benjamin', apellidos: 'Hernandez'}
]

app.get('', (req, res) => {
    const data = { 
        comision: 30965,
        alumnos: alumnos 
        //alumnos
    }
    return res.render('layout/main2', data)
})

app.get('/enviar', (req, res) => {
    const data = { 
        comision: 30965,
        alumnos: alumnos 
        //alumnos
    }
    return res.render('layout/form', data)
})


app.post('/productos', (req, res) => {
    const producto = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        edad: req.body.edad
    }
    console.log({ producto, body: req.body })
    productos.push(producto)
    console.log(productos)
    //return res.redirect('/productos')
    return res.render('layout/productos')
})
// app.get('/productos', (req, res) => {
//     const data = {
//         comision: 30965,
//         productos
//     }
//     return res.render('layout/productos', data)
// })

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))
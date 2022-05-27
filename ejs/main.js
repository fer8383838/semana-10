const express = require('express')
const { render } = require('express/lib/response')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extend: true }))

app.set('views', './views')
app.set('view engine', 'ejs')
//funciona con los mismos archivos de pug, solo instaladon ejs
//se indica despues de haber instalado el motor de plantilas(ejs)

const productos = []

app.get('', (req, res) => {
    const data = {
        comision: 30965
    }
    return res.render('index', data)
})
//localhost:8080

app.get('/enviar', (req, res) => {

    return res.render('form')
})

app.get('/productos', (req, res) => {
    const data = {
        comision: 30965,
        productos
    }
    return res.render('productos', data)
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
    return res.redirect('/productos')
})

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor HTTP corriendo en el puerto ${PORT}`)
})

server.on('error', error => console.log(`Error en servidor: ${error}`))
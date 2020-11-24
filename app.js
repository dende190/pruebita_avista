//Dependencias
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Variables
const PORT = 8080;

//Configuraciones
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/assets'));

let usuarios = [
  {
    id: 1,
    nombre: 'Juanpis',
    correo: 'dende149@gmail.com',
    celular: '3001231231',
    destinoId: '1',
    medioId: '1',
    edad: 23,
  }
];
let ventas = [
  {
    id: 1,
    precio: 1300,
    polizaId: 2,
    usuarioId: 1,
  }
];
const polizas = [
  {
    id: 1,
    titulo: 'Poliza1',
    descripcion: (
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ' +
      'eiusmod tempor incididunt ut labore et dolore magna aliqua'
    ),
    precio: 1200,
  },
  {
    id: 2,
    titulo: 'Poliza2',
    descripcion: (
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ' +
      'eiusmod tempor incididunt ut labore et dolore magna aliqua'
    ),
    precio: 1300,
  },
  {
    id: 3,
    titulo: 'Poliza3',
    descripcion: (
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ' +
      'eiusmod tempor incididunt ut labore et dolore magna aliqua'
    ),
    precio: 1400,
  }
];

//Rutas
app.get('/', (req, res) => {
  const datosVista = {
    titulo: 'Vista Suscripcion',
  };
  res.render('suscripcion', datosVista);
});

app.post('/guardarUsuario', (req, res) => {
  guardarDatosArreglo(usuarios, req.body);
  console.log(usuarios);
  res.redirect('/polizas');
});

app.get('/polizas', (req, res) => {
  const datosVista = {
    titulo: 'Escoje tu poliza',
    nombre: usuarios[usuarios.length - 1].nombre,
    polizas,
  };
  res.render('polizas', datosVista);
});

app.get('/polizas/:polizaId', (req, res) => {
  const polizaId = (parseInt(req.params.polizaId) - 1);
  const usuario = usuarios[usuarios.length - 1]
  const datosVista = {
    titulo: 'Gran eleccion',
    nombre: usuario.nombre,
    usuarioId: usuario.id,
    poliza: polizas[polizaId],
  };

  res.render('poliza_detalle', datosVista);
});

app.post('/venderPoliza', (req, res) => {
  guardarDatosArreglo(ventas, req.body);
  res.redirect('/');
});

app.get('/admin', (req, res) => {
  const datosVista = {
    titulo: 'Administrador',
    usuarios,
    ventas,
  };

  console.log(ventas);

  res.render('administrador', datosVista);
});

function guardarDatosArreglo(arreglo, datos) {
  const totalDatos = arreglo.length;
  let nuevoRegistro = datos;
  nuevoRegistro['id'] = totalDatos + 1;
  arreglo.push(nuevoRegistro);
}

//InitServer
app.listen(PORT, () => {
  console.log('Servidor andando en el puerto: ' + PORT);
});

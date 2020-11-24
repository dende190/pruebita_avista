document.getElementById('jsBotonUsuario').addEventListener('click', function() {
  document.getElementById('tablaUsuarios').classList.remove('d-none');
  document.getElementById('tablaVentas').classList.add('d-none');
});

document.getElementById('jsBotonVentas').addEventListener('click', function() {
  document.getElementById('tablaVentas').classList.remove('d-none');
  document.getElementById('tablaUsuarios').classList.add('d-none');
});

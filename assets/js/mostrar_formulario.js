document.getElementById('mostrarFormulario').addEventListener(
  'click',
  function() {
    if (this.dataset.estado === '0') {
      this.innerHTML = 'o mejor no... 😔';
      this.classList.add('correr');
      this.dataset.estado = '1';
    } else {
      this.innerHTML = 'Suscribirse 🤔';
      this.classList.remove('correr');
      this.dataset.estado = '0';
    }
    document.getElementById('formularioSucribirse').classList.toggle('d-none');
  }
);

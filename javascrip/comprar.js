
 const valor = document.querySelector('input');
 const result = document.querySelector('#texto1');
 valor.addEventListener('input', function () {
     result.textContent = this.value;
 })

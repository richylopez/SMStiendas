/* 
* Author: Gabriel Chávez
* Website: https://gabrielchavez.me
*/

const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '59163511638';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let Nombre = document.querySelector('#Nombre').value
        let Cedula = document.querySelector('#Cedula').value
        let Celular = document.querySelector('#Celular').value       
        let Tipo = document.getElementById('Tipo').options[document.getElementById('Tipo').selectedIndex].text
        let Empresa = document.querySelector('#Empresa').value
        let Servicio1 = document.getElementById('Servicio1').options[document.getElementById('Servicio1').selectedIndex].text
        let Servicio2 = document.querySelector('#Servicio2').value
        let Zona = document.querySelector('#Zona').value
        let Direccion = document.querySelector('#Direccion').value
        let Detalle = document.querySelector('#Detalle').value

        let message = 'send?phone=' + phone + '&text=*_SOLICITUD DE REGISTRO DE NUEVAS TIENDAS_*%0A*(Datos de la Tienda)*%0A%0A*¿Nombre Del Solicitante?*%0A' 
        + Nombre + '%0A*¿Cedula de Identidad?*%0A' + Cedula + '%0A*¿Celular de Contacto?*%0A' + Celular +'%0A*¿Tipo de Tienda?*%0A' + Tipo + '%0A*¿Nombre de la Tienda?*%0A' + Empresa+
          '%0A*¿Grupo del Rubro de la Tienda?*%0A' + Servicio1 + ' *:* ' + Servicio2 +  '%0A*¿Zona de ubicacion de la Tienda?*%0A' + Zona + '%0A*¿Direccion de la Tienda?*%0A' + Direccion + 
          '%0A*¿Detalle de Nuestra Tienda?*%0A'+ Detalle +'%0A*ENVIAR FOTO DE CARNET DE AMBOS LADOS..!*%0A'


        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);
});

    var input = document.getElementById('Servicio2');

function carg(elemento) {
  d = elemento.value;
  
  if(d == 7){
    input.disabled = false;
  }else{
    input.disabled = true;
    input.value = "";
  }
}

       

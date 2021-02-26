import validator from './validator.js';

//console.log (validator);
//llamar elementos del DOM
//let +cualquiernombre <= ESTRUCTURA DE UNA VARIABLE
let btn = document.getElementById ("btn-enviar");

/*qué es el getElementById : seleccionar un elemento del documento 
por medio del valor del atributo id que se le haya asignado*/

let str = document.getElementById("inputNumero");

//addEventListener : es un escuchador que indica al navegador que este atento a la interacción del usuario.

btn.addEventListener("click",
function funcion1 (event)
{
    //event.preventDefault : se utiliza para detener una acción por omisión, sin detener el resto del funcionamiento del evento.
    event.preventDefault()
  //  alert(str.value)

  //esta parte es funcional para el alert de tarjeta verificada:
  
  let tarjetaVerificada = validator.isValid(str.value)
   // alert (tarjetaVerificada)
   console.log (tarjetaVerificada)
    if (tarjetaVerificada) {alert ("La tarjeta no es válida :)")}
    else {alert ("La tarjeta no es válida")}
    str.value = validator.maskify(str.value)

    //objeto: estructura de datos - se conforma por propiedades y valores (keys y value)
})

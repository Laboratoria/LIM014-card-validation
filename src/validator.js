const validator = {
  isValid: (result)=> {
    let resultArray = result.split("").reverse();
    //console.log('before loop', resultArray);
  
    let impares = []
    let pares = []

    for (let i = 0; i < resultArray.length; i++) { 
    if (i % 2 !==0)
      {impares.push(result[i]*2)}
        //console.log(impares) 
   
    else {pares.push(result[i])}
        // console.log(pares);
      }    
        //Suma de posiciones impares

  let sumarImparDosDigitos = []
  let sumarImpar = []
  let sumarPar = []
  //let i = []
  let sumarDigitos= []

    for(let n=0; n < result.length; n++){
        if (impares[n] >= 10) 
     {
      sumarDigitos.push(impares[n] -10);
      //sumarImparDosDigitos += sumarDigitos;
     

      }else{
        sumarDigitos.push(impares[n] *1);
      //sumarImpar += impares[i];
   // console.log(`Posicion: ${impares[i]}`);
    //console.log(`Suma de numeros 1D: ${sumarImpar}`);
      }
      console.log(sumarDigitos)

    let sumaTotal = []
  // Suma de digitos posicion par
    for(let i = 0; i<pares.length; i++) 
    {
    let numeroPosicionPar = pares[i];
    sumarPar += numeroPosicionPar;
  // console.log(`Posicion: ${numeroPosicionPar}`);
  // console.log(`Suma de numeros posicion par: ${sumarPar}`);
    }
    sumaTotal = sumarImpar + sumarImparDosDigitos + sumarPar;
  // console.log(`Suma total: ${sumaTotal}`);
  // condición ? expr1 : expr2
  const tarjetValid = sumaTotal % 10 === 0 ? true : false;
  //console.log(tarjetValid);
  return tarjetValid;
  }
},

  maskify: function (result) {
 
    if (result.length < 4) {
    return result;
   }
    const ultimos4Caracteres = result.substr(-4); 
    const ocultarCaracteres = result.substr(0, result.length -4).replace(/\d/g, '#');

    console.log(`${ocultarCaracteres}${ultimos4Caracteres}`);
    return `${ocultarCaracteres}${ultimos4Caracteres}`
  },

};
export default validator;
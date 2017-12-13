var numeroAnterior, numeroPresionado,numeroActual, contadorDig, signo, resultadototal, a, b, operando

numeroAnterior = ""
contadorDig = 0
resultadototal = 0
operando=""
a=0
b=0
//Seleccionas todos los elementos con clase tecla

var divs = document.getElementsByClassName("tecla");

    //Recorres la lista de elementos seleccionados
    for (var i=0; i< divs.length; i++) {
        //Añades un evento a cada elemento
        divs[i].addEventListener("click",function() {

            tecla= this.id;

            // document.getElementById(tecla).style.height = (document.getElementById(tecla).height-3)+"px";
            // document.getElementById(tecla).style.width = (document.getElementById(tecla).width-3)+"px";

           numeroPresionado = tomarNumero(this.id)
           ////////////////////////////////////////////////////////////////////////////////////
           if(numeroPresionado=="n"){
              // var cadena = document.getElementById('display').innerHTML
              // alert(document.getElementById('display').innerHTML)
              // alert(this.id)

               if(document.getElementById('display').innerHTML =="0" && this.id=="0")
               {
                    numeroActual = this.id
                    contadorDig = 0
                    document.getElementById('display').innerHTML ="0"
                    numeroAnterior = ""
               }else
                {
                  if(document.getElementById('display').innerHTML =="0")
                  {
                    document.getElementById('display').innerHTML ==""
                  }
                  numeroActual = this.id
                  contadorDig = document.getElementById('display').innerHTML.length
                  if(contadorDig<=8)
                  {
                    document.getElementById('display').innerHTML  = numeroAnterior+numeroActual

                    numeroAnterior = document.getElementById('display').innerHTML
                    b = document.getElementById('display').innerHTML
                  }
                  }
                }
            ////////////////////////////////////////////////////////////////////////////////////
            if(numeroPresionado=="on"){
             document.getElementById('display').innerHTML  = "0"
             numeroPresionado =""
             numeroAnterior = ""
             contadorDig = 0
             operando=""
             a=0
             b=0
             }

             ////////////////////////////////////////////////////////////////////////////////////
             if(numeroPresionado=="punto"){
               //-------------Tomar Valor de la Pantalla
               var cadena = document.getElementById('display').innerHTML


              //--------------Preguntar si no existe dentro de la cadena el caracter punto, si no existe se concatenara
               if (cadena.indexOf(".")==-1)
               {

                 if(document.getElementById('display').innerHTML=="0")
                 {
                   numeroAnterior=document.getElementById('display').innerHTML
                 }
                 //alert(this.id)
                  //numeroActual = this.id
                  contadorDig = document.getElementById('display').innerHTML.length

                  if(contadorDig<=8)
                  {
                    document.getElementById('display').innerHTML  = numeroAnterior+"."

                    numeroAnterior = document.getElementById('display').innerHTML
                  }
                }
            }
            ////////////////////////////////////////////////////////////////////////////////////
            if(numeroPresionado=="sign"){
              //-------------Tomar Valor de la Pantalla

              var cadena = document.getElementById('display').innerHTML

              if(cadena=="0")
              {
                document.getElementById('display').innerHTML ="0"
                return
              }
             //--------------Preguntar si no existe dentro de la cadena el caracter punto, si no existe se concatenara
              if (cadena.indexOf("-")==-1)
              {
                 numeroActual = this.id
                 //contadorDig = contadorDig +1
                 if(contadorDig<=8)
                 {
                   document.getElementById('display').innerHTML  = "-"+numeroAnterior

                   numeroAnterior = document.getElementById('display').innerHTML

                   b = document.getElementById('display').innerHTML

                 }
               }else {
                 var cadena = document.getElementById('display').innerHTML
                 if (cadena.indexOf("-")>=0)
                 {
                    numeroActual = this.id
                    //contadorDig = contadorDig +1
                    document.getElementById('display').innerHTML  = cadena.replace("-","")

                    numeroAnterior = document.getElementById('display').innerHTML
                    b = document.getElementById('display').innerHTML

                    }
                  }
                }
           ////////////////////////////////////////////////////////////////////////////////////
             if(numeroPresionado=="mas"){
               if(document.getElementById('display').innerHTML =="0")
               {
                 return
               }

               a =  document.getElementById('display').innerHTML
                    document.getElementById('display').innerHTML=""
              numeroAnterior=""
              operando="+"
              }
              if(numeroPresionado=="menos"){
                if(document.getElementById('display').innerHTML =="0")
                {
                  return
                }

                a =  document.getElementById('display').innerHTML
                     document.getElementById('display').innerHTML=""
               numeroAnterior=""
               operando="-"

               }
               if(numeroPresionado=="por"){
                 if(document.getElementById('display').innerHTML =="0")
                 {
                   return
                 }

                 a =  document.getElementById('display').innerHTML
                      document.getElementById('display').innerHTML=""
                numeroAnterior=""
                operando="*"
                }
                if(numeroPresionado=="dividido"){
                  if(document.getElementById('display').innerHTML =="0")
                  {
                    return
                  }

                  a =  document.getElementById('display').innerHTML
                       document.getElementById('display').innerHTML=""
                 numeroAnterior=""
                 operando="/"
                 }

              if(numeroPresionado=="igual"){

                //----------------------Sumando Datos
                if(operando=="+")
                {
                  var resultado;
                  var longitud = 0;

                  var calculado = parseFloat(a)+parseFloat(b)

                  longitud = calculado.toString().length

                  if (longitud>9)
                  {
                    resultado = calculado.toString().substring(0,9)
                  }else {
                    resultado = calculado
                  }

                    document.getElementById('display').innerHTML = resultado
                    a=document.getElementById('display').innerHTML
                    numeroAnterior=""

                }
                //----------------------Restando Datos
                if(operando=="-")
                {
                  var resultado;
                  var longitud = 0;

                  var calculado = parseFloat(a)-parseFloat(b)

                  longitud = calculado.toString().length

                  if (longitud>9)
                  {
                    resultado = calculado.toString().substring(0,9)
                  }else {
                    resultado = calculado
                  }

                    document.getElementById('display').innerHTML = resultado
                    a=document.getElementById('display').innerHTML
                    numeroAnterior=""

                }
                //----------------------Multiplicando Datos
                if(operando=="*")
                {
                  var resultado;
                  var longitud = 0;

                  var calculado = parseFloat(a)*parseFloat(b)

                  longitud = calculado.toString().length

                  if (longitud>9)
                  {
                    resultado = calculado.toString().substring(0,9)
                  }else {
                    resultado = calculado
                  }

                    document.getElementById('display').innerHTML = resultado
                    a=document.getElementById('display').innerHTML
                    numeroAnterior=""

                }
                //----------------------Dividiendo Datos
                if(operando=="/")
                {
                  var resultado;
                  var longitud = 0;

                  var calculado = (parseFloat(a)/parseFloat(b))

                  longitud = calculado.toString().length

                  if (longitud>9)
                  {
                    resultado = calculado.toString().substring(0,9)
                  }else {
                    resultado = calculado
                  }

                    document.getElementById('display').innerHTML = resultado
                    a=document.getElementById('display').innerHTML
                    numeroAnterior=""

                }
                if(operando=="")
                {
                  document.getElementById('display').innerHTML = document.getElementById('display').innerHTML
                  a=""
                  numeroAnterior=""

                }
                contadorDig = document.getElementById('display').innerHTML.length
                //  operando=""
               }
               // document.getElementById(tecla).style.height = (document.getElementById(tecla).height+3)+"px";
               // document.getElementById(tecla).style.width = (document.getElementById(tecla).width+3)+"px";
        });
    }

function tomarNumero(numero){
  switch (numero) {
    case "0":
      return "n";
      break;
    case "1":
      return "n";
      break;
    case "2":
      return "n";
      break;
    case "3":
      return "n";
      break;
    case "4":
      return "n";
      break;
    case "5":
      return "n";
      break;
    case "6":
      return "n";
      break;
    case "7":
      return "n";
      break;
    case "8":
      return "n";
      break;
    case "9":
      return "n";
      break;
//------------Si es On/C
    case "on":
        return "on";
        break;
//-----------Si es Punto
    case "punto":
        return "punto";
        break;
//-----------Si es Punto
    case "sign":
        return "sign";
        break;
//-----------Si es Punto
    case "mas":
        return "mas";
        break;
//-----------Si es Punto
    case "menos":
        return "menos";
        break;
//-----------Si es Punto
    case "por":
        return "por";
        break;
//-----------Si es Punto
    case "dividido":
        return "dividido";
        break;
//-----------Si es Punto
case "igual":
      return "igual";
      break;
    default:
      return "";
  }
}
//-----------------Agregando efecto del Boton

 var boxProducto = document.getElementsByClassName("tecla");

//
     for(i=0;i<boxProducto.length;i++){
        var tecla =  boxProducto[i].id
        if (tecla!="mas")
        {
        document.getElementById([tecla]).onmousedown = function(){mouseDown(this.id)};
        document.getElementById([tecla]).onmouseup =  function(){mouseUp(this.id)};
        }
        //Document.querySelector

    function mouseDown(teclaa) {

        var alto  = document.getElementById(teclaa).height
        var ancho = document.getElementById(teclaa).width



        document.getElementById(teclaa).style.height = (alto-2)+"px";
        document.getElementById(teclaa).style.width = (ancho-2)+"px";
        alto = 0
        ancho = 0

    }
    //
    function mouseUp(teclaa) {
        var alto  = document.getElementById(teclaa).height
        var ancho = document.getElementById(teclaa).width

        document.getElementById(teclaa).style.height = (alto+2)+"px";
        document.getElementById(teclaa).style.width = (ancho+2)+"px";
        alto = 0
        ancho = 0
    }

   }
    // document.getElementById("mas").onmousedown = function() {mouseDownmas()};
    // document.getElementById("mas").onmouseup = function() {mouseUpmas()};
    // //
    // function mouseDownmas() {
    //     document.getElementById("mas").style.height = (document.getElementById("mas").height-2)+"px";
    //     document.getElementById("mas").style.width = (document.getElementById("mas").width-2)+"px";
    // }
    // //
    // function mouseUpmas() {
    //     document.getElementById("mas").style.height = (document.getElementById("mas").height+2)+"px";
    //     document.getElementById("mas").style.width = (document.getElementById("mas").width+2)+"px";
    // }


//------------------------------------------------------------------------------------------------------


let expresion = ''; // creamos variable con un sting vacio
let pantalla = $('#pantalla'); // creamos variable y le asignamos la obtencion del selector "pantalla".
let button = $('button'); //  creamos variable y le asignamos la obtención del selector "button".

$(document).ready(function(){ // iniciamos el metodo "ready" cuando el documento se cargue por completo.

    button.click(function(){ // llamamos a la variable button y le asociamos el evento click.
        let caracter = $(this).text(); // creamos variable y le asignamos el texto que se obtendra cuando el usuario haga click en un boton.
        expresion += caracter // al string vacio le sumamos el texto asignado por el usuario al hacer click en un boton.
            
        if (caracter === '=') { // condición que se ejecutara cuando el usuario haga click en el boton "=".
            expresion = eval(pantalla.text()); // reescribimos la variable y le asignamos el resultado de lo que haya en pantalla.
            pantalla.text(expresion); // agregamos a pantalla dicho resultado.
        } else if (caracter === 'C'){ // condición que se ejecutara cuando el usuario haga click el boton "C".
            expresion = '' // reescribimos la variable expresión en un string vacio.
            pantalla.text(expresion) // agregamos a pantalla ese string vacio.
        } else { // condición que se ejecutara en caso de que no se cumplan las condiciones anteriores.
            pantalla.text(expresion) // agregamos a pantalla el contenido del boton que el usuario hace click.
        }
    })

});

$(document).keypress(function(e) { // iniciamos el evento "keypress", este se refiere a que actuara cuando se utilice el teclado.
    let codigo = e.charCode; // Llama a la propiedad charCode, el cual es el codigo numerico de esa letra presionada. Por ej: "2" == 50
    let caracter = String.fromCharCode(codigo); // Convierte ese codigo numerico de charCOde en un string, el cual sería la tecla presionada!. Por ejmeplo: 50 == "2"
    let posibles_caracteres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","+","-","*","/",]; // Crea una variable del tipo array

    if (codigo == 13) { // Condición -> Sí el usuario apreta la tecla "ENTER" ingresa en las siguientes lineas.
        expresion = eval(pantalla.text()); // Evalua la operación que el usuario ingreso desde el teclado.
        pantalla.text(expresion); // agrega a la pantalla la evaluación echa 
    } else if (codigo == 99 || codigo == 67) { // Condición -> Sí el usuario presiona la tecla "C" o "c", ingresa en la siguiente linea.
        expresion = '' // Borra el contenido de la pantalla.
        pantalla.text(expresion); // agrega a la pantalla el string vacio.
    } else if (posibles_caracteres.includes(caracter)) { // Condición -> Sí el usuario presiona una tecla que este incorporada en el array de la variable "condicion", ingresa en las siguientes lineas.
        expresion += caracter // concatena la variable expresion  con la variable caracter
        pantalla.text(expresion); // Agrega a la pantalla esa concatenación.
    } else {
        alert('POR FAVOR PRESIONE LOS BOTONES DEL 0 AL 9 Y LOS SIGNOS +, -, *, / PARA REALIZAR UNA OPERACIÓN') // Se muestra alerta.
    }
})


/*

ESTE SI FUNCIONA
-----------------------------------
let expresion = '';

$(document).ready(function(){

    $('button').click(function(){
        let caracter = $(this).text();
        expresion += caracter
            
        if (caracter === '=') {
            expresion = eval($('#pantalla').text());
            $('#pantalla').text(expresion);
        } else if (caracter === 'C'){
            expresion = ''
            $('#pantalla').text(expresion)
        } else {
            $('#pantalla').text(expresion)
        }
    })

});

$(document).keypress(function(e) {
    let codigo = e.charCode;
    let caracter = String.fromCharCode(codigo);
    let posibles_caracteres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","+","-","*","/",];

    if (codigo == 13) {
        expresion = eval($('#pantalla').text());
        $('#pantalla').text(expresion);
    } else if (codigo == 99 || codigo == 67) {
        expresion = ''
        $('#pantalla').text(expresion)
    } else if (posibles_caracteres.includes(caracter)) {
        expresion += caracter
        $('#pantalla').text(expresion)
    } else {
        alert('POR FAVOR PRESIONE LOS BOTONES DEL 0 AL 9 Y LOS SIGNOS +, -, *, / PARA REALIZAR UNA OPERACIÓN') // Se muestra alerta.
    }
})
--------------------------------
*/



/* 

    keypress : function(e) {
        let codigo = e.charCode;
        let caracter = String.fromCharCode(codigo);
        let posibles_caracteres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","+","-","*","/",];

        if (codigo == 13) {
            expresion = eval($('#pantalla').text());
            $('#pantalla').text(expresion);
        } else if (codigo == 99 || codigo == 67) {
            expresion = ''
            $('#pantalla').text(expresion)
        } else if(posibles_caracteres.includes(caracter)) {
            $('#pantalla').text(expresion)
        } else { // -> Condición que se ejecutara en caso de no cumplirse las anteriores.
            alert('POR FAVOR PRESIONE LOS BOTONES DEL 0 AL 9 Y LOS SIGNOS +, -, *, / PARA REALIZAR UNA OPERACIÓN') // Se muestra alerta.
            //desdeTeclado() // Se llama la función a si misma en caso de que no haya seguido las instrucciones y vuelve a ejecutar el código.
        }
    }

    FUNCIONA LO DE ABAJO

    if (posibles_caracteres.includes(caracter)) {
        expresion += caracter
    }
    $('#pantalla').text(expresion)

*/

/*

$(document).ready(function(){
   
    $('button').click(function(){
        let caracter = $(this).text();
        console.log(caracter);
        expresion += caracter
        

        if (caracter === '=') {
            expresion = eval($('#pantalla').text());
            $('#pantalla').text(expresion);
        } else if (caracter === 'C'){
            expresion = ''
            $('#pantalla').text(expresion)
        } else {
            $('#pantalla').text(expresion)
        }

    })

*/


/*

$(document).ready(function(){
   
    $('button').click(function(){
        let caracter = $(this).text();
        console.log(caracter);
        expresion += caracter
        

        if (caracter === '=') {
            let resultado = eval($('#pantalla').text());
            $('#pantalla').text(resultado);
        } else if (caracter === 'C'){
            //$('#pantalla').text(' ')
            expresion = ''
            $('#pantalla').text(expresion)
        } else {
            $('#pantalla').text(expresion)
        }

    })

})

*/


/*

$.fn.inicio = function(){

    
    let button = $('button');
    let pantalla = $('#pantalla');

    button.click(function(){ 
    let caracter = $(this).text();
    expresion += caracter
    pantalla.text(expresion)


    })

   
}


*/
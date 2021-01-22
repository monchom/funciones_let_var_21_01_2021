
let dato = prompt("Incluya su nombre: ");

saludar(dato)
finalizar();
despedida(dato);


function finalizar(){

    alert("El programa de saludos a finalizado");
}

function saludar(p1){

   alert("Bienvenido usuario " + p1 + " usted a ingresado a la seccion de saludos");   
   

}

function despedida(p2){

    alert("Hasta pronto usuario "  + p2 + " Ojala vuelva pronto");
}

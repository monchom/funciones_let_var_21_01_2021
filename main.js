// console.log(saludar());

// function saludar(){

//    console.log("Hola a todos");
//    return "Hola Mundo como estas";
   
// }

informacion = "Adrian";
console.log(informacion);

function comparacion(){
   informacion = "Pedro";   
   console.log(informacion);

}

comparacion();

console.log(comparacion);


let informacion2 = "Adrian";
console.log(informacion2);

function comparacion2(){
   let informacion2 = "Pedro";   
   console.log(informacion2);

}

comparacion2();

console.log(comparacion2);


var informacion3 = "Adrian";
console.log(informacion3);

function comparacion3(){
   informacion3 = "Pedro";  
   var informacion3 = "Adrian"; 
   console.log(informacion3);

}

comparacion3();

console.log(comparacion3);

const informacion4 = "Adrian";
console.log(informacion4);
//informacion4 = "Pedro";
console.log(informacion4);

const informacion5 = {nombre: "Adrian",lista: ["Adrian","Pedro"]};
console.log(informacion5);

informacion5.nombre = "Pedro";

console.log(informacion5);

informacion5.id = 7;
console.log(informacion5);

console.log(informacion5.lista);
console.log(informacion5.lista[0]);
console.log(informacion5.lista[1]);


//Parametros
function saludar(datos){

    console.log(datos);

}

function despedir(){

   console.log("Adios Usuario");
}




saludar("Hola como estas :v :p");

let dato = prompt("Escriba su nombre");

saludar(dato);

despedir();

document.write("Seccion para saludar");
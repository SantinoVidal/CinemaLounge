//Proyecto de "Calculadora de promedio de notas" en JS

function calculoDelPromedio(notasIngresadas, cantidadNotas) {
     return notasIngresadas / cantidadNotas;
}

alert("Bienvenido a su calculadora de promedio de notas.")

let notasIngresadas = 0;

let cantidadNotas = parseInt(prompt("Por favor, indique la cantidad de notas que desea ingresar: "));

for (let i = 0; i < cantidadNotas; i++) {
     let nota = parseInt(prompt("Ingrese su nota:"));

     while (nota < 0 || nota > 10) {
          alert("La nota ingresada no es válida, por favor ingrese una nota válida.");
          nota = parseInt(prompt("Ingrese su nota:"));
     }

     notasIngresadas = notasIngresadas + nota;
}

let promedio = calculoDelPromedio(notasIngresadas, cantidadNotas);

console.log("Usted ha obtenido un promedio de notas de: " + promedio);

if (promedio >= 8) {
     alert("Felicitaciones, usted ha tenido un desempeño excelente!");
} else if (promedio >= 5) {
     alert("Usted ha tenido un desempeño aceptable.");
} else {
     alert("Usted ha tenido un mal desempeño, y deberá realizar nuevamente los exámenes.");
}

let promedioPlus = parseInt(prompt("Para obtener más información sobre su desempeño, por favor ingrese el resultado de su promedio:"));

switch (promedioPlus) {
     case 10:
          console.log("Usted ha tenido un desempeño excelente, ha completado todas las consignas y realizado un muy buen uso de la lógica para alcanzar los objetivos propuestos.");
          break;
     case 9:
          console.log("Usted ha tenido un desempeño excelente, ha completado todas las consignas y realizado un muy buen uso de la lógica para alcanzar los objetivos propuestos.");
          break;
     case 8:
          console.log("Usted ha tenido un desempeño excelente, ha completado todas las consignas y realizado un muy buen uso de la lógica para alcanzar los objetivos propuestos.");
          break;
     case 7:
          console.log("Usted ha tenido un desempeño aceptable, aún tiene aspectos a mejorar y deberá seguir esforzándose para obtener mejores resultados, pero aún así ha realizado un buen trabajo.");
          break;
     case 6:
          console.log("Usted ha tenido un desempeño aceptable, aún tiene aspectos a mejorar y deberá seguir esforzándose para obtener mejores resultados, pero aún así ha realizado un buen trabajo.");
          break;
     case 5:
          console.log("Usted ha tenido un mal desempeño, y deberá realizar nuevamente los exámenes. No ha cumplido con las consignas, ni ha alcanzado los objetivos propuestos.");
          break;
     case 4:
          console.log("Usted ha tenido un mal desempeño, y deberá realizar nuevamente los exámenes. No ha cumplido con las consignas, ni ha alcanzado los objetivos propuestos.");
          break;
     case 3:
          console.log("Usted ha tenido un mal desempeño, y deberá realizar nuevamente los exámenes. No ha cumplido con las consignas, ni ha alcanzado los objetivos propuestos.");
          break;
     default:
          console.log("Usted ha obtenido un promedio pésimo, debería replantearse la elección de la carrera.");
          break;
}

//Prueba objetos y clases JS.

class Comida {
     constructor(nombre, precio, marca) {
          this.nombre = nombre;
          this.precio = precio;
          this.marca = marca;
     }
     aumentoIva() {
          return this.precio * 1.21;
     }
}

const papasFritas = new Comida("Papas Fritas", 550, "McCay's");

console.log(papasFritas);
console.log(papasFritas.marca);
console.log(papasFritas.aumentoIva());

//Prueba funcion, y ver el resultado a través de una variable.

function sumaCaracteres(primerCaracter, segundoCaracter) {
     return primerCaracter + segundoCaracter;
}

let primerCaracter = parseInt(prompt("Ingresa numero:"));
let segundoCaracter = parseInt(prompt("Ingresa se numero:"));

let caracteres = sumaCaracteres(primerCaracter, segundoCaracter);

console.log(caracteres);

/** FUNCIONES DE ORDEN SUPERIOR  **/
//Una función de orden superior es una función que puede recibir por parámetro una función o retornar una función. 

//SINTAXIS: 

/*

function estoEsUnaFuncion(funcion()) {
    return funcion()
}

*/

//MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN:
//JS incluye de forma nativa varias funciones de orden superior. 
//Hay métodos de busqueda y transformación que nos permite operar sobre los arrays. 

//Productos de Almacén: 

class Producto {
     constructor(nombre, precio) {
          this.nombre = nombre;
          this.precio = precio;
     }
}

const fideos = new Producto("Fideos", 100);
const harina = new Producto("Harina", 250);
const gaseosa = new Producto("Coca Cola", 180);
const pan = new Producto("Pan", 120);

const arrayProductos = [fideos, harina, gaseosa, pan];

console.log("Productos en Stock: ");
console.log(arrayProductos);


//1) ForEach: recorre el array y ejecuta una función por cada elemento. 

console.log("ForEach:");

arrayProductos.forEach(pepito => {
     console.log(pepito);
})


arrayProductos.forEach(item => console.log(item.precio));


//Find: busca un elemento en el array y retorna el primero que cumpla con la condición. 

const buscado = arrayProductos.find(item => item.nombre === "Coca Cola");

console.log("Método Find: ");
console.log(buscado);

//El método find retorna el primer elemento que cumpla con la condición, si no lo encuentra retorna: undefined.

//3)Filter: recibe una función comparadora por parámetro y retorna un nuevo array con los elmentos que cumplan con la condición. 

const arrayProductosMenos200 = arrayProductos.filter(item => item.precio < 200);
console.log("Filter:");
console.log(arrayProductosMenos200);
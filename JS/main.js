//The Cinema Lounge

class Cliente {
     constructor(nombre, apellido, dni, membresía) {
          this.nombre = nombre;
          this.apellido = apellido;
          this.dni = dni;
          this.membresía = membresía;
     }
}

class Membresía {
     constructor(tipo, beneficio, costoMensual) {
          this.tipo = tipo;
          this.beneficio = beneficio;
          this.costoMensual = costoMensual;
     }
}

//La membresía "Platinum" 3 productos comestibles de regalo dentro del Cine + prioridad en la selección de asientos + descuento en el estacionamiento + compra de entradas anticipadas.
//La membresía "Gold" 1 producto comestible de regalo dentro del Cine + compra de entradas anticipadas.
//La membresía "Standard", no ofrece ningún beneficio.

class Pelicula {
     constructor(nombre, género, duración, director) {
          this.nombre = nombre;
          this.género = género;
          this.duración = duración;
          this.director = director;
     }
}

class Entrada {
     constructor(película, cliente, precio, fecha, código, tipoMembresía) {
          this.película = película;
          this.cliente = cliente;
          this.precio = precio;
          this.fechaDeCompra = fecha || new Date();
          this.códigoDeEntrada = código;
          this.membresía = tipoMembresía;
     }
}

//Función menú de opciones:

alert("¡Hola, bienvenido/a, gracias por visitar el sitio web de The Cinema Lounge!");

function menu() {
     let opcion = parseInt(prompt("Ingrese una opción, por favor: \n 1) Registrarse en The Cinema Lounge. \n 2) Baja de cuenta. \n 3) Revisa nuestras películas disponibles. \n 4) Beneficios de la membresía PLATINUM. \n 5) Beneficios de la membresía GOLD. \n 6) Revisar registro de entradas. \n 7) Salir."))
     return opcion;
}

function salir() {
     alert("Gracias por haber visitado nuestro sitio web, te esperamos pronto en las salas de The Cinema Lounge.");
}

//Membresías:

const platinum = new Membresía("Platinum", "3 productos comestibles de regalo dentro del Cine, prioridad en la selección de asientos, descuento en el estacionamiento, compra de entradas anticipadas (2 meses)", 700);
const gold = new Membresía("Gold", "1 producto comestible de regalo dentro del Cine, compra de entradas anticipadas (1 mes)", 400);
const standard = new Membresía();

const arrayMembresias = [];

arrayMembresias.push(platinum);
arrayMembresias.push(gold);
arrayMembresias.push(standard);

//Beneficios de membresías:

function beneficiosPlatinum() {
     alert("Beneficios de membresía PLATINUM: " + platinum.beneficio);
}

function beneficiosGold() {
     alert("Beneficios de membresías GOLD: " + gold.beneficio);
}

//Registro de clientes:

const clienteUno = new Cliente("Evelyn", "García", 12345678, platinum);
const clienteDos = new Cliente("Santino", "Vidal", 23456789, gold);

const clientesRegistro = [];

clientesRegistro.push(clienteUno);
clientesRegistro.push(clienteDos);

function registrarse() {
     let nombre = prompt("Ingrese su nombre:");
     let apellido = prompt("Ingrese su apellido:");
     let dni = parseInt(prompt("Ingrese su número de DNI"));
     let membresía = prompt("Ingrese su tipo de membresía (Standard, Gold, Platinum)");

     const clienteNuevo = new Cliente(nombre, apellido, dni, membresía);

     alert("¡Ud. se ha registrado correctamente! Disfrute de la experiencia Lounge");
     clientesRegistro.push(clienteNuevo);
}

console.log(clientesRegistro);

//Baja de cuenta:

function bajaDeCuenta() {
     let dni = prompt("Ingrese el DNI del cliente:");
     let cliente = clientesRegistro.find(cliente => cliente.dni === dni);
     let indice = clientesRegistro.indexOf(cliente);
     clientesRegistro.splice(indice, 1);
     console.log(clientesRegistro);
}

//Películas disponibles:

const peliculaUno = new Pelicula("Super Mario Bros La Película", "Animación", "93 Minutos", "Aaron Horvath, Michael Jelenic");
const peliculaDos = new Pelicula("Evil Dead El Despertar", "Terror", "97 Minutos", "Lee Cronin");
const peliculaTres = new Pelicula("Five Nights at Freddy's", "Terror/Suspenso", "124 Minutos", "Emma Tammi");
const peliculaCuatro = new Pelicula("Suzume", "Animación/Fantasía", "119 Minutos", "Makoto Shinkai");
const peliculaCinco = new Pelicula("Insidious: The Red Door", "Terror/Misterio", "103 Minutos", "Patrick Wilson");

const peliculasDisponibles = [peliculaUno.nombre, peliculaDos.nombre, peliculaTres.nombre, peliculaCuatro.nombre, peliculaCinco.nombre];

console.log("Peliculas:")
console.log(peliculaUno);
console.log(peliculaDos);
console.log(peliculaTres);
console.log(peliculaCuatro);
console.log(peliculaCinco);

//Cartelera:

function cartelera() {
     alert("Nuestras películas disponibles en éste momento son: " + peliculasDisponibles);
}

//Entradas:

const totalEntradas = [];

function entradas() {
     const entradaUno = new Entrada(peliculaCinco, clienteUno, 850, Date(), Math.round(Math.random() * 300000000 + 100000000), platinum);
     const entradaDos = new Entrada(peliculaTres, clienteDos, 850, Date(), Math.round(Math.random() * 300000000 + 100000000), gold);
     const entradaNueva = new Entrada(prompt("Ingresa la película que deseas ver:"), parseInt(prompt("Ingrese su número de DNI:")), 850, Date(), Math.round(Math.random() * 300000000 + 100000000), prompt("Ingrese su tipo de membresía:"));

     console.log("Este es el registro de entradas compradas el día de hoy:");
     console.log(entradaUno, entradaDos, entradaNueva);

     alert("Cuando asistas a nuestras salas, presenta en boletería el siguiente código de entrada: " + entradaNueva.códigoDeEntrada);
     totalEntradas.push(entradaUno);
     totalEntradas.push(entradaDos);
     totalEntradas.push(entradaNueva);

     const totalEntradasDiarias = totalEntradas.reduce((acumulador, entrada) => acumulador + entrada.precio, 0);
     console.log("El total de dinero acumulado de las entradas diarias es: " + totalEntradasDiarias);
}

//Ejecutar menú:

let opcion = menu();
switch (opcion) {
     case 1:
          registrarse();
          break;
     case 2:
          bajaDeCuenta();
          break;
     case 3:
          cartelera();
          break;
     case 4:
          beneficiosPlatinum();
          break;
     case 5:
          beneficiosGold();
          break;
     case 6:
          entradas();
          break;
     case 7:
          salir();
          break;
     default:
          alert("Selección incorrecta, intentalo nuevamente.");
          break;
}
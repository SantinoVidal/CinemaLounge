//The Cinema Lounge

/*class Cliente {
     constructor(nombre, apellido, dni, membresía) {
          this.nombre = nombre;
          this.apellido = apellido;
          this.dni = dni;
          this.membresía = membresía;
     }
}*/

class Membresía {
     constructor(tipo, costoMensual) {
          this.tipo = tipo;
          this.costoMensual = costoMensual;
     }
}

class Pelicula {
     constructor(nombre, género, duración, director, portada, id) {
          this.nombre = nombre;
          this.género = género;
          this.duración = duración;
          this.director = director;
          this.portada = portada;
          this.id = id;
          this.cantidad = 1;
          this.precio = 1200;
     }
}

//Carrito:

let carrito = [];

//Películas disponibles:

const peliculaUno = new Pelicula("Super Mario Bros La Película", "Animación", "93 Minutos", "Aaron Horvath", "./img/mariobros.jpg", 1);
const peliculaDos = new Pelicula("Evil Dead El Despertar", "Terror", "97 Minutos", "Lee Cronin", "./img/evildead.jpg", 2);
const peliculaTres = new Pelicula("Five Nights at Freddy's", "Terror/Suspenso", "124 Minutos", "Emma Tammi", "./img/fnaf.jpg", 3);
const peliculaCuatro = new Pelicula("Suzume", "Animación/Fantasía", "119 Minutos", "Makoto Shinkai", "./img/suzume.jpg", 4);
const peliculaCinco = new Pelicula("Insidious: The Red Door", "Terror/Misterio", "103 Minutos", "Patrick Wilson", "./img/insidious.jpg", 5);
const peliculaSeis = new Pelicula("No Respires", "Terror/Suspenso", "88 Minutos", "Federico Álvarez", "./img/norespires.jpg", 6);
const peliculaSiete = new Pelicula("Estación Zombie", "Terror/Acción", "118 Minutos", "Yeon Sang-ho", "./img/zombie.jpg", 7);
const peliculaOcho = new Pelicula("Avatar: El Camino del Agua", "Ciencia ficción/Acción", "192 Minutos", "James Cameron", "./img/avatar.jpg", 8);
const peliculaNueve = new Pelicula("El Exorcista del Papa", "Terror", "103 Minutos", "Julius Avery", "./img/exor.jpg", 9);
const peliculaDiez = new Pelicula("John Wick 4", "Acción/Neo-noir", "169 Minutos", "Chad Stahelski", "./img/johnwick.jpg", 10);
const peliculaOnce = new Pelicula("Rápidos y furiosos 10", "Acción/Aventura", "130 Minutos", "Louis Leterrier", "./img/rapidos.jpg", 11);
const peliculaDoce = new Pelicula("Scream 6", "Terror/Misterio", "122 Minutos", "Tyler Gillett", "./img/scream.jpg", 12);

const peliculasEstreno = [peliculaTres, peliculaCinco, peliculaNueve, peliculaOnce];

const peliculasDisponibles = [peliculaUno, peliculaDos, peliculaTres, peliculaCuatro, peliculaCinco, peliculaSeis, peliculaSiete, peliculaOcho, peliculaNueve, peliculaDiez, peliculaOnce, peliculaDoce];

const peliculasCuatroD = [peliculaUno, peliculaDos, peliculaOcho];

//Creo los div para las películas:

const estrenos = document.getElementById("estrenos");

peliculasEstreno.forEach(pelicula => {
     const div = document.createElement("div");
     div.classList.add("col-xl-3", "col-md-6", "col-xs-12");
     div.innerHTML = `<div class="estren">
                         <div class="card-body">
                              <img class="portada" src="${pelicula.portada}" alt="${pelicula.nombre}">
                              <h3> ${pelicula.nombre} </h3>
                              <h4> Género: ${pelicula.género} </h4>
                              <h4> Duración: ${pelicula.duración} </h4>
                              <h4> Director/es: ${pelicula.director} </h4>
                              <button class="btn colorBoton" id="boton ${pelicula.id}"> Comprar entrada </button>
                         </div>
                    </div>`;
     estrenos.appendChild(div);
});

const peliculasDis = document.getElementById("peliculasDis");

peliculasDisponibles.forEach(pelicula => {
     const div = document.createElement("div");
     div.classList.add("col-xl-3", "col-md-6", "col-xs-12");
     div.innerHTML = `<div class="estren">
                         <div class="card-body">
                              <img class="portada" src="${pelicula.portada}" alt="${pelicula.nombre}">
                              <h3> ${pelicula.nombre} </h3>
                              <h4> Género: ${pelicula.género} </h4>
                              <h4> Duración: ${pelicula.duración} </h4>
                              <h4> Director/es: ${pelicula.director} </h4>
                              <button class="btn colorBoton"> Comprar entrada </button>
                         </div>
                    </div>`;
     peliculasDis.appendChild(div);
});

const pelisCuatroD = document.getElementById("peliculasCuatroD");

peliculasCuatroD.forEach(pelicula => {
     const div = document.createElement("div");
     div.classList.add("col-xl-3", "col-md-6", "col-xs-12");
     div.innerHTML = `<div class="estren">
                         <div class="card-body">
                              <img class="portada" src="${pelicula.portada}" alt="${pelicula.nombre}">
                              <h3> ${pelicula.nombre} </h3>
                              <h4> Género: ${pelicula.género} </h4>
                              <h4> Duración: ${pelicula.duración} </h4>
                              <h4> Director/es: ${pelicula.director} </h4>
                              <button class="btn colorBoton"> Comprar entrada </button>
                         </div>
                    </div>`;
     pelisCuatroD.appendChild(div);
});

//Membresías:

const platinum = new Membresía("Platinum", 2599);
const gold = new Membresía("Gold", 2099);
const standard = new Membresía("Standard", 699);

const arrayMembresias = [];

arrayMembresias.push(platinum);
arrayMembresias.push(gold);
arrayMembresias.push(standard);

//Registro de clientes:

/*const clienteUno = new Cliente("Evelyn", "García", 12345678, platinum);
const clienteDos = new Cliente("Santino", "Vidal", 23456789, gold);

const clientesRegistro = [];

clientesRegistro.push(clienteUno);
clientesRegistro.push(clienteDos);*/
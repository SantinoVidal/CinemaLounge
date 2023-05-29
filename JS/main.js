// The Cinema Lounge:

class Cliente {
     constructor(nombre, apellido, dni, membresía) {
          this.nombre = nombre;
          this.apellido = apellido;
          this.dni = dni;
          this.membresía = membresía;
     }
}

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

// Películas disponibles:

const peliculaUno = new Pelicula("Super Mario Bros", "Animación", "93 Minutos", "Aaron Horvath", "./img/mariobros.jpg", 1);
const peliculaDos = new Pelicula("Evil Dead El Despertar", "Terror", "97 Minutos", "Lee Cronin", "./img/evildead.jpg", 2);
const peliculaTres = new Pelicula("Five Nights at Freddy's", "Terror/Suspenso", "124 Minutos", "Emma Tammi", "./img/fnaf.jpg", 3);
const peliculaCuatro = new Pelicula("Suzume", "Animación/Fantasía", "119 Minutos", "Makoto Shinkai", "./img/suzume.jpg", 4);
const peliculaCinco = new Pelicula("Insidious: The Red Door", "Terror/Misterio", "103 Minutos", "Patrick Wilson", "./img/insidious.jpg", 5);
const peliculaSeis = new Pelicula("No Respires", "Terror/Suspenso", "88 Minutos", "Federico Álvarez", "./img/norespires.jpg", 6);
const peliculaSiete = new Pelicula("Estación Zombie", "Terror/Acción", "118 Minutos", "Yeon Sang-ho", "./img/zombie.jpg", 7);
const peliculaOcho = new Pelicula("Avatar 2", "Ciencia ficción/Acción", "192 Minutos", "James Cameron", "./img/avatar.jpg", 8);
const peliculaNueve = new Pelicula("El Exorcista del Papa", "Terror", "103 Minutos", "Julius Avery", "./img/exor.jpg", 9);
const peliculaDiez = new Pelicula("John Wick 4", "Acción/Neo-noir", "169 Minutos", "Chad Stahelski", "./img/johnwick.jpg", 10);
const peliculaOnce = new Pelicula("Rápidos y furiosos 10", "Acción/Aventura", "130 Minutos", "Louis Leterrier", "./img/rapidos.jpg", 11);
const peliculaDoce = new Pelicula("Scream 6", "Terror/Misterio", "122 Minutos", "Tyler Gillett", "./img/scream.jpg", 12);

const peliculasEstreno = [peliculaTres, peliculaCinco, peliculaNueve, peliculaOnce];

const peliculasDisponibles = [peliculaUno, peliculaDos, peliculaTres, peliculaCuatro, peliculaCinco, peliculaSeis, peliculaSiete, peliculaOcho, peliculaNueve, peliculaDiez, peliculaOnce, peliculaDoce];

const peliculasCuatroD = [peliculaUno, peliculaDos, peliculaOcho, peliculaOnce];

// Carrito:

let carrito = [];
let totalPrecio = 0;

// Creo los div para las películas:

const estrenos = document.getElementById("estrenos");

peliculasEstreno.forEach(pelicula => {
     const div = document.createElement("div");
     div.classList.add("col-xl-3", "col-md-6", "col-xs-12");
     div.innerHTML = `<div class="estren">
     <div class="card-body">
          <img class="portada" src="${pelicula.portada}" alt="${pelicula.nombre}">
          <h3>${pelicula.nombre}</h3>
          <h4>Género: ${pelicula.género}</h4>
          <h4>Duración: ${pelicula.duración}</h4>
          <h4>Director/es: ${pelicula.director}</h4>
          <button class="btn colorBoton" id="boton ${pelicula.id}">Agregar al carrito</button>
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
          <h3>${pelicula.nombre}</h3>
          <h4>Género: ${pelicula.género}</h4>
          <h4>Duración: ${pelicula.duración}</h4>
          <h4>Director/es: ${pelicula.director}</h4>
          <button class="btn colorBoton" id="boton ${pelicula.id}">Agregar al carrito</button>
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
          <h3>${pelicula.nombre}</h3>
          <h4>Género: ${pelicula.género}</h4>
          <h4>Duración: ${pelicula.duración}</h4>
          <h4>Director/es: ${pelicula.director}</h4>
          <button class="btn colorBoton" id="boton ${pelicula.id}">Agregar al carrito</button>
     </div>
</div>`;

     pelisCuatroD.appendChild(div);
});

// Función botones comprar ticket:
const botonesComprar = document.querySelectorAll('.colorBoton');
botonesComprar.forEach((boton) => {
     boton.addEventListener('click', comprarEntrada);
});

function comprarEntrada(event) {
     const botonId = event.currentTarget.id;
     const peliculaId = parseInt(botonId.split(' ')[1]);
     const peliculaSeleccionada = peliculasDisponibles.find(
          (pelicula) => pelicula.id === peliculaId
     );

     if (peliculaSeleccionada) {
          const peliculaEnCarrito = carrito.find(
               (pelicula) => pelicula.id === peliculaId
          );

          if (peliculaEnCarrito) {
               // La película ya está en el carrito, aumenta la cantidad
               peliculaEnCarrito.cantidad++;
               totalPrecio += peliculaSeleccionada.precio;
          } else {
               // Agrego la película al carrito
               carrito.push(peliculaSeleccionada);
          }

          Toastify({
               text: `Agregado al carrito: ${peliculaSeleccionada.nombre} | Cantidad: ${peliculaSeleccionada.cantidad}`,
               duration: 1500,
               gravity: 'top',
               position: 'right',
               backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
               stopOnFocus: true,
          }).showToast();

          // Actualizo el carrito visualmente
          actualizarCarrito();
     } else {
          Toastify({
               text: `No se encontró la película con el ID: ${peliculaId}`,
               duration: 1500,
               gravity: 'top',
               position: 'right',
               backgroundColor: 'linear-gradient(to right, #e91e63, #ff5c8d)',
               stopOnFocus: true,
          }).showToast();
     }
}

// Agregar al carrito:
function actualizarCarrito() {
     const itemsCarrito = document.getElementById('items-carrito');

     // Limpio el contenido anterior del carrito
     itemsCarrito.innerHTML = '';

     // Agrego cada elemento del carrito al HTML
     carrito.forEach((pelicula) => {
          const itemCarrito = document.createElement('div');
          itemCarrito.className = 'carrito-item';
          itemCarrito.innerHTML = `
          <div class="card-body carritoDiv">
          <img class="portada" src="${pelicula.portada}" alt="${pelicula.nombre}">
               <h3>${pelicula.nombre}</h3>
               <h4>Género: ${pelicula.género}</h4>
               <h4>Duración: ${pelicula.duración}</h4>
               <h4>Director/es: ${pelicula.director}</h4>
               <h4>Precio unitario: $${pelicula.precio}</h4>
               <h4>Cantidad: ${pelicula.cantidad}</h4>
               <button class="btn colorBoton2" id="boton ${pelicula.id}">
                    <img class="imgEliminar" src="./img/basura.png" alt="Eliminar del carrito">
               </button>
          </div>
          `;

          const cantidadCarrito = document.getElementById("cantidadCarrito");
          cantidadCarrito.innerHTML = carrito.length;

          // Agrego el elemento al carrito
          itemsCarrito.appendChild(itemCarrito);
     });

     const carritoVacio = document.getElementById('carritoVacio');
     if (carrito.length > 0) {
          carritoVacio.style.display = 'none'; // Ocultar el texto de carrito vacío
     } else {
          carritoVacio.style.display = 'block'; // Mostrar el texto de carrito vacío
     }

     // Función para eliminar una película del carrito
     function eliminarDelCarrito(event) {
          const botonId = event.currentTarget.id;
          const peliculaId = parseInt(botonId.split(' ')[1]);

          const index = carrito.findIndex((pelicula) => pelicula.id === peliculaId);

          if (index !== -1) {
               const peliculaEliminada = carrito[index];
               totalPrecio -= peliculaEliminada.precio * peliculaEliminada.cantidad;

               // Restaurar la cantidad a 1
               peliculaEliminada.cantidad = 1;

               carrito.splice(index, 1); // Elimina la película del carrito

               Toastify({
                    text: `Eliminado del carrito: ${peliculaEliminada.nombre}`,
                    duration: 1500,
                    gravity: 'top',
                    position: 'right',
                    backgroundColor: 'linear-gradient(to right, #e91e63, #ff5c8d)',
                    stopOnFocus: true,
               }).showToast();

               // Actualizo el carrito visualmente
               actualizarCarrito();
          } else {
               Toastify({
                    text: `No se encontró la película con el ID: ${peliculaId}`,
                    duration: 1500,
                    gravity: 'top',
                    position: 'right',
                    backgroundColor: 'linear-gradient(to right, #e91e63, #ff5c8d)',
                    stopOnFocus: true,
               }).showToast();
          }
          const cantidadCarrito = document.getElementById("cantidadCarrito");
          cantidadCarrito.innerHTML = carrito.length;
     }

     // Agrego evento a los botones de eliminar del carrito
     const botonesEliminar = document.querySelectorAll('.colorBoton2');
     botonesEliminar.forEach((boton) => {
          boton.addEventListener('click', eliminarDelCarrito);
     });

     const botonVaciarCarrito = document.getElementById('vaciarCarrito');
     botonVaciarCarrito.addEventListener('click', vaciarCarrito);

     function vaciarCarrito() {
          carrito.forEach((pelicula) => {
               // Restaurar la cantidad a 1
               pelicula.cantidad = 1;
          });

          carrito = [];
          totalPrecio = 0;

          const cantidadCarrito = document.getElementById("cantidadCarrito");
          cantidadCarrito.innerHTML = carrito.length;

          // Actualizo el carrito visualmente
          actualizarCarrito();
     }

     // Guardo el carrito en el localStorage
     let carritoJSON = JSON.stringify(carrito);
     localStorage.setItem("carritoPeliculas", carritoJSON);
}

// Verifico si hay un carrito almacenado en el localStorage
const carritoGuardado = localStorage.getItem("carritoPeliculas");
if (carritoGuardado) {
     carrito = JSON.parse(carritoGuardado);
     actualizarCarrito();
}

// Finalizar compra:
const botonFinalizarCompra = document.getElementById('finalizarCompra');
botonFinalizarCompra.addEventListener('click', mostrarAlerta);

function mostrarAlerta() {
     if (carrito.length === 0) {
          Toastify({
               text: 'El carrito está vacío',
               duration: 1500,
               gravity: 'top',
               position: 'right',
               backgroundColor: 'linear-gradient(to right, #e91e63, #ff5c8d)',
               stopOnFocus: true,
          }).showToast();
     } else {
          let nombresPeliculas = '';
          let sumaPrecios = 0;

          carrito.forEach((pelicula) => {
               nombresPeliculas += `"${pelicula.nombre}"\n`;
               sumaPrecios += pelicula.precio * pelicula.cantidad;
          });

          Swal.fire({
               title: '¡Compra realizada!',
               html: ` Películas en el carrito: <br><b>${nombresPeliculas}</b> <br><br> Precio total de su compra: <b>$${sumaPrecios}</b> <hr> Número de compra: <b>${Math.round(Math.random() * 2000000000000000 + 1000000000000000)}</b> <hr> Presente su <b>número de compra</b> en nuestras boleterías antes de acceder a las salas. <br><br>  ¡Gracias por su compra! <br> <b style="color:#7b0bd7">The Cinema Lounge.</b> `,
               icon: 'success',
               confirmButtonText: 'Aceptar',
          });

          // Restaurar la cantidad a 1
          carrito.forEach((pelicula) => {
               pelicula.cantidad = 1;
          });

          // Vaciar el carrito y actualizar visualmente
          carrito = [];
          totalPrecio = 0;
          actualizarCarrito();
     }
}

// Registro de clientes:

/*const clienteUno = new Cliente("Evelyn", "García", 12345678, platinum);
const clienteDos = new Cliente("Santino", "Vidal", 23456789, gold);

const clientesRegistro = [];

clientesRegistro.push(clienteUno);
clientesRegistro.push(clienteDos);*/
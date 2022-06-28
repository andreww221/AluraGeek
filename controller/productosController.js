import modelProductos from "../model/modelProductos.js";

import {
  crearElementosPorSeccion,
  crearTodosLosElementosJuntos,
  crearElementosAdmin,
} from "../js/dibujarElementos.js";

//CREAMOS INSTANCIA DEL MODELO PARA UTILIZAR SUS METODOS

let modeloProductos = new modelProductos();

//EJECUTAMOS 3 FUNCIONES PARA PINTAR LOS PRODUCTOS EN LAS DIFERENTES PAGINAS , LOS CUALES ESTAN ALOJADOS EN DIBUJARELEMENTOS.JS

//productos que ve un adminstrador
crearElementosAdmin(modeloProductos);

//productos principales divividos por seccion
crearElementosPorSeccion(modeloProductos);

//productos de la pagina ver todos los productos
crearTodosLosElementosJuntos(modeloProductos);

/*

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

//AL PRESIONAR EL BOTON REGISTRAR DE LA PAGINA REGISTRAR PRODUCTO EJECUTA EL METODO CREAR ELEMENTO DEL MODELO DE PRODUCTOS

let formularioRegistrar = document.querySelector(
  ".formularioRegistrarProducto"
);

if (formularioRegistrar != null) {
  formularioRegistrar.addEventListener("submit", (e) => {
    e.preventDefault();
    modeloProductos.crearProducto(
      document.querySelector("[data-inputUrl]").value,
      document.querySelector("[data-inputNombre]").value,
      document.querySelector("[data-inputPrecio]").value,
      document.querySelector("[data-Descripcion]").value,
      document.querySelector("[data-inputCategoria]").value
    );
  });
}

/*

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*/

//AL PRESIONAR EL BOTON ELIMINAR DE LA PAGINA DE VER PRODUCTOS ADMIN EJECUTA EL METODO ELIMINAR DEL MODEL

let botonEliminar = document.querySelector(".botonSi");

if (botonEliminar != null) {
  botonEliminar.addEventListener("click", () => {
    modeloProductos.eliminarProducto(botonEliminar.id);
  });
}

/*

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

*/

//AL PRESIONAR EL BOTON ACTUALIZAR DE LA PAGINA DE VER PRODUCTOS ADMIN EJECUTA EL METODO ACTUALIZAR DEL MODELO

let botonActualizar = document.querySelector(".botonActualizar");

let formularioActualizar = document.querySelector(
  ".formularioActualizarProducto"
);

let datos;

if (botonActualizar != null) {
  datos = modeloProductos.buscarUnProducto(botonActualizar.id);
}

if (datos != undefined) {
  datos
    .then((r) => {
      console.log(r);

      document.querySelector("[data-inputUrl]").value = r.imagen;
      document.querySelector("[data-inputCategoria]").value = r.categoria;
      document.querySelector("[data-inputNombre]").value = r.nombre;
      document.querySelector("[data-inputPrecio]").value = r.precio;
      document.querySelector("[data-Descripcion]").value = r.descripcion;
    })
    .then(() => {
      formularioActualizar.addEventListener("submit", (e) => {
        e.preventDefault();
        modeloProductos.actualizarProducto(
          botonActualizar.id,
          document.querySelector("[data-inputUrl]").value,
          document.querySelector("[data-inputNombre]").value,
          document.querySelector("[data-inputPrecio]").value,
          document.querySelector("[data-Descripcion]").value,
          document.querySelector("[data-inputCategoria]").value
       


        );
      });
    });
}

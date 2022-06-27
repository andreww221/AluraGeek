import crearProductoHTML from "../js/crearProductoHTML.js";
import modelProductos from "../model/modelProductos.js";
import crearProductosHTMLADMIN2 from "../js/crearProductosADMIN.js";

function crearElementosPorSeccion() {
  const contenedorStartWars = document.querySelector(".startWars");
  const contenedorConsolas = document.querySelector(".consolas");
  const contenedorDiversos = document.querySelector(".diversos");

  const modelo = new modelProductos();

  modelo
    .listaProductos()

    .then((datos) => {
      for (let i = 0; i < datos.length; i++) {
        if (datos[i].categoria == "startWars") {
          crearProductoHTML(
            datos[i].imagen,
            datos[i].nombre,
            datos[i].precio,
            contenedorStartWars
          );
        } else if (datos[i].categoria == "consolas") {
          crearProductoHTML(
            datos[i].imagen,
            datos[i].nombre,
            datos[i].precio,
            contenedorConsolas
          );
        } else if (datos[i].categoria == "diversos") {
          crearProductoHTML(
            datos[i].imagen,
            datos[i].nombre,
            datos[i].precio,
            contenedorDiversos
          );
        }
      }
    });
}

function crearTodosLosElementosJuntos() {
  const contenedor = document.querySelector(".todosproductos");

  const modelo = new modelProductos();

  modelo
    .listaProductos()

    .then((datos) => {
      for (let i = 0; i < datos.length; i++) {
        if (datos[i].categoria == "startWars") {
          crearProductoHTML(
            datos[i].imagen,
            datos[i].nombre,
            datos[i].precio,
            contenedor
          );
        } else if (datos[i].categoria == "consolas") {
          crearProductoHTML(
            datos[i].imagen,
            datos[i].nombre,
            datos[i].precio,
            contenedor
          );
        } else if (datos[i].categoria == "diversos") {
          crearProductoHTML(
            datos[i].imagen,
            datos[i].nombre,
            datos[i].precio,
            contenedor
          );
        }
      }
    });
}

function crearElementosAdmin() {
  const contenedor = document.querySelector(".productosAdmin");

  const modelo = new modelProductos();

  modelo
    .listaProductos()

    .then((datos) => {
      for (let i = 0; i < datos.length; i++) {
        crearProductosHTMLADMIN2(
            datos[i].imagen,
            datos[i].nombre,
            datos[i].precio,
            contenedor
          );
    
      }
    });
}


crearElementosAdmin();
crearElementosPorSeccion();
crearTodosLosElementosJuntos();




let boton = document.querySelector(".formularioLogin");

boton.addEventListener("submit",(e)=>{

  console.log(document.querySelector("[data-inputCategoria]").value);

e.preventDefault();

    fetch("https://62b7d76df4cb8d63df55a1cc.mockapi.io/geek/Productos", {
        method: "POST",
    
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imagen: document.querySelector("[data-inputUrl]").value,
          nombre: document.querySelector("[data-inputNombre]").value,
          precio: document.querySelector("[data-inputPrecio]").value,
          descripcion: document.querySelector("[data-Descripcion]").value,
          categoria: document.querySelector("[data-inputCategoria]").value,
        }),
      })
    
})




















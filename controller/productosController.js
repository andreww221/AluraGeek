import modelProductos from "../model/modelProductos.js";

import {
  crearElementosPorSeccion,
  crearTodosLosElementosJuntos,
  crearElementosAdmin,
} from "../js/dibujarElementos.js";

let mp = new modelProductos();


crearElementosAdmin(mp);
crearElementosPorSeccion(mp);
crearTodosLosElementosJuntos(mp);



let formulario = document.querySelector(".formularioLogin") ;

if (formulario != null) {
  formulario.addEventListener("submit", (e) => {
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
    }).then(()=>{
      window.location.href="todosProductosAdmin.html";
      
    })
  
    
  });


}











let botonEliminar = document.querySelector(".botonSi");

botonEliminar.addEventListener("click",()=>{
  mp.eliminarProducto(botonEliminar.id);
  console.log("e")
 

})
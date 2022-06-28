//CLASE LA CUAL REPRESENTA LA ENTIDAD DE PRODUCTO

class modelProductos {
  //METODO PARA CREAR UN PRODUCTO

  crearProducto(imagen,nombre,precio,descripcion,categoria) {

    fetch("https://62b7d76df4cb8d63df55a1cc.mockapi.io/geek/Productos", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imagen: imagen,
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        categoria: categoria,
      }),
    }).then(() => {
      window.location.href = "todosProductosAdmin.html";
    });
  }

  //METODO PARA LISTAR TODOS LOS PRODUCTOS

  listaProductos() {
    return fetch(
      "https://62b7d76df4cb8d63df55a1cc.mockapi.io/geek/Productos"
    ).then((Response) => Response.json());
  }

  //METODO PARA ELIMINAR UN PRODUCTOS
  eliminarProducto(id) {
    fetch("https://62b7d76df4cb8d63df55a1cc.mockapi.io/geek/Productos/" + id, {
      method: "DELETE",
    }).then(() => {
      window.location.href = "todosProductosAdmin.html";
    });
  }

  //METODO PARA BUSCAR UN PRODUCTO POR ID

  buscarUnProducto(id) {
    return fetch(
      "https://62b7d76df4cb8d63df55a1cc.mockapi.io/geek/Productos/" + id
    ).then((r) => r.json());
  }

  //METODO PARA ACTUALIZAR UN PRODUCTO Y PIDE EL ID

  actualizarProducto(id,imagen,nombre,precio,descripcion,categoria) {

    fetch("https://62b7d76df4cb8d63df55a1cc.mockapi.io/geek/Productos/" + id,{
      method:"PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imagen: imagen,
        nombre: nombre,
        precio: precio,
        descripcion: descripcion,
        categoria: categoria
      })
 
    }).then(()=>{
      window.location.href = "todosProductosAdmin.html";
    })
      
    





    
  }
}

export default modelProductos;

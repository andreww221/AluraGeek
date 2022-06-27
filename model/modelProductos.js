class modelProductos {
  listaProductos() {
    return fetch(
      "https://62b7d76df4cb8d63df55a1cc.mockapi.io/geek/Productos"
    ).then((Response) => Response.json());
  }

  crearProducto(imagen, nombre, precio, descripcion, categoria) {
    fetch("https://62b7d76df4cb8d63df55a1cc.mockapi.io/geek/Productos", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imagen: "imagenedge",
        nombre: "nombreedgeee",
      }),
    });
  }
}

export default modelProductos;
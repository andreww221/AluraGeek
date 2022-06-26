class modelProductos {

    listaProductos() {
  
      return fetch("https://62b7d76df4cb8d63df55a1cc.mockapi.io/geek/Productos")
        .then((Response) => Response.json())
    
    }





    
  }
  




  export default modelProductos
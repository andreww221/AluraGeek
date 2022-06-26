
import crearProductoHTML from "../js/crearProductoHTML.js";
import modelProductos from "../model/modelProductos.js";



function CrearElementosStartWars(){

const contenedorStartWars = document.querySelector(".startWars");
const contenedorConsolas = document.querySelector(".consolas");
const contenedorDiversos = document.querySelector(".diversos");

const modelo = new modelProductos();

modelo.listaProductos()

.then((datos)=>{
    for (let i = 0; i < datos.length; i++) {
        
       if(datos[i].category=="startWars"){
        crearProductoHTML(datos[i].image,datos[i].title,datos[i].price,contenedorStartWars);
       }else if(datos[i].category=="consolas"){
        crearProductoHTML(datos[i].image,datos[i].title,datos[i].price,contenedorConsolas);
       }else if(datos[i].category=="divsersos"){
        crearProductoHTML(datos[i].image,datos[i].title,datos[i].price,contenedorDiversos);
       }


    }
});


}


CrearElementosStartWars();

 


    

    
    
    









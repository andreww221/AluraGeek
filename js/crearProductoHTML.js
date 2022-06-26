


function crearProductosHTML(imagen,titulo,precio,contenedor){




let elemento = `
<div>
<img src="${imagen}" alt="">
<p class="producto__titulo">${titulo}</p>
<p class="producto__precio">${precio}</p>
<p class="producto__ver">Ver producto</p>
</div>
`;    

contenedor.innerHTML+=elemento;


}

export default crearProductosHTML






let nombre = document.querySelector(".inputNombreNosotros");

let mensaje = document.querySelector(".inputMensajeNosotros");

let formulario = document.querySelector(".formularioMensaje");





formulario.addEventListener("submit",(e)=>{

    e.preventDefault();
    console.log(mensaje.value);
    console.log(nombre.value)


    fetch("https://62b7d76df4cb8d63df55a1cc.mockapi.io/geek/Mensaje",{

    method:"POST",
    headers:{

        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        nombre:nombre.value,
        mensaje:mensaje.value
    })

    }).then(()=>{
        let timerInterval
Swal.fire({
  title: 'Enviando mensaje',
  html: 'Se terminara el envio en : <b></b> .',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
    })



})
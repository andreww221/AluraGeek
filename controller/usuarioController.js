


let usuario = "admin";
let password = "123";


let inputUsuario = document.querySelector("[data-inputUsuario]");

let inputPassword = document.querySelector("[data-inputPassword]");



let formularioLogin = document.querySelector(".formularioLogin");




formularioLogin.addEventListener("submit",(e)=>{

e.preventDefault();

if(inputUsuario.value==usuario && inputPassword.value==password){

    window.location.href= "../../view/productos/todosProductosAdmin.html";

}else{

    window.location.href= "login.html";
}


})












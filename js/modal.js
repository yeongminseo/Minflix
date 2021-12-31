const btnSignIn = document.querySelector(".signin button")
const modal = document.querySelector("#modal-login");
const btnClose = document.querySelector("#modal-login .btn_close")
const body = document.querySelector("body")

console.log(modal,btnSignIn,btnClose);
function modalHandlerOpen(){
    modal.classList.add("active");
    body.style.overflow="hidden"
};
function modalHandlerClose(){
    modal.classList.remove("active");
    body.style.overflow="initial"
};
btnSignIn.addEventListener("click",modalHandlerOpen)
btnClose.addEventListener("click",modalHandlerClose)


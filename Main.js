// Restaurant La Cacerola
/*
En la entrega anterior diseñe una app para encontrar un restaurante que se adapte a los parametros de busqueda del usuario.
 En esta oportunidad esta app simulara la experiencia una vez encontrado este restaurante para hacer una reservacion o pedir delivery
*/

//ESTA APP ESTA PENSADA PARA SER USADA EN MODO CELULAR

function metodoPago(metodo){

    const pago = document.querySelector("#dropdownMenuButton1");
    pago.textContent = metodo;

    localStorage.setItem("metodo", metodo);
}

function Cobrar (){

    const metodo = localStorage.getItem("metodo");
    const total = localStorage.getItem("Total");
    const nombre = localStorage.getItem("nombre");
    const direccion = localStorage.getItem("direccion");

    alert("Nombre: " + nombre +
    "\nDireccion: "+ direccion +
    "\nMétodo de pago: "+ metodo +
    "\nTotal: $" + total);

    localStorage.clear();

}

const totalPedido = localStorage.getItem("Total");

let newSection = document.createElement("section");

newSection.classList.add("row");
newSection.classList.add("justify-content-center");
newSection.classList.add("container-fluid");

let newTittle = document.createElement("h2");
newTittle.classList.add("TITULOS");
newTittle.textContent = "Total: $" + totalPedido;

document.body.append(newSection);
newSection.appendChild(newTittle);

const M1 = document.querySelector("#M1");
const M2 = document.querySelector("#M2");
const M3 = document.querySelector("#M3");

M1.onclick = () => {metodoPago("Efectivo")};
M2.onclick = () => {metodoPago("Tarjeta")};
M3.onclick = () => {metodoPago("Mercado Pago")};

const botonCobrar = document.querySelector("#botonCobrar");
botonCobrar.onclick = () => {Cobrar()};

let input1  = document.getElementById("nombre")
input1.addEventListener("input", () => {
    localStorage.setItem("nombre", input1.value);
})

let input2  = document.getElementById("direccion")
input2.addEventListener("input", () => {
    localStorage.setItem("direccion", input2.value);
})


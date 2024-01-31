let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

const asignarTextoElemento = (element, text) => {
  let elementoHTML = document.querySelector(element);
  elementoHTML.innerHTML = text;
  return;
};

const verificarIntento = () => {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste al numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`,
      document.getElementById("reiniciar").removeAttribute("disabled")
    );
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarInput();
  }
  return;
};

const limpiarInput = () => {
  document.querySelector("#valorUsuario").value = "";
};

const generarNumeroSecreto = () => {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log("estes es el numero generado: ", numeroGenerado);
  console.log("esta es la lista de numeros: ", listaNumerosSorteados);

  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
};

const condicionesIniciales = () => {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", "Indica un numero del 1 al 10");
  numeroSecreto = generarNumeroSecreto();

  intentos = 1;
};

const reiniciarJuego = () => {
  limpiarInput();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
};

condicionesIniciales();

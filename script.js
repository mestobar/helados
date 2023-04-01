function helados() {

  var nombre = prompt("¿Cuantas paletas desea ordenar? ");
  alert("su pedido es" +nombre);
}


var inicio = document.getElementsByClassName("pedido")[0];

inicio.addEventListener("click", function() {
  helados();
});
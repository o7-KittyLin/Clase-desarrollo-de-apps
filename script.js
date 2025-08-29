function cambiarTexto(){
    document.getElementById("titulo").innerText= "gatos";
}

var lists = [];

function agregarTexto() {
  var input = document.getElementById('inputTexto');
  lists.push(input.value);
  input.value = '';
  generarLista();
}

function generarLista() {
  var data = '';
  for (var i = 0; i < lists.length; i++) {
    data += "<li>" + lists[i] + "</li>";
  }
  document.getElementById('elementos').innerHTML = data;
}

function eliminarTexto() {
  lists.pop();
  generarLista();
}

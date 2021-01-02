
function Producto(nombre, codigo, existencia, precio) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.existencia = existencia;
    this.precio = precio;
}

function borraElemento(e){
    var i = e.parentNode.parentNode.rowIndex;
    document.getElementById("tabla").deleteRow(i);
}



function Producto(nombre, codigo, existencia, precio) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.existencia = existencia;
    this.precio = precio;
}

function borraElemento(e) {
    var i = e.parentNode.parentNode.rowIndex;
    document.getElementById("tabla").deleteRow(i);
}

var codigo_barras = new RegExp("\[0-9]{13}");
var exist_reg = new RegExp("[0-9]+");
var precio_reg = new RegExp("\[0-9]+[\.]?[0-9]+");

function test(nombre, codigo, existencia, precio) {
    var cod = codigo_barras.exec(codigo);
    var exist = exist_reg.exec(existencia);
    var pre = precio_reg.exec(precio);
    if (!cod && !exist && !pre) {
        alert("Código de barras invalido o existencia incorrecta o precio incorrecto ");
    } else {
        var p = new Producto(nombre, codigo, existencia, precio);
        alert("Datos del producto correctos\nNombre:" + nombre +
            "\nCódigo: " + codigo + "\nExistencia: " + existencia + "\nPrecio: " + precio);
    }
}

function agrega() {
    var nombre = document.getElementById("nombre").value;
    var codigo = document.getElementById("codigo").value;
    var existencia = document.getElementById("existencia").value;
    var precio = document.getElementById("precio").value;

    test(nombre, codigo, existencia, precio);

    document.getElementById("nombre").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("existencia").value = "";
    document.getElementById("precio").value = "";
}
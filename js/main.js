
function Producto(nombre, codigo, existencia, precio) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.existencia = existencia;
    this.precio = precio;
}

var p1 = new Producto("Coca-cola", 12200225, 15, 15.0);

let productos = [p1];

var p2 = new Producto("Barritas", 1250058, 20, 12.5)
productos.push(p2);

function agrega() {
    var nombre = document.getElementById("nombre").value;
    var codigo = document.getElementById("codigo").value;
    var existencia = document.getElementById("existencia").value;
    var precio = document.getElementById("precio").value;

    var p = new Producto(nombre, codigo, existencia, precio)
    productos.push(p);
    console.log(productos.length);

    document.getElementById("nombre").value = "";
    document.getElementById("codigo").value = "";
    document.getElementById("existencia").value = "";
    document.getElementById("precio").value = "";

}

function llenaTabla() {
    var cuerpoTabla = document.getElementById("productos");
    var tablita = "";
    for (var i = 0; i < productos.length; i++) {
        tablita += "<tr>";
        tablita += ""+ (i+1);
        tablita += "<td>" + productos[i].name + "<td>";
        tablita += "<td>" + productos[i].codigo + "<td>";
        tablita += "<td>" + productos[i].existencia + "<td>";
        tablita += "<td>" + productos[i].precio + "<td>";
        tablita += "<td><td>";
        tablita += "<td><td>";
        tablita += "<tr>";
    }
    document.getElementById("productos").innerHTML = tablita;
}
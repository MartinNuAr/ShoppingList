let contador = 1;


let btn = document.getElementById("btnCompra");
let tr = document.getElementsByTagName("tr");
let nombre = document.getElementById("nombre");
let cantidad = document.getElementById("cantidad");
let totalCarrito = document.getElementById("totalCarrito")
let resumen = document.getElementById("resumen");

let total = 0;
const key = "info";

let mandado = [];

btn.addEventListener("click", function (e) {
    e.preventDefault();

    //Obtención de valores

    precio = (Math.random() * 100).toFixed(2);
    let producto = { "id": contador, "name": nombre.value, "cantidad": parseInt(cantidad.value), "price": precio * (parseInt(cantidad.value)) };
    mandado.push(producto);
    console.log(mandado);
    console.log(mandado[contador - 1]);
    localStorage.setItem(key, JSON.stringify(mandado));

    //Inserción de celdas

    if (localStorage.getItem(key)) {

        let th = document.createElement("th");
        th.setAttribute("scope", "row");
        th.innerText = mandado[contador - 1].id;
        tr[contador].append(th);

        let td = document.createElement("td");
        td.innerText = mandado[contador - 1].name;
        tr[contador].append(td);

        td = document.createElement("th");
        td.innerText = mandado[contador - 1].cantidad;
        tr[contador].append(td);

        td = document.createElement("th");
        td.innerText = `$${mandado[contador - 1].price}`;
        tr[contador].append(td);

        let newRow = document.createElement("tr");
        tr[contador].after(newRow);

        total += mandado[contador - 1].price;

        totalCarrito.innerHTML = `$${total}`;
        resumen.innerHTML = contador;        
        
        contador++;
    };



});
fetch('https://fakestoreapi.com/products')
    .then(function (res) { return res.json(); })
    .then(function (products) {
    // preparar la tabla HTML
    var tableHTML = '<thead><tr><th>ID</th><th>Titulo</th><th>Descripcion</th><th>Precio</th></tr></thead><tbody>';
    // lopear todos los productos para generar los titulos de la tabla
    products.forEach(function (p) {
        tableHTML += "<tr><td>".concat(p.id, "</td><td>").concat(p.title, "</td><td>").concat(p.description, "</td><td>").concat(p.price, "</td></tr>");
    });
    //cerramos el cuerpo de la tabla
    tableHTML += '</tbody>';
    // obtenemos el elemento de la tabla para setear su inner HTML
    document.querySelector('#tableElement').innerHTML = tableHTML; // el ! quiere decir que lo va a encontrar si o si
    //enconder el spinner
    var spinnerElement = document.querySelector('#spinnerContainer');
    spinnerElement.style.display = 'none';
});

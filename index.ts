type Rating = {
    rate: number;
    count: number;
};

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating : Rating;
};


fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then((products: Product[]) => {
    // preparar la tabla HTML
    let tableHTML: string = '<thead><tr><th>ID</th><th>Titulo</th><th>Descripcion</th><th>Precio</th></tr></thead><tbody>'; 
    // lopear todos los productos para generar los titulos de la tabla
    products.forEach((p: Product) => {
        tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`;
    });
    //cerramos el cuerpo de la tabla
    tableHTML += '</tbody>';
    // obtenemos el elemento de la tabla para setear su inner HTML
    document.querySelector('#tableElement')!.innerHTML = tableHTML; // el ! quiere decir que lo va a encontrar si o si
    //enconder el spinner
    const spinnerElement: HTMLElement = document.querySelector('#spinnerContainer')!;
    spinnerElement.style.display= 'none';
});
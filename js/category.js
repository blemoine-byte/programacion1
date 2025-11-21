let categoryContainer = document.querySelector(".container15");
let categoryTitle = document.querySelector(".categoryhead h1");


let params = new URLSearchParams(window.location.search);
let categoria = params.get("category");

if (!categoria) {
    categoria = "smartphones";
}

categoryTitle.textContent = categoria;

let URLcategoria = "https://dummyjson.com/products/category/" + categoria;


fetch(URLcategoria)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let resultados = data.products;

        console.log(resultados);

        categoryContainer.innerHTML = "";

        for (let i = 0; i < resultados.length; i++) {
            categoryContainer.innerHTML += ` 
            <article class="producto2">
                <img class="Iphone5" src="${resultados[i].images[0]}" alt="${resultados[i].title}">
                <h3>${resultados[i].title}</h3>
                <h4>$${resultados[i].price}</h4>
                <a href="./product.html?id=${resultados[i].id}&category=${categoria}">
                    ver mas detalles
                </a>
            </article>`;
        }
    })
    .catch(function (error) {
        console.error("there was a problem with the fetch operation:", error);
    });


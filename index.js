let container= document.querySelector (".container2")

const URL="https://dummyjson.com/products/category/smartphones"

fetch(URL)
.then(function(response){
    return response.json();

})

then(function(data) {
    let resultados =data;

    console.log(resultados);

    for(let i=0; i<resultados.length;i++){
        container.innerHTML += ` <article>

        <img src=${resultados[i].image}alt=''
        <h3>nombre: ${resultados[i].name}</h3>
        <p>descripcion: ${resultados[i].descripcion}</p>
        <h4>precio: ${resultados[i].precio}</h4>
        <a href="${resultados[i].id}" >ir a detalle</a>
    



        </article> ` 
    
}})
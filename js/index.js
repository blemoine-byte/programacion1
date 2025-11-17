


let celularescontainer= document.querySelector (".container-celulares")
let accessoriescontainer= document.querySelector (".container-accesories")

let URLcelulares="https://dummyjson.com/products/category/smartphones"
let URLaccsessories="https://dummyjson.com/products/category/mobile-accessories"




fetch(URLcelulares)
.then(function(response){
    return response.json();

})

.then(function(data) {
    let resultados =data.products;

    console.log(resultados);

    for(let i=0; i<resultados.length;i++){
        celularescontainer.innerHTML += ` 
        <article class="card">

        <img class="product-img" src="${resultados[i].images[0] }"alt=''
        <h3>${resultados[i].title}</h3>
        <p> ${resultados[i].description}</p>
        <h4>${resultados[i].price}</h4>
        <a href="${resultados[i].id}" >ir a detalle</a>
    
      </article> ` 

        
    
}})
.catch(function(error){
    console.error('there was a problem with the fetch operation:',error);
}
)





fetch(URLaccsessories)
.then(function(response){
    return response.json();

})

.then(function(data) {
    let resultados =data.products;

    console.log(resultados);

    for(let i=0; i<resultados.length;i++){
        accessoriescontainer.innerHTML += ` 
        <article class="card">

        <img class="product-img" src="${resultados[i].images[0] }"alt=''
        <h3>${resultados[i].title}</h3>
        <p> ${resultados[i].description}</p>
        <h4>${resultados[i].price}</h4>
        <a href="${resultados[i].id}" >ir a detalle</a>
    
      </article> ` 

        
    
}})
.catch(function(error){
    console.error('there was a problem with the fetch operation:',error);
}
)


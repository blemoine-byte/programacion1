


let topcontainer= document.querySelector (".container-top")
let randomcontainer=document.querySelector (".container-random")

let URLtopprudctos="https://dummyjson.com/products/category/smartphones"


fetch(URLtopprudctos)
.then(function(response){
    return response.json();

})

.then(function(data) {
    let resultados =data.products;

    console.log(resultados);

    for(let i=0; i<resultados.length;i++){
        topcontainer.innerHTML += ` 
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





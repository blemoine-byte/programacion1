let querystring = location.search
let querystringobj = new URLSearchParams(querystring)
let resultadoscontainer = document.querySelector(".resultados-container")

let termino = querystringobj.get("barra")



let url = `https://dummyjson.com/products/search?q=${termino}`

fetch(url)
    .then(function (response) {
        return response.json();

    })


        .then(function (data) {
            let resultados = "";

            if (!data.products || data.products.length == 0) {
                resultados = "<p>No se encontraron resultado</p>";

            }

            else {
                for (let i = 0; i < data.products.length; i += 1) {
                    let item = data.products[i];

                    resultados += `
               <article class="card">

               <img class="product-img" src="${item.images[0]}" alt=''/>
               <h3>${item.title}</h3>
               <p> ${item.description}</p>
               <h4>${item.price}</h4>
               <a href="detail.html?id=${item.id}" >ir a detalle</a>
               </article>`;

                }
            }
             resultadoscontainer.innerHTML = resultados;

        })

    .catch(function (error) {
        console.error("Hubo un error en la operacion fetch:", error);
    });
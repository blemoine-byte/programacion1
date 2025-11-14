let querystring = location.search
let querystringobj = new URLSearchParams(querystring)

let termino = querystringobj.get("barra")



let url = `https://dummyjson.com/products/search?q=${termino}`

fetch(url)
    .then(function (response) {
        return response.json()
    }


        .then(function (data) {
            let resultados = "";

            if (!data.products || data.length == 0) {
                resultados = "<p>No se encontraron resultado</p>";

            }

            else {
                for (let i = 0; i < length.products; i += 1) {
                    let item = productos[i];

                }

            }

        }

        ))

    .products
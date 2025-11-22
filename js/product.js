document.addEventListener("DOMContentLoaded", function () {

    let query = window.location.search;
    let params = new URLSearchParams(query);
    let id = params.get("id");

    
    if (!id) {
        let titulo = document.querySelector(".producto");
        if (titulo) {
            titulo.textContent = "Producto no encontrado";
        }
        console.error("El parámetro 'id' no está definido.");
        return;
    }

    console.log("ID obtenido:", id);

    
    let url = "https://dummyjson.com/products/" + id;

    
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log("Datos del producto:", data);

            
            let imagen = document.querySelector(".iphoneproducto");
            let titulo = document.querySelector(".producto");
            let precio = document.querySelector(".precio");
            let descripcion = document.querySelector(".producto");
            let stock = document.querySelector(".stock");
            let reviewsSection = document.querySelector(".review");

            

            
            if (titulo) {
                titulo.textContent = data.title;
            }

            
            if (precio) {
                precio.textContent = "$" + data.price;
            }

            
            if (descripcion) {
                let texto = "";

                
                texto += "<strong>Marca:</strong> " + (data.brand || "Desconocida") + "<br>";

                
                texto += "<strong>Descripción:</strong> " + data.description + "<br>";

                
                if (data.category) {
                    texto +=
                        '<strong>Categoría:</strong> ' +
                        '<a href="./category.html?category=' +
                        data.category +
                        '">' +
                        data.category +
                        "</a><br>";
                }

                
                if (data.tags && data.tags.length > 0) {
                    texto += "<strong>Tags:</strong> ";
                    for (let i = 0; i < data.tags.length && i < 3; i++) {
                        if (i > 0) {
                            texto += ", ";
                        }
                        texto += data.tags[i];
                    }
                }

                descripcion.innerHTML = texto;
            }

            
            if (stock) {
                if (data.stock > 0) {
                    stock.textContent = "En stock (" + data.stock + ")";
                } else {
                    stock.textContent = "Sin stock";
                }
            }

            
            if (imagen) {
                if (data.images && data.images.length > 0) {
                    imagen.src = data.images[0];
                } else if (data.thumbnail) {
                    imagen.src = data.thumbnail;
                }
                imagen.alt = data.title;
            }

            
            if (reviewsSection) {
                
                reviewsSection.innerHTML = "";


                if (data.reviews && data.reviews.length > 0) {

    reviewsSection.innerHTML = "";


    for (let i = 0; i < data.reviews.length; i++) {
        let r = data.reviews[i];

        reviewsSection.innerHTML += `
            <div class="review">
                <h3>${r.reviewerName || "Usuario anónimo"}</h3>
                <p>${r.rating || 0}/10</p>
                <p>${r.comment || ""}</p>
                <p>${r.date || ""}</p>
            </div>
        `;
    }
}

    
                 else {
                    reviewsSection.innerHTML = "<p>No hay comentarios para este producto.</p>";
                }
            }
        })
        .catch(function (error) {
            console.error("Error al cargar los datos del producto:", error);

            let titulo = document.querySelector(".producto");
            if (titulo) {
                titulo.textContent = "Error al cargar el producto.";
            }
        });

});

let API = "http://localhost:3000";

async function fetchProduit(API) {
    try {
        let reponse = await fetch(API+"/api/products");

        if (!reponse.ok) {
            throw new Error("Erreur serveur !");
        }

        let produits = await reponse.json();

        return produits;

    } catch (error) {
        console.error(error);
    }
};

async function displayProducts(category = "Tous") {

    let listProducts = document.getElementById("listProducts");
    

    console.log(category);
    

    listProducts.innerHTML = "";
    let produits = await fetchProduit(API);

    produits.forEach(produit => {

        if (produit.categoryName === category) {

            listProducts.innerHTML += `
                <div>
                    <h1>${produit.name}</h1>
                    <p>${produit.description}</p>
                    <img src="${API}${produit.image}" alt="logo">
                    <p>Prix: ${produit.price}</p>
                    <p>Catigorie: ${produit.categoryName}</p>
                    <p>Stock: ${produit.stock}</p>
                </div>
            `;

        } else if (category === "Tous") {

            listProducts.innerHTML += `
                <div>
                    <h1>${produit.name}</h1>
                    <p>${produit.description}</p>
                    <img src="${API}${produit.image}" alt="logo">
                    <p>Prix: ${produit.price}</p>
                    <p>Catigorie: ${produit.categoryName}</p>
                    <p>Stock: ${produit.stock}</p>
                </div>
            `;

        };

    });
};
let category = document.getElementById("filterButtons");
category.addEventListener("click", (event) => {
    indexCategory = event.target.textContent;
    displayProducts(indexCategory);
    
});


displayProducts();








async function inputSearch() {

    let Products = await fetchProduit(API);

    let inputSear = document.getElementById("input");

    inputSear.addEventListener("input", event => {

        let textInput = event.target.value.toUpperCase();

        Products.forEach(elem => {

            let category = elem.categoryName.toUpperCase();

            if (elem.name.toUpperCase().includes(textInput)) {
                console.log(elem);
                // console.log(elem.name);
            };

        });

    });

}

inputSearch();

    


console.log(inputSearch());









// fetch(API).then((result) => {
//     console.log(result);
//     let myData = result.json();
//     console.log(myData);
// });

// async function myfunction(API) {
//     const response = await fetch(API);
//     console.log(response.status);

//     if (!response.ok) {
//     const problem = await response.json();
//     console.log(problem.message);
//     return;
//     }

//     const products = await response.json();
//     console.log(products);
// }

// // Here we wait for the myfunction to finish
// // and then returns a promise that'll be waited for as well
// // It's useless to wait the myfunction to finish before to return
// // we can simply returns a promise that will be resolved later

// // Also point that we don't use async keyword on the function because
// // we can simply returns the promise returned by myfunction
// function start() {
//   return myfunction(API);
// }

// // Call start
// (async() => {
//   console.log('before start');

//   await start();
  
//   console.log('after start');
// })();
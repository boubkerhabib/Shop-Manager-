
let API = "http://localhost:3000";

let listProducts = document.getElementById("listProducts");
let btnfilter = document.getElementById("filterButtons");

async function fetchProduit(API) {
    try {
        let reponse = await fetch(API + "/api/products");

        if (!reponse.ok) {
            console.log("Erreur serveur !");
        }

        let produits = await reponse.json();

        return produits;

    } catch (error) {
        console.log(error);
        return [];
    }
}

// Categories
let listCatecory = ["Tous"];

async function display(list) {

    try {

        let reponse = await fetch(API + "/api/categories");


        let catecory = await reponse.json();

        catecory.forEach(element => {
            list.push(element.name);
        });

        btnfilter.innerHTML = "";

        list.forEach(element => {

            btnfilter.innerHTML += `
                <button value="${element.id}">${element.name}</button>
            `;

        });

        return list;

    } catch (error) {
        console.log(error);
    }
};


//d
function displayProducts() {

    listProducts.innerHTML = "";

    products.forEach(element => {

        listProducts.innerHTML += `
            <div>
                <h1>${element.name}</h1>
                <p>${element.description}</p>
                <img src="${API}${element.image}" alt="logo">
                <p>Prix: ${element.price}</p>
                <p>Catégorie: ${element.categoryName}</p>
                <p>Stock: ${element.stock}</p>
            </div>
        `;

    });
};


// filter
async function filterBtnCatecory() {
    let id = 2;
    const response = await fetch(`${API}/api/categories/${id}`);
    let products = await response.json();


    displayProducts(products);

    btnfilter.addEventListener("click", (event) => {

        let indexCaty = event.target.value;
        console.log(indexCaty);



        if (indexCaty === "Tous") {

            displayProducts(products);

            return;
        };

        let filterProducts = products.filter(element => {

            return element.categoryName === indexCaty;

        });

        displayProducts(filterProducts);

    });

    return products;
}


















function inputSearch(products) {

    let inputSear = document.getElementById("input");

    inputSear.addEventListener("input", event => {

        let textInput = event.target.value.toLowerCase();

        let searchProducts = products.filter(element => {

            return element.name.toLowerCase().includes(textInput);

        });

        displayProducts(searchProducts);

    });

};
//prixmax
function priceMax(products) {

    let inputPrice = document.getElementById("inputPrice");

    inputPrice.addEventListener("input", event => {

        let priceInput = event.target.value;

        let filterPrice = products.filter(element => {

            return priceInput >= element.price;

        });

        displayProducts(filterPrice);

    });

};
function stockMin(produits){

    let inputStock = document.getElementById("inputStock");

    inputStock.addEventListener("input", event => {

        let stockInput = event.target.value;

        let filterStock = produits.filter(element => {

            return stockInput <= element.stock;

        });

        displayProducts(filterStock);

    });

};


//  iniyt
async function init() {

    let produits = await fetchProduit(API);
    priceMax(produits);
    stockMin(produits);

    let categories = await display(listCatecory);

    let filerParCatigory = await filterBtnCatecory(produits);
    inputSearch(produits);

    console.log(produits);
    console.log(categories);
    console.log(filerParCatigory);

};

init();





// async function displayProducts(category = "Tous") {

//     let listProducts = document.getElementById("listProducts");
    

//     console.log(category);
    

    
//     let produits = await fetchProduit(API);

//     produits.forEach(produit => {

//         if (produit.categoryName === category) {



//         } else if (category === "Tous") {

//             listProducts.innerHTML += `
//                 <div>
//                     <h1>${produit.name}</h1>
//                     <p>${produit.description}</p>
//                     <img src="${API}${produit.image}" alt="logo">
//                     <p>Prix: ${produit.price}</p>
//                     <p>Catigorie: ${produit.categoryName}</p>
//                     <p>Stock: ${produit.stock}</p>
//                 </div>
//             `;

//         };

//     });
// };
// let category = document.getElementById("filterButtons");
// category.addEventListener("click", (event) => {
//     indexCategory = event.target.textContent;
//     displayProducts(indexCategory);
    
// });


// displayProducts();








// async function inputSearch() {

//     let Products = await fetchProduit(API);

//     let inputSear = document.getElementById("input");

//     inputSear.addEventListener("input", event => {

//         let textInput = event.target.value.toUpperCase();

//         Products.forEach(elem => {

//             let category = elem.categoryName.toUpperCase();

//             if (elem.name.toUpperCase().includes(textInput)) {
//                 console.log(elem);
//                 // console.log(elem.name);
//             };

//         });

//     });

// }

// inputSearch();

    


// console.log(inputSearch());









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
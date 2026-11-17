
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
let listCatecory = [{
    id: 0,
    name: "Tous",
    description: "tous pour afficher tous les produit."
  }];

async function display(list) {

    try {

        let reponse = await fetch(API + "/api/categories/");


        let catecory = await reponse.json();

        catecory.forEach(element => {
            list.push(element);
            console.log(element.name)
        });

        btnfilter.innerHTML = "";

        list.forEach(element => {
            console.log(element.id)

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
function displayProducts(pro) {

    listProducts.innerHTML = "";

    pro.forEach(element => {

        listProducts.innerHTML += `
            <div id="${element.id}" class="bg-white shadow-lg rounded-xl p-5 border border-gray-200">

                <h1 class="text-xl font-bold text-gray-800 mb-2">
                    ${element.name}
                </h1>

                <p class="text-gray-600 mb-3">
                    ${element.description}
                </p>

                <img src="${API}${element.image}"
                     alt="${element.name}"
                     class="w-full h-48 object-cover rounded-lg mb-3">

                <p class="text-lg font-semibold text-blue-600">
                    Prix : ${element.price} DH
                </p>

                <p class="text-gray-600">
                    Catégorie : ${element.categoryName}
                </p>

                <p class="text-gray-600 mb-4">
                    Stock : ${element.stock}
                </p>

                <div class="flex items-center gap-3">

                    <input
                        type="number"
                        id="quantity-${element.id}"
                        min="1"
                        max="${element.stock}"
                        value="1"
                        ${element.stock === 0 ? "disabled" : ""}
                        class="w-20 border border-gray-300 rounded-lg p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >

                    <button
                        class="btn-reserve flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                        data-id="${element.id}"
                        ${element.stock === 0 ? "disabled" : ""}>
                        Réserver
                    </button>

                </div>

            </div>
        `;
    });
};


// filter


async function filterBtnCatecory() {

    const response = await fetch(`${API}/api/products`);
    let products = await response.json();

    // Afficher tous les produits au début
    displayProducts(products);

    btnfilter.addEventListener("click", (event) => {

        let button = event.target.closest("button");

        if (!button) return;

        let indexCaty = button.value;

        let filterProducts = products.filter(pro => {

            if (indexCaty == 0) {
                return true;
            };

            return indexCaty == pro.categoryId;

        });

        displayProducts(filterProducts);

    });
    return products;

};




















async function inputSearch() {
    let input = document.getElementById("inputSearch");

    let response = await fetch(`${API}/api/products`);
    let products = await response.json();
    console.log(products);
    console.log(input);

    input.addEventListener("input", event => {

        let textInput = event.target.value.toLowerCase().trim();
        console.log(textInput);

        let searchProducts = products.filter(element => {

            return element.name.toLowerCase().includes(textInput);

        });

        displayProducts(searchProducts);

    });
    return products;

};

//prixmax
function priceMax(products) {

    let inputPrice = document.getElementById("inputPrice");

    inputPrice.addEventListener("input", event => {

        let priceInput = event.target.value;

        let filterPrice = products.filter(element => {

            return priceInput > element.price;

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
// afficher form de reserve
let chiosiList = JSON.parse(localStorage.getItem("chiosiList")) || [];
function afficheForm(){
    let btnRese = document.getElementById("listProducts");
    let dialog = document.getElementById("dialog");
    let index;
    btnRese.addEventListener("click", (event) => {
        index = event.target.dataset;
        chiosiList.push(index);

        
        localStorage.setItem("chiosiList", JSON.stringify(chiosiList));
        

    });

    console.log(chiosiList);
    

    btnRese.addEventListener("dblclick", (event) => {
        index = event.target.dataset;
        // console.log(index);
        dialog.showModal();

    });
    return chiosiList;
};


function closed() {
    
    let dialog = document.getElementById("dialog");
    let close = document.getElementById("closeIconDialog");
    let annuler = document.getElementById("btnClose");
    
    close.addEventListener("click", () => {
        dialog.close();
    });
    
    annuler.addEventListener("click", () => {
        dialog.close();
    });
}



let list = JSON.parse(localStorage.getItem("reserveList")) || [];
function addDataDialog() {
    
    let reserve = document.getElementById("formReserve");
    
    let inputNom = document.getElementById("nom");
    let inputEmail = document.getElementById("email");
    let inputTele = document.getElementById("tele");
    let inputCIN = document.getElementById("cin");
    let inputAdresse = document.getElementById("Adresse");
    let inputVille = document.getElementById("ville");
    let inputCodePostal = document.getElementById("codePostal");
    let inputPayment = document.getElementById("payment");
    
    
    
    
    
    
    
    reserve.addEventListener("submit", (e) => {
        affichaProduitschiosi()
        
        e.preventDefault();
        
        let valueNom = inputNom.value.trim();
        let valueEmail = inputEmail.value.trim();
        let valueTele = inputTele.value.trim();
        let valueCIN = inputCIN.value.trim();
        let valueAdresse = inputAdresse.value.trim();
        let valueVille = inputVille.value.trim();
        let valueCodeP = inputCodePostal.value.trim();
        let valuePayment = inputPayment.value;
        
        let prod = {
            id: Date.now(),
            Nom: valueNom,
            Email: valueEmail,
            Telephone: valueTele,
            CIN: valueCIN,
            Adresse: valueAdresse,
            Ville: valueVille,
            CodePostal: valueCodeP,
            Payment: valuePayment
        };
        
        list.push(prod);
        localStorage.setItem("reserveList", JSON.stringify(list));
        
        console.log(list);
        
        reserve.reset();
        
        document.getElementById("dialog").close();
    });
    return 0;
};
let btnList = JSON.parse(localStorage.getItem("chiosiList"));

function affichaProduitschiosi() {

    let kkkk = document.getElementById("afficherProduit");

    let div = document.createElement("div");

    div.textContent = "ggggggg";

    kkkk.appendChild(div);

};



//  iniyt
async function init() {

    let produits = await fetchProduit(API);
    priceMax(produits);
    stockMin(produits);

    let categories = await display(listCatecory);

    let filerParCatigory = await filterBtnCatecory();
    let inputSearchb = await inputSearch();
    let buttonReserve = afficheForm();
    let inputForm = addDataDialog();
   
    closed();
    
    console.log(inputForm);
    console.log(buttonReserve);
    console.log(inputSearchb);

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
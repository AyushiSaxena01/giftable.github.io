const productList = [
    {
        discount: "50% off",
        image: "Images/card-image/index-card/home-card-image/card1.png",
        brand: "Nike",
        description: "a short line about the cloth..",
        price: "$20",
        actualPrice: "$40"
    },
    {
        discount: "40% off",
        image: "Images/card-image/index-card/home-card-image/card2.png",
        brand: "HRX",
        description: "a short line about the cloth..",
        price: "$30",
        actualPrice: "$100"
    },
    {
        discount: "60% off",
        image: "Images/card-image/index-card/home-card-image/card3.png",
        brand: "Adidas",
        description: "a short line about the cloth..",
        price: "$30",
        actualPrice: "$100"
    },
    {
        discount: "60% off",
        image: "Images/card-image/index-card/home-card-image/card4.png",
        brand: "Puma",
        description: "a short line about the cloth..",
        price: "$70",
        actualPrice: "$100"
    }, {
        discount: "50% off",
        image: "Images/card-image/index-card/home-card-image/card1.png",
        brand: "Nike",
        description: "a short line about the cloth..",
        price: "$20",
        actualPrice: "$40"
    },
    {
        discount: "40% off",
        image: "Images/card-image/index-card/home-card-image/card2.png",
        brand: "HRX",
        description: "a short line about the cloth..",
        price: "$30",
        actualPrice: "$100"
    },
    {
        discount: "60% off",
        image: "Images/card-image/index-card/home-card-image/card3.png",
        brand: "Adidas",
        description: "a short line about the cloth..",
        price: "$30",
        actualPrice: "$100"
    },
    {
        discount: "60% off",
        image: "Images/card-image/index-card/home-card-image/card4.png",
        brand: "Puma",
        description: "a short line about the cloth..",
        price: "$70",
        actualPrice: "$100"
    }
]

const productContainer = document.getElementById("product-container");

let productContainerHTML = '';

const getInnerHtml = (items) => {
    items.forEach((product) => {
        productContainerHTML += `<div class="product-card">
    <div class="product-image">
      <span class="discount-tag">${product.discount}</span>
      <img
        src=${product.image}
        class="product-thumb"
        alt=""
        />
      <button class="card-btn" id="cart" >add to whislist</button>
    </div>
    <div class="product-info">
      <h2 class="product-brand">${product.brand}</h2>
      <p class="product-short-des">${product.description}</p>
      <span class="price">${product.price}</span><span class="actual-price">${product.actualPrice}</span><br
        />
    </div>
  </div>`
    })
    return productContainerHTML
}


productContainer.innerHTML = getInnerHtml(productList);


const searchBox = document.getElementById('searchBox');


searchBox.addEventListener('keyup', (event) => {
    const value = event.target.value;

    const items = productList.filter((item) => item.brand.toLowerCase().includes(value.toLowerCase()));
    productContainerHTML = ""
    if (items.length > 0) {
        productContainer.innerHTML = getInnerHtml(items);
    }
    else{
        productContainer.innerHTML = "No products found"
    }
})

// //add to cart
// function addToCart(brand){
//     console.log(brand);
// }
let productFa = [];
// Hàm lấy tham số từ URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// ---------------------------HIỂN THỊ SẢN PHẨM CHI TIẾT-----------------------------------
function displayProductDetailFood() {
    const codeF = getQueryParam('code');
    console.log(codeF);
    const initialProductsFood = JSON.parse(localStorage.getItem('initialProductsFood')) || [];
    console.log(initialProductsFood);
    const featuredProductsFood = JSON.parse(localStorage.getItem('featuredProductsFood')) || [];
    console.log(featuredProductsFood);

    console.log(Array.isArray(initialProductsFood)); // Kiểm tra xem có phải là mảng không
    console.log(Array.isArray(featuredProductsFood));

    productFa = initialProductsFood.concat(featuredProductsFood);
    console.log(productFa);

    const productFood = productFa.find(p => p.id === parseInt(codeF));
    console.log(productFood);

    if (productFood) {
        const productDetail = document.getElementById("detail-Food");
        productDetail.innerHTML = `
        <div id="detail-Food">
            <p class="title-detail-Food">Product details</p>
            <div class="detail-food">
                <img src="${productFood.image}" id="image" alt="Products_img">
                <div class="detailt">
                    <p class="title-f">${productFood.name}</p>
                    <p class="priceFood">${productFood.price} VNĐ</p>

                    <div class="quantityFood-container">
                        <button onclick="minusQuantityFood()" class="decrease-btn">-</button>
                        <span id="quantityFa-display" class="mx-2">${currentQuantityFood}</span>
                        <button onclick="plusQuantityFood()" class="increase-btn">+</button>
                    </div>
                    
                    <div class="button-detailFood">
                        <button class="cartFood" onclick="addToCartFa(${productFood.id})"> Add to cart</button>
                        <button id="buyNowFood" class="buyFood" onclick="buyNowFood(${productFood.id})">Buy now</button>
                    </div>
                    <div class="shareFood"> 
                        <p> Share: </p>
                        <i class="fa-brands fa-square-facebook"></i>
                        <i class="fa-brands fa-square-google-plus"></i>
                    </div>
                </div>
            </div>
            <div class="produc-inforFood">
                <p class="title-inforF">Product information</p>
                <hr>
                <p class="p-inforF">
                    ${productFood.description}
                </p>
            </div>
        </div>
        `;
    } else {
        console.error('Sản phẩm không tồn tại');
    }
}

//------------------------------Tăng giảm sl sản phẩm------------------
// Tăng giảm số lượng sản phẩm mua
let currentQuantityFood = 1;

function plusQuantityFood() {
    currentQuantityFood++;
    document.getElementById("quantityFa-display").innerText = currentQuantityFood;
}

function minusQuantityFood() {
    if (currentQuantityFood > 1) {
        currentQuantityFood--;
    } else {
        alert("Quantity min is 1");
    }
    document.getElementById("quantityFa-display").innerText = currentQuantityFood;
}

// ---------------------------THÊM VÀO GIỎ HÀNG-----------------------
const userIDFood = localStorage.getItem("userID");
let getDataInCartFood = (key) => {
    const dataF = localStorage.getItem(key);
    return dataF ? JSON.parse(dataF) : [];
}
let userDataInCartFood = getDataInCartFood("productInCart")
console.log(userDataInCartFood);
console.log(Array.isArray(userDataInCartFood));
if (userDataInCartFood) {
    console.log('Success: true')
} else {
    console.log('Error')
}

function addToCartFa(id) {
    console.log(id);
    let checkProductFood = userDataInCartFood.some(value => value.id === id);
    console.log(checkProductFood);
    if (!checkProductFood) {
        let pInProductFa = productFa.find(value => value.id === id);
        console.log(pInProductFa);
        userDataInCartFood.unshift({
            ...pInProductFa,
            quantity: currentQuantityFood,
            userID: userIDFood
        })
        localStorage.setItem("productInCart", JSON.stringify(userDataInCartFood));
    } else {
        let getIndexF = userDataInCartFood.findIndex(value => value.id === id);
        let pInProductFa = userDataInCartFood.find(value => value.id === id)
        userDataInCartFood[getIndexF] = {
            ...pInProductFa,
            quantity: ++pInProductFa.quantity,
            userID: userIDFood
        }
        localStorage.setItem("productInCart", JSON.stringify(userDataInCartFood));
    }
    alert("Product added to cart.");
}

// Hàm lấy sản phẩm từ local Storage
function getProductFromLocalStorageFood() {
    const productFa = JSON.parse(localStorage.getItem('productFa'));
    console.log(productFa);
    return productFa ? productFa : [];
}

// Hiển thị chi tiết sản phẩm khi trang được tải
document.addEventListener('DOMContentLoaded', displayProductDetailFood);

// --------------------------BUY NOW------------------------------------------
function buyNowFood(productIdF) {
    const productFood = productFa.find(p => p.id === productIdF);

    if (productFood) {
        const orderDetailsFood = {
            ...productFood,
            userID: userIDFood
        };
        localStorage.setItem('orderDetails', JSON.stringify(orderDetailsFood));

        window.location.href = "/pages/Order.html";
    } else {
        console.error('The product does not exist.');
    }
}

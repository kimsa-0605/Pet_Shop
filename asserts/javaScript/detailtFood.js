let productF = [];
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

    productF = initialProductsFood.concat(featuredProductsFood);
    console.log(productF);

    const productFood = productF.find(p => p.id === parseInt(codeF));
    console.log(productFood);

    if (productFood) {
        const productDetail = document.getElementById("detail-Food");
        productDetail.innerHTML = `
        <div id="detail-Food">
            <p class="title-detail-Food">Product details</p>
            <div class="detail-f">
                <img src="${productFood.image}" id="image" alt="Products_img">
                <div class="detailt">
                    <p class="title-f">${productFood.name}</p>
                    <p class="priceF">${productFood.price} VNĐ</p>

                    <div class="quantityF-container">
                        <button onclick="minusQuantityFood()" class="decrease-btn">-</button>
                        <span id="quantityF-display" class="mx-2">${currentQuantityF}</span>
                        <button onclick="plusQuantityFood()" class="increase-btn">+</button>
                    </div>
                    
                    <div class="button-detailF">
                        <button class="cartF" onclick="addToCartF(${productFood.id})"> Add to cart</button>
                        <button id="buyNowF" class="buyF" onclick="buyNowF(${productFood.id})">Buy now</button>
                    </div>
                    <div class="shareF"> 
                        <p> Share: </p>
                        <i class="fa-brands fa-square-facebook"></i>
                        <i class="fa-brands fa-square-google-plus"></i>
                    </div>
                </div>
            </div>
            <div class="produc-inforF">
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
let currentQuantityF = 1;

function plusQuantityFood() {
    currentQuantityF++;
    document.getElementById("quantityF-display").innerText = currentQuantityF;
}

function minusQuantityFood() {
    if (currentQuantityF > 1) {
        currentQuantityF--;
    } else {
        alert("Quantity min is 1");
    }
    document.getElementById("quantityF-display").innerText = currentQuantityF;
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

function addToCartF(id) {
    console.log(id);
    let checkProductF = userDataInCartFood.some(value => value.id === id);
    console.log(checkProductF);
    if (!checkProductF) {
        let pInProductF = productF.find(value => value.id === id);
        console.log(pInProductF);
        userDataInCartFood.unshift({
            ...pInProductF,
            quantity: currentQuantityF,
            userID: userIDFood
        })
        localStorage.setItem("productInCart", JSON.stringify(userDataInCartFood));
    } else {
        let getIndexF = userDataInCartFood.findIndex(value => value.id === id);
        let pInProductF = userDataInCartFood.find(value => value.id === id)
        userDataInCartFood[getIndexF] = {
            ...pInProductF,
            quantity: ++pInProductF.quantity,
            userID: userIDFood
        }
        localStorage.setItem("productInCart", JSON.stringify(userDataInCartFood));
    }
    alert("Product added to cart.");
}


// Hàm lấy sản phẩm từ local Storage
function getProductFromLocalStorageFood() {
    const productF = JSON.parse(localStorage.getItem('productF'));
    console.log(productF);
    return productF ? productF : [];
}

// Hiển thị chi tiết sản phẩm khi trang được tải
document.addEventListener('DOMContentLoaded', displayProductDetailFood);





// --------------------------BUY NOW------------------------------------------
function buyNowF(productIdF) {
    const productFood = productF.find(p => p.id === productIdF);

    if (productFood) {
        const orderDetailsFood = {
            ...productFood,
            userID: userIDFood
        };
        localStorage.setItem('orderDetailsFood', JSON.stringify(orderDetailsFood));

        window.location.href = "/pages/cartt.html";
    } else {
        console.error('The product does not exist.');
    }
}
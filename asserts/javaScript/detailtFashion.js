let productFa = [];
// Hàm lấy tham số từ URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// ---------------------------HIỂN THỊ SẢN PHẨM CHI TIẾT-----------------------------------
function displayProductDetailFashion() {
    const codeF = getQueryParam('code');
    console.log(codeF);
    const initialProductsFashion = JSON.parse(localStorage.getItem('initialProductsFashion')) || [];
    console.log(initialProductsFashion);
    const featuredProductsFashion = JSON.parse(localStorage.getItem('featuredProductsFashion')) || [];
    console.log(featuredProductsFashion);

    console.log(Array.isArray(initialProductsFashion)); // Kiểm tra xem có phải là mảng không
    console.log(Array.isArray(featuredProductsFashion));

    productFa = initialProductsFashion.concat(featuredProductsFashion);
    console.log(productFa);

    const productFashion = productFa.find(p => p.id === parseInt(codeF));
    console.log(productFashion);

    if (productFashion) {
        const productDetail = document.getElementById("detail-Fashion");
        productDetail.innerHTML = `
        <div id="detail-Fashion">
            <p class="title-detail-Fashion">Product details</p>
            <div class="detail-fashion">
                <img src="${productFashion.image}" id="image" alt="Products_img">
                <div class="detailt">
                    <p class="title-f">${productFashion.name}</p>
                    <p class="priceFashion">${productFashion.price} VNĐ</p>

                    <div class="quantityFashion-container">
                        <button onclick="minusQuantityFashion()" class="decrease-btn">-</button>
                        <span id="quantityFa-display" class="mx-2">${currentQuantityFashion}</span>
                        <button onclick="plusQuantityFashion()" class="increase-btn">+</button>
                    </div>
                    
                    <div class="button-detailFashion">
                        <button class="cartFashion" onclick="addToCartFa(${productFashion.id})"> Add to cart</button>
                        <button id="buyNowFashion" class="buyFashion" onclick="buyNowFashion(${productFashion.id})">Buy now</button>
                    </div>
                    <div class="shareFashion"> 
                        <p> Share: </p>
                        <i class="fa-brands fa-square-facebook"></i>
                        <i class="fa-brands fa-square-google-plus"></i>
                    </div>
                </div>
            </div>
            <div class="produc-inforFashion">
                <p class="title-inforF">Product information</p>
                <hr>
                <p class="p-inforF">
                    ${productFashion.description}
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
let currentQuantityFashion = 1;

function plusQuantityFashion() {
    currentQuantityFashion++;
    document.getElementById("quantityFa-display").innerText = currentQuantityFashion;
}

function minusQuantityFashion() {
    if (currentQuantityFashion > 1) {
        currentQuantityFashion--;
    } else {
        alert("Quantity min is 1");
    }
    document.getElementById("quantityFa-display").innerText = currentQuantityFashion;
}

// ---------------------------THÊM VÀO GIỎ HÀNG-----------------------
const userIDFashion = localStorage.getItem("userID");
let getDataInCartFashion = (key) => {
    const dataF = localStorage.getItem(key);
    return dataF ? JSON.parse(dataF) : [];
}
let userDataInCartFashion = getDataInCartFashion("productInCart")
console.log(userDataInCartFashion);
console.log(Array.isArray(userDataInCartFashion));
if (userDataInCartFashion) {
    console.log('Success: true')
} else {
    console.log('Error')
}

function addToCartFa(id) {
    console.log(id);
    let checkProductFashion = userDataInCartFashion.some(value => value.id === id);
    console.log(checkProductFashion);
    if (!checkProductFashion) {
        let pInProductFa = productFa.find(value => value.id === id);
        console.log(pInProductFa);
        userDataInCartFashion.unshift({
            ...pInProductFa,
            quantity: currentQuantityFashion,
            userID: userIDFashion
        })
        localStorage.setItem("productInCart", JSON.stringify(userDataInCartFashion));
    } else {
        let getIndexF = userDataInCartFashion.findIndex(value => value.id === id);
        let pInProductFa = userDataInCartFashion.find(value => value.id === id)
        userDataInCartFashion[getIndexF] = {
            ...pInProductFa,
            quantity: ++pInProductFa.quantity,
            userID: userIDFashion
        }
        localStorage.setItem("productInCart", JSON.stringify(userDataInCartFashion));
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
document.addEventListener('DOMContentLoaded', displayProductDetailFashion);





// --------------------------BUY NOW------------------------------------------
function buyNowFashion(productIdF) {
    const productFashion = productFa.find(p => p.id === productIdF);

    if (productFashion) {
        const orderDetailsFashion = {
            ...productFashion,
            userID: userIDFashion
        };
        localStorage.setItem('orderDetails', JSON.stringify(orderDetailsFashion));

        window.location.href = "/pages/Order.html";
    } else {
        console.error('The product does not exist.');
    }
}

function dieu_huong(page) {
    if (page === 'AboutUs') {
        location.assign("/pages/About.html");
    } else if (page === 'Fashion') {
        location.assign("/pages/fashionPage.html");
    } else if (page === 'Food') {
        location.assign("/pages/foodPage.html");
    } else if (page === 'Home') {
        location.assign("/pages/homePage.html");
    }else if (page === 'Cart') {
        location.assign("/pages/cartt.html");
    } else if (page === 'User') {
        location.assign("/pages/profile.html");
    }
    else {
        alert("Trang không tồn tại!");
    }
}
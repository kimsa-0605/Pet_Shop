const initialProductsFashion = [{
    id: 1,
    name: 'Luxury Cat Sweater',
    price: 250000,
    image: "/asserts/image/bestFashion2.webp",
    description: "A premium, stylish sweater made from soft, high-quality materials to keep your cat cozy and fashionable.",
    nature: {
        type: 'Cat Fashion'
    }
}, {
    id: 2,
    name: 'Designer Dog Hoodie',
    price: 299000,
    image: "/asserts/image/bestFashion4.webp",
    description: "A trendy dog hoodie made with breathable fabric, perfect for walks or lounging in style.",
    nature: {
        type: 'Dog Fashion'
    }
}, {
    id: 3,
    name: 'Elegant Dog Jacket',
    price: 200000,
    image: "/asserts/image/bestFashion1.webp",
    description: "A fashionable jacket for dogs, designed to offer warmth and style for outdoor adventures.",
    nature: {
        type: 'Dog Fashion'
    }
}, {
    id: 4,
    name: 'Chic Cat Bowtie',
    price: 250000,
    image: "/asserts/image/bestFashion3.webp",
    description: "A charming and chic bowtie for cats, perfect for special occasions or daily fashion statements.",
    nature: {
        type: 'Cat Fashion'
    }
}, {
    id: 5,
    name: 'Casual Cat Collar',
    price: 350000,
    image: "/asserts/image/bestFashion2.webp",
    description: "A stylish and durable collar for cats, offering both comfort and a touch of flair.",
    nature: {
        type: 'Cat Fashion'
    }
}, {
    id: 6,
    name: 'Classic Cat Bandana',
    price: 280000,
    image: "/asserts/image/bestFashion4.webp",
    description: "A fashionable, lightweight bandana for cats that adds a touch of personality to their wardrobe.",
    nature: {
        type: 'Cat Fashion'
    }
}, {
    id: 7,
    name: 'Floral Dog Scarf',
    price: 150000,
    image: "/asserts/image/bestFashion1.webp",
    description: "A fresh, floral-patterned scarf for dogs, adding style to any outing or event.",
    nature: {
        type: 'Dog Fashion'
    }
}, {
    id: 8,
    name: 'Bold Dog T-shirt',
    price: 250000,
    image: "/asserts/image/bestFashion4.webp",
    description: "A bold and comfy t-shirt for dogs, designed with soft fabric for everyday wear.",
    nature: {
        type: 'Dog Fashion'
    }
}, {
    id: 9,
    name: 'Sporty Dog Tank Top',
    price: 199000,
    image: "/asserts/image/bestFashion3.webp",
    description: "A sporty tank top for active dogs, perfect for hot weather and high-energy activities.",
    nature: {
        type: 'Dog Fashion'
    }
}];

const featuredProductsFashion = [{
    id: 4,
    name: 'Chic Cat Bowtie',
    price: 150000,
    image: "/asserts/image/bestFashion1.webp",
    description: "A charming and chic bowtie for cats, perfect for special occasions or daily fashion statements.",
    nature: {
        type: 'Cat Fashion'
    }
}, {
    id: 5,
    name: 'Casual Cat Collar',
    price: 300000,
    image: "/asserts/image/bestFashion2.webp",
    description: "A stylish and durable collar for cats, offering both comfort and a touch of flair.",
    nature: {
        type: 'Cat Fashion'
    }
}, {
    id: 6,
    name: 'Classic Cat Bandana',
    price: 250000,
    image: "/asserts/image/bestFashion3.webp",
    description: "A fashionable, lightweight bandana for cats that adds a touch of personality to their wardrobe.",
    nature: {
        type: 'Cat Fashion'
    }
}];


// lưu sản phẩm vào local
localStorage.setItem('initialProductsFashion', JSON.stringify(initialProductsFashion));
localStorage.setItem('fashion', JSON.stringify(featuredProductsFashion));

function getProductsFashion() {
    return JSON.parse(localStorage.getItem('initialProductsFashion')) || [];
}

function getFeaturedProductsFashion() {
    return JSON.parse(localStorage.getItem('featuredProductsFashion ')) || [];
}

function showFeaturedProductsFashion(featuredProductsFashion) {
    const featuredProductsFashionBox = document.getElementById('featuredProductsFashionBox');
    const product_itemFashion = getFeaturedProductsFashion();
    featuredProductsFashionBox.innerHTML = ''; // Clear current content
    product_itemFashion.innerText = `Showing ${featuredProductsFashion.length} results`;

    featuredProductsFashion.forEach(item => {
        const newItem = document.createElement('div');
        newItem.classList.add('box_itemFashion');
        newItem.innerHTML = `
            <div class="imgH"><img src="${item.image}" alt="Product"></div>
            <div class="detailH">
                <a href="detailtFashion.html?code=${item.id}" class="text-no-underline">
                    <p class="titleH"><b>${item.name}</b></p>
                    <p class="priceH">${item.price.toFixed(2)} VNĐ</p>
                </a>
                <div class="icon-products">
                    <i class="fa-regular fa-heart" style="color: orange;"></i>
                </div>
                <button id="featured-fashion" onclick="addToCartHomePageFashion(${item.id})" class="cart-hover"><span class="fa-solid fa-cart-shopping"></span></button>
                <span id="featured-icon" onclick="addToCartHomePageFashion(${item.id})"></span>
            
            </div>
        `;
        // <button id="featured-fashion" onclick="addToCartHomePage(${featuredProductsFashion[i].id})" class="cart-hover"><span class="fa-solid fa-cart-shopping"></span></button>
        featuredProductsFashionBox.appendChild(newItem);
    });
}

function showProductFashion(initialProductsFashion) {
    const listFashion = document.getElementById('listFashion'); //listF
    const resultCountFashion = document.getElementById('resultCountFashion');
    listFashion.innerHTML = '';
    resultCountFashion.innerText = `Showing ${initialProductsFashion.length} results`;

    initialProductsFashion.forEach(item => {
        const newItem = document.createElement('div');
        newItem.classList.add('product_itemFashion');
        newItem.innerHTML = `
            <div class="imgH"><img src="${item.image}" alt="Products_img"></div>
            <div class="detailH">
                <a href="detailtFashion.html?code=${item.id}" class="text no-underline"">
                    <p class="titleH"><b>${item.name}</b></p>
                    <p class="priceH">${item.price.toFixed(3)}  VNĐ</p>
                </a>
                <div class="icon-products">
                    <i class="fa-regular fa-heart" style="color: orange;"></i>
                </div>
                <button id="product-fashion" onclick="addToCartHomePageFashion(${item.id})" class="cart-hover"><span class="fa-solid fa-cart-shopping"></span></button>
                <span id="fashion-icon" onclick="addToCartHomePageFashion(${item.id})"></span>
                
                </div>`;

        listFashion.appendChild(newItem);
    });
}

// LỌC SẢN PHẨM
document.getElementById('applyFilterFashion').addEventListener('click', function() {
    const categoryFilters = Array.from(document.querySelectorAll('.filters input[type="checkbox"]:checked')).map(cb => cb.value);
    const minPrice = parseFloat(document.querySelector('input[name="minPrice"]').value) || 0;
    const maxPrice = parseFloat(document.querySelector('input[name="maxPrice"]').value) || Infinity;
    const searchTerm = document.querySelector('input[name="searchFashion"]').value.toLowerCase();

    const filteredProductsFashion = initialProductsFashion.filter(item => {
        const isInCategory = categoryFilters.length ? categoryFilters.includes(item.nature.type) : true;
        const isInPriceRange = item.price >= minPrice && item.price <= maxPrice;
        const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm);
        return isInCategory && isInPriceRange && matchesSearchTerm;
    });

    // Hiển thị sản phẩm đã lọc
    const productList = document.getElementById("listFashion");
    productList.innerHTML = ''; // Xóa danh sách sản phẩm trước khi thêm sản phẩm mới

    if (filteredProductsFashion.length > 0) {
        showProductFashion(filteredProductsFashion);
        console.log(filteredProductsFashion);
    } else {
        const nonListP = document.createElement('div');
        nonListP.classList.add('nonListP');
        nonListP.innerHTML = `
            <p class="nonresult"><i class="fa-solid fa-ban"></i><i>Product not found. Please check your search keywords or try again later!</i></p>`;
        productList.appendChild(nonListP); // Thêm thông báo vào danh sách
    }
});


// Hiện sản phẩm ban đầu
showFeaturedProductsFashion(featuredProductsFashion);
showProductFashion(initialProductsFashion);

//-------------------------------MODAL-------------------------
var modalFashion = document.getElementById("myModalFashion");
var btnBest = document.getElementById("product-fashion");
var btnFetured = document.getElementById("featured-fashion");
var btnIconBest = document.getElementById("featured-icon");
var btnIconFetured = document.getElementById("fashion-icon");

// Hàm để mở modalFashion khi nhấn vào nút có id phù hợp
function openModalOnClickFashion(parentId, buttonId1, buttonId2) {
    document.getElementById(parentId).addEventListener("click", function(event) {
        if (event.target && (event.target.id === buttonId1 || event.target.id === buttonId2)) {
            modalFashion.style.display = "block";
        }
    });
}


openModalOnClickFashion("listFashion", "product-fashion", "fashion-icon");
openModalOnClickFashion("featuredProductsFashionBox", "featured-fashion", "featured-icon");

var span = document.getElementsByClassName("closeFashion")[0];

// Tắt modalFashion khi bấm nút x
span.onclick = function() {
    modalFashion.style.display = "none";
}

// Tắt modalFashion khi bấm bất cứ 
window.onclick = function(event) {
        if (event.target == modalFashion) {
            modalFashion.style.display = "none";
        }
    }
    // ----------------------------------------------------GIỎ HÀNG-------------------------------------------------
    // Hiển thị ở giỏ hàng
const getUserIDFashion = localStorage.getItem("userID");

let getDataFashion = (key) => {
    const dataFashion = localStorage.getItem(key);
    return dataFashion ? JSON.parse(dataFashion) : [];
}

let userDataFashion = getDataFashion("productInCart");
console.log(userDataFashion);
console.log(Array.isArray(userDataFashion));
if (userDataFashion) {
    console.log('Success: true')
} else {
    console.log('Error')
}
let userDataFashionRender = userDataFashion.filter(value => value.userID == getUserIDFashion);

function renderProductsToTableFashion(userDataFashionRender, i) {
    const { image, name, quantity, price } = userDataFashionRender[i];
    return `
         <tr class="produc_In_Cart">
            <td class="moldal-detail-Fashion">
                <img class="moldal-detailFashion-img" src="${image}" alt="">
                    <div class="moldal-detailFashion-infor">
                    <p class="modalFashion-product-name">${name}</p>
                        <p id="remove-productFashion"  data-indexFashion="${i}" class="modalFashion-product-remove"><span class="icon-m-content fa-solid fa-xmark"></span> Remove product from cart</p>
                </div>
            </td>
            <td class="price-text">${price}</td>
            <td class="buttonQuantity">
                <button onclick="minusQuantityFashion(${i}, ${quantity})" class="minusQuantityFashion">-</button>
                <span class="mxFashion-2">${quantity}</span>
                <button onclick="plusQuantityFashion(${i})" class="plusQuantityFashion">+</button>
            </td>
            <td class="total-price">3000</td>
        </tr> 

    `;
}

// Hiển thị sản phẩm trong giỏ hàng
function listCartFashion() {
    document.getElementById("fashion-cart").innerHTML = '';
    let userDataFashionRender = getDataFashion("productInCart").filter(value => value.userID == getUserIDFashion);
    for (let i = 0; i < userDataFashionRender.length; i++) {
        let card = renderProductsToTableFashion(userDataFashionRender, i);
        document.getElementById("fashion-cart").innerHTML += card;
    }
}
listCartFashion();

// Tính tổng số lượng sản phẩm có trong giỏ hàng
// function totalProductFashion() {
//     document.getElementById("totalFashion").innerHTML = userDataFashionRender.length;
// }
// totalProductFashion();

// Tổng số tiền cho tất cả sản phẩm
function totalMoneyFashion() {
    if (userDataFashionRender.length > 0) {
        let totalFashion = 0;
        for (let i = 0; i < userDataFashionRender.length; i++) {
            totalFashion += userDataFashionRender[i].quantity * (3000)
        }

        // document.getElementById("totalFashion-money").innerHTML = totalFashion.toLocaleString();
    }
}
totalMoneyFashion();

// Nút + tăng số lượng mua
function plusQuantityFashion(indexFashion) {
    userDataFashionRender[indexFashion].quantity++;
    localStorage.setItem("productInCart", JSON.stringify(userDataFashionRender));
    listCartFashion();
    totalProductFashion();
    totalMoneyFashion();
}

// Nút - giảm số lượng mua
function minusQuantityFashion(indexFashion, quantity) {
    if (quantity > 1) {
        userDataFashionRender[indexFashion].quantity--;
        localStorage.setItem("productInCart", JSON.stringify(userDataFashionRender));
    } else {
        alert("Quantity min is 1")
    }
    listCartFashion();
    totalProductFashion();
    totalMoneyFashion();
}



// Thêm vào giỏ hàng 
const feturedProducts = JSON.parse(localStorage.getItem('fashion')) || [];
const bestSelling = JSON.parse(localStorage.getItem('initialProductsFashion')) || [];
const productTest = feturedProducts.concat(bestSelling);



// Thêm sản phẩm vào giỏ hàng cho user id
function addToCartHomePageFashion(id) {
    console.log(productTest)
    console.log('\hello')
    console.log(id);
    let checkProductInCart = userDataFashion.some(value => value.id == id && value.userID == getUserIDFashion);
    console.log(checkProductInCart);
    // Kiểm tra xem đã có đơn hàng chưa
    if (!checkProductInCart) {
        console.log(feturedProducts)
        // Tạo mới đơn hàng và lưu cho user id
        let pInProduct = productTest.find(value => value.id === id);
        console.log(pInProduct);
        userDataFashion.unshift({
            ...pInProduct,
            quantity: 1,
            userID: getUserIDFashion
        })
        console.log("Kiem tra don haang: ", userDataFashion.find(value => value.id === id && value.userID == getUserIDFashion));
        localStorage.setItem("productInCart", JSON.stringify(userDataFashion));
    } else {
        let getIndex = userDataFashion.findIndex(value => value.id === id);
        let pInProduct = userDataFashion.find(value => value.id === id)
        userDataFashion[getIndex] = {
            ...pInProduct,
            quantity: ++pInProduct.quantity,
            userID: getUserIDFashion
        }
        localStorage.setItem("productInCart", JSON.stringify(userDataFashion));
    }
    listCartFashion();
    // totalProductFashion();
    totalMoneyFashion();
    modalFashion.style.display = "block";
}

// Xoá sản phẩm khỏi giỏ hàng
function removeProductFashion(event) {
    // Lấy indexFashion từ thuộc tính data-indexFashion của phần tử đã nhấn
    const indexFashion = event.target.closest('#remove-productFashion').getAttribute('data-indexFashion');

    if (userDataFashion.length > 0) {
        userDataFashion.splice(indexFashion, 1);
        localStorage.setItem("productInCart", JSON.stringify(userDataFashion));
        if (userDataFashion.length == 0) {
            modalFashion.style.display = "none";
        }
    } else {
        alert("Giỏ hàng của bạn trống!");
    }

    listCartFashion();
    totalProductFashion();
    totalMoneyFashion();
}
document.getElementById("fashion-cart").addEventListener('click', function(event) {
    if (event.target && event.target.closest('#remove-productFashion')) {
        removeProductFashion(event);
    }
});

// Lưu vào local storage sản phẩm muốn mua và chuyển sang trang order khi nhấn nút order
function OrderFashion() {
    if (userDataFashionRender.length > 0) {
        localStorage.setItem('orderDetails', JSON.stringify(userDataFashionRender));
        window.location.href = "/pages/Order.html";
    } else {
        alert("Giỏ hàng của bạn trống!");
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
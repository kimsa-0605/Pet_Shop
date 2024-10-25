const initialProductsFood = [{
    id: 1,
    name: 'Premium Cat Food',
    price: 250.000,
    image: "/meo1.webp",
    description: "A high-quality cat food formulated with premium ingredients for your feline's health.",
    nature: {
        type: 'Cat Food',

    }
}, {
    id: 2,
    name: 'Dog Food',
    price: 299.000,
    image: "/cho1.webp",

    description: "Nutritious dog food made with real meat and wholesome grains for optimal growth.",
    nature: {
        type: 'Dog Food'
    }
}, {
    id: 3,
    name: 'Premium Dog Food',
    price: 200.000,
    image: "/cho2.webp",
    description: "Premium dog food designed to meet the specific needs of active dogs.",
    nature: {
        type: 'Dog Food',
    }
}, {
    id: 4,
    name: 'Cat Treats',
    price: 250.000,
    image: "/meo2.jpg",
    description: "Delicious cat treats that are perfect for rewarding your feline friend.",
    nature: {
        type: 'Cat Food'
    }
}, {
    id: 5,
    name: 'Mix Pate',
    price: 350.000,
    image: "/meo5.jpg",
    description: "A savory mix of pate that offers a delightful taste for your pets.",
    nature: {
        type: 'Cat Food'
    }
}, {
    id: 6,
    name: 'Fish',
    price: 280.000,
    image: "/meo4.jpg",
    description: "High-quality fish-based food that promotes healthy skin and shiny fur.",
    nature: {
        type: 'Cat Food'
    }
}, {
    id: 7,
    name: 'Vegetable',
    price: 150.000,
    image: "/cho3.webp",
    description: "A blend of fresh vegetables that provide essential vitamins and minerals.",
    nature: {
        type: 'Dog Food'
    }
}, {
    id: 8,
    name: 'Beef',
    price: 250.000,
    image: "/cho4.webp",
    description: "Wholesome beef meal that dogs love, packed with protein for energy.",
    nature: {
        type: 'Dog Food'
    }
}, {
    id: 9,
    name: 'Chicken',
    price: 199.000,
    image: "/cho5.jpg",
    description: "Tender chicken meal that provides essential nutrients for a healthy lifestyle.",
    nature: {
        type: 'Dog Food'
    }
}, /* Other products... */ ];

const featuredProductsFood = [{
    id: 4,
    name: 'Cat Treats',
    price: 150.000,
    image: "/meo2.jpg",
    description: "Delicious cat treats that are perfect for rewarding your feline friend.",
    nature: {
        type: 'Cat Food'
    }
}, {
    id: 5,
    name: 'Mix Pate',
    price: 300.000,
    image: "/meo5.jpg",
    description: "A savory mix of pate that offers a delightful taste for your pets.",
    nature: {
        type: 'Cat Food'
    }
}, {
    id: 6,
    name: 'Fish',
    price: 250.000,
    image: "/meo4.jpg",
    description: "High-quality fish-based food that promotes healthy skin and shiny fur.",
    nature: {
        type: 'Cat Food'
    }
}, ];

// lưu sản phẩm vào local
localStorage.setItem('initialProductsFood', JSON.stringify(initialProductsFood));
localStorage.setItem('featuredProductsFood', JSON.stringify(featuredProductsFood));

function getProductsFood() {
    return JSON.parse(localStorage.getItem('initialProductsFood')) || [];
}

function getFeaturedProductsFood() {
    return JSON.parse(localStorage.getItem('featuredProductsFood ')) || [];
}

function showFeaturedProductsFood(featuredProductsFood) {
    const featuredProductsFoodBox = document.getElementById('featuredProductsFoodBox');
    const products = getFeaturedProductsFood();
    featuredProductsFoodBox.innerHTML = ''; // Clear current content
    products.innerText = `Showing ${featuredProductsFood.length} results`;

    featuredProductsFood.forEach(item => {
        const newItem = document.createElement('div');
        newItem.classList.add('box_itemF');
        newItem.innerHTML = `
    <div class="imgH"><img src="${item.image}" alt="Product"></div>
    <div class="detailH">
        <a href="detailtFood.html?code=${item.id}" class="text no-underline"">
            <p class="titleH"><b>${item.name}</p>
            <p class="priceH"><b>${item.price.toFixed(2)} VNĐ</p>
        </a>
         <div class="icon-products">
             <i class="fa-regular fa-heart" style="color: orange;"></i>
         </div>
         <button id="featured-food" onclick="addToCartHomePageFood(${item.id})" class="cart-hover"><span class="fa-solid fa-cart-shopping"></span></button>
         <span id="featured-iconF" onclick="addToCartHomePageFood(${item.id})" class="fa-solid fa-cart-shopping"></span>
       
    </div>
`;
        // <button id="featured-food" onclick="addToCartHomePage(${featuredProductsFood[i].id})" class="cart-hover"><span class="fa-solid fa-cart-shopping"></span></button>
        featuredProductsFoodBox.appendChild(newItem);
    });
}

function showProductFood(initialProductsFood) {
    const listF = document.getElementById('listF');
    const resultCount = document.getElementById('resultCount');
    listF.innerHTML = '';
    resultCount.innerText = `Showing ${initialProductsFood.length} results`;

    initialProductsFood.forEach(item => {
        const newItem = document.createElement('div');
        newItem.classList.add('product_itemF');
        newItem.innerHTML = `
    <div class="imgH"><img src="${item.image}" alt="Products_img"></div>
    <div class="detailH">
        <a href="detailtFood.html?code=${item.id}" class="text no-underline"">
            <p class="titleH"><b>${item.name}</b></p>
            <p class="price"><b>${item.price.toFixed(2)}  VNĐ</b></p>
        </a>
         <div class="icon-products">
             <i class="fa-regular fa-heart" style="color: orange;"></i>
         </div>
         <button id="product-food" onclick="addToCartHomePageFood(${item.id})" class="cart-hover"><span class="fa-solid fa-cart-shopping"></span></button>
          <span id="food-icon" onclick="addToCartHomePageFood(${item.id})" class="fa-solid fa-cart-shopping"></span>
         
        </div>`;
        //<button id="product-food" onclick="addToCartHomePage(${initialProductsFood[i].id})" class="cart-hover"><span class="fa-solid fa-cart-shopping"></span></button>;
        listF.appendChild(newItem);
    });
}

// LỌC SẢN PHẨM
document.getElementById('applyFilter').addEventListener('click', function() {
    const categoryFilters = Array.from(document.querySelectorAll('.filters input[type="checkbox"]:checked')).map(cb => cb.value);
    const minPrice = parseFloat(document.querySelector('input[name="minPrice"]').value) || 0;
    const maxPrice = parseFloat(document.querySelector('input[name="maxPrice"]').value) || Infinity;
    const searchTerm = document.querySelector('input[name="searchFood"]').value.toLowerCase();


    const filteredProductsFood = initialProductsFood.filter(item => {
        const isInCategory = categoryFilters.length ? categoryFilters.includes(item.nature.type) : true;
        const isInPriceRange = item.price >= minPrice && item.price <= maxPrice;
        const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm);
        return isInCategory && isInPriceRange && matchesSearchTerm;
    });
    //hiển thị sản phẩm đã lọc
    showProductFood(filteredProductsFood);
    console.log(filteredProductsFood)
});

// Hiện sản phẩm ban đầu
showFeaturedProductsFood(featuredProductsFood);
showProductFood(initialProductsFood);


// // --------------------------------------MODAL------------------------
//-------------------------------MODAL-------------------------
var modalFood = document.getElementById("myModalFood");
var btnBest = document.getElementById("product-food");
var btnFetured = document.getElementById("featured-food");
var btnIconBest = document.getElementById("featured-iconF");
var btnIconFetured = document.getElementById("food-icon");

// Hàm để mở modalFood khi nhấn vào nút có id phù hợp
function openModalOnClickFood(parentId, buttonId1, buttonId2) {
    document.getElementById(parentId).addEventListener("click", function(event) {
        if (event.target && (event.target.id === buttonId1 || event.target.id === buttonId2)) {
            modalFood.style.display = "block";
        }
    });
}


openModalOnClickFood("listF", "product-food", "food-icon");
openModalOnClickFood("featuredProductsFoodBox", "featured-food", "featured-iconF");

var span = document.getElementsByClassName("closeFood")[0];

// Tắt modalFood khi bấm nút x
span.onclick = function() {
    modalFood.style.display = "none";
}

// Tắt modalFood khi bấm bất cứ 
window.onclick = function(event) {
        if (event.target == modalFood) {
            modalFood.style.display = "none";
        }
    }
    // ----------------------------------------------------GIỎ HÀNG-------------------------------------------------
    // Hiển thị ở giỏ hàng
const getUserIDFood = localStorage.getItem("userID");

let getDataFood = (key) => {
    const dataFashion = localStorage.getItem(key);
    return dataFashion ? JSON.parse(dataFashion) : [];
}

let userDataFood = getDataFood("productInCart");
console.log(userDataFood);
console.log(Array.isArray(userDataFood));
if (userDataFood) {
    console.log('Success: true')
} else {
    console.log('Error')
}
let userDataFoodRender = userDataFood.filter(value => value.userID == getUserIDFood);

function renderProductsToTableFood(userDataFoodRender, i) {
    const { image, name, quantity, price } = userDataFoodRender[i];
    return `
        <tr class="produc_In_Cart">
            <td class="moldal-detailFood">
                <img class="moldal-detailFood-img" src="${image}" alt="">
                <div class="moldal-detailFood-infor">
                    <p class="modal-productFood-name">${name}</p>
                    <p id="remove-productFood"  data-indexFood="${i}" class="modal-productFood-remove"><span class="icon-m-contentFood fa-solid fa-xmark"></span> Remove product from cart</p>
                </div>
            </td>
            <td class="price-text">${price}</td>
            <td>
                <button onclick="minusQuantityFood(${i}, ${quantity})" class="minusQuantityFood">-</button>
                <span class="mxFood-2">${quantity}</span>
                <button onclick="plusQuantityFood(${i})" class="plusQuantityFood">+</button>
            </td>
            <td class="total-price">${((quantity) * (price.replace(/\./g, ''))).toLocaleString()}</td>
        </tr>
    `;
}

// Hiển thị sản phẩm trong giỏ hàng
function listCartFood() {
    document.getElementById("product-cart").innerHTML = '';
    let userDataFoodRender = getDataFood("productInCart").filter(value => value.userID == getUserIDFood);
    for (let i = 0; i < userDataFoodRender.length; i++) {
        let card = renderProductsToTableFood(userDataFoodRender, i);
        document.getElementById("product-cart").innerHTML += card;
    }
}
listCartFood();

// Tính tổng số lượng sản phẩm có trong giỏ hàng
function totalProductFood() {
    document.getElementById("totalFood").innerHTML = userDataFoodRender.length;
}
totalProductFood();

// Tổng số tiền cho tất cả sản phẩm
function totalMoneyFood() {
    if (userDataFoodRender.length > 0) {
        let totalFood = 0;
        for (let i = 0; i < userDataFoodRender.length; i++) {
            totalFood += userDataFoodRender[i].quantity * (userDataFoodRender[i].price.replace(/\./g, '')).toLocaleString()
        }

        document.getElementById("totalFood-money").innerHTML = totalFood.toLocaleString();
    }
}
totalMoneyFood();

// Nút + tăng số lượng mua
function minusQuantityFood(indexFashion) {
    userDataFoodRender[indexFashion].quantity++;
    localStorage.setItem("productInCart", JSON.stringify(userDataFoodRender));
    listCartFood();
    totalProductFood();
    totalMoneyFood();
}

// Nút - giảm số lượng mua
function minusQuantityFood(indexFashion, quantity) {
    if (quantity > 1) {
        userDataFoodRender[indexFashion].quantity--;
        localStorage.setItem("productInCart", JSON.stringify(userDataFoodRender));
    } else {
        alert("Quantity min is 1")
    }
    listCartFood();
    totalProductFood();
    totalMoneyFood();
}



// Thêm vào giỏ hàng 
const feturedProducts = JSON.parse(localStorage.getItem('featuredProductsFood')) || [];
const bestSelling = JSON.parse(localStorage.getItem('initialProductsFood')) || [];
product_itemFood = feturedProducts.concat(bestSelling);

// Thêm sản phẩm vào giỏ hàng cho user id
function addToCartHomePageFood(id) {
    console.log(id);
    let checkProductInCart = userDataFood.some(value => value.id == id && value.userID == getUserIDFood);
    console.log(checkProductInCart);
    // Kiểm tra xem đã có đơn hàng chưa
    if (!checkProductInCart) {
        // Tạo mới đơn hàng và lưu cho user id
        let pInProduct = product_itemFood.find(value => value.id === id);
        console.log(pInProduct);
        userDataFood.unshift({
            ...pInProduct,
            quantity: 1,
            userID: getUserIDFood
        })
        console.log("Kiem tra don haang: ", userDataFood.find(value => value.id === id && value.userID == getUserIDFood));
        localStorage.setItem("productInCart", JSON.stringify(userDataFood));
    } else {
        let getIndex = userDataFood.findIndex(value => value.id === id);
        let pInProduct = userDataFood.find(value => value.id === id)
        userDataFood[getIndex] = {
            ...pInProduct,
            quantity: ++pInProduct.quantity,
            userID: getUserIDFood
        }
        localStorage.setItem("productInCart", JSON.stringify(userDataFood));
    }
    listCartFood();
    totalProductFood();
    totalMoneyFood();
    modalFood.style.display = "block";
}

// Xoá sản phẩm khỏi giỏ hàng
function removeProductFood(event) {
    // Lấy indexFashion từ thuộc tính data-indexFood của phần tử đã nhấn
    const indexFashion = event.target.closest('#remove-productFood').getAttribute('data-indexFood');

    if (userDataFood.length > 0) {
        userDataFood.splice(indexFashion, 1);
        localStorage.setItem("productInCart", JSON.stringify(userDataFood));
        if (userDataFood.length == 0) {
            modalFood.style.display = "none";
        }
    } else {
        alert("Giỏ hàng của bạn trống!");
    }

    listCartFood();
    totalProductFood();
    totalMoneyFood();
}
document.getElementById("product-cart").addEventListener('click', function(event) {
    if (event.target && event.target.closest('#remove-productFood')) {
        removeProductFood(event);
    }
});

// Lưu vào local storage sản phẩm muốn mua và chuyển sang trang order khi nhấn nút order
function OrderFashion() {
    if (userDataFoodRender.length > 0) {
        localStorage.setItem('orderDetailsFood', JSON.stringify(userDataFoodRender));
        window.location.href = "/pages/Order.html";
    } else {
        alert("Giỏ hàng của bạn trống!");
    }
}
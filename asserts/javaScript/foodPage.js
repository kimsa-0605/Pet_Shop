const initialProductsFood = [{
    id: 1,
    name: 'Premium Cat Food',
    price: "250.000",
    image: "/asserts/image/premiumCat.webp",
    description: "A high-quality cat food formulated with premium ingredients for your feline's health.",
    nature: {
        type: 'Cat Food',
    }
}, {
    id: 2,
    name: 'Dog Food',
    price: "299.000",
    image: "/asserts/image/dogFood.webp",
    description: "Nutritious dog food made with real meat and wholesome grains for optimal growth.",
    nature: {
        type: 'Dog Food'
    }
}, {
    id: 3,
    name: 'Premium Dog Food',
    price: "200.000",
    image: "/asserts/image/premiumDogFood.jpg",
    description: "Premium dog food designed to meet the specific needs of active dogs.",
    nature: {
        type: 'Dog Food',
    }
}, {
    id: 4,
    name: 'Cat Treats',
    price: "250.000",
    image: "/asserts/image/catTreats.webp",
    description: "Delicious cat treats that are perfect for rewarding your feline friend.",
    nature: {
        type: 'Cat Food'
    }
}, {
    id: 5,
    name: 'Mix Pate',
    price: "350.000",
    image: "/asserts/image/mixPate.jpg",
    description: "A savory mix of pate that offers a delightful taste for your pets.",
    nature: {
        type: 'Cat Food'
    }
}, {
    id: 6,
    name: 'Fish',
    price: "280.000",
    image: "/asserts/image/fish.webp",
    description: "High-quality fish-based food that promotes healthy skin and shiny fur.",
    nature: {
        type: 'Cat Food'
    }
}, {
    id: 7,
    name: 'Vegetable',
    price: "150.000",
    image: "/asserts/image/vegetable.jpg_c=1",
    description: "A blend of fresh vegetables that provide essential vitamins and minerals.",
    nature: {
        type: 'Dog Food'
    }
}, {
    id: 8,
    name: 'Beef',
    price: "250.000",
    image: "/asserts/image/beef.jpg",
    description: "Wholesome beef meal that dogs love, packed with protein for energy.",
    nature: {
        type: 'Dog Food'
    }
}, {
    id: 9,
    name: 'Chicken',
    price: "199.000",
    image: "/asserts/image/chicken.jpg",
    description: "Tender chicken meal that provides essential nutrients for a healthy lifestyle.",
    nature: {
        type: 'Dog Food'
    }
}];

const featuredProductsFood = [{
    id: 4,
    name: 'Cat Treats',
    price: "150.000",
    image: "/asserts/image/catTreats.webp",
    description: "Delicious cat treats that are perfect for rewarding your feline friend.",
    nature: {
        type: 'Cat Food'
    }
}, {
    id: 5,
    name: 'Mix Pate',
    price: "300.000",
    image: "/asserts/image/mixPate.jpg",
    description: "A savory mix of pate that offers a delightful taste for your pets.",
    nature: {
        type: 'Cat Food'
    }
}, {
    id: 6,
    name: 'Fish',
    price: "250.000",
    image: "/asserts/image/fish.webp",
    description: "High-quality fish-based food that promotes healthy skin and shiny fur.",
    nature: {
        type: 'Cat Food'
    }
}];

// Save products to local storage
localStorage.setItem('initialProductsFood', JSON.stringify(initialProductsFood));
localStorage.setItem('featuredProductsFood', JSON.stringify(featuredProductsFood));

function getProductsFood() {
    return JSON.parse(localStorage.getItem('initialProductsFood')) || [];
}

function getFeaturedProductsFood() {
    return JSON.parse(localStorage.getItem('featuredProductsFood')) || [];
}

function showFeaturedProductsFood(featuredProductsFood) {
    const featuredProductsFoodBox = document.getElementById('featuredProductsFoodBox');
    const product_itemFood = getFeaturedProductsFood();
    featuredProductsFoodBox.innerHTML = ''; // Clear current content
    product_itemFood.innerText = `Showing ${featuredProductsFood.length} results`;

    featuredProductsFood.forEach(item => {
        const newItem = document.createElement('div');
        newItem.classList.add('box_itemFood');
        newItem.innerHTML = `
            <div class="imgH"><img src="${item.image}" alt="Product"></div>
            <div class="detailH">
                <a href="detailtFood.html?code=${item.id}" class="text-no-underline">
                    <p class="titleH"><b>${item.name}</b></p>
                    <p class="priceH">${item.price} VNĐ</p>
                </a>
                <div class="icon-products">
                    <i class="fa-regular fa-heart" style="color: orange;"></i>
                </div>
                <button id="featured-food" onclick="addToCartHomePageFood(${item.id})" class="cart-hover"><span class="fa-solid fa-cart-shopping"></span></button>
                <span id="featured-icon" onclick="addToCartHomePageFood(${item.id})"></span>
            </div>
        `;
        featuredProductsFoodBox.appendChild(newItem);
    });
}

function showProductFood(initialProductsFood) {
    const listFood = document.getElementById('listFood');
    const resultCountFood = document.getElementById('resultCountFood');
    listFood.innerHTML = '';
    resultCountFood.innerText = `Showing ${initialProductsFood.length} results`;

    initialProductsFood.forEach(item => {
        const newItem = document.createElement('div');
        newItem.classList.add('product_itemFood');
        newItem.innerHTML = `
            <div class="imgH"><img src="${item.image}" alt="Products_img"></div>
            <div class="detailH">
                <a href="detailtFood.html?code=${item.id}" class="text-no-underline">
                    <p class="titleH"><b>${item.name}</b></p>
                    <p class="priceH">${item.price} VNĐ</p>
                </a>
                <div class="icon-products">
                    <i class="fa-regular fa-heart" style="color: orange;"></i>
                </div>
                <button id="product-food" onclick="addToCartHomePageFood(${item.id})" class="cart-hover"><span class="fa-solid fa-cart-shopping"></span></button>
                <span id="food-icon" onclick="addToCartHomePageFood(${item.id})"></span>
            </div>`;
        listFood.appendChild(newItem);
    });
}

document.getElementById('applyFilterFood').addEventListener('click', function() {
    const categoryFilters = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    const minPrice = parseFloat(document.querySelector('input[name="minPrice"]').value) || 0;
    const maxPrice = parseFloat(document.querySelector('input[name="maxPrice"]').value) || Infinity;
    const searchTerm = document.querySelector('input[name="searchFood"]').value.toLowerCase();

    const filteredProductsFood = initialProductsFood.filter(item => {
        const isInCategory = categoryFilters.length ? categoryFilters.includes(item.nature.type) : true;
        const isInPriceRange = item.price >= minPrice && item.price <= maxPrice;
        const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm);
        return isInCategory && isInPriceRange && matchesSearchTerm;
    });

    const productList = document.getElementById("listFood");
    productList.innerHTML = '';

    if (filteredProductsFood.length > 0) {
        showProductFood(filteredProductsFood);
    } else {
        const nonListP = document.createElement('div');
        nonListP.classList.add('nonListP');
        nonListP.innerHTML = `
            <p class="nonresult"><i class="fa-solid fa-ban"></i><i>Product not found. Please check your search keywords or try again later!</i></p>`;
        productList.appendChild(nonListP);
    }
});

showFeaturedProductsFood(featuredProductsFood);
showProductFood(initialProductsFood);

var modalFood = document.getElementById("myModalFood");
var btnBest = document.getElementById("product-food");
var btnFeatured = document.getElementById("featured-food");
var btnIconBest = document.getElementById("featured-icon");
var btnIconFeatured = document.getElementById("food-icon");

function openModalOnClickFood(parentId, buttonId1, buttonId2) {
    document.getElementById(parentId).addEventListener("click", function(event) {
        if (event.target && (event.target.id === buttonId1 || event.target.id === buttonId2)) {
            modalFood.style.display = "block";
        }
    });
}

openModalOnClickFood("listFood", "product-food", "food-icon");
openModalOnClickFood("featuredProductsFoodBox", "featured-food", "featured-icon");

const closeModalFood = document.getElementsByClassName("closeFood")[0];
closeModalFood.onclick = function () {
    modalFood.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modalFood) {
        modalFood.style.display = "none";
    }
};

    // ----------------------------------------------------GIỎ HÀNG-------------------------------------------------
    // Hiển thị ở giỏ hàng
    const getUserIDFood = localStorage.getItem("userID");

    let getDataFood = (key) => {
        const dataFood = localStorage.getItem(key);
        return dataFood ? JSON.parse(dataFood) : [];
    }
    
    let userDataFood = getDataFood("productInCart");
    console.log(userDataFood);
    console.log(Array.isArray(userDataFood));
    if (userDataFood) {
        console.log('Success: true');
    } else {
        console.log('Error');
    }
    let userDataFoodRender = userDataFood.filter(value => value.userID == getUserIDFood);
    
    function renderProductsToTableFood(userDataFoodRender, i) {
        const { image, name, quantity, price } = userDataFoodRender[i];
        return `
             <tr class="product_In_Cart">
                <td class="modal-detail-Food">
                    <img class="modal-detailFood-img" src="${image}" alt="">
                        <div class="modal-detailFood-infor">
                        <p class="modalFood-product-name">${name}</p>
                            <p id="remove-productFood" data-indexFood="${i}" class="modalFood-product-remove"><span class="icon-m-content fa-solid fa-xmark"></span> Remove product from cart</p>
                    </div>
                </td>
                <td class="price-text">${price}</td>
                <td class="buttonQuantity">
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
        document.getElementById("food-cart").innerHTML = '';
        let userDataFoodRender = getDataFood("productInCart").filter(value => value.userID == getUserIDFood);
        for (let i = 0; i < userDataFoodRender.length; i++) {
            let card = renderProductsToTableFood(userDataFoodRender, i);
            document.getElementById("food-cart").innerHTML += card;
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
                totalFood += userDataFoodRender[i].quantity * (userDataFoodRender[i].price.replace(/\./g, ''));
            }
    
            document.getElementById("totalFood-money").innerHTML = totalFood.toLocaleString();
        }
    }
    totalMoneyFood();
    
    // Nút + tăng số lượng mua
    function plusQuantityFood(indexFood) {
        userDataFoodRender[indexFood].quantity++;
        localStorage.setItem("productInCart", JSON.stringify(userDataFoodRender));
        listCartFood();
        totalProductFood();
        totalMoneyFood();
    }
    
    // Nút - giảm số lượng mua
    function minusQuantityFood(indexFood, quantity) {
        if (quantity > 1) {
            userDataFoodRender[indexFood].quantity--;
            localStorage.setItem("productInCart", JSON.stringify(userDataFoodRender));
        } else {
            alert("Quantity min is 1");
        }
        listCartFood();
        totalProductFood();
        totalMoneyFood();
    }
    
    // Thêm vào giỏ hàng 
    const featuredProducts = JSON.parse(localStorage.getItem('featuredProductFood')) || [];
    const bestSelling = JSON.parse(localStorage.getItem('initialProductsFood')) || [];
    const productTest = featuredProducts.concat(bestSelling);
    
    // Thêm sản phẩm vào giỏ hàng cho user id
    function addToCartHomePageFood(id) {
        console.log(productTest);
        console.log('\hello');
        console.log(id);
        let checkProductInCart = userDataFood.some(value => value.id == id && value.userID == getUserIDFood);
        console.log(checkProductInCart);
        // Kiểm tra xem đã có đơn hàng chưa
        if (!checkProductInCart) {
            console.log(featuredProducts);
            // Tạo mới đơn hàng và lưu cho user id
            let pInProduct = productTest.find(value => value.id === id);
            console.log(pInProduct);
            userDataFood.unshift({
                ...pInProduct,
                quantity: 1,
                userID: getUserIDFood
            });
            console.log("Kiem tra don haang: ", userDataFood.find(value => value.id === id && value.userID == getUserIDFood));
            localStorage.setItem("productInCart", JSON.stringify(userDataFood));
        } else {
            let getIndex = userDataFood.findIndex(value => value.id === id);
            let pInProduct = userDataFood.find(value => value.id === id);
            userDataFood[getIndex] = {
                ...pInProduct,
                quantity: ++pInProduct.quantity,
                userID: getUserIDFood
            };
            localStorage.setItem("productInCart", JSON.stringify(userDataFood));
        }
        userDataFoodRender = userDataFood.filter(value => value.userID == getUserIDFood);
        listCartFood();
        totalProductFood();
        totalMoneyFood();
        modalFood.style.display = "block";
    }
    
    // Xoá sản phẩm khỏi giỏ hàng
    function removeProductFood(event) {
        // Lấy indexFood từ thuộc tính data-indexFood của phần tử đã nhấn
        const indexFood = event.target.closest('#remove-productFood').getAttribute('data-indexFood');
    
        if (userDataFood.length > 0) {
            userDataFood.splice(indexFood, 1);
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
    
    document.getElementById("food-cart").addEventListener('click', function(event) {
        if (event.target && event.target.closest('#remove-productFood')) {
            removeProductFood(event);
        }
    });
    
    // Lưu vào local storage sản phẩm muốn mua và chuyển sang trang order khi nhấn nút order
    function OrderFood() {
        if (userDataFoodRender.length > 0) {
            localStorage.setItem('orderDetails', JSON.stringify(userDataFoodRender));
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
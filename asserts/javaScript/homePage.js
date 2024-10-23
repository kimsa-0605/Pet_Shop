var fetured_products = [
    {
        id: 1,
        name: "Dried meat",        
        price: "200.000",
        image: "/asserts/image/feturedHomepage1.webp",
        description: "Roasted and smoked beef liver for dogs. Nutritional composition: Crude protein ≥18%, Crude fat ≥5%, Crude fiber ≤9%, Crude ash ≤1%, Minerals ≥1.5%, Calcium ≥1.2%, Phosphorus ≥0.5%, Salt ≤0.09%, Moisture ≤10%. Suitable for all breeds.",
        
    },
    {
        id: 2,
        name: "Chicken jerky",
        price: "150.000",
        image: "/asserts/image/feturedHomepage2.webp",
        description: "Chicken jerky strips, high in protein. Nutritional composition: Crude protein ≥22%, Crude fat ≤3%, Moisture ≤12%. Perfect for dogs with sensitive stomachs.",
    },
    {
        id: 3,
        name: "Beef bites",        
        price: "180.000",
        image: "/asserts/image/feturedHomepage3.webp",
        description: "Small beef bites, easy to chew. Nutritional composition: Crude protein ≥20%, Crude fat ≤5%, Moisture ≤11%. Ideal for training.",
    }
]

var best_selling = [
        {
            id: 4,
            name: "Chicken nugget",
            price: "150.000",
            image: "/asserts/image/bestFood1.webp",
            description: "Crunchy chicken nuggets. Nutritional composition: Crude protein ≥25%, Crude fat ≤7%, Moisture ≤12%. Perfect for snacks."
        },
        {
            id: 5,
            name: "Dinosaur",
            price: "200.000",
            image: "/asserts/image/bestFashion1.webp",
            description: "Fun and playful green dinosaur hoodie, perfect for adding a touch of adventure to your wardrobe. Made from soft, comfortable fabric with a hood featuring cute dinosaur spikes. Ideal for both kids and adults who love a quirky, unique style. Great for casual outings or cozy days at home."
        },
        {
            id: 6,
            name: "Schoolgirl dress",
            price: "210.000",
            image: "/asserts/image/bestFashion2.webp",
            description: "Classic and charming schoolgirl dress, perfect for everyday wear or special occasions. Designed with a youthful and preppy style, made from soft, durable fabric. This dress offers both comfort and elegance, ideal for creating a fresh and vibrant look."
        },
        {
            id: 7,
            name: "Duck bites",
            price: "190.000",
            image: "/asserts/image/bestFood3.webp",
            description: "Tasty duck bites, easy to digest. Nutritional composition: Crude protein ≥21%, Crude fat ≤5%, Moisture ≤10%. Ideal for sensitive stomachs."
        },
        {
            id: 8,
            name: "Turkey slices",
            price: "170.000",
            image: "/asserts/image/bestFood2.webp",
            description: "Lean turkey slices, high in protein. Nutritional composition: Crude protein ≥23%, Crude fat ≤4%, Moisture ≤11%. Excellent for active pets."
        },
        {
            id: 9,
            name: "Cute hoodie",
            price: "160.000",
            image: "/asserts/image/bestFashion4.webp",
            description: "Adorable and cozy hoodie, perfect for casual wear or lounging at home. Made from soft, breathable fabric, ensuring both comfort and warmth. Features a cute design, making it a stylish addition to your wardrobe for any season."
        },
        {
            id: 10,
            name: "Ladylike dress",
            price: "220.000",
            image: "/asserts/image/bestFashion3.webp",
            description: "Elegant and feminine ladylike dress, perfect for special occasions or everyday wear. Made from high-quality fabric, designed to provide comfort and style. Features a classic silhouette with delicate details, ensuring you look graceful and poised.",
        },
        {
            id: 11,
            name: "Tuna chips",
            price: "140.000",
            image: "/asserts/image/bestFood4.webp",
            description: "Crispy tuna chips, light and crunchy. Nutritional composition: Crude protein ≥22%, Crude fat ≤4%, Moisture ≤10%. Perfect for light snacking."
        }
]
// lưu sản phẩm vào local
localStorage.setItem('fetured_products', JSON.stringify(fetured_products));
localStorage.setItem('best_selling', JSON.stringify(best_selling));

function createCard(fetured_products, i) {
    let demo = '<div class="box_item" data-aos="fade-up" data-aos-duration="1000">';
        demo += '<img src="'+ fetured_products[i].image +'" alt="Products_img">';
        demo += `<a href="detail.html?code=${fetured_products[i].id}" class="text">`;
        demo += '<div class="icon_food">';
        demo += '<p><b>' + fetured_products[i].name + '</b></p>';
        demo += '<i class="fa-regular fa-heart" style="color: orange;"></i>';
        demo += '</div>';
        demo += '<p class="price"><b>' + fetured_products[i].price + ' VNĐ</b></p>';
        demo += `</a>`;
        demo += `<button id="myBtn-fetured" onclick="addToCartHomePage(${fetured_products[i].id})" class="cart-hover">`;
        demo += `<span id="myBtn-icon-fetured" onclick="addToCartHomePage(${fetured_products[i].id})" class="fa-solid fa-cart-shopping"></span>`
        demo += `</button>`;
        demo += '</div>';
        
    return demo;
}

function createCard_Best(best_selling, i) {
    let demo = '<div class="products">';
        demo += '<div class="img">';
        demo += '<img src="'+ best_selling[i].image +'" alt="Products_img">';
        demo += '</div>';
        demo += `<a href="detail.html?code=${best_selling[i].id}" class="details">`;
        demo += '<div class="details-products">';
        demo += '<p class="title-product" ><b>' + best_selling[i].name + '</b></p>';
        demo += '<p class="price-product">' + best_selling[i].price + ' VNĐ</p>'; 
        demo += '</div>';
        demo += '<div class="icon-products">';
        demo += '<i class="fa-regular fa-heart"></i>';
        demo += '</div>';
        demo += `</a>`;
        demo += `<button id="myBtn-best" onclick="addToCartHomePage(${best_selling[i].id})" class="cart-hover">`;
        demo += `<span id="myBtn-icon-best" onclick="addToCartHomePage(${best_selling[i].id})" class="fa-solid fa-cart-shopping"></span>`;
        demo += `</button>`;
    return demo;
}

// ---------------------------------HIỂN THỊ SẢN PHẨM------------------------------------

function listProducts() {
    for (let i = 0; i < fetured_products.length; i++) {
        let card = createCard(fetured_products, i);
        document.getElementById("fetured_products").innerHTML += card;
    }

    for (let i = 0; i < best_selling.length; i++) {
        let card = createCard_Best(best_selling, i);
        document.getElementById("best-product-content").innerHTML += card;
    }

    // Đảm bảo phần tử HTML myBtn đã tồn tại
    var btn = document.getElementById("myBtn");
    btn.onclick = function() {
        modal.style.display = "block";
    };
}

// -------------------------------------ĐIỀU HƯỚNG-------------------------------
function dieu_huong(page) {
    if (page === 'AboutUs') {
        location.assign("/pages/About.html");
    } else if (page === 'Fashion') {
        location.assign("detailt.html");
    } else if (page === 'Food') {
        location.assign("/FoodPage/boloc.html");
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

window.onload = function() {
    listProducts();
};


// --------------------------------------MODAL------------------------

var modal = document.getElementById("myModal");
var btnBest = document.getElementById("myBtn-best");
var btnFetured = document.getElementById("myBtn-fetured");
var btnIconBest = document.getElementById("myBtn-icon-best");
var btnIconFetured = document.getElementById("myBtn-icon-fetured");


var span = document.getElementsByClassName("close")[0];

// Hàm để mở modal khi nhấn vào nút có id phù hợp
function openModalOnClick(parentId, buttonId1, buttonId2) {
    document.getElementById(parentId).addEventListener("click", function(event) {
        if (event.target && (event.target.id === buttonId1 || event.target.id === buttonId2)) {
            modal.style.display = "block";
        }
    });
}
openModalOnClick("best-product-content", "myBtn-best", "myBtn-icon-best");
openModalOnClick("fetured_products", "myBtn-fetured", "myBtn-icon-fetured");

// Tắt modal khi bấm nút x
span.onclick = function() {
  modal.style.display = "none";
}

// Tắt modal khi bấm bất cứ 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// ----------------------------------------------------GIỎ HÀNG-------------------------------------------------
// Hiển thị ở giỏ hàng
const getUserID = localStorage.getItem("userID");

let getData = (key) => {
    const data  = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

let userData = getData("productInCart");
console.log(userData);
console.log(Array.isArray(userData));
if(userData){
    console.log('Success: true')
}else{
    console.log('Error')
}
let userDataRender = userData.filter(value => value.userID == getUserID);
function renderProductsToTable(userDataRender, i) {
    const { image, name, quantity, price } = userDataRender[i]; 
    return `
        <tr class="produc_In_Cart">
            <td class="moldal-detail">
                <img class="moldal-detail-img" src="${image}" alt="">
                <div class="moldal-detail-infor">
                    <p class="modal-product-name">${name}</p>
                    <p id="remove-product"  data-index="${i}" class="modal-product-remove"><span class="icon-m-content fa-solid fa-xmark"></span> Remove product from cart</p>
                </div>
            </td>
            <td class="price-text">${price}</td>
            <td>
                <button onclick="minusQuantity(${i}, ${quantity})" class="minus-quantity">-</button>
                <span class="mx-2">${quantity}</span>
                <button onclick="plusQuantity(${i})" class="plus-quantity">+</button>
            </td>
            <td class="total-price">${((quantity) * (price.replace(/\./g, ''))).toLocaleString()}</td>
        </tr>
    `;
}

// Hiển thị sản phẩm trong giỏ hàng
function listCart() {
    document.getElementById("product-cart").innerHTML = '';
    let userDataRender = getData("productInCart").filter(value => value.userID == getUserID);
    for (let i = 0; i < userDataRender.length; i++) {
        let card = renderProductsToTable(userDataRender, i);
        document.getElementById("product-cart").innerHTML += card;
    }
}
listCart();

// Tính tổng số lượng sản phẩm có trong giỏ hàng
function totalProduct() {
    document.getElementById("total").innerHTML = userDataRender.length;
}
totalProduct();

// Tổng số tiền cho tất cả sản phẩm
function totalMoney() {
    if (userDataRender.length > 0) {
        let total = 0;
        for (let i = 0; i < userDataRender.length; i++) {
            total += userDataRender[i].quantity * (userDataRender[i].price.replace(/\./g, '')).toLocaleString()
        }

        document.getElementById("total-money").innerHTML = total.toLocaleString();
    }
}
totalMoney();

// Nút + tăng số lượng mua
function plusQuantity(index) {
    userDataRender[index].quantity++;
    localStorage.setItem("productInCart", JSON.stringify(userDataRender));
    listCart();
    totalProduct();
    totalMoney();  
}

// Nút - giảm số lượng mua
function minusQuantity(index, quantity) {
    if (quantity > 1) {
        userDataRender[index].quantity--;
        localStorage.setItem("productInCart", JSON.stringify(userDataRender));
    }
    else {
        alert("Quantity min is 1")
    }
    listCart();
    totalProduct();
    totalMoney(); 
}



// Thêm vào giỏ hàng 
const feturedProducts = JSON.parse(localStorage.getItem('fetured_products')) || [];
const bestSelling = JSON.parse(localStorage.getItem('best_selling')) || [];
products = feturedProducts.concat(bestSelling);

// Thêm sản phẩm vào giỏ hàng cho user id
function addToCartHomePage(id) {
    console.log(id);
    let checkProductInCart = userData.some(value => value.id == id && value.userID == getUserID);
    console.log(checkProductInCart);
    // Kiểm tra xem đã có đơn hàng chưa
    if(!checkProductInCart) {
        // Tạo mới đơn hàng và lưu cho user id
        let pInProduct = products.find(value => value.id === id );
        console.log(pInProduct);
        userData.unshift ({
            ...pInProduct,
            quantity: 1,
            userID: getUserID
        })
        console.log("Kiem tra don haang: ",userData.find(value => value.id ===  id && value.userID == getUserID));
        localStorage.setItem("productInCart", JSON.stringify(userData));
    }else {
        let getIndex = userData.findIndex(value => value.id === id);
        let pInProduct = userData.find(value => value.id === id)
        userData[getIndex] = {
            ...pInProduct,
            quantity: ++pInProduct.quantity,
            userID: getUserID
        }
        localStorage.setItem("productInCart", JSON.stringify(userData));
    }
    listCart();
    totalProduct();
    totalMoney();
}

// Xoá sản phẩm khỏi giỏ hàng
function removeProduct(event) {
    // Lấy index từ thuộc tính data-index của phần tử đã nhấn
    const index = event.target.closest('#remove-product').getAttribute('data-index');

    if (userData.length > 0) {
        userData.splice(index, 1);
        localStorage.setItem("productInCart", JSON.stringify(userData));
        if (userData.length == 0) {
            modal.style.display = "none";
        } 
    } else {
        alert("Giỏ hàng của bạn trống!");
    }

    listCart();
    totalProduct();
    totalMoney();
}
document.getElementById("product-cart").addEventListener('click', function(event) {
    if (event.target && event.target.closest('#remove-product')) {
        removeProduct(event);
    }
});

// Lưu vào local storage sản phẩm muốn mua và chuyển sang trang order khi nhấn nút order
function Order() {
    if (userDataRender.length > 0) {
        localStorage.setItem('orderDetails', JSON.stringify(userDataRender));
        window.location.href = "/pages/Order.html";
    } else {
        alert("Giỏ hàng của bạn trống!");
    }
}


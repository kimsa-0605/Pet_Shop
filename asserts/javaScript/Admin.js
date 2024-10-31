
let home_page = 'food';
let foodProducts = JSON.parse(localStorage.getItem('initialProductsFood')) || [];
let fashionProducts = JSON.parse(localStorage.getItem('initialProductsFashion')) || [];
let updateProductIndex;


function setCategory(category) {
    home_page = category;
    loadProducts(category);
    document.getElementById('categoryTitle').innerText = `Manage ${setName(category)} Products`;
}

function setName(home_page) {
    return home_page.charAt(0).toUpperCase() + home_page.slice(1);
}
// Tạo ID sản phẩm ngẫu nhiên
function generateRandomID() {
    return Math.floor(Math.random() * 100000);
}
function createTable1() {
    document.getElementById('userpp').style.display = 'none';
    document.getElementById('order2').style.display = 'none';
    document.getElementById('createButton').style.display = 'block';
    document.getElementById('userpp').style.display = 'none';
    document.getElementById('order2').style.display = 'none';
}
function createTable21() {
    document.getElementById('createButton').style.display = 'none';
    document.querySelector('table').style.display = 'none';
    document.getElementById('food1').style.display = 'none';
    document.getElementById('fashion1').style.display = 'none';
    document.getElementById('userpp').style.display = 'block';
    document.querySelector('.side_bar').style.marginBottom = '20px';

    document.getElementById('order2').style.display = 'none';
}
function createTable22() {
    document.getElementById('createButton').style.display = 'none';
    document.querySelector('table').style.display = 'none';
    document.getElementById('food1').style.display = 'none';
    document.getElementById('fashion1').style.display = 'none';
    document.getElementById('userpp').style.display = 'none';
    document.getElementById('order2').style.display = 'block';
}

function createTable3() {
    document.getElementById('userpp').style.display = 'none';
    document.getElementById('order2').style.display = 'none';
    document.getElementById('createButton').style.display = 'none';
    document.querySelector('table').style.display = 'none';
    document.getElementById('food1').style.display = 'none';
    document.getElementById('fashion1').style.display = 'none';
    document.getElementById('userpp').style.display = 'none';
}

function menu() {
    document.getElementById('createButton').style.display = 'none';
    document.getElementById('food1').style.display = 'block';
    document.querySelector('.side_bar').style.marginBottom = '70px';
    document.getElementById('fashion1').style.display = 'block';
    const table = document.querySelector('table');
    table.style.display = 'table';
    table.style.width = '100%';
}

fashion1.addEventListener("click", () => {
    fashion1.classList.add('manager_food');
    food1.classList.remove('manager_food');
    loadProducts('fashion');
});
food1.addEventListener("click", () => {
    food1.classList.add('manager_food');
    fashion1.classList.remove('manager_food');
    loadProducts('food');
});

function setActive(element) {
    const elements = [products_manager1, manager_user1, manager_order1, setting];
    elements.forEach(e => {
        if (e === element) {
            e.classList.add('products_manager');
        } else {
            e.classList.remove('products_manager');
        }
    });
}
// Thêm sự kiện cho các phần tử
products_manager1.addEventListener("click", () => setActive(products_manager1));
manager_user1.addEventListener("click", () => setActive(manager_user1));
manager_order1.addEventListener("click", () => setActive(manager_order1));
setting.addEventListener("click", () => setActive(setting));
// Thêm sản phẩm
const sideBars = document.querySelectorAll('.side_bar:first-child');
sideBars.forEach(sideBar => {
    sideBar.style.marginBottom = '70px'; // Thay đổi margin-bottom cho mỗi side_bar
});

function addProduct() {
    const name = document.getElementById('PName').value;
    const image = document.getElementById('PImage').files[0];
    const price = document.getElementById('pPrice').value;
    const description = document.getElementById('Des').value; // Đã sửa biến Des thành description
    const element = document.getElementById('pet');
    const type = element.value;
    if (!name || !image || !price || !description) {
        alert('Please fill all fields!');
        return;
    }
    const reader = new FileReader();
    reader.onloadend = function () {
        const product = {
            id: generateRandomID(),
            name,
            image: reader.result,
            price,
            description,
            nature: { 
                type, // Lưu giá trị được chọn
                checkPet: function() {
                    if (this.type === "dog") {
                        return "Bạn đã chọn: Chó";
                    } else if (this.type === "cat") {
                        return "Bạn đã chọn: Mèo";
                    } else {
                        return "Vui lòng chọn một thú cưng";
                    }
                }
            }
        };
        if (home_page === 'food') {
            foodProducts.push(product);
            localStorage.setItem('initialProductsFood', JSON.stringify(foodProducts));
        } else {
            fashionProducts.push(product);
            localStorage.setItem('initialProductsFashion', JSON.stringify(fashionProducts));
        }
        loadProducts(home_page);
        closeAddProductForm();
    };
    reader.readAsDataURL(image);
}

/// Cập nhập lại sản phẩm 
function updateProduct() {
    const name = document.getElementById('name').value;
    const image = document.getElementById('updateImage').files[0];
    const price = document.getElementById('price').value;
    const description = document.getElementById('Des_update').value; 
    const element = document.getElementById('pet_update');
    const type = element.value;
    if (!name || !image || !price) {
        alert('Please fill all fields!');
        return;
    }
    const reader = new FileReader();
    reader.onloadend = function () {
        const oldProduct = home_page === 'food' ? foodProducts[updateProductIndex] : fashionProducts[updateProductIndex];
        const product = {
            id: oldProduct.id,
            name,
            image: reader.result,
            price,
            description,
            nature: { 
                type, 
                checkPet: function() {
                    if (this.type === "dog") {
                        return "Bạn đã chọn: Chó";
                    } else if (this.type === "cat") {
                        return "Bạn đã chọn: Mèo";
                    } else {
                        return "Vui lòng chọn một thú cưng";
                    }
                }
            }
        };
        if (home_page === 'food') {
            foodProducts[updateProductIndex] = product;
            localStorage.setItem('initialProductsFood', JSON.stringify(foodProducts)); // Cập nhật đúng tên key
        } else {
            fashionProducts[updateProductIndex] = product;
            localStorage.setItem('initialProductsFashion', JSON.stringify(fashionProducts));
        }
        loadProducts(home_page);
        closeUpdateProductForm();
    };

    reader.readAsDataURL(image);
}
// Hiển thị form thêm sản phẩm
function showAddProductForm() {
    document.querySelector('.addProducts').style.display = 'block';
}
// Hiển thị form cập nhật sản phẩm
function showUpdateProductForm(index) {
    const product = home_page === 'food' ? foodProducts[index] : fashionProducts[index];
    document.getElementById('name').value = product.name;
    document.getElementById('updateImage').value = '';
    document.getElementById('price').value = product.price;
    updateProductIndex = index;
    document.querySelector('.upload-products').style.display = 'block';
}
// Đóng form thêm sản phẩm
function closeAddProductForm() {
    document.querySelector('.addProducts').style.display = 'none';
    document.getElementById('PName').value = '';
    document.getElementById('PImage').value = '';
    document.getElementById('pPrice').value = '';
    document.getElementById('Des').value = '';
}
// Đóng form cập nhật sản phẩm
function closeUpdateProductForm() {
    document.querySelector('.upload-products').style.display = 'none';
}


function deleteProduct(index) {
    const confirmed = confirm('Are you sure you want to delete this product?');
    if (confirmed) {
        const products = home_page === 'food' ? foodProducts : fashionProducts;
        products.splice(index, 1);
        localStorage.setItem(home_page === 'food' ? 'initialProductsFood' : 'initialProductsFashion', JSON.stringify(products));
        loadProducts(home_page);
        alert('Product deleted successfully!');
    }
}


// Tải sản phẩm từ localStorage
function loadProducts(category) {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = ''; // Xóa nội dung cũ

    const products = category === 'food' ? foodProducts : fashionProducts;

    products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td><img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px;"></td>
            <td>${parseFloat(product.price).toFixed(3)} VNĐ</td>
            <td>
                
                 <button class="update" onclick="showUpdateProductForm(${index})"><i class="fa-solid fa-wrench"></i></button>
                <button class="delete"onclick="deleteProduct(${index})"><i class="fa-solid fa-trash"></i></button>
        `;
        tbody.appendChild(row);
    });
}



/*************HANH********* */

// Hàm để hiển thị nội dung tương ứng
function showContent(sectionId) {
    // Ẩn tất cả các khối nội dung
    document.querySelectorAll('.content > div').forEach(div => {
        div.classList.add('hidden');
    });
    
    // Nếu là quản lý người dùng, thì tải danh sách người dùng
    if (sectionId === 'user-management') {
        loadUsers();
    }else if (sectionId === 'order-management'){
        loadOrders();
    }
}
    
// Hàm để tải danh sách người dùng từ localStorage

// USERS
function loadUsers() {
    const users = JSON.parse(localStorage.getItem('user')) || [];
    console.log(users)
    const tableBody = document.getElementById('userTableBody');
    tableBody.innerHTML = ''; // Xóa dữ liệu cũ

    users.forEach(user => {
        const row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role || 'User'}</td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}
    
// Hiển thị mặc định phần quản lý người dùng khi load trang
showContent('order-management');

// ORDERS: Tải danh sách đơn hàng từ localStorage
function loadOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const tableBody = document.getElementById('orderTableBody');
    tableBody.innerHTML = ''; // Xóa dữ liệu cũ

    const groupedOrders = []; // Sử dụng mảng để lưu thông tin người dùng và sản phẩm

    orders.forEach(order => {
        order.products.forEach(product => {
            const userID = product.userID;

            // Tìm kiếm người dùng trong mảng
            let userGroup = groupedOrders.find(group => group.buyerID === userID);
            // Nếu không tìm thấy người dùng, tạo một mục mới
            if (!userGroup) {
                userGroup = {
                    buyerID: userID,
                    buyerName: order.buyer.name,
                    address: order.buyer.address,
                    products: [],
                };
                groupedOrders.push(userGroup);
            }

            // Thêm sản phẩm mới vào danh sách sản phẩm của user
            userGroup.products.push({
                orderID: order.id,
                orderDate: order.orderDate,
                name: product.name,
                quantity: product.quantity,
                price: product.price,
            });
        });
    });
    // Hiển thị dữ liệu lên bảng
    groupedOrders.forEach(group => {
        const buyerRow = `
            <tr>
                <td colspan="6" style="text-align:left" ><strong>Buyer: ${group.buyerName}</strong></td>
            </tr>
        `;
        tableBody.insertAdjacentHTML('beforeend', buyerRow);
        group.products.forEach(product => {
            const totalPrice = (product.quantity * product.price).toFixed(3);
            const productRow = `
                <tr>
                    <td>${product.orderID || 'N/A'}</td>
                    <td>${product.orderDate || 'N/A'}</td>
                    <td>${product.name}</td>
                    <td>${product.quantity}</td>
                    <td>${totalPrice}</td>
                    <td>${group.address}</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML('beforeend', productRow);
        });
    });
}
let totalAmount = 0; // Khai báo biến toàn cục

window.onload = function() {
    // Mã hiển thị sản phẩm
    let orderDetails = JSON.parse(localStorage.getItem('orderDetails')) || [];
    let orderHTML = '';
    totalAmount = 0; // Reset tổng số tiền

    // Cập nhật số lượng sản phẩm
    const productCountElement = document.getElementById('product-count');
    if (productCountElement) {
        productCountElement.textContent = orderDetails.length;
    } else {
        console.warn('Element with id "product-count" not found.');
    }

    if (orderDetails.length === 0) {
        document.querySelector('.order-summary').innerHTML = '<p>No order data available. Please add products to cart.</p>';
    } else {
        orderDetails.forEach(item => {
            let itemTotal = parseFloat(item.price.replace(/,/g, '')) * item.quantity;
            totalAmount += itemTotal;

            orderHTML += `
                <div class="order-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div id="content-item">
                    <div id="box">
                        <p id="content">${item.name}</p>
                        <p class="price">${formatPrice(itemTotal)}VNĐ</p>
                    </div>
                        <p id= "quantity">Quantity: ${item.quantity}</p>
                    </div>
                </div>`;
        });

        document.querySelector('.order-summary').innerHTML = `
            <h2>Order (<span id="product-count">${orderDetails.length}</span> product${orderDetails.length > 1 ? 's' : ''})</h2>
            <div class= "order-product">
            ${orderHTML}
            </div>
            <div class="summary">
                <p id="subtotal">Subtotal: <span>${formatPrice(totalAmount)}VNĐ</span></p>
                <p id="fee">Shipping fee: <span>-</span></p>
                <p id="sum">Total: <span>${formatPrice(totalAmount)}VNĐ</span></p>
            </div>
            <div class="pay">
                <button id="cancel-button" class="order-btn">Cancel</button>
                <button id="pay-button" class="order-btn">Pay now</button>
            </div>
        `;
    }

    function formatPrice(price) {
        return (parseFloat(price) * 1000).toLocaleString('de-DE'); // Nhân giá với 1000 và định dạng dấu "." cho hàng nghìn
    }

    // Gắn sự kiện cho nút "Pay now" sau khi nội dung trang đã được tải
    document.getElementById('pay-button').addEventListener('click', function() {
        // Gọi hàm lưu thông tin đơn hàng
        saveOrderDetails();
    });

    // Gắn sự kiện cho nút "Cancel"
    document.getElementById('cancel-button').addEventListener('click', function() {
        // Xóa sản phẩm khỏi localStorage
        localStorage.removeItem('orderDetails');
        window.location.href = '/pages/homePage.html'; // Cần đúng trang chủ muốn quay lại
    });
};

// Lưu thông tin đơn hàng và người mua
function saveOrderDetails() {
    // Thông tin người mua hàng
    const buyerInfo = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        province: document.getElementById('province').value,
        district: document.getElementById('district').value,
        ward: document.getElementById('ward').value,
        note: document.getElementById('note').value,
    };

    // Kiểm tra xem các trường có giá trị hay không
    if (!buyerInfo.name || !buyerInfo.address || !buyerInfo.phone || !buyerInfo.email) {
        alert('Please fill in all required fields.');
        return; // Ngừng thực hiện nếu có trường nào chưa được điền
    }

    // Kiểm tra phương thức thanh toán
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    if (!paymentMethod) {
        alert('Please select a payment method.');
        return; // Ngừng thực hiện nếu chưa chọn phương thức thanh toán
    }

    // Lấy ngày hiện tại
    const orderDate = new Date().toLocaleDateString(); 

    // Tạo ID cho đơn hàng 
    const orderId = Date.now(); // Sử dụng timestamp làm ID

    // Thông tin đơn hàng lấy từ localStorage "orderDetails"
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails')) || [];
    
    // Lưu thông tin đơn hàng và người mua vào localStorage
    const orderData = {
        id: orderId, 
        buyer: buyerInfo,
        products: orderDetails,
        totalAmount: totalAmount, // Sử dụng giá trị đã tính toán
        paymentMethod: paymentMethod.value,
        orderDate: orderDate, 
    };

    // Lấy danh sách đơn hàng cũ từ localStorage (nếu có)
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    // Thêm đơn hàng mới vào danh sách
    orders.push(orderData);
    
    // Lưu lại danh sách đơn hàng mới vào localStorage
    localStorage.setItem('orders', JSON.stringify(orders));

    

    // Xóa sản phẩm khỏi localStorage
    localStorage.removeItem('orderDetails');
    localStorage.removeItem('productInCart'); // Xóa giỏ hàng

    // Sau khi lưu thông tin thành công, chuyển hướng sang trang thanh toán
    window.location.href = './thanhtoan.html'; // chính xác trang thanh toán thành công
}

// Xóa sản phẩm khi đóng tab
window.addEventListener('beforeunload', function() {
    localStorage.removeItem('orderDetails');
});
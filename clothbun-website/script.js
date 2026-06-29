// Product Data with sub-categories
const products = [
    // Men's Collection
    { id: 1, name: "Classic Cotton T-Shirt", category: "men", subCategory: "T-Shirts", price: 24.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop" },
    { id: 2, name: "Slim Fit Jeans", category: "men", subCategory: "Jeans", price: 49.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop" },
    { id: 3, name: "Casual Button-Down Shirt", category: "men", subCategory: "Shirts", price: 39.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop" },
    { id: 10, name: "Men's Sports Jacket", category: "men", subCategory: "Jacket, Sweater & Sweatshirts", price: 79.99, image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=400&fit=crop" },
    
    // Women's Collection
    { id: 4, name: "Summer Floral Dress", category: "women", subCategory: "Dresses", price: 54.99, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop" },
    { id: 5, name: "Elegant Blouse", category: "women", subCategory: "Tops", price: 44.99, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=400&fit=crop" },
    { id: 6, name: "High-Waist Skinny Jeans", category: "women", subCategory: "Jeans, Trousers & Capris", price: 59.99, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop" },
    { id: 11, name: "Women's Cardigan", category: "women", subCategory: "Jacket, Sweater & Sweatshirts", price: 49.99, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop" },
    
    // Boys Collection
    { id: 20, name: "Boys Graphic T-Shirt", category: "boys", subCategory: "T-Shirts", price: 18.99, image: "https://images.unsplash.com/photo-1519238263496-6361937a2750?w=400&h=400&fit=crop" },
    { id: 21, name: "Boys Casual Shirt", category: "boys", subCategory: "Shirts", price: 22.99, image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=400&h=400&fit=crop" },
    { id: 22, name: "Boys Denim Shorts", category: "boys", subCategory: "Shorts", price: 24.99, image: "https://images.unsplash.com/photo-1519457431-44ccd66a57c4?w=400&h=400&fit=crop" },
    { id: 23, name: "Boys Slim Jeans", category: "boys", subCategory: "Jeans", price: 34.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop" },
    { id: 24, name: "Boys Chino Trousers", category: "boys", subCategory: "Trousers", price: 29.99, image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop" },
    { id: 25, name: "Boys Formal Coat Set", category: "boys", subCategory: "coat set", price: 59.99, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
    { id: 26, name: "Boys Kurta Pajama Set", category: "boys", subCategory: "Ethnic Wear", price: 39.99, image: "https://images.unsplash.com/photo-1583336137340-899878f46636?w=400&h=400&fit=crop" },
    { id: 27, name: "Boys Track Pants", category: "boys", subCategory: "Track Pants & Pyjamas", price: 21.99, image: "https://images.unsplash.com/photo-1552975084-6e027cd345c7?w=400&h=400&fit=crop" },
    { id: 28, name: "Boys Hooded Sweatshirt", category: "boys", subCategory: "Jacket, Sweater & Sweatshirts", price: 32.99, image: "https://images.unsplash.com/photo-1503919545874-8c8df8f670a3?w=400&h=400&fit=crop" },
    { id: 29, name: "Boys Party Blazer Set", category: "boys", subCategory: "Party Wear", price: 64.99, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
    { id: 30, name: "Boys Thermal Innerwear Set", category: "boys", subCategory: "Innerwear & Thermals", price: 19.99, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop" },
    { id: 31, name: "Boys Cotton Night Suit", category: "boys", subCategory: "Nightwear & Loungewear", price: 26.99, image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&h=400&fit=crop" },
    
    // Girls Collection
    { id: 40, name: "Girls Floral Summer Dress", category: "girls", subCategory: "Dresses", price: 34.99, image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=400&fit=crop" },
    { id: 41, name: "Girls Cute Crop Top", category: "girls", subCategory: "Tops", price: 16.99, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=400&fit=crop" },
    { id: 42, name: "Girls Printed T-Shirt", category: "girls", subCategory: "Tshirts", price: 14.99, image: "https://images.unsplash.com/photo-1519238263496-6361937a2750?w=400&h=400&fit=crop" },
    { id: 43, name: "Girls Stylish Coat Set", category: "girls", subCategory: "coat set", price: 54.99, image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" },
    { id: 44, name: "Girls Traditional Lehenga Choli", category: "girls", subCategory: "Lehenga choli", price: 69.99, image: "https://images.unsplash.com/photo-1583336137340-899878f46636?w=400&h=400&fit=crop" },
    { id: 45, name: "Girls Designer Kurta Set", category: "girls", subCategory: "Kurta Sets", price: 44.99, image: "https://images.unsplash.com/photo-1583336137340-899878f46636?w=400&h=400&fit=crop" },
    { id: 46, name: "Girls Fancy Party Dress", category: "girls", subCategory: "Party wear", price: 49.99, image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400&h=400&fit=crop" },
    { id: 47, name: "Girls Denim Dungarees", category: "girls", subCategory: "Dungarees & Jumpsuits", price: 38.99, image: "https://images.unsplash.com/photo-1519457431-44ccd66a57c4?w=400&h=400&fit=crop" },
    { id: 48, name: "Girls Pleated Skirt", category: "girls", subCategory: "Skirts & shorts", price: 24.99, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop" },
    { id: 49, name: "Girls Colorful Leggings", category: "girls", subCategory: "Tights & Leggings", price: 12.99, image: "https://images.unsplash.com/photo-1552975084-6e027cd345c7?w=400&h=400&fit=crop" },
    { id: 50, name: "Girls Skinny Jeans", category: "girls", subCategory: "Jeans, Trousers & Capris", price: 32.99, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop" },
    { id: 51, name: "Girls Warm Fleece Jacket", category: "girls", subCategory: "Jacket, Sweater & Sweatshirts", price: 36.99, image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop" },
    { id: 52, name: "Girls Cotton Innerwear Set", category: "girls", subCategory: "Innerwear & Thermals", price: 17.99, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop" },
    { id: 53, name: "Girls Cozy Night Suit", category: "girls", subCategory: "Nightwear & Loungewear", price: 28.99, image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&h=400&fit=crop" }
];

// Sub-categories mapping
const subCategories = {
    boys: [
        "T-Shirts", "Shirts", "Shorts", "Jeans", "Trousers", "coat set",
        "Ethnic Wear", "Track Pants & Pyjamas", "Jacket, Sweater & Sweatshirts",
        "Party Wear", "Innerwear & Thermals", "Nightwear & Loungewear"
    ],
    girls: [
        "Dresses", "Tops", "Tshirts", "coat set", "Lehenga choli", "Kurta Sets",
        "Party wear", "Dungarees & Jumpsuits", "Skirts & shorts", "Tights & Leggings",
        "Jeans, Trousers & Capris", "Jacket, Sweater & Sweatshirts",
        "Innerwear & Thermals", "Nightwear & Loungewear"
    ]
};

// Current filter state
let currentMainCategory = 'all';
let currentSubCategory = 'all';

// Shopping Cart
let cart = [];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    loadProducts('all', 'all');
    updateCartCount();
});

// Load Products
function loadProducts(mainCategory, subCategory) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    let filteredProducts = products;
    
    if (mainCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === mainCategory);
    }
    
    if (subCategory !== 'all' && mainCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.subCategory === subCategory);
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-category">${product.category.toUpperCase()}</div>
                ${product.subCategory ? `<div class="product-subcategory">${product.subCategory}</div>` : ''}
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Filter by Main Category
function filterByMainCategory(category) {
    currentMainCategory = category;
    currentSubCategory = 'all';
    
    // Update active button
    document.querySelectorAll('.main-filters .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show/hide sub-category filter
    const subCategoryFilter = document.getElementById('subCategoryFilter');
    const subCategorySelect = document.getElementById('subCategorySelect');
    
    if ((category === 'boys' || category === 'girls') && subCategories[category]) {
        subCategoryFilter.style.display = 'block';
        subCategorySelect.innerHTML = '<option value="all">All Sub-Categories</option>';
        subCategories[category].forEach(subCat => {
            const option = document.createElement('option');
            option.value = subCat;
            option.textContent = subCat;
            subCategorySelect.appendChild(option);
        });
    } else {
        subCategoryFilter.style.display = 'none';
    }
    
    loadProducts(category, 'all');
}

// Filter by Sub-Category
function filterBySubCategory() {
    const subCategorySelect = document.getElementById('subCategorySelect');
    currentSubCategory = subCategorySelect.value;
    loadProducts(currentMainCategory, currentSubCategory);
}

// Old filter function for backward compatibility
function filterProducts(category) {
    filterByMainCategory(category);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    showNotification('Product added to cart!');
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

// Toggle Cart Modal
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal.style.display === 'flex') {
        cartModal.style.display = 'none';
    } else {
        cartModal.style.display = 'flex';
        renderCart();
    }
}

// Render Cart
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = '';
    
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})">
                <i class="fas fa-times"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toFixed(2);
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    renderCart();
}

// Proceed to Checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    toggleCart();
    updateOrderSummary();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Update Order Summary
function updateOrderSummary() {
    const orderSummaryItems = document.getElementById('orderSummaryItems');
    const orderTotal = document.getElementById('orderTotal');
    
    if (cart.length === 0) {
        orderSummaryItems.innerHTML = '<p>No items in cart</p>';
        orderTotal.textContent = '0.00';
        return;
    }
    
    let total = 0;
    orderSummaryItems.innerHTML = '';
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <span>${item.name} x ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        orderSummaryItems.appendChild(orderItem);
    });
    
    orderTotal.textContent = total.toFixed(2);
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'flex';
    }
}

// Handle Order Form Submission
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        alert('Your cart is empty! Please add items before placing an order.');
        return;
    }
    
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const customerEmail = document.getElementById('customerEmail').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    // Generate Order ID
    const orderId = 'ORD-' + Date.now();
    
    // Create order data object
    const orderData = {
        orderId: orderId,
        customerName: customerName,
        customerPhone: customerPhone,
        customerEmail: customerEmail,
        customerAddress: customerAddress,
        paymentMethod: paymentMethod,
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        orderDate: new Date().toISOString()
    };
    
    // Save order to localStorage (for demo purposes)
    let orders = JSON.parse(localStorage.getItem('clothbunOrders') || '[]');
    orders.push(orderData);
    localStorage.setItem('clothbunOrders', JSON.stringify(orders));
    
    // Show success modal
    document.getElementById('orderId').textContent = orderId;
    document.getElementById('successModal').style.display = 'flex';
    
    // Clear cart and form
    cart = [];
    updateCartCount();
    this.reset();
    document.getElementById('orderSummaryItems').innerHTML = '';
    document.getElementById('orderTotal').textContent = '0.00';
});

// Close Success Modal
function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show Notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Close modals when clicking outside
window.onclick = function(event) {
    const cartModal = document.getElementById('cartModal');
    const successModal = document.getElementById('successModal');
    
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
}

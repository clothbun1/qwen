# Clothbun - Clothing Shop Website

Welcome to your complete, ready-to-use clothing shop website!

## 🎉 What's Included

Your website includes all the features you requested:

1. **Info Card** - Shop name, address, opening hours, phone number, and location map
2. **Product Catalog** - Browse products with photos and prices (organized by Men, Women, Kids)
3. **Online Ordering** - Customers can add items to cart and place orders with payment options

## 📁 Files Created

- `index.html` - Main website page
- `styles.css` - Beautiful styling and responsive design
- `script.js` - Shopping cart and ordering functionality

## 🚀 How to Use Your Website

### Option 1: View Locally (Easiest)
1. Navigate to the `clothbun-website` folder
2. Double-click `index.html` to open it in your web browser
3. That's it! Your website is running!

### Option 2: Host Online (Recommended for Customers)

#### Free Hosting Options:

**GitHub Pages (Free)**
1. Create a free account at github.com
2. Create a new repository named "clothbun-website"
3. Upload all three files (index.html, styles.css, script.js)
4. Go to Settings → Pages and enable GitHub Pages
5. Your site will be live at: yourusername.github.io/clothbun-website

**Netlify (Free)**
1. Go to netlify.com and create a free account
2. Drag and drop the `clothbun-website` folder onto their dashboard
3. Your site will be live instantly with a URL like: clothbun.netlify.app

**Vercel (Free)**
1. Go to vercel.com and create a free account
2. Import your project or drag-drop the folder
3. Get instant deployment with a URL like: clothbun.vercel.app

## ✨ Features

### For Customers:
- ✅ Browse products by category (All, Men, Women, Kids)
- ✅ View product images and prices
- ✅ Add items to shopping cart
- ✅ Update cart quantities
- ✅ Fill out order form with delivery details
- ✅ Choose payment method (Cash on Delivery, Card, UPI, Bank Transfer)
- ✅ Receive order confirmation with Order ID
- ✅ Mobile-friendly design (works on phones and tablets)

### For You (Shop Owner):
- ✅ Professional design with your shop name "Clothbun"
- ✅ Contact information prominently displayed
- ✅ Google Maps integration for location
- ✅ Orders saved in browser (customers can screenshot confirmation)
- ✅ Easy to customize products, prices, and contact info

## 🔧 Customization Guide

### Change Shop Information
Open `index.html` and search for these sections:

**Address:**
```html
<p>123 Fashion Street, Shopping District<br>City, State 12345</p>
```
Replace with your actual address.

**Phone:**
```html
<p>+1 (555) 123-4567</p>
```
Replace with your phone number.

**Email:**
```html
<p>info@clothbun.com</p>
```
Replace with your email.

**Opening Hours:**
```html
<p>Mon - Sat: 9:00 AM - 9:00 PM<br>Sunday: 10:00 AM - 8:00 PM</p>
```
Update with your actual hours.

### Change Map Location
In `index.html`, find the `<iframe>` tag and replace the URL with your Google Maps embed link:
1. Go to Google Maps
2. Search for your shop location
3. Click "Share" → "Embed a map"
4. Copy the HTML and replace the existing iframe

### Update Products
Open `script.js` and find the `products` array. Each product looks like:

```javascript
{
    id: 1,
    name: "Classic Cotton T-Shirt",
    category: "men",
    price: 24.99,
    image: "https://images.unsplash.com/..."
}
```

To add your own products:
1. Copy one of the product blocks
2. Change the `id` (use unique numbers)
3. Update `name`, `category` (men/women/kids), `price`
4. Replace `image` URL with your product photo URL

**For product photos:**
- Upload images to imgur.com (free) or any image hosting service
- Or use photos from your phone and upload to a cloud service
- Copy the direct image URL and paste it in the `image` field

### Change Colors
Open `styles.css` and look for color codes:
- `#667eea` and `#764ba2` are the main purple/blue gradient colors
- Replace these hex codes with your preferred colors

## 📱 Testing the Order System

1. Open the website in your browser
2. Browse the catalog and click "Add to Cart" on some items
3. Click the cart icon (top right) to view your cart
4. Click "Proceed to Checkout"
5. Fill out the order form with test information
6. Select a payment method
7. Click "Submit Order"
8. You'll see an order confirmation with an Order ID

**Note:** Orders are currently saved in the browser's local storage. For a real shop, you would want to receive orders via email or a backend system. I can help you set that up if needed!

## 🌐 Next Steps for Your Business

### To Make This a Real E-commerce Site:

1. **Get a Domain Name** (~$10-15/year)
   - Purchase from Namecheap, GoDaddy, or Google Domains
   - Example: www.clothbun.com

2. **Set Up Email Notifications**
   - Use Formspree or EmailJS to receive orders via email
   - I can help integrate this

3. **Add More Products**
   - Take photos of your actual inventory
   - Update the products in script.js

4. **Social Media Integration**
   - Add links to your Instagram, Facebook, etc.

5. **Analytics**
   - Add Google Analytics to track visitors

## 💡 Tips

- The website works completely offline once loaded
- All images are from Unsplash (free to use). Replace with your own product photos.
- The site is fully responsive and looks great on mobile devices
- No database or server required for basic usage

## 🆘 Need Help?

If you need help with:
- Setting up hosting
- Adding email notifications for orders
- Connecting a payment gateway
- Adding more features
- Customizing the design

Just let me know! I'm here to help you succeed with your online shop.

---

**Good luck with Clothbun! 🛍️**

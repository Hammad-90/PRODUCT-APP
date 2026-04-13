const products = [
    { id: 1, name: "Apple iPhone 14", price: "$999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLptmpE7fZ7DsQGX6W6VlWdjuGdRRb3aNcA&s" },
    { id: 2, name: "Samsung Galaxy S23", price: "$899", image: "https://cellmart.pk/wp-content/uploads/2024/07/avbarf9aufa89foafaufi.jpg"},
    { id: 3, name: "Sony Headphones", price: "$199", image: "https://static.webx.pk/files/19643/Images/sony-ult-wear-black-headphones-price-in-pakistan-4-19643-0-240624090654733.jpg" },
    { id: 4, name: "Dell Laptop", price: "$1200", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVjNUlVDhk7EQdFyYDOTLq-7e3mVPb8M8i8w&s" },
    { id: 5, name: "Smart Watch", price: "$299", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMqTVqDY3PMlMr-NkOfgAbdkOLnisdnWgqbg&s" },
    { id: 6, name: "Canon Camera", price: "$599", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6bThlEGzoUgmZhuxWMnaKJvGvPKu4uDV_g&s" },
    { id: 7, name: "Nike Shoes", price: "$699", image: "https://www.hopkicks.pk/image/cache/catalog/2024/OCT%2024/ISHOES/P2/47/10-1100x1100.jpg" },
    { id: 8, name: "Cap", price: "$199", image: "https://italiano.pk/cdn/shop/files/0625028-wht_1080x.jpg?v=1748930553" },
    { id: 9, name: "Car", price: "$5000", image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwY2FyfGVufDB8fDB8fHww" },
    { id: 10, name: "Clothes", price: "$200", image: "https://cdn.shopify.com/s/files/1/0427/9140/3673/files/6clothingstylesphoto3_600x600.png?v=1686577957" },
    { id: 11, name: "Bike", price: "$4000", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY52-mNfzMhaNhhwBLqteyvCy20X46WnbS4A&s" },
    { id: 12, name: "Gun", price: "$999", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-p8gMPo2HxSXbOMdbY_bkIm3bRg1xK_OCA&s" },
    
];


const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");


function displayProducts(items) {
    productList.innerHTML = items.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        </div>
    `).join('');
}


displayProducts(products);


searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});
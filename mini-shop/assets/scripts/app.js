// const products = [
//     {
//         title: 'A Pillow',
//         imageUrl: '',
//         price: 19.99,
//         description: 'A soft pillow!'
//     },
//     {
//         title: 'A Carpet',
//         imageUrl:
//             'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8svBt7ZCRKY-4k7Ca5ML-hH4ufag4RaGZPyLl4ajOwNXVNdceeeFGpnCswUHhdmxAkw&usqp=CAU',
//         price: 89.99,
//         description: 'A carpet'
//     }
// ];

class Product {
    // title = '';
    // imageUrl;
    // price;
    // description;

    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
}

class ShoppingCart {
    item = [];

    addProduct(product) {
        this.item.push(product);
        this.totalOutput.innerHTML = `<h2>Total: \$${1}</h2>`;
    }

    render() {
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
        cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2');
        return cartEl;
    }
}

class ProductItem {
    constructor(product) {
        this.product = product;
    }

    addToCart() {
        App.addProductTocart(this.product);
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}">
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button> Add to Cart</button>
            </div>
        </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product(
            'A Pillow',
            'https://atlas-content-cdn.pixelsquid.com/stock-images/throw-pillow-AERZO6D-600.jpg',
            19.99,
            'A soft pillow!'
        ),
        new Product(
            'A Carpet',
            'https://static.vecteezy.com/system/resources/thumbnails/009/378/433/small/a-3d-rendering-image-of-product-display-on-white-fur-png.png',
            89.99,
            'A carpet'
        )
    ];

    constructor() { };

    render() {
        // const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            // const prodEl = document.createElement('li');
            // prodEl.className = 'product-item';
            // prodEl.innerHTML = `
            // <div>
            //     <img src="${prod.imageUrl}" alt="${prod.title}">
            //     <div class="product-item__content">
            //         <h2>${prod.title}</h2>
            //         <h3>\$${prod.price}</h3>
            //         <p>${prod.description}</p>
            //         <button> Add to Cart</button>
            //     </div>
            // </div>
            // `;
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        return prodList;
        // renderHook.append(prodList);
    }
}

// const productList = {
//     products: [
//         new Product(
//             'A Pillow',
//             'https://atlas-content-cdn.pixelsquid.com/stock-images/throw-pillow-AERZO6D-600.jpg',
//             19.99,
//             'A soft pillow!'
//         ),
//         new Product(
//             'A Carpet',
//             'https://static.vecteezy.com/system/resources/thumbnails/009/378/433/small/a-3d-rendering-image-of-product-display-on-white-fur-png.png',
//             89.99,
//             'A carpet'
//         )
//     ],

//     render() {
//         const renderHook = document.getElementById('app');
//         const prodList = document.createElement('ul');
//         prodList.className = 'product-list';
//         for (const prod of this.products) {
//             const prodEl = document.createElement('li');
//             prodEl.className = 'product-item';
//             prodEl.innerHTML = `
//             <div>
//                 <img src="${prod.imageUrl}" alt="${prod.title}">
//                 <div class="product-item__content">
//                     <h2>${prod.title}</h2>
//                     <h3>\$${prod.price}</h3>
//                     <p>${prod.description}</p>
//                     <button> Add to Cart</button>
//                 </div>
//             </div>
//             `
//             prodList.append(prodEl);
//         }
//         renderHook.append(prodList);
//     }
// };

// productList.render();

class Shop {


    render() {
        const renderHook = document.getElementById('app');

        this.cart = new ShoppingCart();
        const cartEl = this.cart.render();
        const productList = new ProductList();
        const prodListEl = productList.render();
        renderHook.append(cartEl);
        renderHook.append(prodListEl);
    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }

    static addProductTocart(product) {
        this.cart.addProduct(product);
    }
}

App.init();




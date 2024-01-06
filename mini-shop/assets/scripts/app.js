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

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name = attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHookId, shouldRender = true) {
        this.hookId = renderHookId;
        if (shouldRender) {
            this.render();
        }

    }

    render() { }

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
                rootElement.setAttribute(attr.name, attr.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement)
        return rootElement;
    }
}

class ShoppingCart extends Component {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce((prevValue, curItem) => {
            return prevValue + curItem.price
        }, 0);
        return sum;
    }

    constructor(renderHookId) {
        super(renderHookId);
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }

    orderProducts() {
        console.log('Ordering...');
        console.log(this.items);
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now!</button>
        `;
        const orderButton = cartEl.querySelector('button');
        orderButton.addEventListener('click', () => this.orderProducts())
        this.totalOutput = cartEl.querySelector('h2');
    }
}

class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId, false);
        this.product = product;
        this.render();
    }

    addToCart() {
        App.addProductTocart(this.product);
    }

    render() {

        const prodEl = this.createRootElement('li', 'product-item');
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
    }
}

class ProductList extends Component {
    products = [];

    constructor(renderHookId) {
        super(renderHookId);
        this.fetchProducts();
    };

    fetchProducts() {
        this.products = [
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
        this.renderProducts();
    }

    renderProducts() {
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
            new ProductItem(prod, 'prod-list');
        }
    }

    render() {
        // const renderHook = document.getElementById('app');
        this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')]);
        if (this.products && this.products.length > 0) {
            this.renderProducts();
        }
        // renderHook.append(prodList);
    }
}

class Shop extends Component {
    constructor() {
        super();
    }

    render() {
        this.cart = new ShoppingCart('app');
        new ProductList('app');
    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop();
        this.cart = shop.cart;
    }

    static addProductTocart(product) {
        this.cart.addProduct(product);
    }
}

App.init();




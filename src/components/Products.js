import React from 'react';

export default () => {

    const products = [
        {
            img: 'images\\yellow-product.png',
            'product-filter': 'Apple Telefon',
            brand: 'Apple',
            color: 'Sarı',
            netPrice: 124,
            price: 155.85,
            discount: 12,
        },
        {
            img: 'images\\yellow-product.png',
            'product-filter': 'Apple Telefon',
            brand: 'Apple',
            color: 'Sarı',
            netPrice: 124,
            price: 155.85,
            discount: 12,
        }, {
            img: 'images\\yellow-product.png',
            'product-filter': 'Apple Telefon',
            brand: 'Apple',
            color: 'Sarı',
            netPrice: 124,
            price: 155.85,
            discount: 12,
        }, {
            img: 'images\\yellow-product.png',
            'product-filter': 'Apple Telefon',
            brand: 'Apple',
            color: 'Sarı',
            netPrice: 124,
            price: 155.85,
            discount: 12,
        }, {
            img: 'images\\yellow-product.png',
            'product-filter': 'Apple Telefon',
            brand: 'Apple',
            color: 'Sarı',
            netPrice: 124,
            price: 155.85,
            discount: 12,
        }, {
            img: 'images\\yellow-product.png',
            'product-filter': 'Apple Telefon',
            brand: 'Apple',
            color: 'Sarı',
            netPrice: 124,
            price: 155.85,
            discount: 12,
        }, {
            img: 'images\\yellow-product.png',
            'product-filter': 'Apple Telefon',
            brand: 'Apple',
            color: 'Sarı',
            netPrice: 124,
            price: 155.85,
            discount: 12,
        }, {
            img: 'images\\yellow-product.png',
            'product-filter': 'Apple Telefon',
            brand: 'Apple',
            color: 'Sarı',
            netPrice: 124,
            price: 155.85,
            discount: 12,
        }, {
            img: 'images\\yellow-product.png',
            'product-filter': 'Apple Telefon',
            brand: 'Apple',
            color: 'Sarı',
            netPrice: 124,
            price: 155.85,
            discount: 12,
        }, {
            img: 'images\\yellow-product.png',
            'product-filter': 'Apple Telefon',
            brand: 'Apple',
            color: 'Sarı',
            netPrice: 124,
            price: 155.85,
            discount: 12,
        },
    ];
    const createArrayFromLength = (len) => {
        const arr = [];
        for (let index = 0; index < len; index++) {
            arr.push(index);
        }
        return arr;
    };
    return (
        <div className="products">
            {
                createArrayFromLength(products.length / 4)
                    .map((len) => (
                        <div className="product-row" key={`${len}product`}>
                            {
                                products.slice(len * 4, (len * 4) + 4).map((product, index) => (
                                    <div className="product" key={`${len}${product.img}${index}`}>
                                        <div className="product-image-container">
                                            <img src={product.img} />
                                        </div>
                                        <div className="product-filters">
                                            <span>{product['product-filter']}</span>
                                        </div>
                                        <h5 className="produc-title">Marka: {product.brand}
                                        Renk: {product.color}</h5>
                                        <span className="product-price">{product.price.toLocaleString()} TL</span>
                                        <span className="product-net-price">{product.netPrice.toLocaleString()} TL</span>
                                        <span className="product-discount">{product.discount}%</span>
                                    </div>
                                ))
                            }
                        </div>
                    ))
            }
        </div>

    );
};
import React from 'react';
import helper from '../util/helper';
import Pagination from './Pagination';

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

    return (
        <div className="products">
            {
                helper.createArrayFromLength(products.length / 4)
                    .map((len) => (
                        <div className="product-row" key={`${len}product`}>
                            {
                                products.slice(len * 4, (len * 4) + 4).map((product, index) => (
                                    <div className="product" key={`${len}${product.img}${index}`}>
                                        <div className="product-image-container">
                                            <img src={product.img} />
                                        </div>
                                        <div className="product-header-container">
                                            <div className="product-filters">
                                                <span>{product['product-filter']}</span>
                                            </div>
                                            <div className="product-title-container">
                                                <span className="product-title"> <b>Marka:</b> {product.brand}</span>
                                                <span className="product-title"><b>Renk:</b> {product.color}</span>
                                            </div>
                                            <div className="product-price-container">
                                                <span className="product-price">{product.price.toLocaleString()} TL</span>
                                                <div className="product-discount-container">
                                                    <span className="product-net-price">{product.netPrice.toLocaleString()} TL</span>
                                                    <span className="product-discount">{product.discount}%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-cart-container">
                                            <div className="product-filters">
                                                <span>{product['product-filter']}</span>
                                            </div>
                                            {
                                                true ? (<button className="add-cart-button" type="button">Sepete Ekle</button>) : (<button className="add-cart-button-disabled" type="button">Bu ürünü sepete ekleyemezsiniz.</button>)
                                            }

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ))
            }
            <Pagination count={80} />
        </div>
    );
};
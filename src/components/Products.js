import React from 'react';
import { Context } from '../context/AppContext';
import helper from '../util/helper';
import Pagination from './Pagination';

export default () => {


    return (
        <Context.Consumer>
            {
                ({ products, basket, addBasket }) => {
                    return (
                        (
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
                                                                    <span>{product.title}</span>
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
                                                                    <span>{product.title}</span>
                                                                </div>
                                                                {
                                                                    basket.find(f => f.id === product.id)
                                                                        ? (<button className="add-cart-button-disabled" type="button" onClick={() => { }}>Bu ürünü sepete ekleyemezsiniz.</button>)
                                                                        : (<button className="add-cart-button" type="button" onClick={() => addBasket(product)}>Sepete Ekle</button>)
                                                                }

                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ))
                                }
                                <Pagination />
                            </div>
                        )
                    )
                }
            }
        </Context.Consumer>
    );
};
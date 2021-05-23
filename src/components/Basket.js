import React, { useState } from 'react';
import { Context } from '../context/AppContext';

export default () => {
    const [quickBasketOpen, setQuickBasketOpen] = useState(false);

    return (
        <Context.Consumer>
            {
                ({ basket, removeFromBasket }) => (
                    <div className="basket-container">
                        <div className="basket" onClick={() => setQuickBasketOpen(!quickBasketOpen)}>
                            <span className="basket-circle">Sepetim</span>
                            <div className="basket-count">
                                {basket.length}
                            </div>
                        </div>
                        {
                            quickBasketOpen && (
                                <div className="quick-basket">
                                    {
                                        basket.length === 0 && <span className="quick-basket-empty">Sepetinizde hiç ürün yok.</span>
                                    }
                                    {
                                        basket.map(item => (
                                            <div className="quick-basket-item" key={item.id}>
                                                <img className="quick-basket-image" src={item.img} />
                                                <div className="quick-basket-info">
                                                    <span className="quick-basket-title">{item.title}</span>
                                                    <button type="button" className="quick-basket-remove" onClick={() => removeFromBasket(item)}>Kaldır</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }

                    </div>
                )
            }
        </Context.Consumer>
    );
};
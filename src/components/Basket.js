import React, { useState } from 'react';
import { Context } from '../context/AppContext';
import Modal from './Modal';

export default () => {
    const [quickBasketOpen, setQuickBasketOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState({});

    return (
        <Context.Consumer>
            {
                ({ basket, removeFromBasket }) => (
                    <>
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
                                                        <button type="button" className="quick-basket-remove" onClick={() => {
                                                            setCurrentItem(item);
                                                            setIsModalOpen(true);
                                                        }}>Kaldır</button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            onCancel={() => setIsModalOpen(false)}
                            onSuccess={() => {
                                removeFromBasket(currentItem);
                                setIsModalOpen(false);
                            }}
                            title="Ürünü silmek istediğinize emin misiniz?"
                            content={`${currentItem.title}`}
                        />
                    </>
                )
            }
        </Context.Consumer>
    );
};
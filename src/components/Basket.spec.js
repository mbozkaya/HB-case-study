import { shallow, render, mount } from 'enzyme';
import React from 'react';
import { Context } from '../context/AppContext';
import Basket from './Basket';

describe('Basket should be', () => {
    const basket = [{
        id: 1,
        price: 3500,
        discount: 20,
        createdDate: new Date(2021, 4, 1),
        img: "images\\samsung-color-product.jpg",
        title: "Samsung Galaxy A21s 64 GB (Samsung Türkiye Garantili)",
        brand: "Samsung", color: "Siyah",
        netPrice: 2499
    }];
    const removeFromBasket = jest.fn();
    const renderBasket = () => {
        return mount(
            <Context.Provider value={
                {
                    basket,
                    removeFromBasket,
                }
            }>
                <Basket />
            </Context.Provider>
        )
    }
    it('render successfull', () => {
        const wrapper = renderBasket();

        expect(wrapper.length).toEqual(1);
    });

    it('show quick basket list', () => {
        const wrapper = renderBasket();
        wrapper.find('div.basket').simulate('click');
        expect(wrapper.find('div.quick-basket').length).toBe(1);
    });

    it('basket count equal to 1', () => {
        const wrapper = renderBasket();
        const basketCount = wrapper.find('.basket-count');
        expect(basketCount.text()).toEqual(`${basket.length}`);
    });
});
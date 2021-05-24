import { mount, render, shallow } from 'enzyme';
import React from 'react';
import { Context } from '../context/AppContext';
import helper from '../util/helper';
import Products from './Products';

describe('Products should ', () => {
    const products = helper.generateProduct();
    const addBasket = jest.fn();
    const currentPage = 0;
    const changePage = jest.fn();
    const filteredProducts = [...products];
    let basket = [];

    it('list the products as its count', () => {

        const wrapper = render(
            <Context.Provider value={{
                products, basket, addBasket, currentPage, changePage, filteredProducts
            }}>
                <Products />
            </Context.Provider>
        );

        expect(wrapper.find('.product').length).toBe(products.length);
    });

    it('call addbasket when click add button', () => {
        const wrapper = mount(
            <Context.Provider value={{
                products, basket, addBasket, currentPage, changePage, filteredProducts
            }}>
                <Products />
            </Context.Provider>
        );

        wrapper.find('.add-cart-button').at(0).simulate('click');

        expect(addBasket).toHaveBeenCalled();
    });

    it('disable item when its selected to basket', () => {
        basket = [filteredProducts[0]];

        const wrapper = mount(
            <Context.Provider value={{
                products, basket, addBasket, currentPage, changePage, filteredProducts
            }}>
                <Products />
            </Context.Provider>
        );

        expect(wrapper.find('.add-cart-button-disabled').length).toBe(1);
    });
});
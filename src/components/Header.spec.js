import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { Context } from '../context/AppContext';
import Header from './Header';

describe('Header should be ', () => {
    const search = jest.fn();
    const clear = jest.fn();
    const basket = jest.fn();
    const removeFromBasket = jest.fn();
    const renderHeader = () => {
        return mount(
            <Context.Provider value={
                {
                    search,
                    clear,
                    basket,
                    removeFromBasket
                }
            }>
                <Header />
            </Context.Provider>
        )
    };


    it('render successfull', () => {
        const wrapper = renderHeader();

        expect(wrapper.length).toEqual(1);
    });

    it('search when enter more than one key', () => {
        const wrapper = renderHeader();

        wrapper.find('.search-input').simulate('change', { value: 'A' });
        expect(search).not.toHaveBeenCalled();
    });
});
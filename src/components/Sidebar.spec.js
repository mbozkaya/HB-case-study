import { mount, render, shallow } from 'enzyme';
import React from 'react';
import { Context } from '../context/AppContext';
import helper from '../util/helper';
import Sidebar from './Sidebar';

describe('Sidebar should ', () => {
    const filteredProducts = helper.generateProduct();
    const clear = jest.fn();
    const orderBy = jest.fn();
    const filterProduct = jest.fn();
    let filter = {};
    let order = {};

    it('show filtered row when color filter', () => {
        filter = {
            color: 'Sarı'
        };
        const wrapper = mount(
            <Context.Provider value={{
                filterProduct, filter, orderBy, order, filteredProducts, clear
            }}>
                <Sidebar />
            </Context.Provider>
        );

        const selectedItem = wrapper.find('.sidebar-menu-item-selected');

        const filterItemCount = filteredProducts.filter(f => f.color === filter.color).length;

        expect(selectedItem.length).toBe(1);
        expect(selectedItem.text()).toEqual(`${filter.color} (${filterItemCount})`);
        expect(wrapper.find('.sidebar-menu-item-remove').length).toBe(1);
    });

    it('show filtered row when brand filter', () => {
        filter = {
            brand: 'Apple'
        };
        const wrapper = mount(
            <Context.Provider value={{
                filterProduct, filter, orderBy, order, filteredProducts, clear
            }}>
                <Sidebar />
            </Context.Provider>
        );

        const selectedItem = wrapper.find('.sidebar-menu-item-selected');

        const filterItemCount = filteredProducts.filter(f => f.brand === filter.brand).length;

        expect(selectedItem.length).toBe(1);
        expect(selectedItem.text()).toEqual(`${filter.brand} (${filterItemCount})`);
        expect(wrapper.find('.sidebar-menu-item-remove').length).toBe(1);
    });

    it('show ordered row as background orange', () => {
        filter = {};
        order = helper.orderTypes.lowestPrice;
        const wrapper = mount(
            <Context.Provider value={{
                filterProduct, filter, orderBy, order, filteredProducts, clear
            }}>
                <Sidebar />
            </Context.Provider>
        );

        expect(wrapper.find('.sidebar-menu-order-selected').text()).toEqual(`${helper.orderTypeName[order]}`);
    });

    it('be order when click order span', () => {
        const wrapper = mount(
            <Context.Provider value={{
                filterProduct, filter, orderBy, order, filteredProducts, clear
            }}>
                <Sidebar />
            </Context.Provider>
        );

        wrapper.find('.sidebar-menu-order').at(0).simulate('click');

        expect(orderBy).toHaveBeenCalled();
    });

    it('should be filter when click filter item', () => {
        const wrapper = mount(
            <Context.Provider value={{
                filterProduct, filter, orderBy, order, filteredProducts, clear
            }}>
                <Sidebar />
            </Context.Provider>
        );

        wrapper.find('.sidebar-menu-items').at(0).simulate('click');

        expect(filterProduct).toHaveBeenCalled();
    });
})
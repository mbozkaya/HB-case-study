import { mount, render, shallow } from 'enzyme';
import React from 'react';
import { Context } from '../context/AppContext';
import { SearchedKey, SubHeader } from './SubHeader';

describe('Subheader should ', () => {
    let filter = {};
    let searchKey = '';
    let order = {};
    const orderBy = jest.fn();

    it('show the search key', () => {
        searchKey = 'test';
        const wrapper = mount(
            <Context.Provider value={{
                filter, searchKey, order, orderBy
            }}>
                <SubHeader />
            </Context.Provider>
        );

        expect(wrapper.contains(<SearchedKey searchKey={searchKey} />)).toBe(true);
    });

    it('orderBy when change the order select', () => {
        const wrapper = mount(
            <Context.Provider value={{
                filter, searchKey, order, orderBy
            }}>
                <SubHeader />
            </Context.Provider>
        );


        wrapper.find('.selectbox').simulate('change', {
            target: { value: 1 }
        })

        expect(orderBy).toHaveBeenCalled();

    });

    it('show the brand when filtered brand', () => {
        filter = {
            brand: 'Apple'
        };

        const wrapper = mount(
            <Context.Provider value={{
                filter, searchKey, order, orderBy
            }}>
                <SubHeader />
            </Context.Provider>
        );


        expect(wrapper.find('.page-title').text()).toEqual(`${filter.brand} cep telefonu`);
    })
});
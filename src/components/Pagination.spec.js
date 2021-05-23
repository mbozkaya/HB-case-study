import { mount, render, shallow } from 'enzyme';
import React from 'react';
import { Context } from '../context/AppContext';
import Pagination from './Pagination';

describe('Pagination should ', () => {
    it('show two page number', () => {
        const filteredProducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        const currentPage = 0;
        const changePage = jest.fn();

        const wrapper = render(
            <Context.Provider value={{
                currentPage,
                changePage,
                filteredProducts
            }
            }>
                <Pagination />
            </Context.Provider>);

        expect(wrapper.find('.pagination-item').length).toBe(4);
    });


    it('change the page when click next page', () => {
        const currentPage = 0;
        const changePage = jest.fn();
        const filteredProducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

        const wrapper = mount(
            <Context.Provider value={{
                currentPage,
                changePage,
                filteredProducts
            }
            }>
                <Pagination />
            </Context.Provider>);

        const item = wrapper.find('.pagination-item')
        item.at(3).simulate('click');

        expect(changePage).toHaveBeenCalled();
    });

    it('show current page is 1', () => {
        const currentPage = 2;
        const changePage = jest.fn();
        const filteredProducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

        const wrapper = mount(
            <Context.Provider value={{
                currentPage,
                changePage,
                filteredProducts
            }
            }>
                <Pagination />
            </Context.Provider>);

        expect(wrapper.find('.pagination-current-page').text()).toBe(`${currentPage}`);
    });

    it('change the page when click previous page', () => {
        const currentPage = 2;
        const changePage = jest.fn();
        const filteredProducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

        const wrapper = mount(
            <Context.Provider value={{
                currentPage,
                changePage,
                filteredProducts
            }
            }>
                <Pagination />
            </Context.Provider>);
        console.log(wrapper.html());
        wrapper.find('.pagination-item-start').simulate('click');
        console.log(wrapper.html());


        expect(wrapper.find('.pagination-current-page').text()).toBe(`${currentPage}`);

    });

    it('change the page when click next page', () => {
        const currentPage = 1;
        const changePage = jest.fn();
        const filteredProducts = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

        const wrapper = mount(
            <Context.Provider value={{
                currentPage,
                changePage,
                filteredProducts
            }
            }>
                <Pagination />
            </Context.Provider>);
        wrapper.find('.pagination-item-end').simulate('click');

        expect(wrapper.find('.pagination-current-page').text()).toBe(`${currentPage}`);

    });
})
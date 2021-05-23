import { mount, render, shallow } from 'enzyme';
import React, { useContext } from 'react';
import helper from '../util/helper';
import { Context, ContextProvider } from './AppContext';

describe('Context should ', () => {
    const mockSetState = jest.fn();

    beforeEach(() => {
        jest.mock('react', () => ({
            useState: initial => [initial, mockSetState]
        }));
    });

    const getWrapper = () => mount(
        <ContextProvider>
            <Context.Consumer>
                {
                    (con) => (
                        <>
                            <button type="button" onClick={() => { con.changePage(2) }} id="changePage"></button>
                            <button type="button" onClick={() => { con.filterProduct('color', 'Sarı') }} id="changeFilter"></button>
                            <button type="button" onClick={() => { con.orderBy(helper.orderTypes.highestPrice) }} id="changeOrder"></button>
                            <button type="button" onClick={() => { con.search('apple') }} id="changeSearch"></button>
                            <span id="currentPage">{con.currentPage}</span>
                            <span id="filter">{con.filter.color || ''}</span>
                            <span id="order">{(con.order && helper.orderTypeName[con.order]) || ''}</span>
                            <span id="search">{con.searchKey || ''}</span>
                        </>
                    )
                }
            </Context.Consumer>
        </ContextProvider>
    );

    it('show number of total row', () => {
        const wrapper = mount(
            <ContextProvider>
                <Context.Consumer>
                    {
                        (con) => (
                            <>
                                <span>{con.totalCount}</span>
                            </>
                        )
                    }
                </Context.Consumer>
            </ContextProvider>

        );

        expect(wrapper.find('span').text()).toBe('36')
    });

    it('show currentPage when change currentPage, order, filter, search', () => {
        const wrapper = getWrapper();

        wrapper.find('#changePage').simulate('click');
        const expected = 2;

        expect(wrapper.find('#currentPage').text()).toEqual(`${expected}`);
    });

    it('validate changing filter', () => {
        const wrapper = getWrapper();

        wrapper.find('#changeFilter').simulate('click');
        const expectedFilter = { color: 'Sarı' };

        expect(wrapper.find('#filter').text()).toEqual(expectedFilter.color);
    });

    it('validate changing order', () => {
        const wrapper = getWrapper();

        wrapper.find('#changeOrder').simulate('click');
        const expectedOrder = helper.orderTypes.highestPrice;

        expect(wrapper.find('#order').text()).toEqual(helper.orderTypeName[expectedOrder]);
    });

    it('validate changing search param', () => {
        const wrapper = getWrapper();

        wrapper.find('#changeSearch').simulate('click');
        const expectedKey = 'apple';

        expect(wrapper.find('#search').text()).toEqual(expectedKey);
    })

});
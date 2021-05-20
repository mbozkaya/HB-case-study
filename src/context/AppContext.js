import React, { createContext, useEffect, useLayoutEffect, useState } from 'react';
import helper from '../util/helper';

const Context = createContext();

const ContextProvider = (props) => {
    const { children } = props;
    const [appData, setAppData] = useState({
        data: helper.generateProduct(),
    });
    const [basket, setBasket] = useState([]);
    const [paging, setPaging] = useState({
        currentPage: 1,
    });
    const [products, setProducts] = useState([]);


    const addBasket = (item) => {
        const newBasket = [...basket];
        newBasket.push(item);
        setBasket(newBasket);
    };
    const removeFromBasket = (item) => {
        setBasket(basket.filter(f => f.id !== item.id));
    };

    const changePage = (page) => {
        setPaging({
            ...paging,
            currentPage: page,
        });
    };


    useEffect(() => {
        const { currentPage } = paging;
        const itemsPerPage = 12;
        const start = itemsPerPage * (currentPage - 1);
        const end = start + itemsPerPage;
        const newProdcuts = appData.data.slice(start, end);
        setProducts(newProdcuts);
    }, [paging.currentPage]);

    return (
        <Context.Provider value={
            {
                totalCount: appData.data.length,
                allData: appData.data,
                basket,
                currentPage: paging.currentPage,
                addBasket,
                removeFromBasket,
                changePage,
                products,
            }
        }>
            {
                children
            }
        </Context.Provider>
    )

};

export { Context, ContextProvider };
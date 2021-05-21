import React, { createContext, useEffect, useLayoutEffect, useState } from 'react';
import helper from '../util/helper';

const Context = createContext();

const ContextProvider = (props) => {
    const { children } = props;
    const [appData, setAppData] = useState({
        data: helper.generateProduct(),
    });
    const [basket, setBasket] = useState(helper.getStoredBasket().items);
    const [paging, setPaging] = useState({
        currentPage: 1,
    });
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState({});
    const [searchKey, setSearchKey] = useState('');
    const [order, setOrder] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState([...appData.data]);


    const addBasket = (item) => {
        const storedBasket = helper.getStoredBasket();
        if (!storedBasket.items.some(store => store.id === item.id)) {
            storedBasket.items.push(item);
            localStorage.setItem('basket', JSON.stringify(storedBasket));
            setBasket(storedBasket.items);
        }
    };

    const removeFromBasket = (item) => {
        const storedBasket = helper.getStoredBasket();
        const newBasket = storedBasket.items.filter(f => f.id !== item.id);
        localStorage.setItem('basket', JSON.stringify({
            items: newBasket
        }))
        setBasket(newBasket);
    };

    const changePage = (page) => {
        setPaging({
            ...paging,
            currentPage: page,
        });
    };

    const filterProduct = (key, value) => {
        const data = [...appData.data];
        setFilteredProducts(data.filter(f => f[key] === value));
        const newFilter = { ...filter };
        newFilter[key] = value;
        setFilter(newFilter);
        setOrder(0);
    };

    const search = (key) => {
        const data = [...appData.data];
        setFilteredProducts(data.filter(s => s.title.toLocaleLowerCase().includes(key.toLocaleLowerCase())))
        setSearchKey(key);
    };

    const clear = () => {
        setFilteredProducts([...appData.data]);
        setFilter({});
        setSearchKey('');
        setOrder(0);
    };

    const orderBy = (orderType) => {
        let orderedProduct = [];
        switch (orderType) {
            case helper.orderTypes.lowestPrice:
                orderedProduct = helper.orderBy(appData.data, 'netPrice');
                break;
            case helper.orderTypes.highestPrice:
                orderedProduct = helper.orderBy(appData.data, 'netPrice', 'desc');
                break;
            case helper.orderTypes.newest:
                orderedProduct = helper.orderBy(appData.data, 'createdDate');
                break;
            case helper.orderTypes.oldest:
                orderedProduct = helper.orderBy(appData.data, 'createdDate', 'desc');
                break;
            default:
                orderedProduct = helper.orderBy(appData.data, 'netPrice');
                break;
        }

        setFilteredProducts(orderedProduct);
        setOrder(orderType);
    };

    const getProducts = () => {
        const { currentPage } = paging;
        const itemsPerPage = 12;
        const start = itemsPerPage * (currentPage - 1);
        const end = start + itemsPerPage;
        const newProdcuts = filteredProducts.slice(start, end);
        setProducts(newProdcuts);
    }


    useEffect(() => {
        getProducts();
    }, [paging.currentPage, order, filter]);

    useLayoutEffect(() => {
        window.clearState = () => clear();
    }, []);

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
                filteredProducts,
                filterProduct,
                search,
                clear,
                filter,
                searchKey,
                order,
                orderBy
            }
        }>
            {
                children
            }
        </Context.Provider>
    )

};

export { Context, ContextProvider };
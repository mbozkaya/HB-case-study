import React, { createContext, useEffect, useLayoutEffect, useState } from 'react';
import helper from '../util/helper';

const Context = createContext();

const ContextProvider = (props) => {
    const { children } = props;
    const [appData, setAppData] = useState({
        data: helper.staticProducts(),
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
            item.basketDate = new Date();
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
        const newFilter = { ...filter };
        newFilter[key] = value;
        setFilter(newFilter);
    };

    const search = (key) => {
        setSearchKey(key);
    };

    const clear = () => {
        setFilteredProducts([...appData.data]);
        setFilter({});
        setSearchKey('');
        setOrder(0);
    };

    const orderBy = (orderType) => {
        setOrder(orderType);
    };

    const getProducts = () => {
        const { currentPage } = paging;
        const itemsPerPage = 12;
        const start = itemsPerPage * (currentPage - 1);
        const end = start + itemsPerPage;

        let newFilteredData = [...appData.data];
        if (searchKey && searchKey.length > 1) {
            newFilteredData = newFilteredData.filter(s => s.title.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase()));
        } else {
            Object.keys(filter).forEach(key => {
                newFilteredData = newFilteredData.filter(f => f[key] === filter[key]);
            });
        }


        switch (order) {
            case helper.orderTypes.lowestPrice:
                newFilteredData = helper.orderBy(newFilteredData, 'netPrice');
                break;
            case helper.orderTypes.highestPrice:
                newFilteredData = helper.orderBy(newFilteredData, 'netPrice', 'desc');
                break;
            case helper.orderTypes.newest:
                newFilteredData = helper.orderBy(newFilteredData, 'createdDate');
                break;
            case helper.orderTypes.oldest:
                newFilteredData = helper.orderBy(newFilteredData, 'createdDate', 'desc');
                break;
            default:
                newFilteredData = helper.orderBy(newFilteredData, 'netPrice');
                break;
        }

        const newProdcuts = newFilteredData.slice(start, end);
        setFilteredProducts([...newFilteredData]);
        setProducts(newProdcuts);
    }


    useEffect(() => {
        getProducts();
    }, [paging.currentPage, order, filter, searchKey]);

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
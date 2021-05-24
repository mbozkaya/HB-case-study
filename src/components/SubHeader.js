import React from 'react';
import { Context } from '../context/AppContext';
import helper from '../util/helper';

const SearchedKey = (prop) => {
    const { searchKey } = prop;
    return (
        <span>Aranan Kelime: <b>{searchKey}</b></span>
    );
};

const Options = (prop) => {
    const { currentValue } = prop;

    return (
        <>
            {
                Object.values(helper.orderTypes).map((orderType) => (
                    <option
                        className={`selectbox-option ${currentValue === orderType && 'selectbox-option-selected'}`}
                        key={orderType}
                        value={orderType}
                    >
                        {helper.orderTypeName[orderType]}
                    </option>
                ))
            }
        </>
    )
}

const SubHeader = () => {
    return (
        <Context.Consumer>
            {
                ({ filter, searchKey, order, orderBy }) => (
                    <div className="subheader">
                        <div className="page-title-container">
                            <label className="page-title">
                                {filter.brand && `${filter.brand} cep telefonu` || ""}
                            </label>
                            <label className="page-subtitle">
                                {searchKey && <SearchedKey searchKey={searchKey} />}
                            </label>
                        </div>
                        <select className="selectbox" value={order} onChange={(e) => { orderBy(Number.parseInt(e.target.value)) }}>
                            <option defaultValue={orderBy === 0} hidden >Sıralama</option>
                            <Options currentValue={order} />
                        </select>
                    </div>
                )
            }
        </Context.Consumer>
    );
};

export { SubHeader, SearchedKey, Options };
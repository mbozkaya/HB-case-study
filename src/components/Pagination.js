import React from 'react';
import { Context } from '../context/AppContext';
import helper from '../util/helper';

export default () => {
    return (
        <Context.Consumer>
            {
                ({ currentPage, changePage, filteredProducts }) => (
                    filteredProducts.length < 12 ? (<></>) : (
                        <div className="pagination-container">
                            <div className="pagination-item pagination-item-start" onClick={() => { currentPage - 1 < 1 ? changePage(1) : changePage(currentPage - 1) }} >
                                <span className="pagination-text">{'<'}</span>
                            </div>
                            {
                                helper.createArrayFromLength(filteredProducts.length / 12).map((pageCount, index) => (
                                    <div className={`pagination-item ${currentPage === (pageCount + 1) && 'pagination-current-page'}`} onClick={() => { changePage((pageCount + 1)); }} key={`${index}${(pageCount + 1)}`} >
                                        <span className="pagination-text">{(pageCount + 1)}</span>
                                    </div>
                                ))
                            }
                            <div className="pagination-item pagination-item-end" onClick={() => {
                                const maxPageCount = filteredProducts.length / 12;
                                currentPage + 1 > maxPageCount ? changePage(maxPageCount) : changePage(currentPage + 1);
                            }}>
                                <span className="pagination-text">{'>'}</span>
                            </div>
                        </div>
                    )
                )
            }
        </Context.Consumer>
    )
}
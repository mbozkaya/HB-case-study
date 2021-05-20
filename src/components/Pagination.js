import React from 'react';
import { Context } from '../context/AppContext';
import helper from '../util/helper';

export default () => {
    return (
        <Context.Consumer>
            {
                ({ totalCount, currentPage, changePage }) => (
                    totalCount < 12 ? (<></>) : (
                        <div className="pagination-container">
                            <div className="pagination-item pagination-item-start" onClick={() => { currentPage - 1 < 1 ? changePage(1) : changePage(currentPage - 1) }} >
                                <span className="pagination-text">{'<'}</span>
                            </div>
                            {
                                helper.createArrayFromLength(totalCount / 12, 1).map((pageCount, index) => (
                                    <div className={`pagination-item ${currentPage === pageCount && 'pagination-current-page'}`} onClick={() => { changePage(pageCount); }} key={`${index}${pageCount}`} >
                                        <span className="pagination-text">{pageCount}</span>
                                    </div>
                                ))
                            }
                            <div className="pagination-item pagination-item-end" onClick={() => {
                                const maxPageCount = totalCount / 12;
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
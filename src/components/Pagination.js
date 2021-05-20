import React, { useState } from 'react';
import helper from '../util/helper';

export default (props) => {
    const { count } = props;
    const [currentPage, setCurrentPage] = useState(1);
    return (
        count < 12 ? (<></>) : (
            <div className="pagination-container">
                <div className="pagination-item pagination-item-start" onClick={() => { }} >
                    <span className="pagination-text">{'<'}</span>
                </div>
                {
                    helper.createArrayFromLength(count / 12, 1).map((pageCount, index) => (
                        <div className="pagination-item" onClick={() => { }} key={`${index}${pageCount}`} >
                            <span className="pagination-text">{pageCount}</span>
                        </div>
                    ))
                }
                <div className="pagination-item pagination-item-end" onClick={() => { }}>
                    <span className="pagination-text">{'>'}</span>
                </div>
            </div>
        )
    )
}
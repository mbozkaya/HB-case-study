import React from 'react';
import { Context } from '../context/AppContext';

export default () => {

    return (
        <Context.Consumer>
            {
                ({basket}) => (
                    <div className="basket">
                        <span className="basket-circle">Sepetim</span>
                        <div className="basket-count">
                            {basket.length}
                        </div>
                    </div>
                )
            }
        </Context.Consumer>
    );
};
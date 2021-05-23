import React from 'react';
import { Context } from '../context/AppContext';
import Basket from './Basket';

const Header = () => {

    return (
        <Context.Consumer>
            {
                ({ search, clear }) => (
                    <div className="header">
                        <div className="logo">
                            <img src="images\Vector.png" />
                        </div>
                        <form>
                            <div className="search">
                                <div className="search-icon">
                                    <img src="images\\search-icon.png" />
                                </div>
                                <input className="search-input" type="text" placeholder="25 milyon’dan fazla ürün içerisinde ara"
                                    onInput={(e) => {
                                        const { nativeEvent: { inputType }, target: { value } } = e;
                                        if (inputType === 'insertText' && value.length > 1) {
                                            search(value);
                                        } else if (inputType === 'deleteContentBackward' && value.length < 2) {
                                            clear();
                                        }
                                    }} />
                            </div>
                        </form>
                        <Basket />
                    </div>
                )
            }
        </Context.Consumer>
    );
};

export default Header;
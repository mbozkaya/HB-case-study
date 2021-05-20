import React from 'react';
import Basket from './Basket';

const Header = () => {

    return (
        <div className="header">
            <div className="logo">
                <img src="images\Vector.png" />
            </div>
            <form>
                <div className="search">
                    <div className="search-icon">
                        <img src="images\\search-icon.png" />
                    </div>
                    <input className="search-input" type="text" placeholder="25 milyon’dan fazla ürün içerisinde ara" />
                </div>
            </form>
            <Basket />
        </div>

    );
};

export default Header;
import React from 'react';

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
            <div className="basket">
                <span className="basket-circle">Sepetim</span>
                <div className="basket-count">
                    1
                </div>
            </div>
        </div>

    );
};

export default Header;
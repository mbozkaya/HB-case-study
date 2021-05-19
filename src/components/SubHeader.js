import React from 'react';

export default () => {
    return (
        <div className="subheader">
            <div className="page-title-container">
                <label className="page-title">iPhone iOS cep telefonu</label>
                <label className="page-subtitle">Aranan Kelime: <b>iphone 11</b></label>
            </div>
            {/* <div className="selectbox">
                <img src="images\\dropdown-icon.png" />
                <select>
                    <option value=""></option>
                </select>
            </div> */}
            <select className="selectbox" placeholder="Sıralama">
                <option value=""></option>
            </select>
        </div>
    );
};
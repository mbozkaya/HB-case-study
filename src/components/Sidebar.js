import React from 'react';
import { Context } from '../context/AppContext';
import helper from '../util/helper';

export default () => {
    return (
        <Context.Consumer>
            {
                ({ filterProduct, filter, orderBy, order, filteredProducts, clear }) => (
                    <div className="sidebar">
                        <div className="sidebar-item">
                            <div className="sidebar-item-title">
                                <span className="sidebar-item-text">Renk</span>
                            </div>
                            <div className="sidebar-menu-item">
                                <ul>
                                    {
                                        Object.keys(helper.groupBy(filteredProducts, 'color')).map(color => (
                                            <li key={color}>
                                                <span className={`sidebar-menu-items ${filter.color && filter.color === color && 'sidebar-menu-item-selected'}`} onClick={() => { filterProduct('color', color); }}>
                                                    {`${color} (${helper.groupBy(filteredProducts, 'color')[color].row.length})`}
                                                </span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-item-title">
                                <span className="sidebar-item-text">Sıralama</span>
                            </div>
                            <div className="sidebar-menu-item">
                                <ul>
                                    <li><span className={`sidebar-menu-items ${order === helper.orderTypes.lowestPrice && 'sidebar-menu-order-selected'}`} onClick={() => orderBy(helper.orderTypes.lowestPrice)}>En Düşük Fiyat</span></li>
                                    <li><span className={`sidebar-menu-items ${order === helper.orderTypes.highestPrice && 'sidebar-menu-order-selected'}`} onClick={() => orderBy(helper.orderTypes.highestPrice)}>En Yüksek Fiyat</span></li>
                                    <li><span className={`sidebar-menu-items ${order === helper.orderTypes.newest && 'sidebar-menu-order-selected'}`} onClick={() => orderBy(helper.orderTypes.newest)}>En Yeniler (A{'>'}Z)</span></li>
                                    <li><span className={`sidebar-menu-items ${order === helper.orderTypes.oldest && 'sidebar-menu-order-selected'}`} onClick={() => orderBy(helper.orderTypes.oldest)}>En Eskiler (Z{'>'}A)</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-item-title">
                                <span className="sidebar-item-text">Marka</span>
                            </div>
                            <div className="sidebar-menu-item">
                                <ul>
                                    {
                                        Object.keys(helper.groupBy(filteredProducts, 'brand')).map(brand => (
                                            <li key={brand}>
                                                <span className={`sidebar-menu-items ${filter.brand && filter.brand === brand && 'sidebar-menu-item-selected'}`} onClick={() => { filterProduct('brand', brand) }}>
                                                    {`${brand} (${helper.groupBy(filteredProducts, 'brand')[brand].row.length})`}
                                                </span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        {
                            Object.values(filter).length > 0 && (
                                <div className="sidebar-item">
                                    <div className="sidebar-menu-item">
                                        <ul>
                                            <li><span className={`sidebar-menu-items`} onClick={() => { clear(); }}>x Temizle</span></li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </Context.Consumer>
    );
}
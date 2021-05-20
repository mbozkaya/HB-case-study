import React from 'react';
import { Context } from '../context/AppContext';
import helper from '../util/helper';

export default () => {
    return (
        <Context.Consumer>
            {
                ({ allData }) => (
                    <div className="sidebar">
                        <div className="sidebar-item">
                            <div className="sidebar-item-title">
                                <span className="sidebar-item-text">Renk</span>
                            </div>
                            <div className="sidebar-menu-item">
                                <ul>
                                    {
                                        Object.keys(helper.groupBy(allData, 'color')).map(color => (
                                            <li key={color}>
                                                <a className="sidebar-menu-items" href="#">{`${color} (${helper.groupBy(allData, 'color')[color].row.length})`}</a>
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
                                    <li><a className="sidebar-menu-items" href="#">En Düşük Fiyat</a></li>
                                    <li><a className="sidebar-menu-items" href="#">En Yüksek Fiyat</a></li>
                                    <li><a className="sidebar-menu-items" href="#">En Yeniler (A{'>'}Z)</a></li>
                                    <li><a className="sidebar-menu-items" href="#">En Yeniler (Z{'>'}A)</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-item-title">
                                <span className="sidebar-item-text">Marka</span>
                            </div>
                            <div className="sidebar-menu-item">
                                <ul>
                                    <li><a className="sidebar-menu-items" href="#">Samsung (4)</a></li>
                                    <li><a className="sidebar-menu-items" href="#">Nokia (6)</a></li>
                                    <li><a className="sidebar-menu-items" href="#">Apple (3)</a></li>
                                    <li><a className="sidebar-menu-items" href="#">LG (2)</a></li>
                                    <li><a className="sidebar-menu-items" href="#">Huawei (6)</a></li>
                                    <li><a className="sidebar-menu-items" href="#">Xiaomi (9)</a></li>
                                    <li><a className="sidebar-menu-items" href="#">General Mobile (1)</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </Context.Consumer>
    );
}
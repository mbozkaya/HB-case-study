import React from 'react';

export default () => {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <div className="sidebar-item-title">
                    <span className="sidebar-item-text">Renk</span>
                </div>
                <div className="sidebar-menu-item">
                    <li>
                        <ul><a className="sidebar-menu-items" href="#">Label Text (4)</a></ul>
                        <ul><a className="sidebar-menu-items" href="#">Lacivert (3)</a></ul>
                        <ul><a className="sidebar-menu-items" href="#">Sarı (1)</a></ul>
                        <ul><a className="sidebar-menu-items" href="#">Siyah (5)</a></ul>
                        <ul><a className="sidebar-menu-items" href="#">Beyaz (2)</a></ul>
                    </li>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-item-title">
                    <span className="sidebar-item-text">Sıralama</span>
                </div>
                <div className="sidebar-menu-item">
                    <li>
                        <ul><a className="sidebar-menu-items" href="#">En Düşük Fiyat</a></ul>
                        <ul><a className="sidebar-menu-items" href="#">En Yüksek Fiyat</a></ul>
                        <ul><a className="sidebar-menu-items" href="#">En Yeniler (A{'>'}Z)</a></ul>
                        <ul><a className="sidebar-menu-items" href="#">En Yeniler (Z{'>'}A)</a></ul>
                    </li>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-item-title">
                    <span className="sidebar-item-text">Marka</span>
                </div>
                <div className="sidebar-menu-item">
                    <li>
                        <ul><a className="sidebar-menu-items" href="#">Samsung (4)</a></ul>
                        <ul><a className="sidebar-menu-items" href="#">Nokia (6)</a></ul>
                        <ul><a className="sidebar-menu-items" href="#">Apple (3)</a></ul>
                        <ul><a className="sidebar-menu-items" href="#">LG (2)</a></ul>
                        <ul><a className="sidebar-menu-items" href="#">Huawei (6)</a></ul>
                        <ul><a className="sidebar-menu-items" href="#">Xiaomi (9)</a></ul>
                        <ul><a className="sidebar-menu-items" href="#">General Mobile (1)</a></ul>
                    </li>
                </div>
            </div>
        </div>

    );
}
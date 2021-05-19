import React from 'react';

export default () => {
    return (
        <div className="sidebar">
            <div className="tags">
                <div className="tags-title">
                    <h4 className="tags-title">Renk</h4>
                </div>
                <li>
                    <ul><a href="#">Label Text (4)</a></ul>
                    <ul><a href="#">Lacivert (3)</a></ul>
                    <ul><a href="#">Sarı (1)</a></ul>
                    <ul><a href="#">Siyah (5)</a></ul>
                    <ul><a href="#">Beyaz (2)</a></ul>
                </li>
            </div>
            <div className="order">
                <div className="order-title">
                    <h4 className="tags-title">Sıralama</h4>
                </div>
                <li>
                    <ul><a href="#">En Düşük Fiyat</a></ul>
                    <ul><a href="#">En Yüksek Fiyat</a></ul>
                    <ul><a href="#">En Yeniler (A{'>'}Z)</a></ul>
                    <ul><a href="#">En Yeniler (Z{'>'}A)</a></ul>
                </li>
            </div>
            <div className="brand">
                <div className="brand-title">
                    <h4 className="tags-title">Marka</h4>
                </div>
                <li>
                    <ul><a href="#">Samsung (4)</a></ul>
                    <ul><a href="#">Nokia (6)</a></ul>
                    <ul><a href="#">Apple (3)</a></ul>
                    <ul><a href="#">LG (2)</a></ul>
                    <ul><a href="#">Huawei (6)</a></ul>
                    <ul><a href="#">Xiaomi (9)</a></ul>
                    <ul><a href="#">General Mobile (1)</a></ul>
                </li>
            </div>
        </div>

    );
}
import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Sidebar from './components/Sidebar';
import SubHeader from './components/SubHeader';

const App = () => {
    return (
        <div className="wrapper">
            <Header />
            <SubHeader />
            <div className="main">
                <Sidebar />
                <Products />
            </div>
        </div>
    );
};

export default App;
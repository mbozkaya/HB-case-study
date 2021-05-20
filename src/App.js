import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Sidebar from './components/Sidebar';
import SubHeader from './components/SubHeader';
import { ContextProvider } from './context/AppContext';

const App = () => {
    return (
        <ContextProvider>
            <div className="wrapper">
                <Header />
                <SubHeader />
                <div className="main">
                    <Sidebar />
                    <Products />
                </div>
            </div>
        </ContextProvider>
    );
};

export default App;
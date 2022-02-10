import React from 'react';
import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";
import Hero from "./Hero";

const MainPage = () => {
    return (
        <div className='mainPageWrap'>
            <Toolbar/>
            <div className='mainPageContent'>
                <Sidebar/>
                <Hero/>
            </div>
        </div>
    );
};

export default MainPage;
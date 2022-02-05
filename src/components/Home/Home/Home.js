import React from 'react';
import About from '../../About/About';
import Faq from '../../Faq/Faq';
import Places from '../../Places/Places';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        //  Render Home Page All Component 
        <>
            <Banner />
            <Places />
            <About />
            <Faq />
        </>
    );
};

export default Home;
import React from 'react';
import UtilityCategoryCards from '../Components/UtilityCategoryCards';
import Card from '../Components/Card';
import Banner from '../Components/Banner';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    
    return (
        
      
        <div >
                        <title> Home </title>
            <Banner></Banner>
            <UtilityCategoryCards></UtilityCategoryCards>
            <Card></Card>
        </div>
        
    );
};

export default Home;
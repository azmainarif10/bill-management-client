import React from 'react';
import UtilityCategoryCards from '../Components/UtilityCategoryCards';
import Card from '../Components/Card';
import Banner from '../Components/Banner';

const Home = () => {
    
    return (
        
        <div>
            <Banner></Banner>
            <UtilityCategoryCards></UtilityCategoryCards>
            <Card></Card>
        </div>
        
    );
};

export default Home;
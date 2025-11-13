import React from 'react';
import UtilityCategoryCards from '../Components/UtilityCategoryCards';
import Card from '../Components/Card';
import Banner from '../Components/Banner';
import Accordion from '../Components/Accordion';
import OnboardingSection from '../Components/BillSection';
import Stats from '../Components/Stats';
import BenefitBanner from '../Components/BenefitBanner';

const Home = () => {
    
    return (
        
      
        <div >
                        <title> Home </title>
            <Banner></Banner>
            <UtilityCategoryCards></UtilityCategoryCards>
             <Card></Card>
          <BenefitBanner></BenefitBanner>

             <Stats></Stats>
            <OnboardingSection></OnboardingSection>
            
            <Accordion></Accordion>
        </div>
        
    );
};

export default Home;
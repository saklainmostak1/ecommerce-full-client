import React from 'react';
import HomeCard from '../HomeCard/HomeCard';
import HomeSlider from '../HomeSlider/HomeSlider';
import OurClient from '../OurClientSay/OurClient';
import SearchButton from '../SerachButton/SearchButton';
import WebsiteReview from '../WebsiteReview/WebsiteReview'

const Home = () => {
    return (
        <div >
            <div className='m-10'>
           <SearchButton></SearchButton>
        </div>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 m-5'>
            <HomeSlider></HomeSlider>
           <HomeCard></HomeCard>
           
        </div>
        <div>
            <OurClient></OurClient>
        <WebsiteReview></WebsiteReview>
        </div>
        </div>
    );
};

export default Home;
import React from 'react';
import HomeCard from '../HomeCard/HomeCard';
import HomeSlider from '../HomeSlider/HomeSlider';
import SearchButton from '../SerachButton/SearchButton';

const Home = () => {
    return (
        <div>
            <div className='m-10'>
           <SearchButton></SearchButton>
        </div>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1'>
            <HomeSlider></HomeSlider>
           <HomeCard></HomeCard>
        </div>
        </div>
    );
};

export default Home;
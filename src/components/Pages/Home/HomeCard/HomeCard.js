import React from 'react';

import img1 from '../HomeCard/hom99.jpg'
import img2 from '../HomeCard/home10.jpg'
import img3 from '../HomeCard/home6.webp'
import img4 from '../HomeCard/home88.png'
import HomeCardDetails from './HomeCardDetails';

const cardData = [
    {
        image: img1,
        
    },
    {
        image: img2,
       
    },
    {
        image: img3,
      
    },
    {
        image: img4,
       
    }
]

const HomeCard = () => {
    return (
        <div className="carousel lg:grid md:grid hidden   grid-cols-2">
            
        {
            cardData.map(cd => <HomeCardDetails
            key={cd.id}
            cd={cd}
            >

            </HomeCardDetails> )
        }
    </div>
    );
};

export default HomeCard;
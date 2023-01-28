import React from 'react';
import ClientSay from './ClientSay';
import people1 from './people1.png'
import people2 from './people2.png'
import people3 from './people3.png'
import quote from './quote.svg'

const OurClient = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Henry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Californiya',
        },
        {
            _id: 2,
            name: 'Winson Henry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Californiya',
        },
        {
            _id: 3,
            name: 'Winson Henry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Californiya',
        },
    ]
    return (
        <section className=' my-16 max-w-[1440px] mx-auto text-center'>
        <div className='flex justify-around m-5'>
            <div>
                <h3 className='text-4xl text-primary font-bold '>What Our Client Says</h3>
               
            </div>
           <figure>
            <img className='w-24 lg:w-48' src={quote} alt="" />

           </figure>
        </div>
        <div className='m-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                reviews.map(review => <ClientSay
                key={review._id}
                review={review}
                ></ClientSay>)
            }
        </div>
       </section>
    );
};

export default OurClient;
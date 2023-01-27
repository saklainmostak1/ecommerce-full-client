import React from 'react';

import img1 from '../HomeSlider/hom99.jpg'
import img2 from '../HomeSlider/home10.jpg'
import img3 from '../HomeSlider/home6.webp'
import img4 from '../HomeSlider/home88.png'
// import SliderDetails from './SliderDetails';

// const sliderData = [
//     {
//         image: img1,
//         prev: 4,
//         id: 1,
//         next: 2
//     },
//     {
//         image: img2,
//         prev: 1,
//         id: 2,
//         next: 3
//     },
//     {
//         image: img3,
//         prev: 2,
//         id: 3,
//         next: 4
//     },
//     {
//         image: img4,
//         prev: 3,
//         id: 4,
//         next: 1
//     }
// ]

const HomeSlider = () => {
    return (
        <div className="carousel w-full rounded-3xl shadow-lg mt-5 mb-5">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" alt=''/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        // <div className="carousel m-10">
            
        //     {
        //         sliderData.map(sd => <SliderDetails
        //         key={sd.id}
        //         sd={sd}
        //         >

        //         </SliderDetails> )
        //     }
        // </div>
    );
};

export default HomeSlider;
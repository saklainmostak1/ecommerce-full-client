import React from 'react';

const HomeCardDetails = ({ cd }) => {
    console.log(cd)
    const { image } = cd
    return (
        <div className="card m-5  bg-base-100 shadow-xl image-full">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default HomeCardDetails;
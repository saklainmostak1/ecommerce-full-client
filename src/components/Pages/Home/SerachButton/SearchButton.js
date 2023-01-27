import React from 'react';

const SearchButton = () => {
    return (
        <div className="relative  mx-auto max-w-[600px] ">
            <input type="text" placeholder="Search Products" className="input input-bordered w-full pr-16" />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Search</button>
        </div>
    );
};

export default SearchButton;
import React from 'react';
import img from '../../image/contact1.png'

const Contact = () => {
    return (
        <div className='mt-5'>
        <h2 className='text-3xl text-center'>Contact With Us</h2>            
                    <div className="hero my-10 w-full">
                        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lag:flex-row ">
                            <div className="text-center lg:text-left">
                                <img className='w-4/4' src={img} alt="" />
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm bg-base-100 py-5 ">

                                <form  className='grid justify-center'>
                                    <div className='grid grid-cols-1 gap-4'>
                                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered input-success " required />
                                        
                                        <input name='email' type="email" placeholder="email" className=" input input-bordered input-success  "  />
                                       

                                        <textarea name='message' className="textarea textarea-info mt-5 h-28 mb-5" placeholder="Send Your Message" required></textarea>
                                        <button type="submit" className='btn'>Send Review</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

    </div>
    );
};

export default Contact;
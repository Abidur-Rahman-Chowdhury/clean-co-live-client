import React from 'react';
import BucketGirl from '../../assests/images/bucketgirl.png';

const Landing = () => {
  return (
    <>
      <div className="hero h-screen lg:h-[60vh] bg-accent mt-16">
        <div className="hero-content flex-col lg:flex-row">
          <div  >
            <p data-aos="fade-right"  data-aos-duration="1000"  data-aos-delay="100"  className="text-xl">Best Quality</p>
            <h1 data-aos="fade-right"  data-aos-duration="1000"  data-aos-delay="200" className="text-5xl font-bold">
              Professional Cleaning Service
            </h1>
            <p data-aos="fade-right"   data-aos-duration="1000" data-aos-delay="400" className="py-6 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
            <button data-aos="fade-right"  data-aos-duration="1000" data-aos-delay="600"  className="btn btn-primary">Get Started</button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img
              src={BucketGirl}
              alt="this is the bucket girl"
              className=" h-full"
            />
          </div>
        </div>
      </div>
      <div className='rounded-lg shadow-lg p-10 w-5/6 mx-auto bg-base-200 mt-[-50px] relative'>
              <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
              <input type="text" placeholder="Type here" class="input input-bordered w-full " /> 
              <input type="text" placeholder="Type here" class="input input-bordered w-full " /> 
              <input type="text" placeholder="Type here" class="input input-bordered w-full " /> 
              <input type="text" placeholder="Type here" class="input input-bordered w-full " /> 
              <input type="text" placeholder="Type here" class="input input-bordered w-full " /> 
              <input type="text" placeholder="Type here" class="input input-bordered w-full " /> 
              <input type="text" placeholder="Type here" class="input input-bordered w-full " /> 
              <input type="text" placeholder="Type here" class="input input-bordered w-full " /> 
              </div>
              <button className="btn btn-primary uppercase mt-5 ">Get A Quote</button>
      </div>
    </>
  );
};

export default Landing;

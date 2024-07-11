import React from 'react';
import logo from '../../../assets/jsr-estates-logo.png';


export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto bg-white shadow-lg rounded-lg'>
       <img src={logo} width={300} height={100} alt='logo' />
       <br/>
      <p className='mb-6 text-lg text-gray-700 leading-relaxed'>
        JSR Estates is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
      </p>
      <p className='mb-6 text-lg text-gray-700 leading-relaxed'>
        Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-6 text-lg text-gray-700 leading-relaxed'>
        Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
      </p>
    </div>

  );
}

import React from 'react';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Header from '../components/Header';

const blog = () => {
  return (
    <div className="">
      <Header/>
      <div  className="max-w-7xl grid mx-auto my-2 p-2 shadow-md">
          
         
      <Blog/>
    
    </div>
    <Footer/>
  </div>
  )
};

export default blog;

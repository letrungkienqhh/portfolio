import React from 'react';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Header from '../components/Header';

const blog = () => {
  return (
    <div className="">
      <div className="">
          <Header/>
      </div>
    
          <div className="px-2">
             <Blog/>
          </div>
         
          
    
    
    <Footer/>
  </div>
  )
};

export default blog;

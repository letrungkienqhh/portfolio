import Link from 'next/link';
import React from 'react';

const SectionHome = () => {
  return (
   
    
    <div className="   border-b-2 text-black py-20  bg-gradient-to-b from-blue-300 to-blue-500 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
        <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
          <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose animate-[wiggle_1s_ease-in-out_infinite] scale-150 transform-gpu">WELCOME</h1>
          <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2"> I am Kiên
          </h2>
          <p className="text-sm md:text-base text-white mb-4">I am a young engineer with a passion for designing educational and environmental websites. Using AI and blockchain are challenges I want to experience and put them on my websites..</p>
           <div className="flex">
                    <Link href="#">
                      
                          <svg className="h-6 w-6 fill-current text-blue-600 mr-6" viewBox="0 0 512 512">
                              <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"/>
                          </svg>
                    
                    </Link>
                    <Link  href="https://www.instagram.com/kienletrung304/">
                      
                          <img className="h-6 w-6 fill-current text-blue-600 mr-6 hover:cursor-pointer" src="https://img.icons8.com/windows/32/000000/instagram-new.png"/>
                     
                    </Link>
                    <Link href="#">
                     
                          <img className="h-6 w-6 fill-current text-blue-600 mr-6" src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-gmail-social-media-justicon-flat-justicon.png"/>
                     
                    </Link>
                    <Link  href="https://github.com/letrungkienqhh">
                   
                          <img className="h-6 w-6 fill-current text-blue-600 mr-6 hover:cursor-pointer"  src="https://img.icons8.com/material-outlined/24/000000/github.png"/>
                      
                    </Link>
                </div>
        </div>
        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
          <div className="h-48 flex flex-wrap content-center ">
            {/* <div>
              <img className="inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png" /></div>
            <div> */}
              
              <a className="inline-block mt-28 hidden lg:block mx-5"  href="https://www.animatedimages.org/cat-computer-56.htm"><img src="https://www.animatedimages.org/data/media/56/animated-computer-image-0139.gif" border="0" alt="animated-computer-image-0139" /></a>
              <a className="inline-block mt-28 hidden lg:block mx-5" href="https://www.animatedimages.org/cat-computer-56.htm"><img src="https://www.animatedimages.org/data/media/56/animated-computer-image-0040.gif" border="0" alt="animated-computer-image-0040" /></a>
              <a className="inline-block mt-28 hidden lg:block mx-5" href="https://www.animatedimages.org/cat-computer-56.htm"><img src="https://www.animatedimages.org/data/media/56/animated-computer-image-0009.gif" border="0" alt="animated-computer-image-0009" /></a>
            {/* <div>
              <img className="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png" /></div>
          </div> */}
        </div>
      </div>
      
    </div></div>
  
   
        
  
)}
export default SectionHome

import React from 'react';
import Link from 'next/link'
const Timeline = () => {
  return  <section className="grid ">
  <div className="bg-gradient-to-b from-blue-300 to-blue-500 text-white py-8">
    <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
      <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
        <p className="ml-2 text-yellow-300 uppercase tracking-loose">Time Line</p>
        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">This is my path</p>
        <p className="text-sm md:text-base text-gray-50 mb-4">
            Its been a long way and i hope to write it more epic, more wonderful!!!
        </p>
        <Link href="/blog"><a> className="bg-transparent mr-auto hover:bg-yellow-300 text-yellow-300 hover:text-white hover:scale-105 rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
          See my photo</a></Link>
      </div>
      <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="border-2-2 border-yellow-555 absolute h-full border" style={{right: '50%', border: '2px solid #FFC100', borderRadius: '1%'}} />
            <div className="border-2-2 border-yellow-555 absolute h-full border" style={{left: '50%', border: '2px solid #FFC100', borderRadius: '1%'}} />
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300">30 April, 1998</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Borned in Hue, Viet Nam</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                    it was a sunny day in my hometown, a beautiful day in my life
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1  w-5/12 px-1 py-4 text-left">
                <p className="mb-3 text-base text-yellow-300">July, 2013</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Quốc Học Huế High School</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                Its a famous school, the dream of many students, I never regret studying there. My major was IT.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300"> July, 2016</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Graduation</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  End my beautiful and brilliant student years, take the University exam and start the real adventure of a lifetime.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1  w-5/12 px-1 py-4">
                <p className="mb-3 text-base text-yellow-300">26, March 2017</p>
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Osaka, Japan</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  Start my jouney in Japan. I learned Japanese at Meric Japanese Language School. I spent 2 years  learning the language and making a living by doing many part-time jobs.
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1 w-5/12 px-1 py-4 text-right">
                <p className="mb-3 text-base text-yellow-300"> April, 2019</p>
                <h4 className="mb-3 font-bold text-lg md:text-2xl">Hagoromo University </h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                  My course is 情報システム, it means information technology. I also took part in GCP class(Global challenge program) and had a log of chances to learn and use English. 
                 
                </p>
              </div>
            </div>
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12" />
              <div className="order-1  w-5/12 px-1 py-4">
                <p className="mb-3 text-base text-yellow-300">September, 2019</p>
                <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Tarlac, Philippines</h4>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                I came to the philippines with friends on a school sponsored trip. We study English 1 vs 1 for 3 weeks and participate in 
                extracurricular activities such as visiting the children there or talking with university students. 
                We also had the opportunity to experience the interesting food of the philippines as well as visit historical sites. 
                </p>
              </div>
            </div>
          </div>
         
          
        </div>
      </div>
    </div>
  </div>
  <div className="flex ">
      <Link href="#">
      <a  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-auto my-4 animate-pulse">
          Back to top</a></Link>
          <Link href="/blog">
          <a  className="animate-ping bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mx-auto my-4 animate-pulse">
          My photo</a></Link>
    
  </div>
  
  
</section>;
};

export default Timeline;

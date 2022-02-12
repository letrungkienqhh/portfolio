import React from 'react';

const Section = () => {
  return <div><section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
  <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
    {/* Image */}
    <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
      <img src="/tinhcach.jpg" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 " />
    </div>
    {/* Content */}
    <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
      <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
      My personality
      </h2>
      <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
      I'm a quiet person, like to think many aspects of something, I like to learn old things, I'm good at sports, I always have the will to be number 1!
      </p>
      <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
          <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Serious and Ambitous</li>
        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
          <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Introverted and Imaginative
        </li>
        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
          <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Tacful and Understantding
        </li>
      </ul>
    </div>
    {/* End  Content */}
  </div>
  <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
    {/* Content */}
    <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
      <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
        I can, I have...
      </h2>
      <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
      Through many long trips, I have learned and practiced some skills that I think are suitable for work and life in the future.
      </p>
      <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
          <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Vietnamese , Japanese ( JLPT N2 ), English (TOEIC 845)
        </li>
        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
          <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Knowledge of web development, especially nodejs, reactjs, typescript, java..
        </li>
        <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
          <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Thinking and teamwork skills, public presentation skills, ..
        </li>
      </ul>
    </div>
    {/* End  Content */}
    {/* Image */}
    <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
      <img src="ability.jpg" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32" />
    </div>
  </div>
</section>
{/* Section 2 */}
<section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl px-10 mx-auto sm:text-center">
          <p className="text-blue-500 font-medium uppercase">What i used</p>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">Creating website</h2>
          <p className="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl">I'm a Fresher-Engineer and built some easy website, API, games with these techniques.
          <br className="lg:hidden hidden sm:block" /> Check them out below 👇</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16">
            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
              <img className="w-16 h-auto animate-ping"  src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"/>
              <p className="font-bold mt-4">JAVA</p>
              <p className="mt-2 text-sm text-gray-500">Spring boot, Hibernate, JDBC,...</p>
            </div>
            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
              <img className="animate-bounce"src="https://img.icons8.com/color/48/000000/python--v1.png"/>
              <p className="font-bold mt-4">PYTHON</p>
              <p className="mt-2 text-sm text-gray-500">Pygame, tkinter, ..</p>
            </div>
            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
            <img className="animate-[wiggle_1s_ease-in-out_infinite]"src="https://img.icons8.com/nolan/50/github.png"/>
              <p className="font-bold mt-4">GITHUB</p>
              <p className="mt-2 text-sm text-gray-500">Save some repositories</p>
            </div>
            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
              <img className="animate-spin pull"src="https://img.icons8.com/color/48/000000/bootstrap.png"/>
              <p className="font-bold mt-4">BOOTSTRAP</p>
              <p className="mt-2 text-sm text-gray-500">Css library</p>
            </div>
            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
              <img className="animate-[wiggle_2s_ease-in-out_infinite]"src="https://img.icons8.com/fluency/48/000000/wind.png"/>
              <p className="font-bold mt-4">TAILWIND CSS</p>
              <p className="mt-2 text-sm text-gray-500">Usually use with Nextjs to design nextjs-frontend</p>
            </div>
            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
            <img className="animate-spin"src="https://img.icons8.com/windows/32/000000/node-js.png"/>
              <p className="font-bold mt-4">NODE JS</p>
              <p className="mt-2 text-sm text-gray-500">Build some ez api with passportjs, ..</p>
            </div>
            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
              <img className="w-8 h-auto  animate-bounce" src="https://img.icons8.com/clouds/100/000000/react.png"/>
              <p className="font-bold mt-4">REACT JS</p>
              <p className="mt2 text-sm text-gray-500">The core for frontend.</p>
            </div>
            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
              <img className="w-16 h-auto animate-pulse" src="https://www.creative-tim.com/assets/frameworks/icon-nextjs-552cecd0240ba0ae7b5fbf899c1ee10cd66f8c38ea6fe77233fd37ad1cff0dca.png"/>
              <p className="font-bold mt-4">NEXT JS</p>
              <p className="mt-2 text-sm text-gray-500">React framework</p>
            </div>
            <div className="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100">
              <img className="animate-[wiggle_1s_ease-in-out_infinite]"src="https://img.icons8.com/color/48/000000/typescript.png"/>
              <p className="font-bold mt-4">Typescript</p>
              <p className="mt-2 text-sm text-gray-500">is Learning</p>
            </div>
            
          </div>
         
        </div>
      </section>
</div>;
};

export default Section;

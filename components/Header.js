import Link from 'next/link';
import React from 'react';

const Header = () => {
  return <div className=" bg-red-500">
       <div className="flex flex-wraph-screen z-10 shadow-xl bg-red-500">
          <section className="relative mx-auto">
            {/* navbar */}
            <nav className="flex justify-between bg-gray-200 text-gray-900 w-screen">
              <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <Link href="#" >
                <h1 className="font-bold text-xl focus:ring focus:ring-blue-200 focus:ring-opacity-25 outline-none rounded-lg">KIEN DZ</h1>
              </Link>
                
                {/* Nav Links */}
                <ul className=" flex px-4 mx-auto font-semibold font-heading space-x-12">
                  <li><Link href="/" className="hover:text-pink-500"><a>Home</a></Link></li>
                  <li><Link href="/blog" className="hover:text-pink-500" ><a>Blog</a></Link></li>
                  
                </ul>
                {/* Header Icons */}
                <div className="hidden xl:flex items-center space-x-5 items-center">
                  <Link className="hover:text-pink-500" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </Link>
                 
                  {/* Sign In / Register      */}
                  <Link className="flex items-center hover:text-pink-500" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </Link>
                </div>
              </div>
              {/* Responsive navbar */}
              
              {/* <Link className="navbar-burger self-center mr-12 xl:hidden" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Link> */}
            </nav>
          </section>
        </div>
        {/* Does this resource worth a follow? */}
       
      </div>
 
};

export default Header;

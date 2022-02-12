import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import SectionHome from '../components/SectionHome'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Blog from '../components/Blog'
import Skill from '../components/Skill'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer'
export default function Home() {
  return (
    
    <div className="">
        <Header/>
        <div  className="max-w-7xl grid mx-auto my-2 p-2 shadow-md">
             <SectionHome/>
             
             <About/>
             <Skill/>
             <Timeline/>
             
        </div>
       <Footer/>
       
    </div>
  )
}

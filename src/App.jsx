import React, { useRef } from 'react'
import Navbar from './Components/Navbar'
import 'remixicon/fonts/remixicon.css'
import Page1 from './Components/Page1'
import Footer from './Components/Footer'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import LocomotiveScroll from 'locomotive-scroll';
import flask from "./assets/flask.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const App = () => {
const locomotiveScroll = new LocomotiveScroll();
var image = useRef(null)
var main = useRef(null)
useGSAP(()=>{
  var tl = gsap.timeline({
    scrollTrigger:{
      start:"top top",
      end:"bottom bottom",
      scrub:1,
    }
  })
  tl.to(image.current,{
    transform:"translateY(-15%)"
  })
  tl.to(image.current,{
    transform:"translateY(-20%) scale(.6)"
  })
})

  return (
    <div ref={main} className='relative w-full min-h-screen bg-[#f05e5e] text-white'>
      <Navbar/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Footer/>
      <img ref={image} className="fixed top-0 left-[6%]  w-[55%]" src={flask} alt="" />
    </div>
  )
}

export default App
import React from 'react'
import NavBar from'./../components/Nav/NavBar'
import Hero from './../components/Hero/Hero'
import bg from './../assets/hero3.png'
import log from './../assets/logo.png'
import Test from './../components/test/test'
import Footer from '../components/footer/footer'


function Packages() {
  return (
    <>
    <NavBar list={[{title:"Home", path:'/'},{title:"About", path:'/About'} ,{title:"Packages", path:'/Packages'}  ,{title:"Service", path:'/Service'} ]} btn= "Get in Touch" log={log} />
    <Hero bg={bg} dec ="Travel With Us"/>
    <Test/>
    <Footer/>
    </>
  )
}

export default Packages
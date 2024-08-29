import React from 'react'
import NavBar from './../components/Nav/NavBar'
import log from './../assets/logo.png'
import Hero from './../components/Hero/Hero'
import Section from '../components/section4/Section'
import Section2 from './../components/section5/Section'
import play from './../assets/play.png'
import Section3 from './../components/section6/Section'
import Footer from '../components/footer/footer'
import bg from './../assets/hero2.png'


function About() {
  return (
    <div>
      <NavBar list={[{title:"Home", path:'/'},{title:"About", path:'/About'} ,{title:"Packages", path:'/Packages'}  ,{title:"Service", path:'/Service'} ]} btn= "Get in Touch" log={log}/>
      <Hero dec="About Us" bg={bg} />
      <Section h5="Promotion" h1="We Provide You Best Europe Sightseeing Tours" p="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!" btn ="view Packages"></Section>
      <Section2 p="Wanderlust" img={play}></Section2>
      <Section3 h5="Trend" h1="Our Popular Tour Plans" p="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium." sen1="78%" sen2="55%" sen3="Vacations" sen4="Honeymoon"></Section3>
      <Footer></Footer>
      </div>
  )
}

export default About
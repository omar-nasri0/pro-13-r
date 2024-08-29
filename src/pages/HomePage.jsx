import React from 'react'
import log from './../assets/logo.png'
import bg from './../assets/Hero.png'
import man from './../assets/tour-guide 1.png'
import fly from './../assets/travelling 1.png'
import hand from './../assets/hands 1.png'
import medical from './../assets/medical-team 1.png'
import bg1 from './../assets/Rectangle 19301.png'
import bg2 from './../assets/Rectangle 19302.png'
import bg3 from './../assets/Rectangle 19305.png'
import flyy from './../assets/Ellipse 623.png'
import group from './../assets/Group 1000001775.png'
import star from './../assets/Group 1000001721.png'
import bg4 from './../assets/Rectangle 19305 (1).png'
import flyy2 from './../assets/Ellipse 623 (1).png'
import bg5 from './../assets/Rectangle 19306.png'
import flyy3 from './../assets/Ellipse 625.png'

import NavBar from './../components/Nav/NavBar'
import Hero from './../components/Hero/Hero'
import Card from './../components/card/Card'
import Section from './../components/section/section'
import Card2 from './../components/card2/Card'
import Section2 from './../components/section2/Section'
import Card3 from './../components/card3/Card'
import Section3 from './../components/section3/Section'
import Footer from './../components/footer/footer' 

function HomePage() {
  return (
    <div> 
         <NavBar list={[{title:"Home", path:'/'},{title:"About", path:'/About'} ,{title:"Packages", path:'/Packages'}  ,{title:"Service", path:'/Service'} ]} btn= "Get in Touch" log={log}/>
    <Hero dec="No matter where you’re going to, 
we’ll take you  there" bg={bg}/>
      <Section>
        <Card img={man} decimg="Guided Tours" dec="sunt qui repellat saepe quo velit aperiam id aliquam placeat."  />
        <Card img={fly} decimg="Best Flights Options" dec="sunt qui repellat saepe quo velit aperiam id aliquam placeat."  />
        <Card img={hand} decimg="Religious Tours" dec="sunt qui repellat saepe quo velit aperiam id aliquam placeat."  />
        <Card img={medical} decimg="Medical insurance" dec="sunt qui repellat saepe quo velit aperiam id aliquam placeat."  />
      </Section>
      <Section2>
      <Card2 img={bg1} pro="Promotion" dec="Explore Nature" btn="View Packages"/>
      <Card2 img={bg2} pro="Promotion" dec="Explore Cities" btn="View Packages"/>
      </Section2>
      <Section3>
        <Card3 img={bg3} imgfly={flyy} group={group} star={star} name="Switzerland" dec="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos." btn="Exploe Now"/>
        <Card3 img={bg4} imgfly={flyy2} group={group} star={star} name="Amazon" dec="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos." btn="Exploe Now"/>
        <Card3 img={bg5} imgfly={flyy3} group={group} star={star} name="Giza" dec="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos." btn="Exploe Now"/>
      </Section3>
      <Footer /></div>
  )
}

export default HomePage
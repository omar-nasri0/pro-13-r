
import './footer.css'
import social from './../../assets/Group 169.png'
import footer from './../../assets/Footer img.png'
import logoo from'./../../assets/Group 1000001807.png'
const Footer = () => {
  return (
    <div >
        <div className="main-footer">
        <img src={footer} alt="" className='img'/>
        <div className="">
            <img src={logoo} alt="" style={{ paddingTop:"50px"}} />
            <p style={{paddingTop:"10px"}}>Travel helps companies manage payments easily. <br />easily.</p>
            <img src={social} alt="" style={{paddingTop:"25px" , cursor:"pointer"}}/>
        </div>
        <div className="">
            <h1 style={{color:" #2F2F2F" , fontSize:"21px" , paddingTop:"50px"}}>Copany</h1>
            <ul className='oneul'>
                <li>About US</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Pricing</li>
            </ul>
        </div>
        <div className="">
        <h1 style={{color:" #2F2F2F" , fontSize:"21px" , paddingTop:"50px"}}>Destinations</h1>
            <ul className='oneul'>
                <li>Maldives</li>
                <li>Los Angelas</li>
                <li>Las Vegas</li>
                <li>Torronto</li>
            </ul>
        </div>
        </div>
        <p className='Copyright'>Copyright @ Xpro 2023 All Rights Reserved.</p>
        
    </div>
    
  )
}

export default Footer
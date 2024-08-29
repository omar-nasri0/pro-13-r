import Footer from '../footer/footer';
import'./Hero.css'
const Hero =({dec , bg})=> {
    return(
        <div className="Hero" style={{backgroundImage: `url(${bg})`}}>
        <h1 className='p'>{dec}</h1>
    </div>
    )
    
}
export default Hero;
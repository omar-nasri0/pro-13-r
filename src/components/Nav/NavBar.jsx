import { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
function NavBar({log , list , btn}) {
    const[menu , range]= useState(false)
    return(
        <div className="nav">
        <img src={log} alt=""  className='img-nav'/>
        <ul className='list-normal'>
            {list.map((item , index)=>{
                return(
                    <li key={index}><Link to={item.path}>{item.title}</Link></li>
                )
                })}
        </ul>
        <button className='chop'>{btn}</button>
        <button className='list' onClick={()=>{range(!menu)}}>list</button>
        <div className='pop' style={{display:(menu)? "block" : "none"}}>
            <p  onClick={()=>{range(!menu)}} style={{cursor:"pointer"}}> X</p>
                <ul >
            {list.map((item , index)=>{
                return(
                    <li key={index}>{item.title}</li>
                )
                })}
        </ul>
                <p className='btn0'style={{ margin:"auto", marginTop:"50px", textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}} >{btn}</p>
        </div>
        
        </div>
    )
}
export default NavBar;
import './section.css';
function Section(props) {
    
    return(
        <div className="father-1">
            <p className='CATEGORY'>CATEGORY</p>
            <h1 className='we'>We Offer Best Services</h1>
             <div className="section-1">
                {props.children}
            </div>
        </div>
    )
}
export default Section;
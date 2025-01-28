import './DrCon.css';

function Svg(props) {
    return(
        <>
        <div className='div-container-con'>
                <ul>
                    <li className='listaCon'>
                        <a href={props.link}
                           aria-label={props.area}
                           title={props.title}
                           target={props.target}
                           rel={props.rel} 
                           >
                           <svg className={props.Svgclass}
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox={props.Box} 
                                 >
                                    <path fill="currentColor"
                                          d={props.d}></path>  
                                 </svg>   
                        </a> 
                    </li>
                </ul></div>
        </>
    );
}

export default Svg;
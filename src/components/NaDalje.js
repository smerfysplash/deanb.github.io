import './Buton.css';

function NaDalje(props) {
    return  (
        <>
    <div className={props.class}>
        <a className="link" href={props.hrefS}>       
            <img className="arrow1" src={props.ImagineS} alt="" />
            <h2 className="button">{props.titluS}</h2> 
        </a>
         <a className="link" href={props.hrefD}>
            <h2 className="button">{props.titluD}
            <img className="arrow" src={props.ImagineD} alt="" />
            </h2>
        </a>
    </div>
        </>
    );
}

export default NaDalje;
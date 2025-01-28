import './Buton.css';

function StangaB(props) {
    return  (
        <>
        <div className={props.class}>
        <a className="link" href={props.href}>       
            <img className="arrow1" src="https://www.svgrepo.com/show/199705/left-arrow-back.svg" alt="" />
            <h2 className="button">Albumul Anterior</h2> 
        </a>
        </div>
        </>
    );
}

export default StangaB;
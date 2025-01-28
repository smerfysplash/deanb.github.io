import './Buton.css';

function DreaptaB(props) {
    return  (
        <>
        <div className={props.class}>
         <a className="link" href={props.href}>
            <h2 className="button">Urmatorul Album
            <img className="arrow" src="https://www.svgrepo.com/show/199716/right-arrow-next.svg" alt="" />
        </h2>
        </a>
    </div>
        </>
    );
}

export default DreaptaB;
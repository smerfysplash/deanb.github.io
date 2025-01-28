import './Form.css';

function FormTextarea(props) {
    return (
        <>
            <div className='form__group'>
            
                <textarea className='textarea form__field'
                          Tplaceholder={props.Tplaceholder}
                          Tname={props.Tname}
                          Tid={props.Tid}>
                </textarea>
                <label Tfor={props.Tfor}
                       className="form__label" >
                        {props.Tdenumire}
                </label>
            </div>     
        </>
    );
}

export default FormTextarea;
import './Form.css';

function Form(props) {
    return (
        <>
            <div className="form__group">
                <input type={props.type}
                       className="form__field"
                       placeholder={props.placeholder}
                       name={props.name}
                       id={props.id}
                       required /> 
                <label for={props.for}
                       className="form__label" >
                        {props.denumire}
                </label>
            </div>
        </>
    );
}

export default Form;
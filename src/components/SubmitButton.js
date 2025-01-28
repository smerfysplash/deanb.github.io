import './ButtonType.css';

function SubmitButton(props) {
    return (
        <>
            <button
                className={props.classB}
                role={props.roleB}
            >
                {props.denumireB}
            </button>
        </>
    );
}

export default SubmitButton;
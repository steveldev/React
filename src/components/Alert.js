
const Alert = (props) => {

    const handleClose = () => {
        document.querySelector('alert').classList.add('d-none');
    }

    return (
        <div className={"alert " + (props.type) }>
            <span>{props.message}</span>
            <button className="close" onClick="{handleClose}">X</button>
        </div>
    );
};
export default Alert;
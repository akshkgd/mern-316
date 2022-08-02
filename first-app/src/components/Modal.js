function Modal(props) {
    return (
        <div className="modal">
            <img src={props.img} className="modal-img" />
            <h3>{props.title}</h3>
            <p>{props.desc}</p>

            <button className="btn" onClick={props.onClick}>Close</button>
        </div>

    );
}

export default Modal;
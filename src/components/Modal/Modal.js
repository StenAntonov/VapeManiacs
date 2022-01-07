const Modal = ({
    show,
    onClose,
    onConfirm
}) => {
    return (
        <div show={show} onHide={onClose}>
        <header closeButton>
          <p>Modal heading</p>
        </header>
        <p>Woohoo, you're reading this text in a modal!</p>
        <footer>
          <button variant="secondary" onClick={onClose}>
            Close
          </button>
          <button variant="primary" onClick={onConfirm}>
            Save Changes
          </button>
        </footer>
      </div>
    );
};

export default Modal;
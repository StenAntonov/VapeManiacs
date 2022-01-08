const Modal = ({
  onClose,
  onConfirm,
  vape
}) => {
  return (
    <div className="modal">
      <section className="modal-main">
        <div className="modal-header" type="button">
          <h1 className="modal-title">Delete Vape</h1>
        </div>
        <p className="modal-question">Are you sure you want to delete this vape?</p>
        <div className="modal-vape">
            <div className="modal-vape-info">
                <img className="modal-vape-img" src={vape.imageUrl} alt="vape"/>
                <h2 className="modal-vape-h2">{vape.maker}</h2>
                <h4 className="modal-vape-h4">{vape.model}</h4>
            </div>
        </div>
        <div className="modal-footer">
          <button className="modal-buttons no" type="button" variant="secondary" onClick={onClose}>
            No
          </button>
          <button className="modal-buttons" type="button" variant="primary" onClick={onConfirm}>
            Yes
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
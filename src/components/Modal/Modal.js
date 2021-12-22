import { useState } from "react";

const Modal = () => {
    const [state, setState] = useState();
    state = { show: false }
    
    const showModal = (e) => {
      setState({ show: true });
    }
    
    const hideModal = () => {
      setState({ show: false });
    }
      return(
      );
};

export default Modal;

    
      return (
        <main>
          <h1>React Modal</h1>
          <Modal show={this.state.show} handleClose={this.hideModal} >
            <p>Modal</p>
            <p>Data</p>
          </Modal>
          <button type='button' onClick={this.showModal}>Open</button>
        </main>
      )
    }
  }
  
  const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button
            onClick={handleClose}
          >
            Close
          </button>
        </section>
      </div>
    );
  };
  
  
  const container = document.createElement('div');
  document.body.appendChild(container);
  ReactDOM.render(<App />, container);
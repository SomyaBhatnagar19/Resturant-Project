// import { Fragment } from 'react';

// import React from 'react';

// import { ReactDOM } from 'react';

// import classes from './Modal.module.css';

// const Backdrop = props => {
//     return <div className={classes.backdrop}></div>
// };

// const ModalOverlay = props => {
//     return <div className={classes.modal}>
//         <div className={classes.content}>{props.children}</div>
//     </div>
// };

// const portalElements = document.getElementById('overlays');
// const Modal = props => {
//     return <Fragment>
//         {/* using portals here so the html code is not all over the page*/}
//         {ReactDOM.createPortal(<Backdrop/>, portalElements)}
//         {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElements)}
//     </Fragment>
// };

// export default Modal;
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
import { Fragment } from 'react';

import React from 'react';

import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
    // for making the BackDrop close when cart is closed onClick is used
    return <div className={classes.backdrop} onClick={props.onCloseCart}></div>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElements = document.getElementById('overlays');
const Modal = props => {
    return <Fragment>
        {/* using portals here so the html code is not all over the page*/}
        {/* for making the BackDrop close when Cart closes we made the custom function changes */}
        {ReactDOM.createPortal(<Backdrop onCloseCart = {props.onCloseCart}/>, portalElements)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElements)}
    </Fragment>
};

export default Modal;
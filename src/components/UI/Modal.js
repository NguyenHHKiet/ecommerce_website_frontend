import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.scss";

const portalElement = document.getElementById("overlays");

// background outside of click outside onClose button
const Backdrop = ({ onClose }) => {
    return <div className={classes.backdrop} onClick={onClose} />;
};

// content zone on background outside
const ModalOverlay = ({ children }) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{children}</div>
        </div>
    );
};

// Modal Component is using the default modal for the popup
const Modal = ({ children, onClose }) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onClose={onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;

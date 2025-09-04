import Modal from 'react-modal';
import React from 'react';

Modal.setAppElement('#root');

export function CustomModal({ isOpen, onRequestClose, contentLabel, children }) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={contentLabel}
            className="modal"
            overlayClassName="modal-overlay"
            closeTimeoutMS={200}
        >
            {children}
            <div className="modal-content">
                <h2>Employee Created!</h2>
                <button onClick={onRequestClose} className="modal-close-button">X</button>
            </div>
        </Modal>
    );
}
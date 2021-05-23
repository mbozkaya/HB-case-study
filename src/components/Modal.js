import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
    const { onClose, onSuccess, onCancel, content, isOpen, title } = props;
    return (
        <div className={`modal ${isOpen && 'modal-open'}`}>
            <div className="modal-content">
                <span className="modal-close" onClick={() => onClose()}>&times;</span>
                <div className="modal-title">
                    <span>{title}</span>
                </div>
                <div className="modal-content-text">
                    <p>{content}</p>
                </div>
                <div className="modal-buttons-container">
                    <div className="modal-buttons">
                        <button type="button" className="modal-button success" onClick={() => onSuccess()}>Evet</button>
                        <button type="button" className="modal-button cancel" onClick={() => onCancel()}>Hayır</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    content: PropTypes.string,
    isOpen: PropTypes.bool,
    title: PropTypes.string,
};

Modal.defaultProps = {
    content: 'content',
    isOpen: false,
    title: 'title',
};



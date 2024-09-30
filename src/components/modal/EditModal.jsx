import React from 'react';
import Modal from "./index.jsx";

const EditModal = ({isOpen, close}) => {
    return (
        <Modal isOpen={isOpen} close={close}>
            EditModal
        </Modal>
    );
};

export default EditModal;

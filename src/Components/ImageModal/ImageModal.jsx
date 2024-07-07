import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ImageModal({ modalIsOpen, closeModal, selectedImage }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      {selectedImage && (
        <div>
          <img
            src={selectedImage.urls.full}
            alt={selectedImage.alt_description}
            width={1000}
          />
        </div>
      )}
    </Modal>
  );
}

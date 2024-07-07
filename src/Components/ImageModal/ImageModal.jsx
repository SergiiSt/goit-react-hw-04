import Modal from 'react-modal';

export default function ImageModal({ modalIsOpen, closeModal, selectedImage }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      {selectedImage && (
        <div>
          <img
            src={selectedImage.urls.full}
            alt={selectedImage.alt_description}
            height={700}
          />
          <p>{selectedImage.alt_description}</p>
        </div>
      )}
    </Modal>
  );
}

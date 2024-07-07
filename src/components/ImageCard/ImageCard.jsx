import css from './ImageCard.module.css';

export default function ImageCard({ image, openModal }) {
  return (
    <div onClick={() => openModal(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.pic}
      />
    </div>
  );
}

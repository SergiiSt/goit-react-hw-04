import ImageCard from '../ImageCard/ImageCard';
import css from "../ImageGallery/ImageGallery.module.css"

export default function ImageGallery({ images, openModal }) {
  return (
    <div className={css.listWrap}>
      <ul className={css.list}>
        {images.map(image => (
          <li key={image.id}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

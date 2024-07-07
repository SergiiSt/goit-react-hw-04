import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images, openModal }) {
  return (
    <div>
      <ul>
        {images.map(image => (
          <li key={image.id}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

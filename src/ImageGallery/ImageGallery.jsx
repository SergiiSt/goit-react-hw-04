import ImageCard from '../Components/ImageCard/ImageCard';

export default function ImageGallery({ images }) {
  return (
    <div>
      <ul>
        {images.map(image => (
          <li key={image.id}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
}

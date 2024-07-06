export default function ImageCard({
  image: {
    alt_description,
    urls: { small },
  },
}) {
  return (
    <div>
      <img src={small} alt={alt_description} />
    </div>
  );
}

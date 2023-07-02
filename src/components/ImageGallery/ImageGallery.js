import Style from 'components/ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ul className={Style.gallery}>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;

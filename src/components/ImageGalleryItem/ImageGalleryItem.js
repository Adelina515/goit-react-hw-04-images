import Style from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';

const ImageGalleryItem = ({ image }) => {
  const [isShow, setIsShow] = useState(false);

  const handleModal = () => {
    setIsShow(prevShow => !prevShow);
  };

  return (
    <>
      <li className={Style.galleryItem}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={Style.galleryItemImage}
          onClick={handleModal}
        />
      </li>
      {isShow && (
        <Modal
          onClose={handleModal}
          largeImageURL={image.largeImageURL}
          tags={image.tags}
        />
      )}
    </>
  );
};
ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;

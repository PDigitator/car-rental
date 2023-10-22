import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import Modal from 'components/Modal';
import { ReactComponent as IconFavorite } from '../../icons/heart-normal.svg';
// import {
//   Thumb,
//   Image,
// } from 'components/CarsGalleryItem/CarsGalleryItem.styled';

import * as s from 'components/CarsGalleryItem/CarsGalleryItem.styled';
import { IconWrap } from 'components/HomeContent/HomeContent.styled';

const CarsGalleryItem = ({ element }) => {
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false); //!

  const {
    id,
    year,
    make,
    model,
    type,
    img,
    accessories,
    rentalPrice,
    rentalCompany,
    address,
  } = element;

  const city = address.split(',')[1];
  const country = address.split(',')[2];
  const feature = accessories[0];

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const toggleFavorite = () => {
    setIsFavorite(prevState => !prevState);
  };

  const handleFavorite = e => {
    // e.stopPropagation();
    // setIsFavorite(element.id);
  }; //!

  return (
    <>
      <s.Container>
        <Button name="favorite" type="button" onClick={toggleFavorite}>
          <IconWrap>
            <IconFavorite />
          </IconWrap>
        </Button>

        <s.Thumb>
          <s.Image src={img} alt={`${make} ${model}`} />
        </s.Thumb>

        <s.Description>
          <s.MainDesctiption>
            <span>
              {make}
              <s.Model> {model}</s.Model>, {year}
            </span>
            <span>{rentalPrice}</span>
          </s.MainDesctiption>

          <s.AdditionalDesctiption>
            {city} | {country} | {rentalCompany} <br />
            {type} | {model} | {id} | {feature}
          </s.AdditionalDesctiption>
        </s.Description>
        <Button
          name="learn"
          type="button"
          text="Learn more"
          onClick={toggleModal}
        />
      </s.Container>

      {showModal && (
        <Modal onClose={toggleModal}>
          <p>Modal</p>
          {/* <SideBar onClose={toggleModal} /> */}
        </Modal>
      )}
    </>
  );
};

// return (
//   <>
//     <Thumb>
//       {/* <Image
//         src={webformatURL}
//         alt={tags}
//         onClick={() => {
//           onClickImage(largeImageURL, tags);
//         }}
//       /> */}
//       <Button
//         name="learn"
//         type="button"
//         text="Learn more"
//         onClick={toggleModal}
//       />
//     </Thumb>

//     {showModal && (
//       <Modal onClose={toggleModal}>
//         <p>Modal</p>
//         {/* <SideBar onClose={toggleModal} /> */}
//       </Modal>
//     )}
//   </>
// );

CarsGalleryItem.propTypes = {
  element: PropTypes.shape({
    // webformatURL: PropTypes.string.isRequired,
    // largeImageURL: PropTypes.string.isRequired,
    // tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default CarsGalleryItem;

import { useState } from 'react';

import Button from 'components/Button';
import Modal from 'components/Modal';
import CarModal from 'components/CarModal';
import { ReactComponent as IconFavorite } from '../../icons/heart-normal.svg';
import noImageIcon from '../../images/noImageIcon-200x200.png';

import { IconWrap } from 'components/HomeContent/HomeContent.styled';
import * as s from './CarsGalleryItem.styled';

const CarsGalleryItem = ({ element }) => {
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false); //TODO:

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

  return (
    <>
      <Button name="favorite" type="button" onClick={toggleFavorite}>
        <IconWrap>{!isFavorite && <IconFavorite />}</IconWrap>
      </Button>

      <s.Thumb>
        {img ? (
          <s.Image src={img} alt={`${make} ${model}`} />
        ) : (
          <s.Image src={noImageIcon} alt={`${make} ${model}`} />
        )}
      </s.Thumb>

      <s.Info>
        <s.ModelInfo>
          <p>
            {make}
            <s.Model> {model}</s.Model>, {year}
          </p>
          <p>{rentalPrice}</p>
        </s.ModelInfo>

        <s.Options>
          <s.OptionsTxt>
            <p>{city}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>{country}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>{rentalCompany}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>{type}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>{model}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>{id}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>{feature}</p>
          </s.OptionsTxt>
        </s.Options>
      </s.Info>

      <Button
        name="learn"
        type="button"
        text="Learn more"
        onClick={toggleModal}
      />

      {showModal && (
        <Modal onClose={toggleModal}>
          <CarModal card={element} />
        </Modal>
      )}
    </>
  );
};

export default CarsGalleryItem;

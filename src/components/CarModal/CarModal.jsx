import PropTypes from 'prop-types';

import {
  Card,
  Thumb,
  Image,
  Info,
  ModelInfo,
  Model,
  Options,
  OptionsTxt,
  Description,
  Title,
  Conditions,
  ConditionsTxt,
  Span,
  RentalLink,
} from './CarModal.styled';

import noImageIcon from '../../images/noImageIcon-200x200.png';

const CarModal = ({ card }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = card;

  const city = address.split(',')[1];
  const country = address.split(',')[2];
  const conditions = rentalConditions.split('\n');
  const age = conditions[0].split(' ')[2];
  const ageText = conditions[0].split(' ').splice(0, 2).join(' ');

  return (
    <Card>
      <Thumb>
        {img ? (
          <Image src={img} alt={`${make} ${model}`} />
        ) : (
          <Image src={noImageIcon} alt={`${make} ${model}`} />
        )}
      </Thumb>

      <Info>
        <ModelInfo>
          <p>
            {make}
            <Model> {model}</Model>, {year}
          </p>
        </ModelInfo>

        <Options>
          <OptionsTxt>
            <p>{city}</p>
          </OptionsTxt>
          <OptionsTxt>
            <p>{country}</p>
          </OptionsTxt>
          <OptionsTxt>
            <p>Id:{id}</p>
          </OptionsTxt>
          <OptionsTxt>
            <p>Year:{year}</p>
          </OptionsTxt>
          <OptionsTxt>
            <p>Type:{type}</p>
          </OptionsTxt>
          <OptionsTxt>
            <p>Fuel Consumption:{fuelConsumption}</p>
          </OptionsTxt>
          <OptionsTxt>
            <p>Engine Size: {engineSize}</p>
          </OptionsTxt>
        </Options>

        <Description>{description}</Description>

        <Title>Accessories and functionalities:</Title>
        <Options>
          <OptionsTxt>
            <p>{accessories[0]}</p>
          </OptionsTxt>
          <OptionsTxt>
            <p>{accessories[1]}</p>
          </OptionsTxt>
          <OptionsTxt>
            <p>{accessories[2]}</p>
          </OptionsTxt>
          <OptionsTxt>
            <p>{functionalities[0]}</p>
          </OptionsTxt>
          <OptionsTxt>
            <p>{functionalities[1]}</p>
          </OptionsTxt>
          <OptionsTxt>
            <p>{functionalities[2]}</p>
          </OptionsTxt>
        </Options>

        <Title>Rental Conditions:</Title>

        <Conditions>
          <ConditionsTxt>
            <p>
              {ageText}
              <Span> {age}</Span>
            </p>
          </ConditionsTxt>
          <ConditionsTxt>
            <p>{conditions[1]}</p>
          </ConditionsTxt>
          <ConditionsTxt>
            <p>{conditions[2]}</p>
          </ConditionsTxt>
          <ConditionsTxt>
            <p>
              Mileage:
              <Span> {(mileage / 1000).toFixed(3).replace('.', ',')}</Span>
            </p>
          </ConditionsTxt>
          <ConditionsTxt>
            <p>
              Price:<Span> {rentalPrice.slice(1)}$</Span>
            </p>
          </ConditionsTxt>
        </Conditions>
      </Info>

      <RentalLink href="tel:+380730000000">Rental car</RentalLink>
    </Card>
  );
};

CarModal.propTypes = {
  card: PropTypes.shape.isRequired,
};

export default CarModal;

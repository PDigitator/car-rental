import noImageIcon from '../../images/noImageIcon-200x200.png';
import * as s from './CarModal.styled';

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
    <>
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
        </s.ModelInfo>

        <s.Options>
          <s.OptionsTxt>
            <p>{city}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>{country}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>Id:{id}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>Year:{year}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>Type:{type}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>Fuel Consumption:{fuelConsumption}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>Engine Size: {engineSize}</p>
          </s.OptionsTxt>
        </s.Options>

        <s.Description>{description}</s.Description>

        <s.Title>Accessories and functionalities:</s.Title>
        <s.Options>
          <s.OptionsTxt>
            <p>{accessories[0]}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>{accessories[1]}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>{accessories[2]}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>{functionalities[0]}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>{functionalities[1]}</p>
          </s.OptionsTxt>
          <s.OptionsTxt>
            <p>{functionalities[2]}</p>
          </s.OptionsTxt>
        </s.Options>

        <s.Title>Rental Conditions:</s.Title>

        <s.Conditions>
          <s.ConditionsTxt>
            <p>
              {ageText}
              <s.Span> {age}</s.Span>
            </p>
          </s.ConditionsTxt>
          <s.ConditionsTxt>
            <p>{conditions[1]}</p>
          </s.ConditionsTxt>
          <s.ConditionsTxt>
            <p>{conditions[2]}</p>
          </s.ConditionsTxt>
          <s.ConditionsTxt>
            <p>
              Mileage:
              <s.Span> {(mileage / 1000).toFixed(3).replace('.', ',')}</s.Span>
            </p>
          </s.ConditionsTxt>
          <s.ConditionsTxt>
            <p>
              Price:<s.Span> {rentalPrice.slice(1)}$</s.Span>
            </p>
          </s.ConditionsTxt>
        </s.Conditions>
      </s.Info>

      <s.RentalLink href="tel:+380730000000">Rental car</s.RentalLink>
    </>
  );
};

export default CarModal;

import PropTypes from 'prop-types';

import {
  Btn,
  BtnLearn,
  BtnLoad,
  BtnSearch,
} from 'components/Button/Button.styled';

const Button = ({ name, type, text, onClick }) => {
  return (
    <>
      {name === 'learn' ? (
        <BtnLearn type={type} onClick={onClick} aria-label="Learn more">
          {text && { text }}
        </BtnLearn>
      ) : name === 'load' ? (
        <BtnLoad type={type} onClick={onClick} aria-label="Load more">
          {text && { text }}
        </BtnLoad>
      ) : name === 'search' ? (
        <BtnSearch type={type} onClick={onClick} aria-label="Search">
          {text && { text }}
        </BtnSearch>
      ) : (
        <Btn type={type} onClick={onClick}>
          {text && { text }}
        </Btn>
      )}
    </>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;

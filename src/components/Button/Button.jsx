import PropTypes from 'prop-types';

import {
  Btn,
  BtnLoad,
  BtnLearn,
  BtnSearch,
  BtnClose,
  BtnFavirite,
} from 'components/Button/Button.styled';

const Button = ({ name, type, text, onClick, children }) => {
  let BtnComponent;

  switch (name) {
    case 'load':
      BtnComponent = (
        <BtnLoad type={type} onClick={onClick} aria-label={name}>
          {text && text}
        </BtnLoad>
      );
      break;

    case 'learn':
      BtnComponent = (
        <BtnLearn type={type} onClick={onClick} aria-label={name}>
          {text && text}
        </BtnLearn>
      );
      break;

    case 'search':
      BtnComponent = (
        <BtnSearch type={type} onClick={onClick} aria-label={name}>
          {text && text}
        </BtnSearch>
      );
      break;

    case 'close':
      BtnComponent = (
        <BtnClose type={type} onClick={onClick} aria-label={name}>
          {text && text}
          {children}
        </BtnClose>
      );
      break;

    case 'favorite':
      BtnComponent = (
        <BtnFavirite type={type} onClick={onClick} aria-label={name}>
          {text && text}
          {children}
        </BtnFavirite>
      );
      break;

    default:
      BtnComponent = (
        <Btn type={type} onClick={onClick} aria-label={name}>
          {text && text}
          {children}
        </Btn>
      );
      break;
  }

  return <>{BtnComponent}</>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Button;

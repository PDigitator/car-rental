import PropTypes from 'prop-types';

import {
  Btn,
  BtnLoad,
  BtnLearn,
  BtnSearch,
} from 'components/Button/Button.styled';

const Button = ({ name, type, text, onClick, children }) => {
  let BtnComponent;

  switch (name) {
    case 'load':
      BtnComponent = (
        <BtnLearn type={type} onClick={onClick} aria-label="Learn more">
          {text && text}
        </BtnLearn>
      );
      break;

    case 'learn':
      BtnComponent = (
        <BtnLoad type={type} onClick={onClick} aria-label="Load more">
          {text && text}
        </BtnLoad>
      );
      break;

    case 'search':
      BtnComponent = (
        <BtnSearch type={type} onClick={onClick} aria-label="Search">
          {text && text}
        </BtnSearch>
      );
      break;

    default:
      BtnComponent = (
        <Btn type={type} onClick={onClick}>
          {text && text}
          {children}
        </Btn>
      );
      break;
  }

  return <>{BtnComponent}</>;

  // return (
  //   <>
  //     {name === 'load' ? (
  //       <BtnLearn type={type} onClick={onClick} aria-label="Learn more">
  //         {text && text}
  //       </BtnLearn>
  //     ) : name === 'learn' ? (
  //       <BtnLoad type={type} onClick={onClick} aria-label="Load more">
  //         {text && text}
  //       </BtnLoad>
  //     ) : name === 'search' ? (
  //       <BtnSearch type={type} onClick={onClick} aria-label="Search">
  //         {text && text}
  //       </BtnSearch>
  //     ) : (
  //       <Btn type={type} onClick={onClick}>
  //         {text && text}
  //       </Btn>
  //     )}
  //   </>
  // ); //!
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
